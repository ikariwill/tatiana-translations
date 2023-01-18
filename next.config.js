/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    HYGRAPH_READY_ONLY_ENDPOINT: process.env.HYGRAPH_READY_ONLY_ENDPOINT,
  },
};

module.exports = nextConfig;
