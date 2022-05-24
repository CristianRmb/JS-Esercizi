// # Classes - Exercise 7
// Definire la classe `Person` che accetta tre parametri nel costruttore:
// `firstName`, `lastName` e `age`
// definisce per ciascuna di queste tre proprietà i rispettivi metodi getters e setters.
// Definire inoltre anche il metodo getter `fullName`
// che si occupa di restituire le proprietà nome e cognome concatenate.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  
  get fullName(){
    return `${this.firstName} - ${this.lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
