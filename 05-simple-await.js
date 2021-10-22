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

// we can use await only inside async functions
async function main () {
  // with async await we can handle errors using try/catch
  try {
    const requestPromise = makeGetRequest(charachtersBaseUrl)
    const response = await requestPromise // the code does not continue until requestPromise is settled
    // console.log(requestPromise) // if we print this, is not "pending" this time, because await made sure it completed before we go to the next line
    console.log(response.body)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
