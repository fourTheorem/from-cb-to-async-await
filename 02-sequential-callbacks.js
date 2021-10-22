const request = require('request')

const charachtersBaseUrl = 'https://rickandmortyapi.com/api/character'

request.get(charachtersBaseUrl, function onCharacterLoad (err, response) {
  // always make sure to always handle errors in callbacks
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const responseData = JSON.parse(response.body)
  const firstCharacter = responseData.results[0]
  const firstEpisodeUrl = firstCharacter.episode[0]

  request.get(firstEpisodeUrl, function onEpisodeLoad (err, response) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log(JSON.parse(response.body)) // [3]
  })

  console.log(`Started request ${firstEpisodeUrl}`) // [2]
})

console.log(`Started request ${charachtersBaseUrl}`) // [1]
