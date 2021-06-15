import { rl } from "../interface";

function ask(question: string, reader = rl): Promise<string> {
  // Your code goes here

  return new Promise((resolve, reject) => {
    rl.question("Enter something\n > ", (input: string) => {
      if (input !== "") {
        resolve("user input");
      } else if (input === "") {
        reject(new Error("Invalid input"));
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
