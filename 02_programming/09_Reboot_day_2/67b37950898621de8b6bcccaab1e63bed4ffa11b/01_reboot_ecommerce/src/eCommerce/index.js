import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//ON BOSSE ICI

const toQuit = () => {
  reader.close();
};

// Create Array with products
let articles = [
  {
    name: "beer",
    price: 4,
    quantity: 300,
  },

  {
    name: "chips",
    price: 2,
    quantity: 25,
  },

  {
    name: "cheese",
    price: 3,
    quantity: 50,
  },

  {
    name: "olives",
    price: 1,
    quantity: 200,
  },

  {
    name: "waterBottle",
    price: 0.5,
    quantity: 1000,
  },
];

// CART
let cart = {};

// Displaying main menu

console.log("RUBEN'S E-SHOP;");
console.log("1 - Buy a product\n2 - Show cart\n3 - Checkout\n4 - Quit");

// Displaying sub-menus

reader.question("Choose an action\n> ", (answer) => {
  // Buy
  if (answer === "1") {
    console.log("SHOP");
    console.log(
      articles
        .map((article, i) => {
          return `${i + 1}- ${article.name} - price: ${article.price}€ - quantity ${article.quantity}`;
        })
        .join("\n"),
    );
    console.log("6 - back to menu");
    console.log("7 - quit");

    // Choosing a product
    reader.question("Choose your products\n> ", (answer) => {
      // Choosing "1" ("Beer")
      if (answer === "1") {
        // Choosing a quantity of the selected product
        reader.question("Choose your quantity\n> ", (answer) => {
          let userQuantity = Number(answer);

          // Selected quantity of the selected product is availab
          if (articles[0].quantity >= userQuantity) {
            let retrievedBeers = userQuantity;
            articles[0].quantity -= userQuantity;
            cart.beer = userQuantity;
          }
          // Selected quantity of the selected product is unavailable
          else {
            console.log("False");
          }
        });
      } else if (answer === "2") {
        // Choosing a quantity of the selected product
        reader.question("Choose your quantity\n> ", (answer) => {
          let userQuantity = Number(answer);

          // Selected quantity of the selected product is availab
          if (articles[1].quantity >= userQuantity) {
            let retrievedChips = userQuantity;
            articles[1].quantity -= userQuantity;
            cart.Chips = userQuantity;
          }
          // Selected quantity of the selected product is unavailable
          else {
            console.log("False");
          }
        });
      } else if (answer === "3") {
        // Choosing a quantity of the selected product
        reader.question("Choose your quantity\n> ", (answer) => {
          let userQuantity = Number(answer);

          // Selected quantity of the selected product is availab
          if (articles[2].quantity >= userQuantity) {
            let retrievedCheese = userQuantity;
            articles[2].quantity -= userQuantity;
            cart.Cheese = userQuantity;
          }
          // Selected quantity of the selected product is unavailable
          else {
            console.log("False");
          }
        });
      } else if (answer === "4") {
        // Choosing a quantity of the selected product
        reader.question("Choose your quantity\n> ", (answer) => {
          let userQuantity = Number(answer);

          // Selected quantity of the selected product is availab
          if (articles[3].quantity >= userQuantity) {
            let retrievedOlives = userQuantity;
            articles[3].quantity -= userQuantity;
            cart.Olives = userQuantity;
          }
          // Selected quantity of the selected product is unavailable
          else {
            console.log("False");
          }
        });
      } else if (answer === "5") {
        // Choosing a quantity of the selected product
        reader.question("Choose your quantity\n> ", (answer) => {
          let userQuantity = Number(answer);

          // Selected quantity of the selected product is availab
          if (articles[4].quantity >= userQuantity) {
            let retrievedwaterBottle = userQuantity;
            articles[4].quantity -= userQuantity;
            cart.WaterBottle = userQuantity;
          }
          // Selected quantity of the selected product is unavailable
          else {
            console.log("False");
          }
        });
      } else if (answer === "7") {
        toQuit();
      }
    });
  }
});