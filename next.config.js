/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn-prod.heartfulness.org"],
  },
};

module.exports = nextConfig;