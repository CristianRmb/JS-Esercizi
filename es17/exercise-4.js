function calculate() {
  let risultato = 0;
  return {
    add: function (x){
      risultato += x;
      return this; 
    },
    multiply: function (x){
      risultato *= x;
      return this;
    },
    sub: function (x) {
      risultato -= x;
      return this;
    }, 
    divide: function(x) {
      risultato /= x;
      return this;
    },
    printResult: function() {
      console.log(risultato);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7