const request = require('request')

// sync operation
const charachtersBaseUrl = 'https://rickandmortyapi.com/api/character'

// async operation, "schedules" the http call in the background and it will call
// the callback function onCharacterLoad when it's done (and there is nothing else to do)
request.get(charachtersBaseUrl, function onCharacterLoad (err, response) {
  console.log(err, response.body)
})

// more sync stuff
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)
console.log(`Started request ${charachtersBaseUrl}`)

// only here it will check if something async as completed
// and it will invoke the callback above
