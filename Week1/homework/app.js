"use strict";

const bookTitles = [
  "the_da_vinci_code", // Dan Brown
  "angels_and_demons", // Dan Brown
  "the_lost_symbol", // Dan Brown
  "the_origin", // Dan Brown
  "the_secret", // Rhonda Byrne
  "cymatics", // Hans Jenny
  "be_here_now", // Ram Das
  "nicholas_copernicus_and_the_founding_of_modern_astronomy", // Todd Goble
  "the_way_of_zen", // Alan Watts
  "food_of_the_gods" // Terence McKenna
];
const bookInformation = {
  the_da_vinci_code: {
    title: "The Da Vinci Code",
    language: "English",
    author: "Dan Brown"
  },
  angels_and_demons: {
    title: "Angels & Demons",
    language: "English",
    author: "Dan Brown"
  },
  the_lost_symbol: {
    title: "The Lost Symbol",
    language: "English",
    author: "Dan Brown"
  },
  the_origin: {
    title: "The Origin",
    language: "English",
    author: "Dan Brown"
  },
  the_secret: {
    title: "The Secret",
    language: "English",
    author: "Rhonda Byrne"
  },
  cymatics: {
    title: "Cymatics",
    language: "English",
    author: "Hans Jenny"
  },
  be_here_now: {
    title: "Be Here Now",
    language: "English",
    author: "Ram Das"
  },
  nicholas_copernicus_and_the_founding_of_modern_astronomy: {
    title: "Nicholas Copernicus And The Founding Of Modern Astronomy",
    language: "English",
    author: "Todd Goble"
  },
  the_way_of_zen: {
    title: "The Way Of Zen",
    language: "English",
    author: "Alan Watts"
  },
  food_of_the_gods: {
    title: "Food Of The Gods",
    language: "English",
    author: "Terence McKenna"
  }
};

// function to display book titles, language and authors
function generateBookInfo(obj) {
  // Setup
  const ul = document.createElement("ul");
  document.body.appendChild(ul);
  ul.setAttribute("id", "container");

  // Displaying the titles along with the language and the author name
  for (let i in obj) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.setAttribute("id", [i]);

    const title = document.createElement("h2");
    li.appendChild(title);
    title.innerHTML = obj[i].title;

    const language = document.createElement("p");
    li.appendChild(language);
    language.innerHTML = "Language: " + obj[i].language;

    const author = document.createElement("p");
    li.appendChild(author);
    author.innerHTML = "Author: " + obj[i].author;
  }
}

window.onload = generateBookInfo(bookInformation);

const bookCovers = {
  the_da_vinci_code: "./img/the da vinci code.jpg",
  angels_and_demons: "./img/angels and demons.jpg",
  the_lost_symbol: "./img/the lost symbol.jpg",
  the_origin: "./img/the origin.jpg",
  the_secret: "./img/the secret.jpg",
  cymatics: "./img/cymatics.jpg",
  be_here_now: "./img/be here now.jpg",
  nicholas_copernicus_and_the_founding_of_modern_astronomy:
    "./img/nicholas copernicus and the founding of modern astronomy.jpg",
  the_way_of_zen: "./img/the way of zen.jpg",
  food_of_the_gods: "./img/food of the gods.jpg"
};

for (let i = 0; i < Object.keys(bookCovers).length; i++) {
  const li = document.querySelectorAll("li");

  const image = document.createElement("img");

  li[i].appendChild(image);
  image.src = Object.values(bookCovers)[i];
  image.setAttribute("class", "images");

  let bookCoverAlt = Object.keys(bookCovers)[i].replace(/_/g, " ");
  image.setAttribute("alt", bookCoverAlt + " book cover");
}
