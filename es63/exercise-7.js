// # Async Management - Exercise 7
// In questo esercizio è stato volutamente passato un id non valido alla funzione 
//`fetchPersonById`. Implementare il codice necessario per gestire l'eccezione
// lanciata dalla `Promise`.

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

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

(async () => {
  const personJson = await fetchPersonById(4);
  const person = await JSON.parse(personJson);
  console.log(person);
})().catch((err) => {console.error(err);}); 
//basta questo .catch
