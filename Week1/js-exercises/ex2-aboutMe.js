let fontStyle = document.body.style.font = "Arial, sans-serif"; 

let myName = document.getElementById('nickname').innerHTML = 'Han';
let myFood = document.getElementById('fav-food').innerHTML = 'Gyudon';
let myTown = document.getElementById('hometown').innerHTML = 'Neverhood';

// const myList = document.querySelectorAll("ul > li");
// for (let i = 0; i < myList.length; i++) {
//     let li = myList[i];
//     li.classList.add("list-item");
// }

for (i = 1; i <= 3; i++) {
    console.log(document.querySelector(`li:nth-child(${i})`));
    document.querySelector(`li:nth-child(${i}`).classList.add("list-item");
}

/* Credit goes to Yahs for list-item*/

var url = 'https://smashedcompass.files.wordpress.com/2016/06/silly-walk.jpg';
 
var image = new Image();
image.src = url;
image.style.maxHeight = '300px'
document.body.appendChild(image);



/**
** Exercise 2: About me **

 + See HTML
 + Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 + Replace each of the spans(nickname, fav - food, hometown) with your own information.
 + Iterate through each li and change the class to "list-item".
 + See HTML
 6. Create a new img element and set its src attribute to a picture of you. Append that element to the page.
 */


