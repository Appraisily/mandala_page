#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Mandala Site Verification Script');
console.log('================================');

// Step 1: Verify the build works
console.log('\n1. Verifying build...');
try {
  console.log('Running npm run build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Check for critical files
console.log('\n2. Checking for critical files...');
const criticalFiles = [
  '.next/static',
  'public/images/new-hero-background.jpg',
  'public/images/yoga/hatha-yoga.png',
  'public/images/yoga/daoyin-yoga.png',
  'public/images/yoga/yoga-nidra.png',
  'public/images/icons/hatha-icon.svg',
  'public/images/icons/daoyin-icon.svg',
  'public/images/icons/nidra-icon.svg',
  'netlify.toml',
  'next.config.js'
];

let allFilesExist = true;
criticalFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  if (exists) {
    console.log(`✅ Found: ${file}`);
  } else {
    console.log(`❌ Missing: ${file}`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n⚠️ Warning: Some critical files are missing!');
} else {
  console.log('\n✅ All critical files are present.');
}

// Step 3: Verify component fixes
console.log('\n3. Verifying component fixes...');
const componentsToCheck = [
  { path: 'src/components/yoga-styles-section.tsx', pattern: 'SafeImage' },
  { path: 'src/components/hero-section.tsx', pattern: 'SafeImage' },
  { path: 'src/components/ui/safe-image.tsx', pattern: 'export function SafeImage' },
  { path: 'src/lib/image-mapping.json', pattern: 'fallbacks' }
];

let allComponentsFixed = true;
componentsToCheck.forEach(component => {
  const filePath = path.join(__dirname, component.path);
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const patternFound = content.includes(component.pattern);
    
    if (patternFound) {
      console.log(`✅ ${component.path}: Fixed (contains "${component.pattern}")`);
    } else {
      console.log(`❌ ${component.path}: Not fixed (missing "${component.pattern}")`);
      allComponentsFixed = false;
    }
  } else {
    console.log(`❌ ${component.path}: File not found`);
    allComponentsFixed = false;
  }
});

if (!allComponentsFixed) {
  console.log('\n⚠️ Warning: Some component fixes are missing!');
} else {
  console.log('\n✅ All component fixes are in place.');
}

// Step 4: Generate deployment summary
console.log('\n4. Generating deployment summary...');

try {
  const summary = {
    timestamp: new Date().toISOString(),
    buildStatus: true,
    criticalFilesStatus: allFilesExist,
    componentFixesStatus: allComponentsFixed,
    readyForDeployment: allFilesExist && allComponentsFixed
  };
  
  const summaryPath = path.join(__dirname, 'deployment-status.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  
  console.log(`✅ Deployment summary saved to ${summaryPath}`);
} catch (error) {
  console.error('❌ Failed to generate deployment summary:', error.message);
}

// Final verdict
console.log('\n================================');
if (allFilesExist && allComponentsFixed) {
  console.log('✅ VERIFICATION PASSED: Site is ready for deployment to Netlify!');
  console.log('\nNext steps:');
  console.log('1. Commit all changes');
  console.log('2. Push to the repository');
  console.log('3. Deploy to Netlify');
  console.log('4. Verify all routes on the deployed site');
} else {
  console.log('⚠️ VERIFICATION WARNING: Some issues need attention before deployment.');
  console.log('Review the warnings above and fix the issues before deploying.');
}
console.log('================================');