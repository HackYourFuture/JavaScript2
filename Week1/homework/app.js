"use strict";

function main() {
  const ul = createBookList(booksInfo, bookCovers);
  document.body.appendChild(ul);
}
const booksInfo = {
  long_walk_to_freedom: {
    title: "Long Walk To Freedom",
    author: "Nelson Mandela",
    language: "English"
  },

  pride_and_prejudice: {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    language: "English"
  },

  adventures_of_huckleberry_finn: {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    language: "English"
  },
  lolita: {
    title: "Lolita",
    author: "Vladimir Nabokov",
    language: "English"
  },
  the_reader: {
    title: "The Reader",
    author: "Bernhard Schlink",
    language: "English"
  },
  robinson_crusoe: {
    title: "Robinson Crusoe",
    author: "Daniël Defoe",
    language: "English"
  },

  gullivers_travels: {
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
    language: "English"
  },
  david_copperfield: {
    title: "David Copperfield",
    author: "Charles Dickens",
    language: "English"
  },
  the_scarlet_letter: {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    language: "English"
  },
  the_picture_of_dorian_gray: {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    language: "English"
  }
};

let bookCovers = {
  long_walk_to_freedom: "./image/long_walk_to_freedom.jpg",
  pride_and_prejudice: "./image/ide_and_prejudice.jpg",
  adventures_of_huckleberry_finn: "./image/adventures_of_huckleberry_finn.jpg",
  lolita: "./image/lolita.jpg",
  the_reader: "./image/the_reader.jpg",
  robinson_crusoe: "./image/robinson_crusoe.jpg",
  gullivers_travels: "./image/gullivers_travels.jpg",
  david_copperfield: "./image/david_copperfield.jpg",
  the_scarlet_letter: "./image/the_scarlet_letter.jpg",
  the_picture_of_dorian_gray: "./image/the_picture_of_dorian_gray.jpg"
};

function createBookList(bookTitles, bookCovers) {
  const div = document.getElementById("root");
  const ul = document.createElement("ul");
  div.appendChild(ul);

  for (let key in bookTitles) {
    let books = bookTitles[key];
    let li = document.createElement("li");
    ul.appendChild(li);
    let header = document.createElement("h2");
    header.innerHTML = books.title;
    li.appendChild(header);

    let author = document.createElement("p");
    author.innerHTML = books.author;
    li.appendChild(author);

    let language = document.createElement("p");
    language.innerHTML = books.language;
    li.appendChild(language);

    let image = document.createElement("img");
    li.appendChild(image);
    image.src = getBookDetails(key, bookCovers);
    image.setAttribute("width", 50);
  }
  return ul;
  function getBookDetails(src, bookCovers) {
    return bookCovers[src];
  }
}
window.addEventListener("load", main);
