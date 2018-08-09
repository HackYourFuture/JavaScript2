"use strict";

// Replace with your own book titles
const booksTitles = [
  "long_walk_to_freedom",
  "pride_and_prejudice",
  "adventures_of_huckleberry_finn",
  "lolita",
  "the_reader",
  "robinson_crusoe",
  "gullivers_travels",
  "david_copperfield",
  "the_scarlet_letter",
  "the_picture_of_dorian_gray"
];

const booksInfo = {
  "Long Walk To Freedom": {
    title: "Long Walk To Freedom",
    author: "Nelson Mandela",
    language: "English"
  },

  "Pride and Prejudice": {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    language: "English"
  },

  "The Adventures of Huckleberry Finn": {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    language: "English"
  },
  Lolita: {
    title: "Lolita",
    author: "Vladimir Nabokov",
    language: "English"
  },
  "The Reader": {
    title: "The Reader",
    author: "Bernhard Schlink",
    language: "English"
  },
  "Robinson Crusoe": {
    id: "Robinson Crusoe",
    author: "Daniël Defoe",
    language: "English"
  },

  "Gulliver's Travels": {
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
    language: "English"
  },
  "David Copperfield": {
    title: "David Copperfield",
    author: "Charles Dickens",
    language: "English"
  },
  "The Scarlet Letter": {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    language: "English"
  },
  "The Picture of Dorian Gray": {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    language: "English"
  }
};

console.log(booksInfo);

const bookCovers = {
  long_walk_to_freedom: "./images/01.jpg",
  pride_and_prejudice: "./images/02.jpg",
  adventures_of_huckleberry_finn: "./images/03.jpg",
  lolita: "./images/04.jpg",
  the_reader: "./images/05.jpg",
  robinson_crusoe: "./images/06.jpg",
  gullivers_travels: "./images/07.jpg",
  david_copperfield: "./images/08.jpg",
  the_scarlet_letter: "./images/09.jpg",
  the_picture_of_dorian_gray: "./images/10.jpg"
};
console.log(bookCovers);

//////////////////////////


function myFavoriteBooks() {
  for (let i = 0; i < booksTitles.length; i++) {

    let bookContainer = document.getElementById("myBooks");
    idBook = appendChild(li);

    let bookContainer = booksTitles[i];

    let ul = document.createElement('ul');
    ul.appendChild(li);

    let li = document.createElement('li');

    let h2 = document.createElement('h2');
    li.appendChild(h2);
    
    let h3 = document.createElement('h3');
    li.appendChild(h3);

    let p  = document.createElement('p');
    li.appendChild(p);
    
    h3.innerHTML = booksTitles[i];

    let images = document.createElement('images');
     li.appendChild(images);
     image.setAttribute(src, bookCovers[bookContainer]);
    
    h3.innerHTML = booksInfo[bookContainer].title;
    p.innerHTML = "My Favorite Books are" + booksInfo[bookContainer] + booksInfo[bookContainer].language;

  }
}
console.log(myFavoriteBooks);


/* function printMyBooks() {
  for (let i = 0; i < booksTitles.length; i++) {
  
    function printHtmlBook(books) {
      let bookContainer = document.createElement("div");
      bookContainer.setAttribute("id", book.bookId);

      div.appendChild(div);
      div.setAttribute("class", "div");
      div.setAttribute("id", Object.keys(obj)[i]);

      let h2 = document.createElement("h2");
      div.appendChild(h2);

      h2.innerHTML = myObj[Object.keys(myObj)[i]].title;

      let ul = document.createElement("ul");
      div.appendChild(ul);

      let img = document.createElement("img");
      div.appendChild(img);

      img.setAttribute("", object.values(booksCover)[i]);
      printBooksTitles(booksInfo, booksCover);
    }

  }
  console.log(printMyBooks);
}*/
