module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coinList/1',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['assets.coingecko.com'],
  },
};
