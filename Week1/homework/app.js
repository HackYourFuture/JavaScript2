"use strict";

//This is my super simplified solution for js-hw in hyf. ;)
//Sorry guys! :P

const bookInfo = [
  { title:'Heir Of Dread',language:"english",author:"Phillip Trescothik",image:"img/1.png"},
  { title:'Priestess Without A Conscience',language:"russian",author:"Roy Gobble",image:"img/2.png"},
  { title:'Defenders Without Faith',language:"arabic",author:"Rachel Vader",image:"img/3.png"},
  { title:'Trees Of The Frontline',language:"dutch",author:"Rhiannon Nolan",image:"img/4.png"},
  { title:'Drinking At The Mist',language:"spanish",author:"William Thornhill",image:"img/5.png"},
  { title:'Lords And Assassins',language:"chinese",author:"May Malkovich",image:"img/6.png"},
  { title:'Shield Of Despair',language:"french",author:"Reginald Greenway",image:"img/7.png"},
  { title:'Enemies And Turtles',language:"german",author:"Sonya Sparrow",image:"img/8.png"},
  { title:'Blinded In The Future',language:"italian",author:"Suzanne Parker",image:"img/9.png"},
  { title:'Creator Of The Land',language:"hindi",author:"Morwenna Barlow",image:"img/10.png"},
  ]
const templateStrings = `
<ul class="books">${bookInfo.map(books =>`<li><h1>${books.title}</h1><p>Language: ${books.language}</p><p>Author: ${books.author}</p><div style="background-image:url(${books.image})"></div></li>`).join('')}</ul>`;
document.body.innerHTML = templateStrings