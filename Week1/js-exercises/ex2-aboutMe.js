/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 document.body.style.fontFamily = 'Arial, sans-serif';

 document.getElementById('nickname').innerText = 'Rafay';
 document.getElementById('fav-food').innerText = 'Biryani';
 document.getElementById('hometown').innerText = 'Karachi';

 const listItems = document.querySelectorAll('li');
 for (let listItem of listItems) {
     listItem.classList.add('list-item');
 }

const myPic = document.createElement('img');
myPic.src = 'https://avatars1.githubusercontent.com/u/6040340?s=460&u=5023fdc5416b15c6a4c4e4ecf8786912e2da4a42&v=4';
document.body.appendChild(myPic);