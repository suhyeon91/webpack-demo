const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = { //모듈로 배포하겠다.
  entry: './src/index.js', //시작점
  output: { //entry에서 읽은 파일을 어떻게 보낼건지
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') //현재폴더를 기준으로 dist에 만든다
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin()
  ]
};