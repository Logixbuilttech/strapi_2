/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  images: {
    domains: [
      "localhost",
      "bdde-2a09-bac5-3b08-1a46-00-29e-2c.ngrok-free.app",
      "bcda-2a09-bac5-3b0a-1a46-00-29e-fe.ngrok-free.app",
      "55f4-2a09-bac1-36a0-28-00-1c5-db.ngrok-free.app",
    ], // Add any other domains here
  },
};

export default nextConfig;
