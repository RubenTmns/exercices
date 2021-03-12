function range(x, y) {
  // Code the function here.
  let array = [];
  if (x < y) {
    for (let i = x; i < y+1; i++) 
      array.push(i);
  }  
  else if (x === y) {
    array.push(x);

  } else {
    for (let i = x; i > y-1; i--) 
      array.push(i);
  }
  return array;
}

// Do not remove last lines, it is for tests
module.exports = range;



