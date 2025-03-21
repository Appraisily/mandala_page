const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'comprehensive-screenshots');
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
  { path: '/yoga/hatha-yoga', name: 'hatha-yoga' },
  { path: '/yoga/nidra-yoga-meditacion', name: 'nidra-yoga' },
  { path: '/yoga/yin-yoga', name: 'yin-yoga' }
];

// Device configurations to test
const devices = [
  { name: 'Mobile Small', width: 320, height: 568 },
  { name: 'Mobile Medium', width: 375, height: 667 },
  { name: 'Mobile Large', width: 428, height: 926 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 720 },
  { name: 'Large Desktop', width: 1920, height: 1080 }
];

async function testDeployedSite() {
  console.log('Starting comprehensive testing on https://mandala-new.netlify.app/');
  
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const finalResults = {
    timestamp: new Date().toISOString(),
    baseUrl: 'https://mandala-new.netlify.app',
    routes: {},
    responsiveIssues: {},
    resourceIssues: {},
    accessibilityIssues: {},
    performanceMetrics: {}
  };
  
  // Collect all console errors globally
  const globalConsoleErrors = [];
  const globalResourceErrors = [];
  const globalNetworkRequests = [];
  
  // Test each route
  for (const route of routes) {
    console.log(`\n🧪 Testing route: ${route.path}`);
    finalResults.routes[route.path] = { devices: {} };
    
    // Test on each device
    for (const device of devices) {
      console.log(`  📱 Testing on ${device.name} (${device.width}x${device.height})`);
      
      // Create a new page for each device test
      const page = await browser.newPage();
      
      // Setup request monitoring
      page.on('console', msg => {
        if (msg.type() === 'error') {
          const errorText = msg.text();
          globalConsoleErrors.push({
            route: route.path,
            device: device.name,
            error: errorText
          });
        }
      });
      
      page.on('requestfailed', request => {
        globalResourceErrors.push({
          route: route.path,
          device: device.name,
          url: request.url(),
          errorText: request.failure().errorText
        });
      });
      
      page.on('request', request => {
        globalNetworkRequests.push({
          route: route.path,
          device: device.name,
          url: request.url(),
          resourceType: request.resourceType()
        });
      });
      
      // Set viewport to match device dimensions
      await page.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: 1,
        isMobile: device.width < 768,
        hasTouch: device.width < 1024,
      });
      
      try {
        // Navigate to the page
        const url = `https://mandala-new.netlify.app${route.path}`;
        const response = await page.goto(url, { 
          waitUntil: 'networkidle2', 
          timeout: 60000 
        });
        
        const status = response.status();
        
        // Create device directory for this route
        const routeScreenshotsDir = path.join(screenshotsDir, route.name);
        if (!fs.existsSync(routeScreenshotsDir)) {
          fs.mkdirSync(routeScreenshotsDir);
        }
        
        // Take a screenshot
        const screenshotPath = path.join(routeScreenshotsDir, `${device.name.replace(/\s+/g, '_')}.png`);
        await page.screenshot({ 
          path: screenshotPath, 
          fullPage: true 
        });
        
        // Check for broken images
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
          
          // Check if important elements are visible
          const importantSelectors = [
            'header', 
            'nav',
            'main',
            'footer',
          ];
          
          const visibilityResults = {};
          
          importantSelectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (!element) {
              visibilityResults[selector] = 'Not found';
              return;
            }
            
            const style = window.getComputedStyle(element);
            visibilityResults[selector] = style && 
              style.display !== 'none' && 
              style.visibility !== 'hidden' ? 'Visible' : 'Hidden';
          });
          
          return {
            hasHorizontalScroll,
            viewportWidth: document.documentElement.clientWidth,
            contentWidth: document.documentElement.scrollWidth,
            overflowAmount: document.documentElement.scrollWidth - document.documentElement.clientWidth,
            visibilityResults
          };
        });
        
        // Collect performance metrics
        const performanceMetrics = await page.metrics();
        const performanceTiming = await page.evaluate(() => {
          return {
            loadEventEnd: performance.timing.loadEventEnd,
            navigationStart: performance.timing.navigationStart,
            domComplete: performance.timing.domComplete,
            loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
            domReadyTime: performance.timing.domComplete - performance.timing.navigationStart
          };
        });
        
        // Store device-specific results
        finalResults.routes[route.path].devices[device.name] = {
          status,
          screenshotPath: path.relative(__dirname, screenshotPath),
          brokenImages,
          layoutIssues,
          performanceMetrics,
          performanceTiming
        };
        
        // Store performance metrics
        if (!finalResults.performanceMetrics[route.path]) {
          finalResults.performanceMetrics[route.path] = {};
        }
        finalResults.performanceMetrics[route.path][device.name] = {
          ...performanceTiming
        };
        
        // Store responsive issues if found
        if (layoutIssues.hasHorizontalScroll) {
          if (!finalResults.responsiveIssues[route.path]) {
            finalResults.responsiveIssues[route.path] = [];
          }
          finalResults.responsiveIssues[route.path].push({
            device: device.name,
            overflowAmount: layoutIssues.overflowAmount,
            viewportWidth: layoutIssues.viewportWidth,
            contentWidth: layoutIssues.contentWidth
          });
        }
        
        console.log(`    ✅ Completed testing on ${device.name}`);
      } catch (error) {
        console.error(`    ❌ Error testing on ${device.name}:`, error.message);
        
        if (!finalResults.routes[route.path]) {
          finalResults.routes[route.path] = { devices: {} };
        }
        
        finalResults.routes[route.path].devices[device.name] = {
          error: error.message
        };
      } finally {
        await page.close();
      }
    }
  }
  
  // Close the browser
  await browser.close();
  
  // Add global error summaries to results
  finalResults.resourceIssues = summarizeResourceErrors(globalResourceErrors);
  finalResults.consoleErrors = summarizeConsoleErrors(globalConsoleErrors);
  finalResults.requestTypes = summarizeNetworkRequests(globalNetworkRequests);
  
  // Write JSON report
  fs.writeFileSync(
    path.join(__dirname, 'comprehensive-test-results.json'),
    JSON.stringify(finalResults, null, 2)
  );
  
  // Generate markdown report
  generateMarkdownReport(finalResults);
  
  console.log('Comprehensive testing completed. Reports saved to comprehensive-test-results.json and comprehensive-test-report.md');
}

