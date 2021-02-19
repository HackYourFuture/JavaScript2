const myButton = document.getElementById('myButton');
const header = document.querySelector('.header');
let i = 1
myButton.addEventListener('mousedown', () => {
  const element = document.createElement('li');
  element.innerText = 'Cool!!! ' + i++;
  element.addEventListener('click', () => {
    header.removeChild(element);
  })
  header.appendChild(element);
})
/*myButton.addEventListener('mouseup', () => {
  debugger
  header.innerHTML = 'Hello!!'
})




let variable

let i = 10

while (i--) {
  debugger
  variable = (i % 2) ? "Hello!" : "Foo coding!"
  debugger
  console.log(variable)
}
*/