/* # Async Management - Exercise 1
Implementare la funzione `fetchPersonById`, la quale riceve in input un id e restituisce una 
`Promise` contenente l'oggetto della persona corrispondente a quell'id. */
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
  // code here
  return new Promise((resolve, reject) => {
    if (persons.find((item) => item.id == id)) {
      resolve(persons.find((item) => item.id == id));
    } else {
      reject(new Error(`Persona con id ${id} non è presente`));
    }
  }); //non deve per forza avere il setTimeout, no?
}

//code here
let promise = fetchPersonById(2);
promise.then(function (value) {
  //per capire come funziona uso la sintassi lunga di function  
  console.log(value);
});
