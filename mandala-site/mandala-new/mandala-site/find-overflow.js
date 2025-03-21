const puppeteer = require('puppeteer');

async function findOverflowElements() {
  console.log('Starting to identify elements causing horizontal overflow...');
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    // Set viewport to mobile size
    await page.setViewport({
      width: 375, // iPhone SE width
      height: 667,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
    });
    
    // Navigate to the main page
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    console.log('Loaded main page');
    
    // Function to find elements wider than viewport
    const overflowingElements = await page.evaluate(() => {
      const viewportWidth = window.innerWidth;
      const results = [];
      
      // Get all elements
      const allElements = document.querySelectorAll('*');
      
      // Check each element
      allElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // If element width is greater than viewport or extends beyond viewport
        if (rect.width > viewportWidth || rect.right > viewportWidth || rect.left < 0) {
          results.push({
            tagName: element.tagName,
            id: element.id || 'no-id',
            className: element.className || 'no-class',
            width: rect.width,
            viewport: viewportWidth,
            difference: rect.width - viewportWidth,
            left: rect.left,
            right: rect.right,
            outerHTML: element.outerHTML.substring(0, 150) + '...' // Truncate to avoid huge output
          });
        }
      });
      
      return results;
    });
    
    // Sort by difference (largest first)
    overflowingElements.sort((a, b) => b.difference - a.difference);
    
    // Print results
    console.log(`Found ${overflowingElements.length} elements causing horizontal overflow`);
    console.log('Top overflowing elements:');
    
    // Show the top 10 problematic elements
    overflowingElements.slice(0, 10).forEach((el, index) => {
      console.log(`\n#${index + 1} - ${el.tagName} element`);
      console.log(`Classes: ${el.className}`);
      console.log(`ID: ${el.id}`);
      console.log(`Width: ${el.width.toFixed(2)}px (viewport: ${el.viewport}px, overflow: ${el.difference.toFixed(2)}px)`);
      console.log(`Position: left ${el.left.toFixed(2)}, right ${el.right.toFixed(2)}`);
      console.log(`HTML: ${el.outerHTML}`);
    });
    
  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await browser.close();
  }
}

// Run the analysis
findOverflowElements(); 