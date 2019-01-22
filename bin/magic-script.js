#!/usr/bin/env node
'use strict'

require('yargs') // eslint-disable-line
  .command('setup', 'Setup the MagicLeap SDK', argv => require('../commands/setup')(argv.argv))
  .command('init <projectName> <packageName> [visibleName]', 'Create a new project', yargs => {
    yargs.positional('projectName', {
      describe: 'Local folder to create project in.',
      type: 'string'
    })
    yargs.positional('packageName', {
      describe: 'The package identifier.',
      type: 'string'
    })
    yargs.positional('visibleName', {
      describe: 'The visible name of the project.',
      type: 'string'
    })
  }, argv => require('../commands/init')(argv))
  .command('build [certsPath]', 'Compile project', yargs => {
    yargs.positional('certsPath', {
      describe: 'Path to signing certificates.',
      type: 'string'
    })
    yargs.option('install', {
      alias: 'i',
      boolean: true,
      default: false
    })
  }, argv => require('../commands/build')(argv))
  .command('run', 'Compile and run project', argv => require('../commands/run')(argv.argv))
  .command('remove', 'Remove project from device', argv => require('../commands/remove')(argv.argv))
  .option('verbose', {
    alias: 'v',
    default: false
  })
  .demandCommand()
  .help()
  .argv
