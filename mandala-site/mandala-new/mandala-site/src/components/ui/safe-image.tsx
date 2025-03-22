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
