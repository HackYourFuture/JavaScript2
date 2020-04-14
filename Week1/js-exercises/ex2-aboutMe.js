'use strict';
/**
 ** Exercise 2: About me **
 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
const bodyTag = document.body;
bodyTag.style.fontFamily = 'Arial, sans-serif';

const nickName = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');

nickName.innerText = 'Saif Alamrani';
favFood.innerText = 'Dolma';
homeTown.innerText = 'Amsterdam';

const listItem = document.getElementsByTagName('li');
for (let i = 0; i < listItem.length; i++) {
  listItem[i].className = 'list-item';
}

const imgOfMe = document.createElement('img');
imgOfMe.setAttribute('src', 'https://media-exp1.licdn.com/dms/image/C4D03AQF39cEdRfB4-g/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=isD64N-5hi1FPahxAJDZlFM8ia0sx1ATyzewKlj_ipM');

const h1 = document.querySelector('h1');
bodyTag.insertBefore(imgOfMe, h1);