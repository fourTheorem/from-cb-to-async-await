# from-cb-to-async-await

A repository with some examples to learn how async code works in JavaScript from callbacks to promises to async/await.


## Requirements and dependencies

Requires Node.js v14 or newer.

Install all the necessary dependencies with:

```bash
npm i
```


## Examples

### `01-simple-callback`

Shows the difference between synchronous and asynchronous code in JavaScript. It makes an HTTP request to the
[Rick and Morty API](https://rickandmortyapi.com/) to fetch all the characters of the show.

Run it with:

```bash
node 01-simple-callback.js
```


### `02-sequential-callbacks`

Shows how to organise callbacks to perform sequential asynchronous actions.

Run it with:

```bash
node 02-sequential-callbacks.js
```


### `03-simple-promise`

Shows how Promise work and how to convert callback-based code to Promise.

Run it with:

```bash
node 03-simple-promise.js
```


### `04-sequential-promise`

Shows how to organise Promise to perform sequential asynchronous actions.

Run it with:

```bash
node 04-sequential-promise.js
```


### `05-simple-await`

Shows how to use async/await with Promise.

Run it with:

```bash
node 05-simple-await.js
```


### `06-sequential-await`

Shows how easy it is to do sequential asynchronous operations with async/await.

Run it with:

```bash
node 06-sequential-await.js
```


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/fourtheorem/from-cb-to-async-await/issues).


## License

Licensed under [MIT License](LICENSE). © fourTheorem.