

  const myBooksName = [
"milk_and_vine" , "the_little_drummer_girl" , "of_blood_and_bone" , "year_one" ,"come_sundown","vine_and_honey","this_is_marketing","ottolenghi_simple","birthday_girl","the_rebels_revenge"
  ];


const details = {

  "milk_and_vine": {
    title:"Milk and Vine ",
author:"Adam Gasiewski ",
language:"English",


} ,


"the_little_drummer_girl" : {
  title:"The Little Drummer Girl",
author:" John Le Carré ",
language:"English",
} ,

"of_blood_and_bone": {
  title:"Of Blood and Bone",
author:" Nora Roberts ",
language:"English",
} ,

"year_one": {
  title:"Year One",
  author:" Nora Roberts ",
  language:"English",
  } ,

"come_sundown": {
  title:"Come Sundown",
author:"  Nora Roberts ",
language:"English",
} ,

"vine_and_honey": {
  title:"Vine and Honey ",
author:" Ben Mark ",
language:"English",
} ,

"this_is_marketing": {
  title:"This is Marketing ",
author:" Seth Godin ",
language:"English",
} ,

"ottolenghi_simple": {
  title:"Ottolenghi SIMPLE",
author:"  Yotam Ottolenghi ",
language:"English",
} ,

"birthday_girl": {
  title:"Birthday Girl",
author:"Birthday Girl",
language:"English",
} ,

"the_rebels_revenge": {
title:"The Rebel's Revenge",
author:"  Scott Mariani ",
language:"English",
}
};

const myBookImages = {
  milk_and_vine : "images/book1.jpg" , 
  the_little_drummer_girl :"images/book2.jpg" ,
   of_blood_and_bone :"images/book3.jpg" ,
    year_one :"images/book4.jpg",
    come_sundown:"images/book5.jpg",
    vine_and_honey:"images/book6.jpg",
    this_is_marketing:"images/book7.jpg",
    ottolenghi_simple:"images/book8.jpg",
    birthday_girl:"images/book9.jpg",
    the_rebels_revenge:"images/book10.jpg",   
  };


function booksList(){
  const div = document.getElementById("mydiv");
  let myHeader = document.createElement('h1');
  div.appendChild(myHeader);
  let myUl = document.createElement('ul');
  div.appendChild(myUl);

  let theHeaderContent = document.createTextNode ('My library ');
  myHeader.appendChild(theHeaderContent);

for (let i=0; i<myBooksName.length; i++){
let myLi=document.createElement('li');
//myLi.textContent = myBooksName[i];
myUl.appendChild(myLi);

let bookName= document.createTextNode(Object.values(details)[i].title);
let bookAuthor= document.createTextNode( "It is written by " + Object.values(details)[i].author);
let bookLanguage= document.createTextNode("It is  written in : " + Object.values(details)[i].language);

let myH1 = document.createElement("h2");
let myH3 = document.createElement("h3");
let myH4 = document.createElement("h3");

myH1.appendChild(bookName);
myH3.appendChild(bookAuthor);
myH4.appendChild(bookLanguage);
myLi.innerHTML =  myH1.outerHTML + myH3.outerHTML + myH4.outerHTML ;

let bookCovers = document.createElement("img");
myLi.appendChild(bookCovers);
myLi.setAttribute("id", Object.keys(myBookImages)[i]);
bookCovers.setAttribute("src", Object.values(myBookImages)[i]);
bookCovers.setAttribute("alt",Object.values(details)[i].title);
}}


 booksList();


 
                