import { version, repository } from '../package.json'
import 'shelljs/global'

const { TRAVIS_BRANCH, GH_TOKEN } = process.env
console.log({ TRAVIS_BRANCH })

const repoToken = repository.replace(/(github.com)/, `${GH_TOKEN}@$1`)
const tag = `v${version}`

if (TRAVIS_BRANCH === 'dev') {
  console.log('deploying to aws......')

  exec(`git tag ${tag}`)
  exec(`git push ${repoToken} ${tag}`, {
    silent: true,
  })
}