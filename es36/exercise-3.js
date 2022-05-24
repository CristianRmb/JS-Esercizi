// # Classes - Exercise 3
// Definire all'interno della classe `Person` un metodo statico che, dato in input un
// object literal, istanzia un oggetto `Person`.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  /* non capico la consegna, devo fare un oggetto `person` a partire dal oggetto `obj`? 
  come ho fatto funziona ma non è altro che una copia di obj*/
  static fromObject(obj) {
    return Object.assign(obj)
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi',
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);
