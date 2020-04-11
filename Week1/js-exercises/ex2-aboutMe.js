/**

 ** Exercise 2: About me **

1. See HTML
2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
4. Iterate through each li and change the class to "list-item".
5. See HTML
6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

const body = document.querySelector('body');
const img = document.createElement('img');
img.src = 'https://avatars2.githubusercontent.com/u/47349504?s=460&u=bf6dd59f1da69fd294a44a028d504344d39d2f49&v=4';
body.appendChild(img);
img.style.width = '300px';
img.style.borderRadius = '50%';
const liElement = document.querySelectorAll('li');
for (let i = 0; i < liElement.length; i++) {
    liElement[i].classList.add('list-item');
}
body.style.fontFamily = "Arial, sans-serif";
const nickName = document.getElementById('nickname');
nickName.innerText = 'Saadaldeen';
const favFood = document.getElementById('fav-food');
favFood.innerText = 'Spaghetti';
const homeTown = document.getElementById('hometown');
homeTown.innerText = 'Amsterdam';