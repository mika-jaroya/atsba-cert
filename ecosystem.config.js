module.exports = {
    apps: [
        {
            name: 'Cert',
            port: '8889',
            exec_mode: 'fork',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
