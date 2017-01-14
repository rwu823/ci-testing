require('shelljs/global')

const { TRAVIS_NODE } = process.env

const cmds = [
  'npm test',
  'npm run lint',
  'npm run build',
]

if (cmds[PARALLEL_NODE]) {
  console.log(cmds[PARALLEL_NODE])
  exec(cmds[PARALLEL_NODE]).code && exit(1)
}