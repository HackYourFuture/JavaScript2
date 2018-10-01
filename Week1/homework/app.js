'use strict';

const bookTitles = {
  court_of_the_stone_children: {
    title: "Court of the Stone Children",
    language: "English",
    author: "Cameron, Eleanor",

  },
  alices_adventures_in_wonderland: {
    title: "Alice's Adventures in Wonderland",
    language: "English",
    author: "Carroll, Lewis",

  },
  through_the_looking_glass: {
    title: "Through the Looking Glass",
    language: "English",
    author: "Carroll, Lewis",

  },
  what_am_i: {
    title: "What Am I?",
    language: "English",
    author: "Charles, N. N.",

  },
  the_city_of_gold_and_lead: {
    title: "The City of Gold & Lead",
    language: "English",
    author: "Christopher, John",

  },
  the_pool_of_fire: {
    title: "The Pool of Fire",
    language: "English",
    author: "Christopher, John",

  },
  the_white_mountains: {
    title: "The White Mountains",
    language: "English",
    author: "Christopher, John",

  },
  the_dark_is_rising: {
    title: "The Dark is Rising",
    language: "English",
    author: "Cooper, Susan",

  },
  charlie_and_the_chocolate_factory: {
    title: "Charlie and the Chocolate Factory",
    language: "English",
    author: "Dahl, Roald",

  },
  james_and_the_giant_peach: {
    title: "James and the Giant Peach",
    language: "English",
    author: "Dahl, Roald",

  }
};


// Replace with your own code
function createAndAppend(name, parent) {
  const elm = document.createElement(name);
  parent.appendChild(elm);
  return elm;
}
function booksInformation() {
  const list = document.createElement("section");
  list.setAttribute("id", "bookList");
  const ul = createAndAppend("ul", list);
  document.body.appendChild(list);
  for (let i = 0; i < Object.keys(bookTitles).length; i++) {
    const myObject = Object.keys(bookTitles);
    const bookName = myObject[i];
    const bookDetails = bookTitles[bookName];

    const li = createAndAppend("li", ul);
    const h1 = createAndAppend("h1", li);
    h1.setAttribute("class", "heading");

    const img = createAndAppend("img", li);
    img.setAttribute("class", "allImg");
    img.setAttribute("src", "booksimg/" + [i] + ".jpg");

    const p = createAndAppend("p", li);
    p.setAttribute("class", "language");

    const p2 = createAndAppend("p", li);
    p2.setAttribute("class", "author");

    // ul.appendChild(li);
    // li.appendChild(h1);
    // li.appendChild(img);
    // li.appendChild(p);
    // li.appendChild(p2);

    h1.innerHTML += bookDetails.title;
    p.innerHTML += bookDetails.language;
    p2.innerHTML += bookDetails.author;

  }
}
booksInformation();
