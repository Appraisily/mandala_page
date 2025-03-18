/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'mandalaourense.com',
      },
    ],
  },
  eslint: {
    // Disabling for development speed, enable for production
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig