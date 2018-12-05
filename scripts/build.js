'use strict'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

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

const pathConf = getPathConf()

const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../webpack.config')
const formatWebpackMessages = require('./formatWebpackMessage')

if (pathConf.entry) {
  config.entry = path.resolve(pathConf.entry)
  console.log(`entry: ${path.resolve(pathConf.entry)}`)
}

if (pathConf.output) {
  const [dir, filename] = [ path.dirname(pathConf.output), path.basename(pathConf.output) ]
  config.output = {
    filename: filename,
    path: path.resolve(dir)
  }
  console.log(`output: ${path.resolve(dir)}/${filename}`)
}

// Create the production build and print the deployment instructions.
function build () {
  console.log('Creating an optimized production build...')

  let compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages
      if (err) {
        if (!err.message) {
          return reject(err)
        }
        messages = formatWebpackMessages({
          errors: [err.message],
          warnings: []
        })
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true })
        )
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1
        }
        return reject(new Error(messages.errors.join('\n\n')))
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
            'Most CI servers set it automatically.\n'
          )
        )
        return reject(new Error(messages.warnings.join('\n\n')))
      }

      const resolveArgs = {
        stats,
        warnings: messages.warnings
      }

      return resolve(resolveArgs)
    })
  })
}

build()
  .then(function ({ stats, warnings }) {
    if (warnings.length > 0) {
      process.stderr.write(warnings)
    } else {
      const formatStats = require('./formatStats')
      const targetDirShort = path.dirname(pathConf.output)

      console.log(`\n${formatStats(stats, targetDirShort)}`)
      console.log(
        chalk.green(
          `\nCompilation success (hash: ${stats.hash}),\n` +
          `${stats.endTime - stats.startTime} ms used.\n`
        )
      )
    }
  })
