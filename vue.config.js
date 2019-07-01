module.exports = {
    pwa: {
        name: 'Merge Lightweight Wallet',
        themeColor: '#79331c',
        msTileColor: '#79331c',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black-translucent',
        manifestPath: 'manifest.json'
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                data: `
                @import "@/global.scss";
              `
            }
        }
    },
    chainWebpack: config => {
        config
            .module
            .rules
            .delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'vue-svg-loader'
                }
            ]
        }
    },
    devServer: {
        https: true
    }
}