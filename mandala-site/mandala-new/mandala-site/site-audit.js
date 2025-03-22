const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Define the routes to test
const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/yoga', name: 'Yoga' },
  { path: '/yoga/hatha-yoga', name: 'Hatha Yoga' },
  { path: '/yoga/daoyin-yoga', name: 'Daoyin Yoga' },
  { path: '/yoga/nidra-yoga-meditacion', name: 'Yoga Nidra & Meditación' },
  { path: '/yoga/yin-yoga', name: 'Yin Yoga' },
  { path: '/terapias', name: 'Terapias' },
  { path: '/horarios-precios', name: 'Horarios y Precios' },
  { path: '/contacto', name: 'Contacto' },
  { path: '/noticias', name: 'Noticias' }
];

// Define image paths to check
const imagesToCheck = [
  '/images/new-hero-background.jpg',
  '/images/yoga/hatha-yoga.png',
  '/images/yoga/daoyin-yoga.png',
  '/images/yoga/yoga-nidra.png',
  '/images/icons/hatha-icon.svg',
  '/images/icons/daoyin-icon.svg',
  '/images/icons/nidra-icon.svg',
  '/images/cta-background.jpg',
  '/images/therapy.jpg',
  '/images/testimonials/testimonial1.jpg',
  '/images/testimonials/testimonial2.jpg',
  '/images/testimonials/testimonial3.jpg'
];

async function auditSite() {
  console.log('Starting site audit...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = {
    summary: {
      totalRoutes: routes.length,
      passedRoutes: 0,
      failedRoutes: 0
    },
    routes: []
  };
  
  for (const route of routes) {
    console.log(`Testing route: ${route.path}`);
    const page = await browser.newPage();
    
    try {
      // Navigate to the route
      await page.goto(`http://localhost:3000${route.path}`, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      // Check for 404 page
      const is404 = await page.evaluate(() => {
        return document.title.includes('404') || 
               document.body.innerText.includes('Page not found');
      });
      
      // Check for images on the page
      const missingImages = await page.evaluate((imagesToCheck) => {
        return imagesToCheck.filter(imgPath => {
          const imgs = Array.from(document.querySelectorAll('img'));
          return imgs.some(img => img.src.includes(imgPath)) && 
                 !document.querySelector(`img[src*="${imgPath}"][complete="true"]`);
        });
      }, imagesToCheck);
      
      // Check for specific components
      const hasHeroSection = await page.evaluate(() => {
        return !!document.querySelector('.bg-gradient-to-r.from-yellow-100') || 
               !!document.querySelector('[class*="HeroSection"]');
      });
      
      const hasYogaCards = await page.evaluate(() => {
        return !!document.querySelector('[class*="YogaStylesSection"]') || 
               document.querySelectorAll('.rounded-2xl').length > 0;
      });
      
      const hasContactForm = await page.evaluate(() => {
        return !!document.querySelector('form') && 
               !!document.querySelector('input[type="email"]');
      });
      
      // Compile results for this route
      const routeResults = {
        path: route.path,
        name: route.name,
        status: is404 ? 'failed' : 'passed',
        issues: []
      };
      
      if (is404) {
        routeResults.issues.push('Page returns 404');
      }
      
      if (missingImages.length > 0) {
        routeResults.issues.push(`Missing images: ${missingImages.join(', ')}`);
      }
      
      // Only check for hero section on home page
      if (route.path === '/' && !hasHeroSection) {
        routeResults.issues.push('Missing hero section');
      }
      
      // Only check for yoga cards on relevant pages
      if ((route.path === '/yoga' || route.path.includes('/yoga/')) && !hasYogaCards) {
        routeResults.issues.push('Missing yoga cards');
      }
      
      // Only check for contact form on contact page
      if (route.path === '/contacto' && !hasContactForm) {
        routeResults.issues.push('Missing contact form');
      }
      
      if (routeResults.issues.length > 0) {
        routeResults.status = 'failed';
        results.summary.failedRoutes++;
      } else {
        results.summary.passedRoutes++;
      }
      
      results.routes.push(routeResults);
      
    } catch (error) {
      console.error(`Error testing route ${route.path}:`, error);
      
      results.routes.push({
        path: route.path,
        name: route.name,
        status: 'failed',
        issues: [`Error: ${error.message}`]
      });
      
      results.summary.failedRoutes++;
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  
  // Save results to JSON file
  fs.writeFileSync(
    path.join(__dirname, 'site-audit-results.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log('Site audit complete. Results saved to site-audit-results.json');
  return results;
}

// Check images directly
function checkImageFiles() {
  const imageResults = {
    allImages: imagesToCheck,
    missing: []
  };
  
  for (const imagePath of imagesToCheck) {
    const fullPath = path.join(__dirname, 'public', imagePath);
    if (!fs.existsSync(fullPath)) {
      imageResults.missing.push(imagePath);
    }
  }
  
  return imageResults;
}

// Run the audit
async function run() {
  console.log('Checking image files...');
  const imageResults = checkImageFiles();
  
  console.log(`\nImage check results:`);
  console.log(`- Total images: ${imageResults.allImages.length}`);
  console.log(`- Missing images: ${imageResults.missing.length}`);
  
  if (imageResults.missing.length > 0) {
    console.log('\nMissing image files:');
    imageResults.missing.forEach(img => console.log(`- ${img}`));
  }
  
  // Run browser-based audit
  const auditResults = await auditSite();
  
  console.log('\nAudit Summary:');
  console.log(`- Total routes: ${auditResults.summary.totalRoutes}`);
  console.log(`- Passed routes: ${auditResults.summary.passedRoutes}`);
  console.log(`- Failed routes: ${auditResults.summary.failedRoutes}`);
  
  if (auditResults.summary.failedRoutes > 0) {
    console.log('\nRoutes with issues:');
    auditResults.routes
      .filter(route => route.status === 'failed')
      .forEach(route => {
        console.log(`\n${route.name} (${route.path}):`);
        route.issues.forEach(issue => console.log(`- ${issue}`));
      });
  }
}

run().catch(console.error);