const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'netify-site-screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Define all routes to test
const routes = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/terapias', name: 'terapias' },
  { path: '/horarios-precios', name: 'horarios-precios' },
  { path: '/contacto', name: 'contacto' },
  { path: '/noticias', name: 'noticias' },
  { path: '/docs', name: 'docs' },
  { path: '/admin', name: 'admin' },
  { path: '/yoga/hatha-yoga', name: 'hatha-yoga' },
  { path: '/yoga/nidra-yoga-meditacion', name: 'nidra-yoga' },
  { path: '/yoga/yin-yoga', name: 'yin-yoga' }
];

// Function to test all routes
async function testRoutes() {
  console.log('Starting to test all routes on https://mandala-new.netlify.app/');
  
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // Create a new page
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1280, height: 720 });
  
  // Array to store route test results
  const results = [];
  
  // Test each route
  for (const route of routes) {
    const url = `https://mandala-new.netlify.app${route.path}`;
    console.log(`Testing route: ${url}`);
    
    try {
      // Navigate to the page
      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      const status = response.status();
      
      // Take a screenshot
      const screenshotPath = path.join(screenshotsDir, `${route.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      
      // Check for console errors
      const consoleErrors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });
      
      // Collect performance metrics
      const performanceMetrics = await page.metrics();
      
      // Check for broken images (if any)
      const brokenImages = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images
          .filter(img => !img.complete || img.naturalWidth === 0)
          .map(img => ({
            src: img.src,
            alt: img.alt || 'No alt text'
          }));
      });
      
      // Check for layout issues
      const layoutIssues = await page.evaluate(() => {
        // Check for horizontal overflow
        const hasHorizontalScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;
        
        return {
          hasHorizontalScroll,
          viewportWidth: document.documentElement.clientWidth,
          contentWidth: document.documentElement.scrollWidth,
          overflowAmount: document.documentElement.scrollWidth - document.documentElement.clientWidth
        };
      });
      
      // Store results
      results.push({
        route: route.path,
        status,
        screenshotPath,
        consoleErrors,
        brokenImages,
        layoutIssues,
        performanceMetrics
      });
      
      console.log(`✅ Completed testing route: ${route.path}`);
    } catch (error) {
      console.error(`❌ Error testing route ${route.path}:`, error.message);
      
      results.push({
        route: route.path,
        error: error.message
      });
    }
  }
  
  // Close the browser
  await browser.close();
  
  // Create a summary report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: 'https://mandala-new.netlify.app',
    results
  };
  
  // Write report to file
  fs.writeFileSync(
    path.join(__dirname, 'netlify-site-test-report.json'), 
    JSON.stringify(report, null, 2)
  );
  
  // Generate a simplified markdown report
  let markdownReport = `# Mandala Netlify Site Test Report\n\n`;
  markdownReport += `Test performed: ${new Date().toLocaleString()}\n\n`;
  markdownReport += `## Summary\n\n`;
  
  // Count successes and errors
  const successful = results.filter(r => !r.error && (r.status === 200 || r.status === 304)).length;
  const failed = results.length - successful;
  
  markdownReport += `- Total routes tested: ${results.length}\n`;
  markdownReport += `- Successful: ${successful}\n`;
  markdownReport += `- Failed: ${failed}\n\n`;
  
  markdownReport += `## Route Details\n\n`;
  
  for (const result of results) {
    markdownReport += `### ${result.route}\n\n`;
    
    if (result.error) {
      markdownReport += `- ❌ Error: ${result.error}\n\n`;
      continue;
    }
    
    markdownReport += `- Status: ${result.status}\n`;
    markdownReport += `- Screenshot: \`${path.basename(result.screenshotPath)}\`\n`;
    
    if (result.brokenImages && result.brokenImages.length > 0) {
      markdownReport += `- Broken images: ${result.brokenImages.length}\n`;
      result.brokenImages.forEach(img => {
        markdownReport += `  - ${img.src} (${img.alt})\n`;
      });
    }
    
    if (result.layoutIssues.hasHorizontalScroll) {
      markdownReport += `- ⚠️ Horizontal scroll detected (viewport: ${result.layoutIssues.viewportWidth}px, content: ${result.layoutIssues.contentWidth}px, overflow: ${result.layoutIssues.overflowAmount}px)\n`;
    }
    
    if (result.consoleErrors && result.consoleErrors.length > 0) {
      markdownReport += `- Console errors: ${result.consoleErrors.length}\n`;
      result.consoleErrors.forEach((err, i) => {
        markdownReport += `  - Error ${i+1}: ${err.substring(0, 100)}${err.length > 100 ? '...' : ''}\n`;
      });
    }
    
    markdownReport += '\n';
  }
  
  // Write markdown report to file
  fs.writeFileSync(
    path.join(__dirname, 'netlify-site-test-report.md'), 
    markdownReport
  );
  
  console.log(`Testing completed. Report saved to netlify-site-test-report.md and screenshots to ${screenshotsDir}`);
}

// Run the test
testRoutes().catch(console.error); 