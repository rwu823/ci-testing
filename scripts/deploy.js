const { TRAVIS_BRANCH } = process.env

console.log({ TRAVIS_BRANCH })

if (TRAVIS_BRANCH !== 'dev') {
  console.log('deploying to aws......')
}