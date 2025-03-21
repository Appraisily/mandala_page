import { MetadataRoute } from 'next'

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