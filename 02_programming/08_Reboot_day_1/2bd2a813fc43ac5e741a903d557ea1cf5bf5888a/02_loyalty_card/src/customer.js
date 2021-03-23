import readline from "readline";
import * as uuid from "uuid";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const id = uuid.v4();



console.log("Welcome to the interface\n********************************************************\n 1 - Add new customer\n 2 - Access customer data\n 3 - Quit")


reader.question("🤖 Choose an action: ", answer => {

  function newCustomer
  if (answer === "1") {
    console.log("********************************************************\nCREATE NEW CUSTOMER\n********************************************************")
    let newCustomer = {};
    reader.question("🤖 - first name:\n> ", answerFirstName => {
      newCustomer.firstName = answerFirstName;
      reader.question("🤖 - last name:\n> ", answerLastName => {
        newCustomer.lastName = answerLastName;
        reader.question("🤖 - email:\n> ", answerEmail => {
          newCustomer.email = answerEmail;
          reader.question("🤖 - birth date:\n> ", answerBirth => {
            newCustomer.birth = answerBirth;
            reader.question("🤖 - city:\n> ", answerCity => {
              newCustomer.city = answerCity;
              reader.question("🤖 - country:\n> ", answerCoutry => {
                newCustomer.country = answerCoutry;
                  
                  return newCustomer;
                  console.log(newCustomer);
              }); 
            });
          });
        });        
      });
      
    }); 
    
    
      
  };

  
  
   

});

