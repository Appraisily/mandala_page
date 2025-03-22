const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Base paths
const repoRoot = path.resolve(__dirname, '../../..');
const projectRoot = __dirname;
const publicImagesDir = path.join(projectRoot, 'public/images');

// Create directories if they don't exist
function createDirectories() {
  const dirs = [
    'public/images/yoga',
    'public/images/icons',
    'public/images/teachers',
    'public/images/therapies',
    'public/images/fallback'
  ];

  dirs.forEach(dir => {
    const fullPath = path.join(projectRoot, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Copy images from repo root to correct locations
function copyImagesFromRepo() {
  const imagesToCopy = [
    // Main hero image
    { 
      src: path.join(repoRoot, 'hero.webp'),
      dest: path.join(publicImagesDir, 'new-hero-background.jpg'),
      fallbackDest: path.join(publicImagesDir, 'fallback/hero.jpg')
    },
    // Yoga style images
    {
      src: path.join(repoRoot, 'appraisily.com_image_for_website_to_ilustrate_section_Hatha_Yog_aedcd08c-139f-452c-9caa-39ee6dd4e961.png'),
      dest: path.join(publicImagesDir, 'yoga/hatha-yoga.png'),
      fallbackDest: path.join(publicImagesDir, 'fallback/hatha-yoga.png')
    },
    {
      src: path.join(repoRoot, 'appraisily.com_image_for_website_to_ilustrate_section_Daoyin_Yo_52ef161b-ef9f-4af1-a6aa-8e358ba11651.png'),
      dest: path.join(publicImagesDir, 'yoga/daoyin-yoga.png'),
      fallbackDest: path.join(publicImagesDir, 'fallback/daoyin-yoga.png')
    },
    {
      src: path.join(repoRoot, 'appraisily.com_image_for_website_to_ilustrate_section_Yoga_Nidr_d609463d-e60e-496d-a011-1ed9b9b4fd7f.png'),
      dest: path.join(publicImagesDir, 'yoga/yoga-nidra.png'),
      fallbackDest: path.join(publicImagesDir, 'fallback/yoga-nidra.png')
    }
  ];

  let copied = 0;
  let skipped = 0;

  imagesToCopy.forEach(item => {
    try {
      if (fs.existsSync(item.src)) {
        console.log(`Copying ${path.basename(item.src)} to ${item.dest}`);
        fs.copyFileSync(item.src, item.dest);
        
        // Also copy to fallback location
        console.log(`Creating fallback at ${item.fallbackDest}`);
        fs.copyFileSync(item.src, item.fallbackDest);
        
        copied++;
      } else {
        console.log(`Source file not found: ${item.src}`);
        skipped++;
      }
    } catch (error) {
      console.error(`Error copying ${item.src}:`, error.message);
      skipped++;
    }
  });

  console.log(`\nCopied ${copied} images, skipped ${skipped} images.`);
}

// Create generic placeholder images for common categories
function createPlaceholders() {
  const placeholders = [
    { path: path.join(publicImagesDir, 'placeholder.jpg'), label: 'Image Placeholder' },
    { path: path.join(publicImagesDir, 'fallback/yoga.jpg'), label: 'Yoga' },
    { path: path.join(publicImagesDir, 'fallback/therapy.jpg'), label: 'Therapy' },
    { path: path.join(publicImagesDir, 'fallback/teacher.jpg'), label: 'Teacher' },
    { path: path.join(publicImagesDir, 'fallback/testimonial.jpg'), label: 'Testimonial' }
  ];

  console.log('\nCreating placeholder images...');
  
  // Create generic placeholders (in a real scenario, you would create or download actual images)
  placeholders.forEach(placeholder => {
    if (!fs.existsSync(placeholder.path)) {
      console.log(`Creating placeholder: ${placeholder.path}`);
      
      // For now, just create dummy files - in a real scenario, you would create actual images
      fs.writeFileSync(placeholder.path, `This is a placeholder for: ${placeholder.label}`);
    }
  });
}

// Create an image mapping configuration
function createImageMapping() {
  const mapping = {
    // Map missing image paths to fallback images
    fallbacks: {
      '/images/new-hero-background.jpg': '/images/fallback/hero.jpg',
      '/images/hatha-yoga.jpg': '/images/fallback/yoga.jpg',
      '/images/daoyin-yoga.jpg': '/images/fallback/yoga.jpg',
      '/images/nidra-yoga.jpg': '/images/fallback/yoga.jpg',
      '/images/yin-yoga.jpg': '/images/fallback/yoga.jpg',
      '/images/vinyasa-yoga.jpg': '/images/fallback/yoga.jpg',
      '/images/teacher-': '/images/fallback/teacher.jpg',
      '/images/testimonial-': '/images/fallback/testimonial.jpg',
      '/images/therapy-': '/images/fallback/therapy.jpg'
    },
    // Group similar missing images
    categories: {
      'yoga': [
        '/images/hatha-yoga.jpg',
        '/images/daoyin-yoga.jpg',
        '/images/nidra-yoga.jpg',
        '/images/yin-yoga.jpg',
        '/images/vinyasa-yoga.jpg',
        '/images/restorative-yoga.jpg',
        '/images/beginner-yoga.jpg',
        '/images/prenatal-yoga.jpg',
        '/images/kids-yoga.jpg'
      ],
      'teachers': [
        '/images/teacher-1.jpg',
        '/images/teacher-2.jpg',
        '/images/teacher-3.jpg',
        '/images/teacher-4.jpg',
        '/images/teacher-5.jpg',
        '/images/teacher-luz.jpg',
        '/images/teacher-yoli.jpg',
        '/images/teacher-andrea.jpg',
        '/images/teacher-marcos.jpg',
        '/images/teacher-carlos.jpg',
        '/images/teacher-elena.jpg',
        '/images/teacher-ana.jpg',
        '/images/teacher-laura.jpg'
      ],
      'therapies': [
        '/images/therapy.jpg',
        '/images/therapy-room.jpg',
        '/images/holistic-therapies.jpg',
        '/images/therapy-sessions.jpg'
      ]
    }
  };

  // Write the mapping to a JSON file
  const mappingPath = path.join(projectRoot, 'src/lib/image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  
  console.log(`\nCreated image mapping at ${mappingPath}`);
}

// Create reusable safe image component
function createSafeImageComponent() {
  const componentPath = path.join(projectRoot, 'src/components/ui/safe-image.tsx');
  const content = `"use client"

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import imageMappings from '@/lib/image-mapping.json';

type SafeImageProps = Omit<ImageProps, 'onError'> & {
  fallbackSrc?: string;
};

export function SafeImage({ 
  src, 
  alt, 
  fallbackSrc,
  ...props 
}: SafeImageProps) {
  // Find a fallback based on the src path
  const determineFallback = useMemo(() => {
    if (fallbackSrc) return fallbackSrc;
    
    const srcStr = String(src);
    
    // Check direct mappings
    const fallbacks = imageMappings.fallbacks as Record<string, string>;
    for (const [key, value] of Object.entries(fallbacks)) {
      if (srcStr === key) return value;
      if (srcStr.includes(key)) return value;
    }
    
    // Default fallback
    return '/images/placeholder.jpg';
  }, [src, fallbackSrc]);

  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setError(true);
        setImgSrc(determineFallback);
      }}
      style={{
        ...(props.style || {}),
        ...(error ? { filter: 'grayscale(0.5)' } : {})
      }}
    />
  );
}
`;
  
  fs.writeFileSync(componentPath, content);
  console.log(`\nCreated SafeImage component at ${componentPath}`);
}

// Update components to use SafeImage
function updateComponents() {
  const componentsToUpdate = [
    {
      path: path.join(projectRoot, 'src/components/hero-section.tsx'),
      find: /<Image\s+src="\/images\/new-hero-background\.jpg"[^>]*\/>/,
      replace: `<SafeImage
          src="/images/new-hero-background.jpg"
          alt="Meditación y yoga en un ambiente tranquilo y colorido"
          fill
          priority
          className="object-cover object-center"
        />`
    },
    {
      path: path.join(projectRoot, 'src/components/yoga-styles-section.tsx'),
      find: /<Image\s+src={style\.imageSrc[^}]*}\s+alt={[^}]*}\s+fill\s+className="[^"]*"[^>]*\/>/,
      replace: `<SafeImage
                  src={style.imageSrc || style.image || ''}
                  alt={style.title}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />`
    }
  ];

  componentsToUpdate.forEach(component => {
    if (fs.existsSync(component.path)) {
      console.log(`Updating component: ${path.basename(component.path)}`);
      
      let content = fs.readFileSync(component.path, 'utf8');
      
      // Add import for SafeImage
      if (!content.includes('import { SafeImage }')) {
        content = content.replace(
          /import (.*) from ["']next\/image["']/,
          'import Image from "next/image"\nimport { SafeImage } from "@/components/ui/safe-image"'
        );
      }
      
      // Replace Image with SafeImage
      content = content.replace(component.find, component.replace);
      
      fs.writeFileSync(component.path, content);
    } else {
      console.log(`Component not found: ${component.path}`);
    }
  });
}

// Main function
function main() {
  console.log('Starting image preparation...');
  
  createDirectories();
  copyImagesFromRepo();
  createPlaceholders();
  createImageMapping();
  createSafeImageComponent();
  updateComponents();
  
  console.log('\nImage preparation complete!');
  console.log('\nNext steps:');
  console.log('1. Run `npm run build` to test the site');
  console.log('2. Deploy the site to Netlify');
  console.log('3. Test all routes on the deployed site');
}

main();