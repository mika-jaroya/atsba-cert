module.exports = {
    apps: [
        {
            name: 'Cert',
            port: '9001',
            exec_mode: 'fork',
            instances: '1',
            script: './.output/server/index.mjs'
        }
    ]
}
