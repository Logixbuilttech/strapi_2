/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  images: {
    domains: ["localhost", "bc90f16ec530.ngrok-free.app"], // Add any other domains here
  },
};

export default nextConfig;
