const nextConfig = {
  transpilePackages: [
    '@mui/material',
    '@mui/system',
    '@mui/icons-material',
    '@babel/runtime' // this is key in your case
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false, // fixes issues with .mjs
      },
    });
    return config;
  },
};

module.exports = nextConfig;
