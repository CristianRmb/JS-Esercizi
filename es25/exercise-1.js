const person = {
  get fName() {
    return `${this.firstName}`;
  },

  set fName(fname) {
    this.firstName = fname;
  },
  
  get lName() {
    return `${this.lastName}`;
  },
  
  set lName(lname) {
    this.lastName = lname;
  },

  fullName: function  () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const john = Object.create(person);
john.firstName = 'Jonh';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = "Simon"
simon.lastName = "Collins"

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
