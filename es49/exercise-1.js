// # JSON methods - Exercise 1
// Implementare il codice necessario per convertire l'oggetto `developer` in un json.

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
// Print developer as json object

console.log(developer);

console.log(
  JSON.stringify(developer)
);
