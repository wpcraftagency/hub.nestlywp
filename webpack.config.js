module.exports = function (config) {
  config.module.rules.push({
    test: /\.(svg|png|ico)$/,
    use: ['file-loader'],
  });
  return config;
};
