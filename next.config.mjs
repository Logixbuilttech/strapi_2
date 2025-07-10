/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  images: {
    domains: [
      "localhost",
      "35c312c25a2c.ngrok-free.app"
    ], // Add any other domains here
  },
};

export default nextConfig;
