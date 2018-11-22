#!/usr/bin/env node

const execa = require('execa')
const path = require('path')

function getEntry () {
  let entry = 'src/index.js'
  const argv = process.argv.slice(2)
  argv.every((arg, index) => {
    if (arg === '--entry' && argv[index + 1]) {
      entry = argv[index + 1]
      return false
    }
    return true
  })
  return entry
}

(async () => {
  const { stdout } = await execa.shell(`npx webpack ${path.join(__dirname, `../${getEntry()}`)} --config webpack.config.js`)
  process.stdout.write(`${stdout}\r\n`)
})()
