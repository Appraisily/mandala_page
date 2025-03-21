const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Device configurations to test
const devices = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone XR', width: 414, height: 896 },
  { name: 'iPhone 12 Pro', width: 390, height: 844 },
  { name: 'Pixel 5', width: 393, height: 851 },
  { name: 'Samsung Galaxy S20', width: 360, height: 800 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'iPad Pro', width: 1024, height: 1366 },
];

async function testResponsiveness() {
  console.log('Starting responsiveness testing with Puppeteer...');
  
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    // Test on each device
    for (const device of devices) {
      console.log(`Testing on ${device.name} (${device.width}x${device.height})`);
      
      // Set viewport to match device dimensions
      await page.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: 1,
        isMobile: device.width < 768,
        hasTouch: device.width < 1024,
      });
      
      // Navigate to the main page
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
      console.log(`Loaded main page for ${device.name}`);
      
      // Take a screenshot of the main page
      const screenshotPath = path.join(screenshotsDir, `${device.name.replace(/\s+/g, '_')}_main.png`);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: true
      });
      console.log(`Saved screenshot to ${screenshotPath}`);
      
      // Check for any layout issues (looking for horizontal overflow)
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      
      if (hasHorizontalScroll) {
        console.warn(`⚠️ Horizontal scroll detected on ${device.name} - potential layout issue!`);
      } else {
        console.log(`✅ No horizontal scroll issues detected on ${device.name}`);
      }
      
      // Check if important elements are visible
      const importantSelectors = [
        'header', 
        'nav',
        'main',
        'footer',
      ];
      
      for (const selector of importantSelectors) {
        const isVisible = await page.evaluate((sel) => {
          const element = document.querySelector(sel);
          if (!element) return false;
          
          const style = window.getComputedStyle(element);
          return style && style.display !== 'none' && style.visibility !== 'hidden';
        }, selector);
        
        if (isVisible) {
          console.log(`✅ ${selector} is visible on ${device.name}`);
        } else {
          console.warn(`⚠️ ${selector} is not visible on ${device.name}`);
        }
      }
      
      console.log(`Completed testing on ${device.name}`);
      console.log('-----------------------------------');
    }
    
    console.log('All tests completed successfully! Screenshots saved to the screenshots directory.');
    
  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

// Run the tests
testResponsiveness(); 