// # Destructuring assignment - Exercise 3

// Utilizzare la destrutturazione per semplificare il controllo sull'età della persona, modificando il parametro della funzione.
// Suggerimento: fare riferimento alla documentazione ufficiale <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>


function isAdult({age}) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));