// Summarize resource errors by type
function summarizeResourceErrors(errors) {
  const summary = {
    byRouteAndDevice: {},
    byErrorType: {},
    byResourceType: {},
    mostFrequentErrors: {}
  };
  
  errors.forEach(error => {
    // Group by route and device
    if (!summary.byRouteAndDevice[error.route]) {
      summary.byRouteAndDevice[error.route] = {};
    }
    if (!summary.byRouteAndDevice[error.route][error.device]) {
      summary.byRouteAndDevice[error.route][error.device] = [];
    }
    summary.byRouteAndDevice[error.route][error.device].push(error);
    
    // Group by error type
    if (!summary.byErrorType[error.errorText]) {
      summary.byErrorType[error.errorText] = [];
    }
    summary.byErrorType[error.errorText].push(error);
    
    // Extract resource type from URL
    const resourceType = getResourceTypeFromUrl(error.url);
    if (!summary.byResourceType[resourceType]) {
      summary.byResourceType[resourceType] = [];
    }
    summary.byResourceType[resourceType].push(error);
    
    // Count frequencies
    if (!summary.mostFrequentErrors[error.url]) {
      summary.mostFrequentErrors[error.url] = {
        count: 0,
        errorText: error.errorText,
        resourceType
      };
    }
    summary.mostFrequentErrors[error.url].count++;
  });
  
  // Sort most frequent errors
  summary.mostFrequentErrors = Object.entries(summary.mostFrequentErrors)
    .sort((a, b) => b[1].count - a[1].count)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  
  return summary;
}

// Summarize console errors
function summarizeConsoleErrors(errors) {
  const summary = {
    byRouteAndDevice: {},
    mostFrequent: {}
  };
  
  errors.forEach(error => {
    // Group by route and device
    if (!summary.byRouteAndDevice[error.route]) {
      summary.byRouteAndDevice[error.route] = {};
    }
    if (!summary.byRouteAndDevice[error.route][error.device]) {
      summary.byRouteAndDevice[error.route][error.device] = [];
    }
    summary.byRouteAndDevice[error.route][error.device].push(error);
    
    // Count frequencies
    if (!summary.mostFrequent[error.error]) {
      summary.mostFrequent[error.error] = {
        count: 0,
        routes: new Set()
      };
    }
    summary.mostFrequent[error.error].count++;
    summary.mostFrequent[error.error].routes.add(error.route);
  });
  
  // Convert Sets to Arrays for JSON serialization
  Object.values(summary.mostFrequent).forEach(item => {
    item.routes = Array.from(item.routes);
  });
  
  // Sort most frequent errors
  summary.mostFrequent = Object.entries(summary.mostFrequent)
    .sort((a, b) => b[1].count - a[1].count)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  
  return summary;
}

