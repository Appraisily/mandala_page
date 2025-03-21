const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create directories
const analysisDir = path.join(__dirname, 'site-analysis');
const screenshotsDir = path.join(analysisDir, 'screenshots');

if (!fs.existsSync(analysisDir)) {
  fs.mkdirSync(analysisDir);
}

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

async function analyzeDeployedSite() {
  console.log('Starting site analysis of https://mandala-new.netlify.app/');
  
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1280,
      height: 800
    },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // Create a new page
  const page = await browser.newPage();
  
  try {
    // Navigate to the main page
    await page.goto('https://mandala-new.netlify.app/', { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });
    
    console.log('Main page loaded. Starting analysis...');
    
    // Collect all issues
    const issues = [];
    
    // Track all image requests
    const imageRequests = new Map();
    
    // Monitor failed resources
    page.on('requestfailed', request => {
      const url = request.url();
      if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)/i)) {
        issues.push({
          type: 'broken_image',
          url,
          errorText: request.failure().errorText
        });
      }
    });
    
    // Monitor all requests
    page.on('request', request => {
      const url = request.url();
      if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)/i)) {
        imageRequests.set(url, {
          url,
          status: 'requested'
        });
      }
    });
    
    // Monitor response for image status
    page.on('response', response => {
      const url = response.url();
      if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)/i)) {
        const status = response.status();
        if (imageRequests.has(url)) {
          const imageData = imageRequests.get(url);
          imageData.status = status >= 200 && status < 300 ? 'success' : 'failed';
          imageData.statusCode = status;
          imageRequests.set(url, imageData);
        }
      }
    });
    
    // Wait for all content to load
    await page.waitForTimeout(3000);
    
    // Take screenshot of the hero section (top of page)
    await page.screenshot({ 
      path: path.join(screenshotsDir, '01-hero-section.png'),
      fullPage: false 
    });
    console.log('Captured hero section screenshot');
    
    // Scroll to next section and take screenshot
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 0.8);
    });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: path.join(screenshotsDir, '02-features-section.png'),
      fullPage: false 
    });
    console.log('Captured features section screenshot');
    
    // Scroll to next section and take screenshot
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 0.8);
    });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: path.join(screenshotsDir, '03-classes-section.png'),
      fullPage: false 
    });
    console.log('Captured classes section screenshot');
    
    // Scroll to next section and take screenshot
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 0.8);
    });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: path.join(screenshotsDir, '04-therapies-section.png'),
      fullPage: false 
    });
    console.log('Captured therapies section screenshot');
    
    // Scroll to next section and take screenshot
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 0.8);
    });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: path.join(screenshotsDir, '05-testimonials-section.png'),
      fullPage: false 
    });
    console.log('Captured testimonials section screenshot');
    
    // Scroll to next section and take screenshot
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 0.8);
    });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: path.join(screenshotsDir, '06-cta-section.png'),
      fullPage: false 
    });
    console.log('Captured CTA section screenshot');
    
    // Scroll to footer and take screenshot
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: path.join(screenshotsDir, '07-footer-section.png'),
      fullPage: false 
    });
    console.log('Captured footer section screenshot');
    
    // Get all images on page
    const images = await page.evaluate(() => {
      const imgElements = Array.from(document.querySelectorAll('img'));
      return imgElements.map(img => {
        const rect = img.getBoundingClientRect();
        return {
          src: img.src,
          alt: img.alt || '',
          visible: rect.top < window.innerHeight && rect.bottom > 0,
          width: rect.width,
          height: rect.height,
          loaded: img.complete && img.naturalWidth > 0
        };
      });
    });
    
    // Find duplicate images
    const imageSources = images.map(img => img.src);
    const duplicateImages = imageSources.filter((img, index) => {
      return imageSources.indexOf(img) !== index;
    });
    
    if (duplicateImages.length > 0) {
      issues.push({
        type: 'duplicate_images',
        images: [...new Set(duplicateImages)]
      });
    }
    
    // Find broken images
    const brokenImages = images.filter(img => !img.loaded);
    if (brokenImages.length > 0) {
      issues.push({
        type: 'images_not_loaded',
        images: brokenImages
      });
    }
    
    // Create an analysis report
    const imageData = Array.from(imageRequests.values());
    
    // Create final report with collected data
    const analysisReport = {
      url: 'https://mandala-new.netlify.app/',
      timestamp: new Date().toISOString(),
      issues,
      images: {
        total: images.length,
        loaded: images.filter(img => img.loaded).length,
        notLoaded: images.filter(img => !img.loaded).length,
        duplicates: [...new Set(duplicateImages)].length,
        allImages: images
      },
      imageRequests: imageData
    };
    
    // Generate markdown analysis
    const markdownContent = generateMarkdownAnalysis(analysisReport);
    fs.writeFileSync(
      path.join(analysisDir, 'site-analysis.md'),
      markdownContent
    );
    
    // Generate image catalog JSON
    const imageCatalog = generateImageCatalog(analysisReport);
    fs.writeFileSync(
      path.join(analysisDir, 'image-catalog.json'),
      JSON.stringify(imageCatalog, null, 2)
    );
    
    // Generate markdown image catalog
    const markdownImageCatalog = generateMarkdownImageCatalog(imageCatalog);
    fs.writeFileSync(
      path.join(analysisDir, 'image-catalog.md'),
      markdownImageCatalog
    );
    
    console.log('Analysis complete. Results saved to site-analysis directory.');
  } catch (error) {
    console.error('Error during analysis:', error);
  } finally {
    await browser.close();
  }
}

