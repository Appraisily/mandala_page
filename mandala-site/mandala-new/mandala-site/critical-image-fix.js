const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create necessary directories if they don't exist
function createDirectories() {
  const dirs = [
    'public/images/yoga',
    'public/images/icons',
    'public/images/teachers',
    'public/images/testimonials',
    'public/images/therapies'
  ];

  dirs.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Fix Next.js config
function fixNextConfig() {
  const configPath = path.join(__dirname, 'next.config.js');
  
  const config = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig`;
  
  fs.writeFileSync(configPath, config);
  console.log('Updated next.config.js with proper image configuration');
}

// Update components to handle missing images
function updateImageComponents() {
  // Fix hero-section.tsx to handle missing image
  const heroSectionPath = path.join(__dirname, 'src/components/hero-section.tsx');
  if (fs.existsSync(heroSectionPath)) {
    let content = fs.readFileSync(heroSectionPath, 'utf8');
    
    // Add error handling for hero image
    content = content.replace(
      /<Image[^>]*src="\/images\/new-hero-background.jpg"[^>]*\/>/,
      `<Image
          src="/images/new-hero-background.jpg"
          alt="Meditación y yoga en un ambiente tranquilo y colorido"
          fill
          priority
          className="object-cover object-center"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error('Failed to load hero image');
            target.style.display = 'none';
          }}
        />`
    );
    
    fs.writeFileSync(heroSectionPath, content);
    console.log('Updated hero-section.tsx with error handling');
  }
}

// Create a component to handle image errors globally
function createImageErrorHandler() {
  const dirPath = path.join(__dirname, 'src/components/ui');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const imagePath = path.join(dirPath, 'safe-image.tsx');
  const content = `"use client"

import { useState } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';

type SafeImageProps = Omit<ImageProps, 'onError'> & {
  fallbackSrc?: string;
};

export function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/placeholder.jpg',
  ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setError(true);
        setImgSrc(fallbackSrc);
      }}
      style={{
        ...(props.style || {}),
        ...(error ? { filter: 'grayscale(1)' } : {})
      }}
    />
  );
}
`;
  
  fs.writeFileSync(imagePath, content);
  console.log('Created SafeImage component for error handling');
  
  // Create a placeholder image if it doesn't exist
  const placeholderDir = path.join(__dirname, 'public/images');
  const placeholderPath = path.join(placeholderDir, 'placeholder.jpg');
  
  if (!fs.existsSync(placeholderPath)) {
    // Create a very simple placeholder (just a file with some content)
    // In a real scenario, you would copy an actual image file here
    console.log('Creating a placeholder image file (note: this is just a dummy file)');
    fs.writeFileSync(placeholderPath, 'placeholder');
  }
}

// Main function
function main() {
  console.log('Starting critical image fixes...');
  
  createDirectories();
  fixNextConfig();
  updateImageComponents();
  createImageErrorHandler();
  
  console.log('\nAll critical fixes applied.');
  console.log('\nNext steps:');
  console.log('1. Add actual image files to the public/images directory');
  console.log('2. Update components to use the SafeImage component');
  console.log('3. Run a new build to test the fixes');
}

main();