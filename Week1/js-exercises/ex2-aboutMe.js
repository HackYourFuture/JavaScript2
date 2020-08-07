/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */


//   2.
const body = document.querySelector('body');
body.style.fontFamily = "Arial, sans-serif";
const ul = body.children[1].children;

//   3.
document.getElementById('nickname').innerText = 'Sadeq';
document.getElementById('fav-food').innerText = 'Pizza';
document.getElementById('hometown').innerText = 'Nieuwkoop';

//   4.
for (let i = 0; i < ul.length; i++) {
  ul[i].setAttribute('class', "list-item")
}
//   6.
const img = document.createElement('img');
img.src = "https://babeltechreviews.com/wp-content/uploads/2018/07/rendition1.img_.jpg";
body.appendChild(img);