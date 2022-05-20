const nextConfig = {
  images: {
    domains: ['courses-top.ru', 'courses-top.ruhttp'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
