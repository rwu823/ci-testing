const { version, repository } = require('../package.json')
require('shelljs/global')

const { TRAVIS_BRANCH, GH_TOKEN, TRAVIS_MATRIX, TRAVIS_PULL_REQUEST_BRANCH } = process.env
const repoToken = repository.replace(/(github.com)/, `${GH_TOKEN}@$1`)
const tag = `v${version}`
console.log({GH_TOKEN, repoToken})
console.log({ TRAVIS_BRANCH, TRAVIS_MATRIX, TRAVIS_PULL_REQUEST_BRANCH })

if (TRAVIS_BRANCH === 'dev' && TRAVIS_MATRIX === 'build') {
  exec(`git config --global user.email "auto_deploy@circleci.com"`)
  exec(`git config --global user.name "CircleCI"`)

  exec(`git tag ${tag}`)
  exec(`git push ${repoToken} ${tag}`, {
    // silent: true,
  })
}

if (TRAVIS_MATRIX === 'test') {
  exec('curl -s https://codecov.io/bash | bash')
}