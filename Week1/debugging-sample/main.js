const rootDiv = document.getElementById('root');

const myButton = document.createElement('button');
myButton.innerText = 'Click Me!';

rootDiv.appendChild(myButton);

// myButton.onclick = function() {
//   alert('Thank you');
// };

myButton.addEventListener('click', function() {
  const newText = document.createElement('p');
  newText.innerText = 'You clicked me!';
  rootDiv.appendChild(para);
});
