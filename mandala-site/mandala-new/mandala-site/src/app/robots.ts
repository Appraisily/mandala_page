import { MetadataRoute } from 'next'

// Add dynamic export for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/docs'],
    },
    sitemap: 'https://mandalaourense.com/sitemap.xml',
  }
}