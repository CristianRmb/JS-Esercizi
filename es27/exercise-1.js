const person = {
  firstName: 'John',
  lastName: 'Doe',
  // fullName: function () {
  //   return console.log("la funzione esiste");
  // }
};

if (person.address) {
  console.log(person.address.city); // Argh! Cannot read property 'city' of undefined
} else {
  console.log("proprieta person.address.city non esiste");
}

if (typeof person.fullName === "function"){
  console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined
} else {
  console.log("la funzione fullName non esiste");
}
