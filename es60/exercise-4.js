/* # Async Management - Exercise 4
Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono 
restituire rispettivamente:
* La persona che ha come identificativo l'id passato come parametro
* Il tipo di lavoro che ha come identificativo l'id passato come parametro

Infine implementare il codice necessario che si occupa di stampare in console la persona e
il tipo di lavoro trovato.
N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le `Promise`
sono state risolte.
*/



const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
      if (persons.find((item) => item.id === id)) {
        resolve(persons.find((item) => item.id === id));
      }
      reject(new Error(`Persona con id ${id} non è presente`));
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    if (jobs.find((item)=> item.id === id)) {
      resolve(jobs.find((item)=> item.id === id));
    } 
    reject(new Error(`JobTitle di persona con id ${id} non presente`))
  })
}

Promise.all([fetchPersonById(2), fetchJobById(3)]).then(
  (values) => {console.log(values);}
)
