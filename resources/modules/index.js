import camelCase from 'lodash/camelCase'
const modulesDir = require.context('./', false, /\.js$/) //extract js files inside modules folder
const modules = {}

modulesDir.keys().forEach(fileName => {
    if (fileName === './index.js') return //reject the index.js file

    const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, '')) //

    modules[moduleName] = modulesDir(fileName).default
})
export default modules
