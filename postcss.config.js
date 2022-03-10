module.exports = {
  // Add your installed PostCSS plugins here:
  plugins: [
    require('postcss-import')(),
    require('postcss-simple-vars')({ silent: true }),
    require('autoprefixer')({}),
  ],
};
