// # Destructuring assignment - Exercise 5
// La destrutturazione restituisce `undefined` per le proprietà: `name`, `surname` e `old`.
// Sai sistemare il codice affinché, pur mantenendo gli stessi nomi di proprietà per l'oggetto `person`, posso eseguire una rinominazione in fase di destrutturazione?

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);