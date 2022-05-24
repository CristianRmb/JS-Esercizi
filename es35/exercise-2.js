// # Classes - Exercise 2
// Definire la classe `Developer` che eredita dalla classe `Person` e, oltre alle proprietà `firstName` e `lastName`, accetta nel costruttore anche la proprietà `role`.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }
}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);
