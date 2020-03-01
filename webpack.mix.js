const { resolve, join } = require('path')
const fs = require('fs')
const mix = require('laravel-mix')
let modules = resolve(__dirname, './modules/')

mix
    // path
    .setPublicPath('public')
    // scripts
    .js('resources/components/app.js', 'js')
    .js('resources/js/main.js', 'js')
    // styles
    .sass('resources/components/app.scss', 'css')
    .sass('resources/sass/main.scss', 'css')

if (!fs.existsSync(modules)) return

fs.readdirSync(modules).forEach(function (mod) {
    if (mod.indexOf('mix-manifest.json') != -1) return

    var assets = join(modules, mod, 'assets')
    if (!fs.existsSync(assets)) return

    fs.readdirSync(join(assets, 'sass')).forEach(function (asset) {
        if (asset.indexOf('_') != -1) return

        var style = join(assets, 'sass', asset)
        asset = asset.replace('.scss', '.css')

        if (asset != 'app.css') {
            mix.sass(style, 'css/' + asset)
        } else {
            mix.sass(style, 'css/' + mod + '.css')
        }
    })

    fs.readdirSync(join(assets, 'js')).forEach(function (asset) {
        if (asset.indexOf('_') != -1) return

        var script = join(assets, 'js', asset)

        if (asset != 'app.js') {
            mix.js(script, 'js/' + asset)
        } else {
            mix.js(script, 'js/' + mod + '.js')
        }
    })
})

if (mix.inProduction()) {
    mix.version()
}
