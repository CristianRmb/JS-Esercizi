// # Destructuring assignment - Exercise 4
// Utilizzare la destrutturazione per stampare la lista dei valori delle proprietà presenti in `person`:

// ```
// id: 1
// firstName: Mario
// lastName: Rossi
// age: 25
// ```

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// for (let item of Object.entries(person)) {
//   console.log(`${item[0]}: ${item[1]}`);
// }

//la consegna non è chiara, non specifia se fare con variabili cosi: 
const {id, firstName, lastName, age} = person
console.log(id, firstName, lastName, age );

//o se fare con una funziona (che serve per dare valore di default) in questo modo: 
function showObj({id, firstName, lastName, age = 0 } = {}) {
  console.log(id, firstName, lastName, age);
}
showObj(person);
