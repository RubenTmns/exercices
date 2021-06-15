



const readyForm = (reader) => {

  const answer = "hardly ready";
  
  reader.question("Are you ready? ", () => {
    console.log(`${answer} ? COME ONE YOU CAN DO IT!! `);
    reader.close();
  });
  
};
  
    


// Leave line below for tests to work
module.exports = readyForm;
