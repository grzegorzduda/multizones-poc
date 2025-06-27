import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/foo/:path*',
        destination: 'http://localhost:3000/foo/:path*',
      },
      {
        source: '/bar/:path*',
        destination: 'http://localhost:3001/bar/:path*',
      },
    ];
  },
  output: 'standalone',
};

export default nextConfig;
