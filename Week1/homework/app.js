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
console.log(booksTitles);

const booksInfo = {
  "Long Walk To Freedom": {
    id: "Long Walk To Freedom",
    author: "Nelson Mandela",
    language: "English"
  },

  "Pride and Prejudice": {
    id: "Pride and Prejudice",
    author: "Jane Austen",
    language: "English"
  },

  "The Adventures of Huckleberry Finn": {
    id: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    language: "English"
  },
  Lolita: {
    id: "Lolita",
    author: "Vladimir Nabokov",
    language: "English"
  },
  "The Reader": {
    id: "The Reader",
    author: "Bernhard Schlink",
    language: "English"
  },
  "Robinson Crusoe": {
    id: "Robinson Crusoe",
    author: "Daniël Defoe",
    language: "English"
  },

  "Gulliver's Travels": {
    id: "Gulliver's Travels",
    author: "Jonathan Swift",
    language: "English"
  },
  "David Copperfield": {
    id: "David Copperfield",
    author: "Charles Dickens",
    language: "English"
  },
  "The Scarlet Letter": {
    id: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    language: "English"
  },
  "The Picture of Dorian Gray": {
    id: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    language: "English"
  }
};

const booksCover = {
  long_walk_to_freedom: "01.jpg",
  pride_and_prejudice: "02.jpg",
  adventures_of_huckleberry_finn: "03.jpg",
  lolita: "04.jpg",
  the_reader: "05.jpg",
  robinson_crusoe: "06.jpg",
  gullivers_travels: "07.jpg",
  david_copperfield: "08.jpg",
  the_scarlet_letter: "09.jpg",
  the_picture_of_dorian_gray: "10.jpg"
};
console.log(booksCover);

//////////////////////////


function printBooksTitles(books) {
  for (let i = 0; i < books.length; i++) {
    printHtmlBook(books[i]);
  }
}
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
