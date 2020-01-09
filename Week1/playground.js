/*
/*
 * Given the students array of objects
 * - group students in two arrays of male and female students
 * - convert marks to numbers
 * - find out average marks of both male and female students
 * - find out average marks of the entire class
 *
const students = [{
  name: 'Noah',
  gender: 'M',
  marks: "89.25"
}, {
  name: 'Olivia',
  gender: 'F',
  marks: "93.30"
}, {
  name: 'Wiliam',
  gender: 'M',
  marks: "84.50"
}, {
  name: 'Isabella',
  gender: 'F',
  marks: "76.00"
}, {
  name: 'Jacob',
  gender: 'M',
  marks: "81.75"
}, {
  name: 'Sofia',
  gender: 'F',
  marks: "94.00"
}, {
  name: 'David',
  gender: 'M',
  marks: "78.50"
}, {
  name: 'Grace',
  gender: 'F',
  marks: "85.00"
}];


let maleStudents = students.filter((student) => { return student.gender === 'M' });
let femaleStudents = students.filter((student) => { return student.gender === 'F' });

let studentsWithNum = students.map((student) => {
  let marksAsNUm = parseFloat(student.marks);
  student.marks = marksAsNUm;
  return student;
});



let averageMale = maleStudents.reduce((total, element) => {
  return total + parseFloat(element.marks);
}, 0) / maleStudents.length;
console.log(averageMale);


let averageFemale = femaleStudents.reduce((total, element) => {
  return total + parseFloat(element.marks);
}, 0) / maleStudents.length;
console.log(averageFemale);
*/

