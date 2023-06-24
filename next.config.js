/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env:{
    API_URL: 'gentle-mesa-18522-53cecce22509.herokuapp.com',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
