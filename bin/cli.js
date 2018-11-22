#!/usr/bin/env node

const execa = require('execa')

;(async () => {
  const { stdout } = await execa.shell('npm run build')
  process.stdout.write(`${stdout}\r\n`)
})()
