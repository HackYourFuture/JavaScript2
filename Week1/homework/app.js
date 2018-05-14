"use strict";
function main() {

  const bookInfo = {
    harry_potter: { title: "harry_potter", author: "Rowling", language: "English" },
    gandom: { title: "gandom", author: "Moadabpoor", language: "Persian" },
    tin_tin: { title: "tin_tin", author: "Herge", language: "French" },
    the_idiot: { title: "the_idiot", author: "Dostoevsky", language: "Russian" },
    oliver_twist: { title: "oliver_twist", author: "Dickens", language: "English" },
    trust: { title: "trust", author: "Scott", language: "English" },
    brave: { title: "brave", author: "Mcgowan", language: "English" },
    insomnia: { title: "insomnia", author: "King", language: "English" },
    ulysses: { title: "ulysses", author: "Joyce", language: "English" },
    the_great_gatsby: { title: "the_great_gatsby", author: "fitzgerald", language: "English" }
  };

  const bookCovers = {
    harry_potter: "./img/harry_potter.jpg",
    gandom: "./img/gandom.jpg",
    tin_tin: "./img/tin_tin.jpg",
    the_idiot: "./img/the_idiot.jpg",
    oliver_twist: "./img/oliver_twist.jpg",
    trust: "./img/trust.jpg",
    brave: "./img/brave.jpg",
    insomnia: "./img/insomnia.jpg",
    ulysses: "./img/ulysses.jpg",
    the_great_gatsby: "./img/the_great_gatsby.jpeg"
  };

  listMaker(bookInfo, bookCovers);

}
function listMaker(bookInfo, bookCovers) {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (const i in bookInfo) {
    const li = document.createElement("li");
    ul.appendChild(li);

    const title = document.createElement("h2");
    li.appendChild(title);
    title.innerHTML = "Title: " + bookInfo[i].title;

    const language = document.createElement("p");
    li.appendChild(language);
    language.innerHTML = "Language: " + bookInfo[i].language;

    const author = document.createElement("p");
    li.appendChild(author);
    author.innerHTML = "Author: " + bookInfo[i].author;

    const image = document.createElement("img");
    li.appendChild(image);
    image.src = getSource(i, bookCovers);
  }
}

function getSource(bookId, bookCovers) {
  return bookCovers[bookId];
}

window.addEventListener("load", main);
