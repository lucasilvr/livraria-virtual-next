/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'a-static.mlcdn.com.br' },
      { hostname: 'm.media-amazon.com' },
      { hostname: 'harpercollins.com.br' },
      { hostname: 'upload.wikimedia.org' },
    ],
  },
};

module.exports = nextConfig;