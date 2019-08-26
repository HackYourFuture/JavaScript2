const rootDiv = document.getElementById('root');

const myButton = document.createElement('button');
myButton.innerText = 'Click Me!';

rootDiv.appendChild(myButton);

myButton.addEventListener('click', function() {
  const divElement = document.createElement('div');

  const img = document.createElement('img');
  img.src = 'https://media.giphy.com/media/l4pTldWDec8WamJUc/giphy.gif';
  const textElement = document.createElement('h2');
  textElement.textContent = 'Hello';
  textElement.style.color = 'salmon';
  textElement.style.fontStyle = 'italic';
  textElement.style.marginLeft = '200px';

  rootDiv.appendChild(divElement);
  divElement.appendChild(img);
  divElement.appendChild(textElement);
});
