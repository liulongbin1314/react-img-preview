// webpack 的配置文件
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',
  filename: 'index.html'
})

module.exports = {
  mode: 'development',
  plugins: [htmlPlugin],
  module: {
    // 注意：如果配置的是 babel-loader, 一定要添加 exclude 排除项
    // 今后，我们在定义组件的时候，一般，都会把组件定义为 一个单独的 .jsx 文件
    rules: [
      { test: /\.js|.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      // 只要为 css-loader 通过 ? 追加了 modules 参数，则在使用 import 导入样式的时候，样式表就有了独立作用域
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.ttf|eot|svg|woff|woff2$/, use: 'url-loader' },
      { test: /\.png|gif|jpg|bmp/, use: 'url-loader' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:8]', 'sass-loader'] }
    ]
  },
  resolve: {
    // 想省略什么样的后缀名， 就把 想省略的后缀名，定义到这个数组中
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}
