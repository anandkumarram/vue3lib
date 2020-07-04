module.exports = {
    css: { extract: false },
    chainWebpack: config => config.resolve.symlinks(false)
}