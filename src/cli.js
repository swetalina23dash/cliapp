const minimist = require('minimist')
export function cli(argv) {
    const args = minimist(argv.slice(2))
    const cmd = args._[0]

    switch (cmd) {
        case 'ADD':
          require('./add')(args)
          break
          case 'KEYS':
          require('./keys')(args)
          break
          case 'ALLMEMBERS':
          require('./allmembers')(args)
          break
          case 'ITEMS':
          require('./items')(args)
          break
          case 'CLEAR':
          require('./clear')(args)
          break
          case 'KEYEXISTS':
          require('./keyexists')(args)
          break
          case 'VALUEEXISTS':
          require('./valueexists')(args)
          break
          case 'MEMBERS':
          require('./members')(args)
          break
          case 'REMOVE':
          require('./remove')(args)
          break
          case 'REMOVEALL':
          require('./removeall')(args)
          break
        default:
          console.error(`"${cmd}" is not a valid command!`)
          break
      }
   }