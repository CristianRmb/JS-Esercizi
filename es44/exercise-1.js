// # Destructuring assignment - Exercise 1

// Utilizzare la destrutturazione, al posto di una variabile temporanea, per eseguire lo swapping delle variabili (per swapping s'intende lo scambio di valori tra due variabili).
// Suggerimento: fare riferimento alla documentazione ufficiale <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>



let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
// let temp = num2;
// num2 = num1;
// num1 = temp;
[num1 , num2] = [20, 10]

console.log('After swap: ', num1, num2); // After swap: 20 10