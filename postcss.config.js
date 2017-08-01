// const postcssEasyImport = require('postcss-easy-import');
// const autoprefixer = require('autoprefixer');
// const uncss = require('postcss-uncss');
//
// module.exports = {
//   plugins: [
//     postcssEasyImport({ prefix: '_' }), // keep this first
//     autoprefixer({ /* ...options */ }), // so imports are auto-prefixed too
//     uncss({
//       html: ['dist/index.html'],
//       ignore: [],
//     }),
//   ],
// };

const uncssOptions = {
  html: ['dist/index.html'],
  ignore: [],
  ignoreSheets: ['/static/**/*'],
};

module.exports = ctx => ({
  plugins: {
    'postcss-easy-import': { prefix: '_' },
    autoprefixer: {},
    'postcss-uncss': ctx.env === 'production' ? uncssOptions : false,
  },
});
