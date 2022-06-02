// # Destructuring assignment - Exercise 2
// Utilizzare la destrutturazione per eseguire l'assegnazione dei valori tramite un'unica linea di codice

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const { id, firstName, lastName, age } = person;

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

console.log(id, firstName, lastName, age);
