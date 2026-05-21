/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: '**.shields.io',
        pathname: '/badge/**',
      },
      {
        protocol: 'https',
        hostname: '**.shields.io',
        pathname: '/github/**',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.medium.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
