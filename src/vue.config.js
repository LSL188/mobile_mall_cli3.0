module.exports = {
    configureWebpack: {
        resolves: {
            alias: {
                // webpack默认@指向src
                'assets': '@/assets', //可以直接用@/assets，不用src/assets
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}