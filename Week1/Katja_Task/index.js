// console log button
let buttons = document.getElementById('saveBtn');
console.log(buttons);
// console log all inputs
let allInput = document.getElementById('myForm').elements;
console.log(allInput);
// change button text
buttons.innerText = 'Submit';
console.log(buttons);
// add class to button and country input
buttons.className = 'clr-red';
const countryElement = document.getElementById('country');
countryElement.className = 'cou-blr';
console.log(buttons);
console.log(countryElement);
// change color of that class
buttons.setAttribute('clr-red', 'red-background');
console.log(buttons);
countryElement.setAttribute('cou-blr', 'blue-background');
console.log(countryElement);
// set value of name input
document.getElementById('name').value = 'Nabanita';
// append p to form with values of inputs when clicking the button
var para = document.createElement('p');
let content = document.getElementsByTagName('input');
buttons.addEventListener('click', logTextOnClick);
function logTextOnClick() {
  console.log('Name: ' + content[0].value);
  console.log('Country: ' + content[1].value);
  para.innerText = content[0].value + ' is from ' + content[1].value;
  document.getElementById('myForm').appendChild(para);
}
