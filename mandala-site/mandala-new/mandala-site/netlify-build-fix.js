const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const projectRoot = __dirname;
const srcDir = path.join(projectRoot, 'src');
const publicDir = path.join(projectRoot, 'public');

console.log('Starting Netlify build fix...');

// 1. Check for proper module exports in all pages
function checkPageModules() {
  console.log('\nChecking page modules...');
  
  const pageFiles = fs.readdirSync(path.join(srcDir, 'app', 'yoga'));
  
  pageFiles.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const filePath = path.join(srcDir, 'app', 'yoga', file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if the file contains export default
      if (!content.includes('export default') && !content.includes('export const')) {
        console.log(`Warning: ${filePath} missing export default`);
        
        // Fix the module if it's the main page.tsx
        if (file === 'page.tsx') {
          const fixed = `import React from 'react';
import YogaStylesSection from '@/components/yoga-styles-section';

export const yogaStyles = ${content.trim()};

export default function YogaPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Estilos de Yoga</h1>
      <YogaStylesSection yogaStyles={yogaStyles} />
    </div>
  );
}`;
          
          fs.writeFileSync(filePath, fixed);
          console.log(`Fixed module export in ${filePath}`);
        }
      }
    }
  });
}

// 2. Verify image assets
function verifyImageAssets() {
  console.log('\nVerifying image assets...');
  
  const requiredDirs = [
    path.join(publicDir, 'images'),
    path.join(publicDir, 'images', 'yoga'),
    path.join(publicDir, 'images', 'icons')
  ];
  
  // Create directories if they don't exist
  requiredDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
  
  // Check critical images
  const criticalImages = [
    { path: 'images/new-hero-background.jpg', placeholder: 'hero-background.jpg' },
    { path: 'images/yoga/hatha-yoga.png', placeholder: 'yoga-1.png' },
    { path: 'images/yoga/daoyin-yoga.png', placeholder: 'yoga-2.png' },
    { path: 'images/yoga/yoga-nidra.png', placeholder: 'yoga-3.png' },
    { path: 'images/icons/hatha-icon.svg', placeholder: 'icon-1.svg' },
    { path: 'images/icons/daoyin-icon.svg', placeholder: 'icon-2.svg' },
    { path: 'images/icons/nidra-icon.svg', placeholder: 'icon-3.svg' }
  ];
  
  criticalImages.forEach(img => {
    const fullPath = path.join(publicDir, img.path);
    if (!fs.existsSync(fullPath)) {
      console.log(`Missing critical image: ${img.path}`);
    }
  });
}

// 3. Check Next.js config
function checkNextConfig() {
  console.log('\nChecking Next.js config...');
  
  const configPath = path.join(projectRoot, 'next.config.js');
  if (!fs.existsSync(configPath)) {
    console.log('Creating next.config.js with image optimization disabled');
    
    const config = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig`;
    
    fs.writeFileSync(configPath, config);
    console.log('Created next.config.js');
  } else {
    const content = fs.readFileSync(configPath, 'utf8');
    if (!content.includes('unoptimized')) {
      console.log('Adding image optimization settings to next.config.js');
      
      // Simple replacement - in a real scenario, this would need to be more robust
      const updated = content.replace(
        'const nextConfig = {', 
        'const nextConfig = {\n  output: \'export\',\n  images: {\n    unoptimized: true,\n  },'
      );
      
      fs.writeFileSync(configPath, updated);
      console.log('Updated next.config.js');
    }
  }
}

// 4. Check Netlify config
function checkNetlifyConfig() {
  console.log('\nChecking Netlify config...');
  
  const netlifyConfigPath = path.join(projectRoot, 'netlify.toml');
  if (!fs.existsSync(netlifyConfigPath)) {
    console.log('Creating netlify.toml');
    
    const config = `[build]
  publish = ".next"
  command = "npm run build"

[[plugins]]
  package = "@netlify/plugin-nextjs"`;
    
    fs.writeFileSync(netlifyConfigPath, config);
    console.log('Created netlify.toml');
  } else {
    const content = fs.readFileSync(netlifyConfigPath, 'utf8');
    if (!content.includes('publish =')) {
      console.log('Adding publish directory to netlify.toml');
      
      // Simple addition - in a real scenario, this would need to be more robust
      const updated = content + '\npublish = ".next"';
      
      fs.writeFileSync(netlifyConfigPath, updated);
      console.log('Updated netlify.toml');
    }
  }
}

// Run fixes in sequence
checkPageModules();
verifyImageAssets();
checkNextConfig();
checkNetlifyConfig();

console.log('\nAll fixes applied. Try building the project again with:');
console.log('npm run build');

// Attempt a build to see if our fixes worked
try {
  console.log('\nAttempting build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('\nBuild successful!');
} catch (error) {
  console.error('\nBuild failed. Check the error messages above.');
}