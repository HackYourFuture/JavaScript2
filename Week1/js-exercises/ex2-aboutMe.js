/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

document.querySelector('body').style.fontFamily = "Arial,sans-serif" ;

const Baraa = { myNickName: 'Baraa' , myFavFood: 'pizza' , myHomeTown: 'Latakia'} ;
setOwnInfo ('nickname',Baraa.myNickName);
setOwnInfo ('fav-food',Baraa.myFavFood);
setOwnInfo ('hometown', Baraa.myHomeTown);

function setOwnInfo (id , info) {
    document.getElementById(id).textContent = info;
}

const listItem  = document.querySelectorAll ('li');
for ( const i of listItem) {
    i.className = 'list-item';
}

const body = document.querySelector('body');
const img = document.createElement('img');
img.src = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg';
body.appendChild(img);
