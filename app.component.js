'use strict';
//1.

const bookIds = [
  'oliver_twist',
  'hamlet',
  'antony_and_cleopatra',
  'macbeth',
  'waiting_for_godot',
  'arms_and_the_man',
  'merchant_of_venice',
  'crime_and_punishment',
  'romeo_and_juliet',
  'a_tale_of_two_cities',
];
//console.log(bookIds);

//3.
function books(bookIds) {
  const container1 = document.getElementById('container');
  const ul = document.createElement('ul');
  container1.appendChild('ul');
  for (let index = 0; index < bookIds.length; index++) {
    const li = document.createElement('li');
    (li.textContent = 'List of Books:'), bookIds[index];
    ul.appendChild(li);
  }
}
window.addEventListener('load', books);

//4.
const DifferentBooks = {
  oliver_twist: {
    name: 'Oliver Twist',
    language: 'English',
    author: 'Charles-Dickens',
  },
  hamlet: {
    name: 'Hamlet',
    language: 'English',
    author: 'Shakespeare',
  },
  antony_and_cleopatra: {
    name: 'Antony and Cleopatra',
    language: 'English',
    author: 'Shakespeare',
  },
  macbeth: {
    name: 'Macbeth',
    language: 'English',
    author: 'Shakespeare',
  },
  waiting_for_godot: {
    name: 'Waiting for Godot',
    language: 'English',
    author: 'Samuel Becket',
  },
  arms_and_the_man: {
    name: 'Arms and the Man',
    language: 'English',
    author: 'George Bernard Show',
  },
  merchant_of_venice: {
    name: 'The Merchant of Venice',
    language: 'English',
    author: 'Shakespeare',
  },
  crime_and_punishment: {
    name: 'Crime and Punishment',
    language: 'Russian',
    author: 'Fyodor Dostoevsky',
  },
  romeo_and_juliet: {
    name: 'Romeo and Juliet',
    language: 'English',
    author: 'Shakespeare',
  },
  a_tale_of_two_cities: {
    name: 'A Tale of Two Cities',
    language: 'English',
    author: 'Charles Dickens',
  },
};

//5. Working on it.
// const images = document.createElement('img');
// images.src =
//   'https://static01.nyt.com/images/2018/11/05/arts/05godot/05godot-articleLarge.jpg?quality=75&auto=webp&disable=upscale';
// document.body.appendChild(images);
// document.write('<br/>This is a great pic of Godot Cover');

//7.
const newBookIds = {
  oliver_twist: './img/OLIVER_TWIST-2.jpg',
  hamlet: './img/Hamlet.jpg',
  antony_and_cleopatra: './img/AntonyAndCleopatra.jpg',
  macbeth: './img/Macbeth.jpg',
  waiting_for_godot: './img/Godot.jpg',
  arms_and_the_man: './img/ArmsAndTheMan.jpg',
  the_merchant_of_venice: './img/MerchantOfVenice.jpg',
  crime_and_punishment: './img/CrimeAndPunishment.jpg',
  romeo_and_juliet: './img/RomeoAndJuliet.jpg',
  a_tale_of_two_cities: './img/a-tale-of-two-cities.jpg',
};

//8.
function covers() {
  const div = document.getElementById('items');
  const div2 = document.createElement('h1');
  div2.innerHTML = 'My Favorite Books';
  div.appendChild(div2);
  div2.className = 'moreItems';

  const divTag = document.createElement('div');
  divTag.className = 'my-books';
  const ul = document.createElement('ul');
  ul.className = 'books';
  bookIds.forEach(function(index) {
    const img = document.createElement('img');
    img.src = newBookIds[index];
    img.style.width = '200px';
    //img.style.cssFloat = 'left';
    img.className = 'cover';
    const title = document.createElement('h2');
    title.innerHTML = DifferentBooks[index].name;
    title.className = 'title';
    const liTag = document.createElement('li');
    liTag.innerHTML = DifferentBooks[index].author;
    liTag.className = 'book';
    liTag.appendChild(title);
    liTag.appendChild(img);
    ul.appendChild(liTag);
    div.appendChild(divTag);
    divTag.appendChild(ul);
  });
}
window.addEventListener('load', covers);
