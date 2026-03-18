import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nexdesk',
  assetPrefix: '/nexdesk/',
};

export default nextConfig;