function generateMarkdownAnalysis(report) {
  let markdown = `# Mandala Netlify Site Analysis\n\n`;
  markdown += `Analysis performed: ${new Date(report.timestamp).toLocaleString()}\n\n`;
  markdown += `Site URL: ${report.url}\n\n`;
  
  markdown += `## Overview\n\n`;
  markdown += `- Total images: ${report.images.total}\n`;
  markdown += `- Successfully loaded images: ${report.images.loaded}\n`;
  markdown += `- Failed to load images: ${report.images.notLoaded}\n`;
  markdown += `- Duplicate images: ${report.images.duplicates}\n\n`;
  
  markdown += `## Issues Found\n\n`;
  
  if (report.issues.length === 0) {
    markdown += `No issues found.\n\n`;
  } else {
    // Group issues by type
    const issuesByType = {};
    report.issues.forEach(issue => {
      if (!issuesByType[issue.type]) {
        issuesByType[issue.type] = [];
      }
      issuesByType[issue.type].push(issue);
    });
    
    // Process broken images
    if (issuesByType.broken_image) {
      markdown += `### Broken Image Requests\n\n`;
      issuesByType.broken_image.forEach(issue => {
        markdown += `- ${issue.url}\n  - Error: ${issue.errorText}\n\n`;
      });
    }
    
    // Process images not loaded
    if (issuesByType.images_not_loaded) {
      markdown += `### Images Not Loaded\n\n`;
      const notLoadedIssue = issuesByType.images_not_loaded[0];
      notLoadedIssue.images.forEach(img => {
        markdown += `- ${img.src}\n  - Alt text: ${img.alt || 'None'}\n  - Dimensions: ${img.width}x${img.height}\n\n`;
      });
    }
    
    // Process duplicate images
    if (issuesByType.duplicate_images) {
      markdown += `### Duplicate Images\n\n`;
      const duplicateIssue = issuesByType.duplicate_images[0];
      duplicateIssue.images.forEach(img => {
        markdown += `- ${img}\n`;
      });
      markdown += `\n`;
    }
  }
  
  markdown += `## Screenshots\n\n`;
  markdown += `Screenshots have been saved to the \`screenshots\` directory:\n\n`;
  markdown += `1. Hero Section - \`01-hero-section.png\`\n`;
  markdown += `2. Features Section - \`02-features-section.png\`\n`;
  markdown += `3. Classes Section - \`03-classes-section.png\`\n`;
  markdown += `4. Therapies Section - \`04-therapies-section.png\`\n`;
  markdown += `5. Testimonials Section - \`05-testimonials-section.png\`\n`;
  markdown += `6. CTA Section - \`06-cta-section.png\`\n`;
  markdown += `7. Footer Section - \`07-footer-section.png\`\n\n`;
  
  markdown += `## Recommendations\n\n`;
  
  if (report.images.notLoaded > 0) {
    markdown += `### Fix Broken Images\n\n`;
    markdown += `There are ${report.images.notLoaded} images not loading properly. This may be due to:\n\n`;
    markdown += `- Incorrect file paths\n`;
    markdown += `- Missing image files in the deployment\n`;
    markdown += `- Incorrect configuration in next.config.js for image optimization\n\n`;
    markdown += `Recommendation: Ensure all images are correctly placed in the public directory and update image paths in the components.\n\n`;
  }
  
  if (report.images.duplicates > 0) {
    markdown += `### Address Duplicate Images\n\n`;
    markdown += `There are ${report.images.duplicates} duplicate image references on the page.\n\n`;
    markdown += `Recommendation: Refactor components to reuse image references or create separate optimized versions for different contexts.\n\n`;
  }
  
  return markdown;
}

