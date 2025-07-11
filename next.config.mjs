/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ use only if you're sure
  },
  images: {
    domains: ["localhost", "e26a446634d5.ngrok-free.app"], // Add any other domains here
  },
};

export default nextConfig;
