"use strict"; 

const books = [
  "book0",
  "book1",
  "book2",
  "book3",
  "book4",
  "book5",
  "book6",
  "book7",
  "book8",
  "book9"
];

const booksInfo = {
  "book0": {
    title: "title0",
    language: "language0",
    author: "author0",
  },
  "book1": {
    title: "title1",
    language: "language1",
    author: "author1",
  },
  "book2": {
    title: "title2",
    language: "language2",
    author: "author2",
  },
  "book3": {
    title: "title3",
    language: "language3",
    author: "author3",
  },
  "book4": {
    title: "title4",
    language: "language4",
    author: "author4",
  },
  "book5": {
    title: "title5",
    language: "language5",
    author: "author5",
  },
  "book6": {
    title: "title6",
    language: "language6",
    author: "author6",
  },
  "book7": {
    title: "title7",
    language: "language7",
    author: "author7",
  },
  "book8": {
    title: "title8",
    language: "language8",
    author: "author8",
  },
  "book9": {
    title: "title9",
    language: "language9",
    author: "author9",
  }
}

const booksImagesInfo = {
  "book0" : {adress: "images/0.png"},
  "book1" : {adress: "images/1.png"},
  "book2" : {adress: "images/2.png"},
  "book3" : {adress: "images/3.png"},
  "book4" : {adress: "images/4.png"},
  "book5" : {adress: "images/5.png"},
  "book6" : {adress: "images/6.png"},
  "book7" : {adress: "images/7.png"},
  "book8" : {adress: "images/8.png"},
  "book9" : {adress: "images/9.png"},
}

function bookShow() {
  let bookShowArea = document.getElementById("div1");
  let cUl = document.createElement("ul");
  bookShowArea.appendChild(cUl);

  for (let i = 0; i < books.length; i++) {
    let cSubText1 = document.createTextNode(Object.values(booksInfo)[i].title);
    let cSubText2 = document.createTextNode(Object.values(booksInfo)[i].language);
    let cSubText3 = document.createTextNode(Object.values(booksInfo)[i].author);
    let cSubLi1 = document.createElement("li");
    let cSubLi2 = document.createElement("li");
    let cSubLi3 = document.createElement("li");
    let cLi = document.createElement("li");
    let cText = document.createTextNode(books[i]);
    let cImg = document.createElement("img");

    cSubLi1.appendChild(cSubText1);
    cSubLi2.appendChild(cSubText2);
    cSubLi3.appendChild(cSubText3);
    cLi.appendChild(cText);
    cLi.appendChild(cSubLi1);
    cLi.appendChild(cSubLi2);
    cLi.appendChild(cSubLi3);
    cLi.appendChild(cImg);
    cImg.src = Object.values(booksImagesInfo)[i].adress;
    cLi.setAttribute("class", "bookLi");
    cImg.setAttribute("class", "bookImages");
    cSubLi1.setAttribute("class", "infoSubLi");
    cSubLi2.setAttribute("class", "infoSubLi");
    cSubLi3.setAttribute("class", "infoSubLi");
    cUl.appendChild(cLi);
  }
}
bookShow();