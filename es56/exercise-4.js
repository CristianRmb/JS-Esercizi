/* # Rest parameters and spread syntax - Exercise 4
Come migliorare il codice affinché si eviti di specificare ad uno a uno i valori da passare alla funzione `sum`? */

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));