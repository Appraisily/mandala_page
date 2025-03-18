import os
import urllib.request
import xml.etree.ElementTree as ET
import re
import json
from html.parser import HTMLParser

# Simple HTML parser to extract text (alternative to BeautifulSoup)
class SimpleHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.ignore_tags = ['script', 'style']
        self.current_tag = None
        self.title = None
        
    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        
    def handle_endtag(self, tag):
        self.current_tag = None
        
    def handle_data(self, data):
        if self.current_tag == 'title' and not self.title:
            self.title = data.strip()
        if self.current_tag not in self.ignore_tags and data.strip():
            self.text.append(data.strip())
            
    def get_text(self):
        return '\n'.join(self.text)

# Create data directory if it doesn't exist
os.makedirs("data", exist_ok=True)

# Fetch sitemap.xml
def fetch_sitemap(url):
    try:
        # Set up a user agent to avoid being blocked
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
        req = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(req) as response:
            sitemap_content = response.read().decode('utf-8')
            
        # Parse the XML
        root = ET.fromstring(sitemap_content)
        
        # Extract URLs using namespace
        namespace = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls = [url.text for url in root.findall(".//ns:url/ns:loc", namespace)]
        
        return urls
    except Exception as e:
        print(f"Error fetching sitemap: {e}")
        # If sitemap fails, return some common URLs for the site
        return [
            "https://www.mandalaourense.com/",
            "https://www.mandalaourense.com/contacto/",
            "https://www.mandalaourense.com/servicios/",
            "https://www.mandalaourense.com/sobre-nosotros/",
            "https://www.mandalaourense.com/blog/",
            "https://www.mandalaourense.com/horarios/",
            "https://www.mandalaourense.com/ubicacion/"
        ]

# Fetch a page and save its HTML
def fetch_and_save_page(url):
    try:
        # Set up a user agent to avoid being blocked
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
        req = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(req) as response:
            html_content = response.read().decode('utf-8')
        
        # Generate a filename based on the URL
        filename = url.split("/")[-2] if url.endswith("/") else url.split("/")[-1]
        if not filename:
            filename = "index"
        if not filename.endswith(".html"):
            filename += ".html"
            
        # Save the HTML
        with open(f"data/{filename}", "w", encoding="utf-8") as f:
            f.write(html_content)
            
        # Extract and save text content
        parser = SimpleHTMLParser()
        parser.feed(html_content)
        text = parser.get_text()
        title = parser.title or "Unknown Title"
        
        # Save text content
        with open(f"data/{filename.replace('.html', '.txt')}", "w", encoding="utf-8") as f:
            f.write(text)
        
        return filename, html_content, title
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None, None, None

# Main process
def main():
    sitemap_url = "https://www.mandalaourense.com/sitemap.xml"
    urls = fetch_sitemap(sitemap_url)

    print(f"Found {len(urls)} URLs in sitemap:")
    for url in urls:
        print(url)

    page_contents = {}

    # Fetch each page
    for url in urls:
        print(f"\nFetching {url}")
        filename, html, title = fetch_and_save_page(url)
        if filename:
            page_contents[url] = {
                "filename": filename,
                "title": title,
                "summary": None
            }
            print(f"Title: {title}")

    # Save URL mapping
    with open("data/page_map.json", "w", encoding="utf-8") as f:
        json.dump(page_contents, f, indent=2, ensure_ascii=False)

    print("\nCompleted fetching all pages.")
    
if __name__ == "__main__":
    main()