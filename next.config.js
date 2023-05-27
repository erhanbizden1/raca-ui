/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env:{
    API_URL: 'http://localhost:1337',
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
