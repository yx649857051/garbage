module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://yale.nat300.top/',
                // target:'http://wuta.natapp1.cc',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'   //需要rewrite的
                }
            }
        }
    }
};