function generateImageCatalog(report) {
  // Create a map of all unique images
  const uniqueImages = new Map();
  
  report.images.allImages.forEach(img => {
    if (!uniqueImages.has(img.src)) {
      // Try to determine what component/section this image is in based on alt text and URL
      let usage = 'Unknown';
      let section = 'Unknown';
      
      // Extract filename
      const filename = img.src.split('/').pop().split('?')[0];
      
      // Try to determine usage from alt text or filename
      if (img.alt.includes('yoga')) {
        usage = 'Yoga class image';
        section = 'Classes section';
      } else if (img.alt.includes('therapy') || img.alt.includes('terapia')) {
        usage = 'Therapy illustration';
        section = 'Therapies section';
      } else if (img.alt.includes('background')) {
        usage = 'Background image';
        section = 'Hero section';
      } else if (filename.includes('testimonial')) {
        usage = 'Testimonial avatar';
        section = 'Testimonials section';
      } else if (filename.includes('logo')) {
        usage = 'Logo';
        section = 'Header/Footer';
      } else if (img.alt) {
        usage = img.alt;
        
        // Try to determine section from alt text
        if (img.alt.toLowerCase().includes('hero') || img.alt.toLowerCase().includes('banner')) {
          section = 'Hero section';
        } else if (img.alt.toLowerCase().includes('testimonial')) {
          section = 'Testimonials section';
        } else if (img.alt.toLowerCase().includes('feature')) {
          section = 'Features section';
        }
      } else {
        // Try to determine usage from filename
        if (filename.includes('yoga')) {
          usage = 'Yoga-related image';
        } else if (filename.includes('therapy')) {
          usage = 'Therapy-related image';
        } else if (filename.includes('banner') || filename.includes('hero')) {
          usage = 'Hero/Banner image';
          section = 'Hero section';
        }
      }
      
      uniqueImages.set(img.src, {
        url: img.src,
        alt: img.alt,
        filename: filename,
        dimensions: `${img.width}x${img.height}`,
        loaded: img.loaded,
        usage: usage,
        section: section
      });
    }
  });
  
  return Array.from(uniqueImages.values());
}

function generateMarkdownImageCatalog(imageCatalog) {
  let markdown = `# Mandala Site Image Catalog\n\n`;
  
  markdown += `## Images Used on the Site\n\n`;
  
  // Group images by section
  const imagesBySection = {};
  
  imageCatalog.forEach(img => {
    if (!imagesBySection[img.section]) {
      imagesBySection[img.section] = [];
    }
    imagesBySection[img.section].push(img);
  });
  
  // Generate content for each section
  Object.keys(imagesBySection).sort().forEach(section => {
    markdown += `### ${section}\n\n`;
    
    markdown += `| Filename | Alt Text | Status | Usage | Dimensions |\n`;
    markdown += `|----------|----------|--------|-------|------------|\n`;
    
    imagesBySection[section].forEach(img => {
      const status = img.loaded ? '✅ Loaded' : '❌ Failed';
      const altText = img.alt || 'No alt text';
      
      markdown += `| ${img.filename} | ${altText.substring(0, 30)}${altText.length > 30 ? '...' : ''} | ${status} | ${img.usage} | ${img.dimensions} |\n`;
    });
    
    markdown += `\n`;
  });
  
  markdown += `## JSON Representation\n\n`;
  markdown += `A complete JSON catalog of all images with detailed information is available in the \`image-catalog.json\` file.\n\n`;
  
  return markdown;
}

// Run the analysis
analyzeDeployedSite().catch(console.error); 