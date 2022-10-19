/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: `${process.env.API_HOST}/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
