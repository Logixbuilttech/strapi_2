// next.config.mjs
/** @type {import('next').NextConfig} */
export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "da78067daf03.ngrok-free.app"],
  },
  webpack: (config, { isServer, webpack }) => {
    // No need to import 'webpack' via `import webpack from 'webpack'`
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        })
      );
    }
    return config;
  },
};
