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


document.getElementById('nickname').innerText = 'KholiO';
document.getElementById('fav-food').textContent = 'Kip , Shawrma , Rijst';
document.getElementById('hometown').innerText = 'Damascus';


let listItem = document.getElementsByTagName('li')
//console.log(listItem.length);
for(let i = 0 ; i<listItem.length ; i++){
    listItem[i].className = 'list-item';
}


let myPhoto = document.createElement('img');
myPhoto.src = 'khaled.jpg';
document.body.appendChild(myPhoto);

