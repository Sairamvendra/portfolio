import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // dev-only: lets phones on the LAN load dev chunks/HMR
  allowedDevOrigins: ['192.168.29.179'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
