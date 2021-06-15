import readline from "readline";

// function "reader."
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function "clear()"
const clear = () => console.log("\x1B[2J\x1B[0f");

// function checking inputs
function checkingInput(input, input2, operator){

  //checking input && input2 === !NaN
  if(!isNaN(input) && !isNaN(input2)){
    if(typeof input === 'number' && typeof input2 === 'number'){
      if(operator === "+" || operator ===  "-" || operator ===  "*" || operator ===  "/"){
        return true;
      }
    }
  }
  else {
    // input is not a number
    console.log("Wrong input");
  }
};

// function calculator
function calculator(input){
  reader.question("Choose an operation [+, -, *, /]\n> ", (operator) => {
    reader.question("Enter second number\n> ", (input2) => {


      // changing numbers_input into Number
      let number_1 = Number(input);
      let number_2 = Number(input2);

      if (checkingInput(number_1, number_2, operator) === true){
      
        let result;
  
        if (operator === "+"){
          result = number_1 + number_2;
        }
        else if (operator === "-"){
          result = number_1 - number_2;
        }
        else if (operator === "*"){
          result = number_1 * number_2;
        }
        else if (operator === "/"){
  
          if (number_2 === 0){
            result = "\nImpossible to divide by 0";
          }
          else{
            result = number_1 / number_2;
          }
        }
  
        //clear()
        console.log(`${number_1} ${operator} ${number_2} = ${result}\n`);
  
        reader.close();
      }
      else{
        //Wrong input
        reader.question("Do you want to continue ?\nY/N > ", (answer) =>{
          if(answer === "Y"){
            reader.question("Enter first number\n> ", calculator);
          }
          else if(answer === "N"){
            reader.close();
          }
          else{
            reader.question("Enter first number\n> ", calculator);
          }
        });
      }
    });
  });
};

console.log("Welcome to the calculator !");
reader.question("Enter first number\n> ", calculator);