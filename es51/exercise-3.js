// # JSON methods - Exercise 3
// In questo esercizio le cose non vanno come dovrebbero, nonostante abbia creato una copia di `person1`,
//modificando la proprietà `city` di `person2` viene modificato anche il valore per `person1`, 
//questo avviene perché ho creato una shallow copy.
// Come posso sistemare il codice affinché modificando il valore di `person2` questo non modifichi anche `person1`?

const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

// const person2 = { ...person1 };

const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);