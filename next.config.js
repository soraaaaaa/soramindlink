const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");

module.exports = withCSS(
  withImages({
    webpack(config, options) {
      config.plugins.push(new CKEditorWebpackPlugin({ language: "ko" }));
      console.log(config.module.rules);
      return config;
    }
  })
);
