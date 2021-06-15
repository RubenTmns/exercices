function numberGame(reader, min = 1, max = 100) {
  let random = Math.round(Math.random() * (max - min)) + min;

  function numberCallback(number) {
    const numberParse = parseInt(number);

    if (Number.isInteger(numberParse)) {
      console.log(numberParse);
    } else {
      console.log("This was not a number");
      reader.question("Enter a number: ", numberCallback);
    }

    if (numberParse === random) {
      console.log("You won");
      reader.close();
    } else if (numberParse > random) {
      console.log("Too high");
      reader.question("Enter a number: ", numberCallback);
    } else if (numberParse < random) {
      console.log("Too low");
      reader.question("Enter a number: ", numberCallback);
    }

    if (numberParse > min || numberParse < min) {
      console.log("The number is between 1 and 100");
      reader.question("Enter a number: ", numberCallback);
    }
  }

  reader.question("Enter a number: ", numberCallback);
}

module.exports = numberGame;
