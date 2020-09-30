module.exports = {
  webpack(config) {

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    });

    config.plugins = config.plugins.filter(
      (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
    )

    return config;
  },
};