// Summarize network requests
function summarizeNetworkRequests(requests) {
  const summary = {
    byResourceType: {},
    byDomain: {}
  };
  
  requests.forEach(request => {
    // Group by resource type
    if (!summary.byResourceType[request.resourceType]) {
      summary.byResourceType[request.resourceType] = [];
    }
    summary.byResourceType[request.resourceType].push(request);
    
    // Extract and group by domain
    try {
      const domain = new URL(request.url).hostname;
      if (!summary.byDomain[domain]) {
        summary.byDomain[domain] = [];
      }
      summary.byDomain[domain].push(request);
    } catch (e) {
      // Invalid URL, skip
    }
  });
  
  return summary;
}

// Helper to get resource type from URL
function getResourceTypeFromUrl(url) {
  try {
    const extension = url.split('.').pop().split('?')[0].toLowerCase();
    
    const resourceTypes = {
      'jpg': 'image',
      'jpeg': 'image',
      'png': 'image',
      'gif': 'image',
      'svg': 'image',
      'webp': 'image',
      'css': 'stylesheet',
      'js': 'script',
      'woff': 'font',
      'woff2': 'font',
      'ttf': 'font',
      'eot': 'font',
      'otf': 'font',
      'json': 'data',
      'xml': 'data',
      'html': 'document',
      'htm': 'document'
    };
    
    return resourceTypes[extension] || 'other';
  } catch (e) {
    return 'unknown';
  }
}

