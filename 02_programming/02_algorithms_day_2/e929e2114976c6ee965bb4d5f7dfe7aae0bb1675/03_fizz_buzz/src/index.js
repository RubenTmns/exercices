function fizzBuzz(list) {
  // Code the function here.
  let array = [];

  for (let i = 0; i < list.length; i++){
    if (!(list[i] %3) && !(list[i] %5)) 
      array.push("FizzBuzz");
   
  
    else if (!(list[i] %3)) 
      array.push("Fizz");
   
    
    else if (!(list[i] %5)) 
      array.push("Buzz"); 
   
  
    else 
      array.push(list[i]);  
    
  
  }
  return array;
  
  
}




// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;

