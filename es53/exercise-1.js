// # Rest parameters and spread syntax - Exercise 1
// La funzione `sum` presenta un elevato numero di parametri in ingresso,
//come possiamo migliorare il codice affinché eccetti un numero indefinito di valori da sommare?

function sum(...params) {
  let somma = 0;
  params.forEach((element) => { somma += element });
  return somma;
}

console.log(sum(1, 2, 3, 4, 5));