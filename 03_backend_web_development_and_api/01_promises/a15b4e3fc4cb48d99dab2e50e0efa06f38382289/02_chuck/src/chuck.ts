import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return new Promise((resolve) => {
    getChuckCategories().then(() => {
      resolve([getChuckCategories()]);
    });
  });
}

function getJoke(category: string): Promise<string> {
  // Your code goes here

  return new Promise((resolve) => {
    resolve(getJoke(category));
  });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
