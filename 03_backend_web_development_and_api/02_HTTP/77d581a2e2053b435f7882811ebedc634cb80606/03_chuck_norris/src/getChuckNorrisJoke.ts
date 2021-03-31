import fetch from "node-fetch"

function getChuckNorrisJoke(category: string): Promise<void> {
  // code the function here

  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((joke) => console.log(joke))
    .catch((error) => console.error(error));


}

// leave line below for tests to work properly
export { getChuckNorrisJoke }
