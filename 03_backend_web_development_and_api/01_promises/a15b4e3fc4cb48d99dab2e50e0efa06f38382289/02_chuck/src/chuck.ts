import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return getChuckCategories();
}

function getJoke(category: string): Promise<string> {
  // Your code goes here
  return getChuckJoke(category).then((joke) => {
    return joke.value;
  });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
