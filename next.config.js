/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      use: ['raw-loader'],
      type: 'javascript/auto'
    });
    return config;
  },
};

module.exports = nextConfig;
