const request = require('request')

const charachtersBaseUrl = 'https://rickandmortyapi.com/api/character'

// this is how you convert a callback based api like request to using promises explicitly
// in real life, you would probably use a library that already support promises like fetch
function makeGetRequest (url) {
  return new Promise((resolve, reject) => { // <- for reference this is called the Revealing constructor pattern
    // do async stuff here and call `resolve` when it's completed or `reject` when it fails
    request.get(url, function onComplete (err, response) {
      if (err) {
        // it's an error, we need to reject the promise
        reject(err)
      } else {
        // we have a result, we need to resolve the promise
        resolve(response)
      }
    })
  })
}

// when we call makeRequest we get back a Promise object that represent
// the asyncrhonous operation
const requestPromise = makeGetRequest(charachtersBaseUrl)
console.log(`Started request ${charachtersBaseUrl}`)

requestPromise
  // defines a "callback" that will be invoked when the promise completes
  .then((response) => {
    console.log(response.body) // [2]
  })
  // defines a "callback" that will be invoked in case of error
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

console.log(requestPromise) // [1] this will still be pending
