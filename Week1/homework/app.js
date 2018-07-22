'use strict';

const booksTitles = {
  'titles': ['gone_with_the_wind', 'the_lord_of_the_rings', 'the_other_woman', 'war_and_peace', 'song_of_solomon', 'the_fountainhead', 'the_shadow_of_the_wind', 'the_golden_compass', 'catch_22', 'the_kite_runner'],
  'languages': ['english', 'english', 'english', 'english', 'english', 'english', 'english', 'english', 'english', 'english'],
  'authors': ['author1', 'author2', 'author3', 'author4', 'author5', 'author6', 'author7', 'author8', 'author9', 'author10'],
  'img': ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
};

const booksList = document.createElement("section");
booksList.setAttribute("id", "booksList");

const ul = document.createElement("ul");

document.body.appendChild(booksList);
booksList.appendChild(ul);

for (let i = 0; i < Object.keys(booksTitles.titles).length; i++) {
  if (
    (booksTitles.img[i],
    booksTitles.languages[i],
    booksTitles.authors[i] === undefined)
  ) {
    break;
  }

  const li = document.createElement("li");
  const h1 = document.createElement("h1");

  const p = document.createElement("p");
  p.setAttribute("class", "languages");

  const p1 = document.createElement("p");
  p1.setAttribute("class", "authors");

  const img = document.createElement("img");
  img.setAttribute("src", `images/${booksTitles.img[i]}`);

  ul.appendChild(li);

  li.appendChild(h1);
  li.appendChild(img);

  li.appendChild(p);
  li.appendChild(p1);

  h1.innerHTML = booksTitles.titles[i].replace(/_/g, " ");
  p.innerHTML = booksTitles.languages[i];
  p1.innerHTML = booksTitles.authors[i];
}
