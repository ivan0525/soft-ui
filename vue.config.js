module.exports = {
  devServer: {
    port: 8888, // 端口
    open: true,
  },
  productionSourceMap: false,
  publicPath: "./",
  outputDir: "./dist",
  runtimeCompiler: true,
  lintOnSave: false,
};
