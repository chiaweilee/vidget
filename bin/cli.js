#!/usr/bin/env node

const execa = require('execa')
const path = require('path')

function getPathConf () {
  let entry = 'src/index.js'
  let output = 'dist/widget.js'
  const argv = process.argv.slice(2)
  argv.every((arg, index) => {
    switch (arg) {
      case '--entry':
        if (argv[index + 1]) {
          entry = argv[index + 1]
          return false
        }
        return true
      case '--ouput':
        if (argv[index + 1]) {
          output = argv[index + 1]
          return false
        }
        return true
      default:
        return true
    }
  })
  return {
    entry,
    output
  }
}

const pathConf = getPathConf();

(async () => {
  const cmd = `npx webpack ${path.resolve(pathConf.entry)} -o ${path.resolve(pathConf.output)} --config webpack.config.js`
  process.stdout.write(`${cmd}\r\n`)
  const { stdout } = await execa.shell(cmd)
  process.stdout.write(`${stdout}\r\n`)
})()
