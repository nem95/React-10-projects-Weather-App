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

    return config;
  },
}
