var nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: './index.js',
    output:  {
      path: __dirname,
      filename: 'server.js'
    },
    target: 'node',
    externals: nodeExternals()
  },
  {
    entry: './src/spapp/index.jsx',
    output: {
      path: __dirname + '/static',
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.jsx$/,
              loader: require.resolve('babel-loader'),
              options: {
                compact: true,
                presets: ['react']
              }
            },
            {
              test: /\.css$/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
              ]
            }
          ]
        }
      ]
    }
  }
]
