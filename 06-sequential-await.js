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

async function main () {
  try {
    const response = await makeGetRequest(charachtersBaseUrl)
    const responseData = JSON.parse(response.body)
    const firstCharacter = responseData.results[0]
    const firstEpisodeUrl = firstCharacter.episode[0]
    const secondResponse = await makeGetRequest(firstEpisodeUrl)
    console.log(JSON.parse(secondResponse.body))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
