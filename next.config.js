module.exports = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["react-loading"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
};