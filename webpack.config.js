var nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: './src/index.js',
    output:  {
      path: __dirname,
      filename: 'server.js'
    },
    target: 'node',
    externals: nodeExternals()
  },
  {
    entry: './src/init.js',
    output:  {
      path: __dirname,
      filename: 'initdb.js'
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
                plugins: ["transform-class-properties"],
                compact: true,
                presets: ['react']
              }
            },
            {
              test: /\.less$/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'less-loader' }
              ]
            }
          ]
        }
      ]
    }
  }
]
