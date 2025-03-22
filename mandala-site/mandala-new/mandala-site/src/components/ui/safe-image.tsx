"use client"

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
  onError,
  ...props 
}: SafeImageProps & { onError?: () => void }) {
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
    
    // Try alternative paths
    if (srcStr.startsWith('/images/')) {
      // Try without /images/ prefix
      return srcStr.replace('/images/', '/');
    }
    
    // Default fallback
    return '/images/placeholder.jpg';
  }, [src, fallbackSrc]);

  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);
  const [fallbackAttempts, setFallbackAttempts] = useState(0);

  // List of fallbacks to try
  const fallbackOptions = useMemo(() => {
    const options = [
      determineFallback,
      '/images/new-hero-background.jpg',
      '/hero.webp',
      '/images/yoga-meditation.jpg',
      '/yoga-meditation.jpg'
    ];
    return options;
  }, [determineFallback]);

  const handleError = () => {
    if (fallbackAttempts < fallbackOptions.length) {
      // Try next fallback
      setImgSrc(fallbackOptions[fallbackAttempts]);
      setFallbackAttempts(fallbackAttempts + 1);
    } else {
      setError(true);
      // If all fallbacks fail, use a solid background color as last resort
      if (onError) onError();
    }
  };

  // If all fallbacks fail, render a colored div as last resort
  if (fallbackAttempts >= fallbackOptions.length && error) {
    return (
      <div 
        style={{
          backgroundColor: '#2A3B4C',
          width: '100%',
          height: '100%',
          ...(props.style || {})
        }}
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      style={{
        ...(props.style || {}),
        ...(error ? { filter: 'grayscale(0.5)' } : {})
      }}
    />
  );
}
