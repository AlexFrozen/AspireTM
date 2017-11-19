var nodeExternals = require('webpack-node-externals')
var webpack = require('webpack')

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: __dirname,
      filename: 'server.js'
    },
    target: 'node',
    externals: nodeExternals()
  },
  {
    entry: './src/init.js',
    output: {
      path: __dirname,
      filename: 'initdb.js'
    },
    target: 'node',
    externals: nodeExternals()
  },
  {
    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: false
        }
      })
    ],
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
                plugins: [
                  "transform-class-properties",
                  "transform-react-remove-prop-types"
                ],
                compact: true,
                presets: ['env', 'react']
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
