import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // --- ADD THIS 'images' BLOCK ---
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // --- END OF BLOCK ---

  // You might have other settings here, like reactStrictMode: true
  // Just add the 'images' block alongside them.
};

export default nextConfig;
