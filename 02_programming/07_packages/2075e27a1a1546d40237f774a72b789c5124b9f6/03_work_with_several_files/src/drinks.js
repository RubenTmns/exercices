// There should be no import in this file. Only exports!

function drink(){

  let litersOfCoffee = 0,
  let expressoLiter =  0.08,
  let longCoffeeLiter = 0.15,


  function expresso() {

    
    if (expressoLiter <= litersOfCoffee) {
      litersOfCoffee -= expressoLiter;
      return true;
    } 
    else {
       
      return false;
    } 
  
  
  
  }; 


  function longCoffee() {
    
    
    if (longCoffeeLiter <= litersOfCoffee) {
      litersOfCoffee -= longCoffeeLiter;
      return true;
    } 
    else {
      
      return false;
    }  
  };
   
  
};

export {drink};



