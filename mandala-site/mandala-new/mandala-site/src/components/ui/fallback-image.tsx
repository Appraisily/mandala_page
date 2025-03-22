"use client"

import { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

type FallbackImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc: string;
}

export function FallbackImage({ 
  src, 
  fallbackSrc,
  alt,
  ...props 
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  // If src changes, reset states
  useEffect(() => {
    setImgSrc(src)
    setLoaded(false)
    setError(false)
  }, [src])

  return (
    <>
      {/* Hidden div with background-image as ultimate fallback */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${fallbackSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: error || !loaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 0,
        }}
        aria-hidden={!error && loaded}
      />

      {/* Next.js Image component with error handling */}
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onError={() => {
          setError(true)
          setImgSrc(fallbackSrc)
        }}
        onLoad={() => {
          setLoaded(true)
        }}
        style={{
          ...props.style,
          opacity: loaded && !error ? 1 : 0,
        }}
      />
    </>
  )
}