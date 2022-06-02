/* # Rest parameters and spread syntax - Exercise 2
Come posso migliorare la leggibilità del codice estraendo la proprietà `id` 
dall'oggetto `person` e mantenere aggregate il resto delle proprietà all'interno 
dell'oggetto `personInfo`? */

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

const { id, ...personInfo} = person;

console.log(id, personInfo);