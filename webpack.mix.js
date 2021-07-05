const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/vue-nop.js');

mix.webpackConfig({
  output: {
    library: 'vue-nop',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
});
