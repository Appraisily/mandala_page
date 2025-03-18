import os
import json
import re
from collections import Counter

def read_text_file(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {filename}: {e}")
        return ""

def extract_key_info(text):
    # Dictionary to store findings
    info = {
        "services": [],
        "languages": set(),
        "schedules": [],
        "contact_info": [],
        "key_terms": [],
        "locations": []
    }

    # Check for services (yoga types, treatments, etc.)
    service_patterns = [
        r'(yoga\s+\w+)',
        r'(clase[s]?\s+de\s+\w+)',
        r'(masaje[s]?\s+\w+)',
        r'(terapia[s]?\s+\w+)',
        r'(tratamiento[s]?\s+\w+)',
        r'(meditación)',
        r'(mindfulness)',
        r'(ayurveda)',
        r'(formación)'
    ]
    
    for pattern in service_patterns:
        matches = re.finditer(pattern, text.lower())
        for match in matches:
            info["services"].append(match.group(0))
    
    # Check for languages
    if re.search(r'español|castellano', text.lower()):
        info["languages"].add("Spanish")
    if re.search(r'gal[e]?go', text.lower()):
        info["languages"].add("Galician")
    if re.search(r'engl[i]?sh|[i]?ngl[e]?s', text.lower()):
        info["languages"].add("English")
    
    # Look for schedule patterns
    schedule_patterns = [
        r'(\d{1,2}[:.]\d{2}(\s*-\s*\d{1,2}[:.]\d{2})?)',
        r'(lunes|martes|miércoles|jueves|viernes|sábado|domingo)(\s+a\s+|\s*-\s*)(lunes|martes|miércoles|jueves|viernes|sábado|domingo)',
        r'(horario[s]?)(.{1,50})'
    ]
    
    for pattern in schedule_patterns:
        matches = re.finditer(pattern, text.lower())
        for match in matches:
            if len(match.group(0)) > 3:  # Filter out very short matches
                info["schedules"].append(match.group(0))
    
    # Look for contact information
    contact_patterns = [
        r'(\+\d{2}\s*\d{3}\s*\d{3}\s*\d{3})',
        r'(\d{3}\s*\d{2}\s*\d{2}\s*\d{2})',
        r'(\d{3}\s*\d{3}\s*\d{3})',
        r'([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)',
        r'(C/|Calle|Rúa)([^,;.\n]{3,30})',
        r'(dirección|address)([^,;.\n]{3,50})'
    ]
    
    for pattern in contact_patterns:
        matches = re.finditer(pattern, text)
        for match in matches:
            info["contact_info"].append(match.group(0).strip())
    
    # Extract location information
    location_patterns = [
        r'(Ourense|Orense)',
        r'(Galicia)',
        r'(España|Spain)',
        r'(C/|Calle|Rúa)([^,;.\n]{3,30})'
    ]
    
    for pattern in location_patterns:
        matches = re.finditer(pattern, text)
        for match in matches:
            info["locations"].append(match.group(0).strip())
    
    # Extract potential key terms by frequency
    words = re.findall(r'\b\w{4,}\b', text.lower())
    word_counter = Counter(words)
    # Filter out common words
    common_words = {'para', 'como', 'este', 'esta', 'estos', 'estas', 'donde', 'cuando', 'desde', 'hacia', 'sobre'}
    info["key_terms"] = [word for word, count in word_counter.most_common(20) if word not in common_words]
    
    return info

def analyze_all_content():
    # Load the page map
    with open('data/page_map.json', 'r', encoding='utf-8') as f:
        page_map = json.load(f)
    
    # Dictionary to store all site information
    site_info = {
        "pages": {},
        "overall_summary": {},
        "all_services": set(),
        "all_languages": set(),
        "all_contact_info": set()
    }
    
    # Process each page
    for url, page_data in page_map.items():
        filename = page_data.get('filename', '').replace('.html', '.txt')
        if not filename:
            continue
            
        file_path = f"data/{filename}"
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            continue
            
        print(f"\nAnalyzing {url} ({filename})...")
        text = read_text_file(file_path)
        info = extract_key_info(text)
        
        # Add to page-specific info
        site_info["pages"][url] = {
            "title": page_data.get("title", "Unknown"),
            "extracted_info": info,
            "text_length": len(text),
            "summary": generate_summary(text, info)
        }
        
        # Aggregate overall site information
        site_info["all_services"].update(info["services"])
        site_info["all_languages"].update(info["languages"])
        site_info["all_contact_info"].update(info["contact_info"])
    
    # Convert all sets to lists for JSON serialization
    site_info["all_services"] = list(site_info["all_services"])
    site_info["all_languages"] = list(site_info["all_languages"])
    site_info["all_contact_info"] = list(site_info["all_contact_info"])
    
    # Convert any sets in page data
    for url, page_data in site_info["pages"].items():
        if "extracted_info" in page_data:
            for key, value in page_data["extracted_info"].items():
                if isinstance(value, set):
                    page_data["extracted_info"][key] = list(value)
    
    # Create overall site summary
    site_info["overall_summary"] = {
        "total_pages": len(site_info["pages"]),
        "services_offered": site_info["all_services"],
        "languages": site_info["all_languages"],
        "contact_information": site_info["all_contact_info"],
        "site_purpose": determine_site_purpose(site_info)
    }
    
    # Save the analysis
    with open('data/site_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(site_info, f, indent=2, ensure_ascii=False)
        
    print("\nAnalysis complete! Results saved to data/site_analysis.json")
    return site_info

def generate_summary(text, info):
    # Create a concise summary based on the extracted information
    summary = ""
    
    # Determine page type based on content
    if any("inici" in service.lower() for service in info["services"]) or len(text) < 1000:
        summary += "This appears to be a homepage or landing page. "
    elif any("contact" in service.lower() for service in info["services"]):
        summary += "This appears to be a contact page. "
    elif any("servicio" in service.lower() for service in info["services"]):
        summary += "This appears to be a services page. "
    elif any("sobre" in service.lower() for service in info["services"]) or any("about" in service.lower() for service in info["services"]):
        summary += "This appears to be an about page. "
    
    # Add services information if available
    if info["services"]:
        unique_services = set(service.strip() for service in info["services"])
        summary += f"Services mentioned: {', '.join(list(unique_services)[:5])}. "
        
    # Add contact information if available
    if info["contact_info"]:
        summary += f"Contains contact information. "
        
    # Add schedule information if available
    if info["schedules"]:
        summary += f"Includes scheduling information. "
        
    # Add location information
    if info["locations"]:
        unique_locations = set(location.strip() for location in info["locations"])
        summary += f"Locations mentioned: {', '.join(list(unique_locations))}. "
    
    return summary.strip()

def determine_site_purpose(site_info):
    # Use the aggregated information to determine the overall site purpose
    services = site_info["all_services"]  # Already converted to list in analyze_all_content
    
    # Check if this is primarily a yoga studio
    yoga_terms = sum(1 for service in services if 'yoga' in service.lower())
    wellness_terms = sum(1 for service in services if any(term in service.lower() for term in ['masaje', 'terapia', 'meditación', 'ayurveda', 'bienestar']))
    
    purpose = "This website appears to be for a "
    
    if yoga_terms > wellness_terms:
        purpose += "yoga studio "
    elif wellness_terms > 0:
        purpose += "wellness and yoga center "
    else:
        purpose += "holistic center "
        
    purpose += "called Mandala located in Ourense, Galicia. "
    purpose += f"They offer services including {', '.join(services[:5])}" if services else ""
    
    return purpose

if __name__ == "__main__":
    if not os.path.exists('data/page_map.json'):
        print("Please run fetch_site.py first to gather the website content.")
    else:
        site_info = analyze_all_content()
        
        # Print a simple summary to console
        print("\n\n===== SITE SUMMARY =====")
        print(site_info["overall_summary"]["site_purpose"])
        print(f"\nTotal pages analyzed: {site_info['overall_summary']['total_pages']}")
        print(f"\nServices offered: {', '.join(site_info['overall_summary']['services_offered'][:10])}")
        print(f"\nLanguages: {', '.join(site_info['overall_summary']['languages'])}")
        
        print("\n===== PAGE SUMMARIES =====")
        for url, page_data in site_info["pages"].items():
            print(f"\n{page_data['title']} ({url})")
            print(page_data["summary"])