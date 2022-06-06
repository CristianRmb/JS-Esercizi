// # Async Management - Exercise 5
// Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:
// * La persona che ha come identificativo l'id passato come parametro
// * Il tipo di lavoro che ha come identificativo l'id passato come parametro

// La prima funzione (`fetchPersonById`) deve restituire una `Promise` con un delay di 1000 millesecondi (`setTimeout`)
// La prima funzione (`fetchJobById`) deve restituire una `Promise` con un delay di 500 millesecondi (`setTimeout`)

// Infine implementare il codice necessario che si occupa di stampare in console il risultato della **prima** `Promise` che viene risolta.
// N.B: esiste un metodo che, dato in input un array di `Promise`, attende fino a quando una delle `Promise` non viene risolta o rigettata.

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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO',
  },
  {
    id: 2,
    jobTitle: 'Project Manager',
  },
  {
    id: 3,
    jobTitle: 'Developer',
  },
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (persons.find((item) => item.id === id)) {
        //resolve(persons.find((item) => item.id === id));
        resolve(console.log(persons.find((item) => item.id === id)));
      }
      reject(new Error(`Persona con id ${id} non è presente`));
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobs.find((item) => item.id === id)) {
        //resolve(jobs.find((item) => item.id === id));
        resolve(console.log(jobs.find((item) => item.id === id)));
      }
      reject(new Error(`JobTitle di persona con id ${id} non trovato`));
    }, 500);
  });
}
// Infine implementare il codice necessario che si occupa di stampare in console il risultato
// della **prima** `Promise` che viene risolta.
// La Prima è fetchJobById perché ha un ritardo di 500ms mentre la seconda 
// fetchPersonById con un ritardo di 1000ms
Promise.all([fetchPersonById(2), fetchJobById(2)]);
