/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
