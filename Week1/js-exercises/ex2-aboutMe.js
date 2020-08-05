/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 document.body.style.fontFamily= "Arial, sans-serif";

let nickname = document.querySelector('#nickname');
nickname.innerText = 'wasim';

let favFood = document.querySelector('#fav-food');
favFood.innerText = 'pizza';

let hometown = document.querySelector('#hometown');
hometown.innerText = 'italy';



 let li = document.querySelectorAll('li');
 for ( let i = 0; i < li.length; i++){
    li[i].setAttribute ('class', 'list-item');
    // li.className = 'list-item';
    // li[i].style.color= 'red';
};



let img = document.createElement('img');
img.src = 'https://www.refinery29.com/images/9381037.jpg?format=webp&width=340&height=408&quality=85';
let body = document.querySelector('body');
body.appendChild(img);
