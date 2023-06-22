/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env:{
    API_URL: 'https://pure-hamlet-08520-67aeef587ee8.herokuapp.com',
  },
  images: {
    domains: ['pure-hamlet-08520-67aeef587ee8.herokuapp.com'],
  },
}

module.exports = nextConfig
