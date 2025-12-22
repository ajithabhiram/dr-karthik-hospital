/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'i.postimg.cc',
      'postimg.cc',
      'via.placeholder.com',
      'i.imgur.com',
      'ruthvikhospitals.com',
      'www.ruthvikhospitals.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  }
}

module.exports = nextConfig
