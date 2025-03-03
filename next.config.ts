import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: true
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true, // 🚨 Enables SVG images
    contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;", // Ensures security
  },
};

export default nextConfig;
