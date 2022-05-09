function adultFilter(persons) {
  const maggiorenni = [];
  let a = 0;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      maggiorenni[a] = persons[i];
      a = a + 1;
    }
  }
  return maggiorenni;
}
/* sicuramente non è il modo piu veloce per farlo ma è l'unico che mi è venuto in mente */
const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
