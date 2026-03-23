import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n.ts')

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.scw.cloud' },         // Scaleway S3
      { protocol: 'https', hostname: '**.amazonaws.com' },      // AWS S3
      { protocol: 'https', hostname: 'scontent.cdninstagram.com' }, // Instagram CDN
      { protocol: 'https', hostname: 'cdninstagram.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },  // Photos préchargées
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Support Payload CMS dans Next.js App Router
    serverComponentsExternalPackages: ['payload', 'sharp'],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(self)',
        },
      ],
    },
  ],
}

export default withNextIntl(config)
