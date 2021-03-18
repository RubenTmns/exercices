const { rules } = require("eslint-config-prettier");

const machine = {
  litersOfCoffee: 0,
  expressoLiter: 0.08,
  longCofeeLiter: 0.15,
  
  
  fillWithLitersOfCoffee: function (litter) {
    this.litersOfCoffee += litter;
    return this;
  },

  expresso: function () {
    
    if (this.expressoLiter <= this.litersOfCoffee) {
      this.litersOfCoffee -= this.expressoLiter;
      return true;
    } else {
     
      return false;
    }


  },

  longCoffee: function () {

    if (this.longCofeeLiter <= this.litersOfCoffee) {
      this.litersOfCoffee -= this.longCofeeLiter;
      return true;
    } else {
    

      return false;
    }
       

  },







  
};




module.exports = machine;
