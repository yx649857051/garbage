module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://yale.nat300.top/',
                target:'http://120.24.88.238:8090/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'   //需要rewrite的
                }
            }
        }
    }
};