// # Async Management - Exercise 6
// In questo esercizio occorre richiamare la funzione `fetchPersonById` passando come id
// il valore `2` e stampare il risultato restituito in console. Per ottenere il valore
// restituito dalla `Promise` utilizzare le keywords `async/await`.

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

// fetchPersonById(2)
//   .then((personJson) => JSON.parse(personJson))
//   .then((person) => console.log(person))
//   .catch((err) => console.error(err));

async function asyncCall() {
  console.log(
    'Prima mi stampa questo log, poi esegue la Promise (se ci sono errori si ferma)',
  );
  let resolveDellaPromise = await fetchPersonById(3);
  console.log(resolveDellaPromise);
  console.log(
    "Dopo la Promise esegue (senza aspettare 1sec) un'altra operazione (JSON.parse) :",
  );
  //senza await qui mi arriva l'obj quindi non mi fa JSON.parse => errore
  let daJsonAdObj = JSON.parse(resolveDellaPromise);
  console.log(daJsonAdObj);
}
//in questo es non chiede di gestire l'errore
asyncCall();
