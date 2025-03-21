const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function testNetlifySite() {
  // Create screenshots directory if it doesn't exist
  const screenshotDir = path.join(__dirname, 'netlify-screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Set up console log capturing
  const consoleMessages = [];
  page.on('console', message => {
    consoleMessages.push({
      type: message.type(),
      text: message.text(),
      location: message.location()
    });
  });

  // Set up error logging
  const errors = [];
  page.on('pageerror', error => {
    errors.push(error.message);
  });

  // Set up resource error logging
  const resourceErrors = [];
  page.on('requestfailed', request => {
    resourceErrors.push({
      url: request.url(),
      method: request.method(),
      reason: request.failure().errorText
    });
  });

  // Set viewport to desktop size
  await page.setViewport({ width: 1280, height: 800 });

  try {
    console.log('Visiting https://mandala-new.netlify.app/...');
    
    // Visit the site
    await page.goto('https://mandala-new.netlify.app/', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Take full page screenshot
    await page.screenshot({
      path: path.join(screenshotDir, 'netlify-desktop-full.png'),
      fullPage: true
    });

    // Take viewport screenshot
    await page.screenshot({
      path: path.join(screenshotDir, 'netlify-desktop-viewport.png')
    });

    // Set viewport to mobile size
    await page.setViewport({ width: 375, height: 667 });
    
    // Wait for content to adjust to new viewport using setTimeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Take mobile screenshots
    await page.screenshot({
      path: path.join(screenshotDir, 'netlify-mobile-full.png'),
      fullPage: true
    });
    
    await page.screenshot({
      path: path.join(screenshotDir, 'netlify-mobile-viewport.png')
    });

    // Log results
    console.log('\nConsole Messages:');
    consoleMessages.forEach(msg => {
      console.log(`[${msg.type}] ${msg.text}`);
    });

    console.log('\nJavaScript Errors:');
    if (errors.length === 0) {
      console.log('No JavaScript errors detected');
    } else {
      errors.forEach(error => console.log(error));
    }

    console.log('\nResource Errors:');
    if (resourceErrors.length === 0) {
      console.log('No resource errors detected');
    } else {
      resourceErrors.forEach(error => console.log(`${error.method} ${error.url} - ${error.reason}`));
    }

    // Check for missing images
    const missingImages = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return images
        .filter(img => !img.complete || !img.naturalWidth)
        .map(img => ({
          src: img.src,
          alt: img.alt,
          className: img.className
        }));
    });

    console.log('\nMissing Images:');
    if (missingImages.length === 0) {
      console.log('No missing images detected');
    } else {
      missingImages.forEach(img => console.log(`Missing image: ${img.src} (alt: ${img.alt})`));
    }

    console.log('\nScreenshots saved to:', screenshotDir);

  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await browser.close();
  }
}

testNetlifySite().catch(console.error); 