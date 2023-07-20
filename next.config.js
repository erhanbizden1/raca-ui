/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env:{
    API_URL: 'https://stormy-retreat-84295-2c50adda3169.herokuapp.com/',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
