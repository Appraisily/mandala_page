const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory
const screenshotsDir = path.join(__dirname, 'updated-design-screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Device configurations for testing
const devices = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 800 },
];

async function captureScreenshots() {
  console.log('Starting to capture screenshots of the updated design...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    for (const device of devices) {
      console.log(`Testing on ${device.name} (${device.width}x${device.height})`);
      
      // Create a new page for each device
      const page = await browser.newPage();
      await page.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: 1,
        isMobile: device.width < 768,
      });
      
      // Navigate to the home page
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
      console.log(`Loaded home page for ${device.name}`);
      
      // Take a screenshot of the hero section
      await page.screenshot({
        path: path.join(screenshotsDir, `${device.name.toLowerCase()}-hero.png`),
        fullPage: false,
      });
      console.log(`Captured hero section for ${device.name}`);
      
      // Scroll down to see header with background
      await page.evaluate(() => {
        window.scrollBy(0, 300);
      });
      await page.waitForTimeout(500);
      
      // Take a screenshot of header with background
      await page.screenshot({
        path: path.join(screenshotsDir, `${device.name.toLowerCase()}-header-scrolled.png`),
        fullPage: false,
      });
      console.log(`Captured header when scrolled for ${device.name}`);
      
      // Open mobile menu (only for mobile)
      if (device.width < 768) {
        await page.click('button[aria-label="Abrir menú"]');
        await page.waitForTimeout(500);
        
        // Take a screenshot of the mobile menu
        await page.screenshot({
          path: path.join(screenshotsDir, `${device.name.toLowerCase()}-mobile-menu.png`),
          fullPage: false,
        });
        console.log(`Captured mobile menu for ${device.name}`);
        
        // Click a submenu
        await page.evaluate(() => {
          const yogaButton = Array.from(document.querySelectorAll('button')).find(
            button => button.textContent.includes('Yoga')
          );
          if (yogaButton) yogaButton.click();
        });
        
        await page.waitForTimeout(500);
        
        // Take a screenshot of the submenu
        await page.screenshot({
          path: path.join(screenshotsDir, `${device.name.toLowerCase()}-submenu.png`),
          fullPage: false,
        });
        console.log(`Captured submenu for ${device.name}`);
      }
      
      await page.close();
    }
    
    console.log('All screenshots captured successfully!');
  } catch (error) {
    console.error('Error during screenshot capture:', error);
  } finally {
    await browser.close();
  }
}

// Run the test
captureScreenshots().catch(console.error); 