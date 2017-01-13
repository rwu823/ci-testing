require('shelljs/global')

const { PARALLEL_NODE } = process.env

const cmds = [
  'npm test && curl -s https://codecov.io/bash | bash',
  'npm run lint',
  'npm run build',
]

if (cmds[PARALLEL_NODE]) {
  console.log(cmds[PARALLEL_NODE])
  exec(cmds[PARALLEL_NODE]).code && exit(1)
}