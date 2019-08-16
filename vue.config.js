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
                // target:'http://wuta.natapp1.cc',
                changeOrigin:true,
                pathRewrite: {
                    '^/api': '/'   //需要rewrite的
                }
            }
        }
    }
};