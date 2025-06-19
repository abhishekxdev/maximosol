/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Disable font optimization to prevent build errors
  optimizeFonts: false,
  // Disable static optimization for problematic pages
  trailingSlash: true,
  // Ensure proper static export
  distDir: 'out',
};

module.exports = nextConfig;