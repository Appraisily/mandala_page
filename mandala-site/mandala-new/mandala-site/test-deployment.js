const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');
const { promisify } = require('util');

// Routes to test
const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/yoga', name: 'Yoga' },
  { path: '/yoga/hatha-yoga', name: 'Hatha Yoga' },
  { path: '/yoga/daoyin-yoga', name: 'Daoyin Yoga' },
  { path: '/yoga/nidra-yoga-meditacion', name: 'Yoga Nidra & Meditación' },
  { path: '/terapias', name: 'Terapias' },
  { path: '/horarios-precios', name: 'Horarios y Precios' },
  { path: '/contacto', name: 'Contacto' },
  { path: '/noticias', name: 'Noticias' }
];

// Component checks
const componentChecks = [
  {
    name: 'HeroSection',
    selector: '.relative.overflow-hidden.bg-gradient-to-r',
    routes: ['/']
  },
  {
    name: 'YogaStylesSection',
    selector: '.py-20.bg-gradient-to-b.from-white',
    routes: ['/', '/yoga']
  },
  {
    name: 'TestimonialsSection',
    selector: '.bg-gradient-to-b.from-brand-beige',
    routes: ['/']
  },
  {
    name: 'TherapiesSection',
    selector: '.py-24.bg-gradient-to-r',
    routes: ['/', '/terapias']
  },
  {
    name: 'SchedulePreview',
    selector: '.bg-white.rounded-xl.shadow-md',
    routes: ['/horarios-precios']
  },
  {
    name: 'ContactForm',
    selector: 'form[action="/api/contact"]',
    routes: ['/contacto']
  }
];

// Build the project
async function buildProject() {
  console.log('Building project...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Build completed successfully');
    return true;
  } catch (error) {
    console.error('Build failed:', error.message);
    return false;
  }
}

// Deploy to Netlify (mock for local testing)
async function startLocalServer() {
  console.log('Starting local server...');
  
  // Use Next.js start script
  const server = execSync('npm start', { stdio: 'pipe' });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return server;
}

// Test a specific route
async function testRoute(route) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${route.path}`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        // Check for 404 or error page
        const is404 = data.includes('404') || data.includes('not found');
        
        // Check for expected components
        const componentResults = componentChecks
          .filter(check => check.routes.includes(route.path))
          .map(check => {
            const hasComponent = data.includes(check.selector);
            return {
              component: check.name,
              present: hasComponent
            };
          });
        
        resolve({
          route: route.path,
          name: route.name,
          status: res.statusCode,
          isError: is404,
          components: componentResults
        });
      });
    });
    
    req.on('error', (error) => {
      resolve({
        route: route.path,
        name: route.name,
        status: 0,
        isError: true,
        error: error.message
      });
    });
    
    req.end();
  });
}

// Main function
async function main() {
  console.log('Starting deployment test...');
  
  // 1. Build the project
  const buildSuccess = await buildProject();
  if (!buildSuccess) {
    console.error('Aborting test due to build failure');
    process.exit(1);
  }
  
  // 2. Start local server (pretending it's Netlify)
  const server = await startLocalServer();
  
  try {
    // 3. Test all routes
    console.log('\nTesting routes...');
    const results = [];
    
    for (const route of routes) {
      console.log(`Testing ${route.name} (${route.path})...`);
      const result = await testRoute(route);
      results.push(result);
      
      if (result.isError) {
        console.log(`❌ ${route.name}: Failed (Status ${result.status})`);
      } else {
        console.log(`✅ ${route.name}: Success (Status ${result.status})`);
      }
    }
    
    // 4. Summarize results
    console.log('\n--- DEPLOYMENT TEST SUMMARY ---');
    
    const successCount = results.filter(r => !r.isError).length;
    const errorCount = results.filter(r => r.isError).length;
    
    console.log(`Total routes tested: ${results.length}`);
    console.log(`Successful routes: ${successCount}`);
    console.log(`Failed routes: ${errorCount}`);
    
    if (errorCount > 0) {
      console.log('\nFailed routes:');
      results
        .filter(r => r.isError)
        .forEach(r => {
          console.log(`- ${r.name} (${r.route}): Status ${r.status}`);
        });
    }
    
    // 5. Component availability
    console.log('\nComponent availability:');
    
    const componentResults = results
      .flatMap(r => r.components || [])
      .reduce((acc, cur) => {
        if (!acc[cur.component]) {
          acc[cur.component] = { present: 0, missing: 0 };
        }
        
        if (cur.present) {
          acc[cur.component].present++;
        } else {
          acc[cur.component].missing++;
        }
        
        return acc;
      }, {});
    
    Object.entries(componentResults).forEach(([component, stats]) => {
      if (stats.missing > 0) {
        console.log(`❌ ${component}: Missing in ${stats.missing}/${stats.present + stats.missing} routes`);
      } else {
        console.log(`✅ ${component}: Present in all routes`);
      }
    });
    
    // 6. Write results to file
    const reportsDir = path.join(__dirname, 'deployment-reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const reportPath = path.join(reportsDir, `deployment-test-${new Date().toISOString().replace(/:/g, '-')}.json`);
    fs.writeFileSync(reportPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: {
        totalRoutes: results.length,
        successfulRoutes: successCount,
        failedRoutes: errorCount
      },
      routes: results,
      components: componentResults
    }, null, 2));
    
    console.log(`\nDetailed report saved to: ${reportPath}`);
    
  } finally {
    // Cleanup
    try {
      if (server) server.kill();
    } catch (error) {
      console.log('Error stopping server:', error);
    }
  }
}

// Run the test
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  buildProject,
  testRoute,
  routes,
  componentChecks
};