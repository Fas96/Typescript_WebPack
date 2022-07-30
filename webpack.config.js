// var path = require('path');
//
// module.exports = {
//   mode: "development",
//   entry: path.resolve(__dirname, 'src') + '/typescript/index.ts',
//   output: {
//     path: path.resolve(__dirname, 'public') ,
//     filename: 'bundle.js',
//     publicPath: '/public/'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: 'ts-loader',
//         include: [path.resolve(__dirname,'src')]
//       }
//     ],
//     // loaders: [
//     //   {
//     //     test: /\.js$/,
//     //     include: path.resolve(__dirname, 'src'),
//     //     loader: 'babel-loader',
//     //     query: {
//     //       presets: ['react', 'es2015']
//     //     }
//     //   },
//     //   {
//     //     test: /\.css$/,
//     //     loader: 'style-loader!css-loader'
//     //   }
//     // ]
//   }
// };

const path = require('path')                                        // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {                                      // moduel export (옛날 방식..)
  mode: "none",
  entry: './src/typescript/index.ts',                            // 리액트 파일이 시작하는 곳
  output: {                                           // bundled compiled 파일
    path: path.join(__dirname, 'public'),            //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
    filename: 'index_bundle.js',
    publicPath:  '/public'
  },
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
  },
  module: {
    // javascript 모듈을 생성할 규칙을 지정 (node_module을 제외한.js 파일을 babel-loader로 불러와 모듈을 생성
    rules: [
      {
        test: /\.(js|jsx)$/,                          // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
        exclude: /node_module/,                 // node module 폴더는 babel 컴파일에서 제외
        use:{
          loader: 'babel-loader'				// babel loader가 파이프를 통해 js 코드를 불러옴
        }
      },
      {
        test: /\.ts$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
    }),
  ]
}
