/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig
