import type { NextConfig } from "next";

const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, "src/sass")],
    prependData: `@import "main.sass"`,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
