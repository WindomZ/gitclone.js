#!/usr/bin/env node
/**
 * Created by WindomZ on 17-6-1.
 */
'use strict'

const program = require('commander')

const pkg = require('../package.json')

let noArgs = true

program
  .version(pkg.version)
  .description(pkg.description)
  .usage('[options] <repo>')
  .action((repo, options) => {
    noArgs = false

    console.log('repo: %j', repo)
  })

program
  .command('list')
  .alias('ls')
  .action(options => {
    noArgs = false

    console.log('list')
  })

program
  .command('search <keyword>')
  .alias('s')
  .action((keyword, options) => {
    noArgs = false

    console.log('search: %j', keyword)
  })

program
  .command('link <filepath>')
  .alias('l')
  .action((filepath, options) => {
    noArgs = false

    console.log('link: %j', filepath)
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
