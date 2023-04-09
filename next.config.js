/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["www.google.co.in"]
  }
}

module.exports = nextConfig
