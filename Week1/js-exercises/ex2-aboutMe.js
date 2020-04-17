/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

//set the mention style and add my own details
document.querySelector("body").style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerText = "Alhamady";
document.getElementById("fav-food").innerText = "Pizza";
document.getElementById("hometown").innerText = "Sana\'a";

// create an unorderlist 
let listArray = document.querySelector("ul");
let listCollection = document.getElementsByTagName("ul");
for (var i = 0, len = listCollection.length; i < len; i++ ) {
    listCollection[i].classList.add("list-item");
}


var elem1 = document.createElement("li");

//create an img and set its properties
var elem = document.createElement("img");
elem.setAttribute("src", "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"); 
elem.setAttribute("alt", "Flower");
elem.setAttribute("height", "200px");
elem.setAttribute("width", "200px");

listArray.appendChild(elem1);
elem1.appendChild(elem);