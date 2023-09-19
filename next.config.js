/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['https://nike-clone-lac-beta.vercel.app/'],
  },
};

module.exports = nextConfig;
