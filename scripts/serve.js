const { error } = require('@vue/cli-shared-utils')
const path = require('path')
const fs = require('fs')

const vueConfigPath = path.resolve('vue.config.js')

if (!fs.existsSync(vueConfigPath, 'utf-8')) {
  try {
    const config = fs.readFileSync(path.resolve('node_modules/vidget/vue.config.js'), 'utf-8')
    if (config) {
      fs.writeFileSync(vueConfigPath, config)
    }
  } catch (e) {}
}

const Service = require('@vue/cli-service/lib/Service')
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())

const rawArgv = process.argv.slice(2)

const args = require('minimist')(rawArgv, {
  boolean: [
    // build
    'modern',
    'report',
    'report-json',
    'watch',
    // serve
    'open',
    'copy',
    'https',
    // inspect
    'verbose'
  ]
})
const command = args._[0]

service.run(command, args, rawArgv).catch(err => {
  error(err)
  process.exit(1)
})
