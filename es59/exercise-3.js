/* # Async Management - Exercise 3
Alla funzione `fetchPersonById` è stata aggiunta la chiamata a `JSON.stringify`, 
così facendo la `Promise`, una volta risolta, restituirà un oggetto persona 
sotto forma di json. Utilizzando la concatenazione delle `Promise`, 
implementare il codice necessario per parsare il json e stamparne il risultato in console. */

const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32,
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

// core here
let nonCapisco = fetchPersonById(2);
nonCapisco 
  .then((json) => {
    console.log(`Questo è l'obj in json dalla Promise: ${json}`);
    return json;
  })
  .then((ricevutoDaPrimoThen) => {
    let Obj = {};
    Obj = JSON.parse(ricevutoDaPrimoThen);
    console.log('Qui il json riconvertito in oggetto :', Obj);
    return Obj;
  });
// forse non è la consega giusta perchè non l'ho capita, ma ho comunque cercato di usare 
//la concatenazione delle Promise