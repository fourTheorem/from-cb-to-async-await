const request = require('request')

const charachtersBaseUrl = 'https://rickandmortyapi.com/api/character'

function makeGetRequest (url) {
  return new Promise((resolve, reject) => {
    request.get(url, function onComplete (err, response) {
      if (err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}

const requestPromise = makeGetRequest(charachtersBaseUrl)
console.log(`Started request ${charachtersBaseUrl}`)

requestPromise
  .then(function onCharacters (response) {
    const responseData = JSON.parse(response.body)
    const firstCharacter = responseData.results[0]
    const firstEpisodeUrl = firstCharacter.episode[0]
    const secondRequestPromise = makeGetRequest(firstEpisodeUrl)

    // the then block can return a new promise to create a chain
    // of async operations
    return secondRequestPromise
  })
  // you can have a sequence of then blocks to handle the next async step
  .then(function onEpisode (response) {
    console.log(JSON.parse(response.body)) // [2]
  })
  // catch will capture any asynchronous error in every promise of the chain
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

console.log(requestPromise) // [1] this will still be pending
