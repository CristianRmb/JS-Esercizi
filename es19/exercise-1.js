const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Simon"
/* con const person2 = person 1 si fa un assegnazione per riferimento quidni modificando person2 
si modifica anceh person1. Una copia da poter poi modificare si fa cosi: 
let person2 = Object.assign({}, person1); */

console.log(person1);
console.log(person2);