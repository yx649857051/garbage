module.exports = {
    pages: {
        start: 'src/start/main.js',
        home: 'src/home/main.js',

        index: 'src/start/main.js',
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://yale.nat300.top/',
                // target:'http://localhost:9000',
                changeOrigin:true,
                pathRewrite: {
                    '^/api': '/'   //需要rewrite的
                }
            }
        }
    }
};