// Generate markdown report
function generateMarkdownReport(results) {
  let markdown = `# Mandala Netlify Comprehensive Test Report\n\n`;
  markdown += `Test performed: ${new Date(results.timestamp).toLocaleString()}\n\n`;
  
  // Add overall summary
  markdown += `## Overall Summary\n\n`;
  markdown += `- Base URL: ${results.baseUrl}\n`;
  markdown += `- Routes tested: ${Object.keys(results.routes).length}\n`;
  markdown += `- Devices tested: ${devices.length}\n\n`;
  
  // Add broken images summary
  markdown += `## Broken Images Summary\n\n`;
  let totalBrokenImages = 0;
  const routesWithBrokenImages = [];
  
  Object.entries(results.routes).forEach(([route, data]) => {
    Object.entries(data.devices || {}).forEach(([device, deviceData]) => {
      if (deviceData.brokenImages && deviceData.brokenImages.length > 0) {
        totalBrokenImages += deviceData.brokenImages.length;
        if (!routesWithBrokenImages.includes(route)) {
          routesWithBrokenImages.push(route);
        }
      }
    });
  });
  
  markdown += `- Total broken images found: ${totalBrokenImages}\n`;
  markdown += `- Routes with broken images: ${routesWithBrokenImages.length > 0 ? routesWithBrokenImages.join(', ') : 'None'}\n\n`;
  
  // Add responsive issues summary
  markdown += `## Responsive Issues Summary\n\n`;
  
  if (Object.keys(results.responsiveIssues).length === 0) {
    markdown += `No responsive issues found across all devices and routes.\n\n`;
  } else {
    markdown += `The following routes have responsive issues:\n\n`;
    
    Object.entries(results.responsiveIssues).forEach(([route, devices]) => {
      markdown += `- **${route}**: Issues on ${devices.length} device(s)\n`;
      devices.forEach(device => {
        markdown += `  - ${device.device}: Content width (${device.contentWidth}px) exceeds viewport (${device.viewportWidth}px) by ${device.overflowAmount}px\n`;
      });
      markdown += '\n';
    });
  }
  
  // Add resource errors summary
  markdown += `## Resource Errors Summary\n\n`;
  
  if (!results.resourceIssues || Object.keys(results.resourceIssues.byErrorType).length === 0) {
    markdown += `No resource errors detected.\n\n`;
  } else {
    markdown += `### Most Frequent Resource Errors\n\n`;
    
    const topErrors = Object.entries(results.resourceIssues.mostFrequentErrors)
      .slice(0, 10)
      .map(([url, data]) => ({url, ...data}));
    
    if (topErrors.length > 0) {
      markdown += `| Resource | Count | Type | Error |\n`;
      markdown += `|---------|-------|------|-------|\n`;
      
      topErrors.forEach(error => {
        const shortUrl = error.url.length > 50 ? 
          error.url.substring(0, 47) + '...' : 
          error.url;
        
        markdown += `| ${shortUrl} | ${error.count} | ${error.resourceType} | ${error.errorText} |\n`;
      });
      
      markdown += '\n';
    }
    
    markdown += `### Resource Errors by Type\n\n`;
    
    Object.entries(results.resourceIssues.byResourceType).forEach(([type, errors]) => {
      markdown += `- **${type}**: ${errors.length} error(s)\n`;
    });
    
    markdown += '\n';
  }
  
  // Add console errors summary
  if (results.consoleErrors && Object.keys(results.consoleErrors.mostFrequent).length > 0) {
    markdown += `## Console Errors Summary\n\n`;
    
    const topConsoleErrors = Object.entries(results.consoleErrors.mostFrequent)
      .slice(0, 10)
      .map(([error, data]) => ({error, ...data}));
    
    if (topConsoleErrors.length > 0) {
      markdown += `| Error | Count | Affected Routes |\n`;
      markdown += `|-------|-------|----------------|\n`;
      
      topConsoleErrors.forEach(error => {
        const shortError = error.error.length > 50 ? 
          error.error.substring(0, 47) + '...' : 
          error.error;
        
        markdown += `| ${shortError} | ${error.count} | ${error.routes.join(', ')} |\n`;
      });
      
      markdown += '\n';
    }
  }
  
  // Add performance metrics summary
  markdown += `## Performance Metrics\n\n`;
  markdown += `| Route | Device | Load Time | DOM Ready Time |\n`;
  markdown += `|-------|--------|-----------|---------------|\n`;
  
  Object.entries(results.performanceMetrics).forEach(([route, devices]) => {
    Object.entries(devices).forEach(([device, metrics]) => {
      if (metrics.loadTime && metrics.domReadyTime) {
        markdown += `| ${route} | ${device} | ${metrics.loadTime}ms | ${metrics.domReadyTime}ms |\n`;
      }
    });
  });
  
  markdown += '\n## Detailed Route Analysis\n\n';
  
  // Add route details
  Object.entries(results.routes).forEach(([route, data]) => {
    markdown += `### ${route}\n\n`;
    
    // Get all devices that were tested for this route
    const testedDevices = Object.keys(data.devices || {});
    
    // Check if any device had an error
    const devicesWithErrors = testedDevices.filter(device => 
      data.devices[device].error !== undefined
    );
    
    if (devicesWithErrors.length > 0) {
      markdown += `#### Errors\n\n`;
      devicesWithErrors.forEach(device => {
        markdown += `- **${device}**: ${data.devices[device].error}\n`;
      });
      markdown += '\n';
    }
    
    // Check for broken images
    let routeBrokenImages = [];
    
    testedDevices.forEach(device => {
      if (data.devices[device].brokenImages && data.devices[device].brokenImages.length > 0) {
        data.devices[device].brokenImages.forEach(img => {
          if (!routeBrokenImages.some(existingImg => existingImg.src === img.src)) {
            routeBrokenImages.push(img);
          }
        });
      }
    });
    
    if (routeBrokenImages.length > 0) {
      markdown += `#### Broken Images\n\n`;
      routeBrokenImages.forEach(img => {
        markdown += `- ${img.src} (${img.alt})\n`;
      });
      markdown += '\n';
    }
    
    // Check for responsive issues
    const devicesWithResponsiveIssues = testedDevices.filter(device => 
      data.devices[device].layoutIssues && 
      data.devices[device].layoutIssues.hasHorizontalScroll
    );
    
    if (devicesWithResponsiveIssues.length > 0) {
      markdown += `#### Responsive Issues\n\n`;
      devicesWithResponsiveIssues.forEach(device => {
        const issues = data.devices[device].layoutIssues;
        markdown += `- **${device}**: Horizontal scroll detected (viewport: ${issues.viewportWidth}px, content: ${issues.contentWidth}px, overflow: ${issues.overflowAmount}px)\n`;
      });
      markdown += '\n';
    }
    
    markdown += `#### Screenshots\n\n`;
    testedDevices
      .filter(device => data.devices[device].screenshotPath)
      .forEach(device => {
        markdown += `- **${device}**: ${data.devices[device].screenshotPath}\n`;
      });
    
    markdown += '\n';
  });
  
  // Write markdown to file
  fs.writeFileSync(
    path.join(__dirname, 'comprehensive-test-report.md'),
    markdown
  );
}

// Run the tests
testDeployedSite().catch(console.error); 