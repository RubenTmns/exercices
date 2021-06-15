const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to SHIFUMI");
console.log("Choose a move: ");
console.log("Rock Paper Scissors? [1, 2, 3]");


const allAvalaibleMoves = []

const rock = [
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
];

const paper = [
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];

const scissors = [
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
];





reader.question("Please choose a move\n> ", (availableMoves) => {

  if (availableMoves === "1") {
    console.log("1");
    rock.forEach((element) => console.log(element));
  } else if (availableMoves === "2") {
    console.log("2");
    paper.forEach((element) => console.log(element));
  } else if(availableMoves === "3") {
    console.log("3");
    scissors.forEach((element) => console.log(element));
  }
  
})



function robotRandom() {

  let robotRandomChoice = [rock[0], paper[0], scissors[0]]
  let randomChoice = Math.floor(Math.random() * robotRandomChoice.length)
  return robotRandomChoice[randomChoice];


}


function playRound(playerChoice, robotChoice ) {
  console.log(`${playerChoice}`);
  console.log(`${robotChoice}`);

  
  if (playerChoice === robotChoice) {
    console.log("It's a draw");                        // Same choice
  }                         
  
  else if (playerChoice === "1") {
    if (robotChoice === "3") {
      console.log();
        
    } else {                                       // Rock > Scissors
      console.log();
      
    }
  }
  
  else if (playerChoice === "2") {
    if (robotChoice === "1") {
      console.log();
      
    }else {                                        // Paper > Rock
      console.log();
  
    }
  
  }
  
  else if (playerChoice === "3") {
    if (robotChoice === "2") {
      console.log();
      
    }                                         // Scissors > Paper
    else {
      console.log();
       
    }  
  }
}












































