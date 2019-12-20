'use strict';

//2
document.body.style.fontFamily='Arial', 'sans-serif';

//3
document.getElementById('nickname').innerText='Zii';
document.getElementById('fav-food').innerText='Pizza';
document.getElementById('hometown').innerText='Utrecht';

//4
let items=document.querySelectorAll('ul li');
items.forEach(item=> {item.classList.add('list-item')})

//5
let cssStyle=document.createElement('style');
document.querySelector("head").appendChild(cssStyle);
document.querySelector('style').innerText= '.list-item {color:red}'

//6
let newImage=document.createElement('img')
newImage.src='https://i.ytimg.com/vi/amMuJBlJPE8/maxresdefault.jpg'
newImage.style.width='500px'
document.body.insertBefore(newImage, document.querySelectorAll('#hometown').nextSibling)


