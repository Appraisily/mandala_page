const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'deployed-screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Define routes to test
const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Terapias', path: '/terapias' },
  { name: 'Horarios y Precios', path: '/horarios-precios' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Hatha Yoga', path: '/yoga/hatha-yoga' },
  { name: 'Yin Yoga', path: '/yoga/yin-yoga' },
  { name: 'Nidra Yoga', path: '/yoga/nidra-yoga-meditacion' },
  { name: 'Docs', path: '/docs' },
  { name: 'Admin', path: '/admin' }
];

// Define devices to test
const devices = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 800 }
];

// Issues list
const issues = [];

async function testDeployedSite() {
  console.log('Starting test of deployed site: https://mandala-new.netlify.app/');

  const browser = await puppeteer.launch();
  
  try {
    for (const device of devices) {
      console.log(`\nTesting on ${device.name} (${device.width}x${device.height})`);
      
      const page = await browser.newPage();
      await page.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: 1,
        isMobile: device.width < 768,
        hasTouch: device.width < 1024,
      });
      
      for (const route of routes) {
        const url = `https://mandala-new.netlify.app${route.path}`;
        console.log(`  Testing ${route.name} (${url})`);
        
        // Navigate to the page
        try {
          const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
          
          // Check HTTP status
          if (!response.ok()) {
            const issue = `[${device.name}] ${route.name} (${url}) returned status ${response.status()}`;
            console.error(`    ❌ ${issue}`);
            issues.push(issue);
            continue;
          }

          // Take a screenshot
          const screenshotPath = path.join(
            screenshotsDir, 
            `${device.name}_${route.name.replace(/\s+/g, '_').toLowerCase()}.png`
          );
          await page.screenshot({ path: screenshotPath, fullPage: false });
          
          // Check for console errors
          const consoleErrors = [];
          page.on('console', msg => {
            if (msg.type() === 'error') {
              consoleErrors.push(`Console error on ${route.name}: ${msg.text()}`);
            }
          });
          
          // Check for broken images
          const brokenImages = await page.evaluate(() => {
            const imgs = Array.from(document.querySelectorAll('img'));
            return imgs
              .filter(img => !img.complete || img.naturalWidth === 0)
              .map(img => img.src);
          });
          
          if (brokenImages.length > 0) {
            const issue = `[${device.name}] ${route.name} has broken images: ${brokenImages.join(', ')}`;
            console.error(`    ❌ ${issue}`);
            issues.push(issue);
          }
          
          // Check for horizontal scroll
          const hasHorizontalScroll = await page.evaluate(() => {
            return document.documentElement.scrollWidth > document.documentElement.clientWidth;
          });
          
          if (hasHorizontalScroll) {
            const issue = `[${device.name}] ${route.name} has horizontal scroll issue`;
            console.warn(`    ⚠️ ${issue}`);
            issues.push(issue);
          }
          
          // Check for accessibility issues
          // Note: This is a simplified check; a real implementation would use axe-core or similar
          const a11yIssues = await page.evaluate(() => {
            const issues = [];
            // Check for alt attributes on images
            const imgsWithoutAlt = Array.from(document.querySelectorAll('img:not([alt])'))
              .map(img => img.src);
            if (imgsWithoutAlt.length > 0) {
              issues.push(`Images missing alt text: ${imgsWithoutAlt.length} found`);
            }
            
            // Check for proper heading structure
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
            if (headings.length > 0 && !document.querySelector('h1')) {
              issues.push('No H1 heading found on page');
            }
            
            return issues;
          });
          
          if (a11yIssues.length > 0) {
            a11yIssues.forEach(issue => {
              const formattedIssue = `[${device.name}] ${route.name} - A11y: ${issue}`;
              console.warn(`    ⚠️ ${formattedIssue}`);
              issues.push(formattedIssue);
            });
          }
          
          // Add any console errors
          if (consoleErrors.length > 0) {
            consoleErrors.forEach(error => {
              const formattedError = `[${device.name}] ${route.name} - ${error}`;
              console.error(`    ❌ ${formattedError}`);
              issues.push(formattedError);
            });
          }
          
          // Check for admin credentials (specifically on docs page)
          if (route.path === '/docs') {
            const containsPassword = await page.evaluate(() => {
              return document.body.innerText.includes('Admin credentials');
            });
            
            if (containsPassword) {
              const issue = `[${device.name}] ${route.name} - Contains exposed admin credentials`;
              console.error(`    ❌ ${issue}`);
              issues.push(issue);
            }
          }
          
          console.log(`    ✅ Tested successfully`);
          
        } catch (error) {
          const issue = `[${device.name}] ${route.name} (${url}) error: ${error.message}`;
          console.error(`    ❌ ${issue}`);
          issues.push(issue);
        }
      }
      
      await page.close();
    }
    
    // Write issues to file
    const issuesReport = `# Mandala Site Testing Report

## Issues Found
${issues.map(issue => `- ${issue}`).join('\n')}

## Testing Information
- Site: https://mandala-new.netlify.app/
- Date: ${new Date().toISOString()}
- Devices tested: ${devices.map(d => d.name).join(', ')}
- Routes tested: ${routes.map(r => r.name).join(', ')}
- Screenshots saved: ${screenshotsDir}
`;

    fs.writeFileSync('mandala-issues.md', issuesReport);
    console.log(`\nTesting completed. Found ${issues.length} issues.`);
    console.log(`Report saved to mandala-issues.md`);
    
  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

// Run the tests
testDeployedSite(); 