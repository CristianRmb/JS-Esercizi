const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students[3] = student;
}
/* è possibile aggiungere un elemento al array anche se dichiarato con const perche sono objects  */
addStudent('Marco');
console.log(students); 