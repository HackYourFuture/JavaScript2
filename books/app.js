'use strict';

// *** 1.1
const bookTitles = [
  'the_brothers_karamazov',
  'jane_eyre',
  'to_kill_a_mockingbird',
  'war_and_peace',
  'don_quixote',
  'animal_farm',
  '1984',
  'the_little_prince',
  'frankenstein',
  'crime_and_punishment',
];
// *** 1.2
// console.log(bookTitles);

// *** 1.3
function list() {
  for (let i = 0; i < bookTitles.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = bookTitles[i];
    createList.appendChild(listItem);
  }
}
const createDiv = document.createElement('div');
createDiv.id = 'bookList';
document.getElementsByTagName('body')[0].appendChild(createDiv);

const createList = document.createElement('ul');
document.getElementById('bookList').appendChild(createList);
// const listItem = document.createElement('li');
// listItem.innerHTML = bookTitles[i];
// createList.appendChild(listItem);
// list();

// *** 1.4
const booksInfo = {
  the_brothers_karamazov: {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoyevsky',
    language: 'English',
    year: 1879,
    link: 'https://www.goodreads.com/book/show/4934.The_Brothers_Karamazov',
  },
  jane_eyre: {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    language: 'English',
    year: 1847,
    link: 'https://www.goodreads.com/book/show/10210.Jane_Eyre',
  },
  to_kill_a_mockingbird: {
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee',
    language: 'English',
    year: 1960,
    link: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird',
  },
  war_and_peace: {
    title: 'War And Peace',
    author: 'Leo Tolstoy',
    language: 'English',
    year: 1867,
    link: 'https://www.goodreads.com/book/show/656.War_and_Peace',
  },
  don_quixote: {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes Saavedra',
    language: 'English',
    year: 1605,
    link: 'https://www.goodreads.com/book/show/3836.Don_Quixote',
  },
  animal_farm: {
    title: 'Animal Farm',
    author: 'George Orwell',
    language: 'English',
    year: 1945,
    link: 'https://www.goodreads.com/book/show/170448.Animal_Farm',
  },
  1984: {
    title: '1984',
    author: 'George Orwell',
    language: 'English',
    year: 1949,
    link: 'https://www.goodreads.com/book/show/40961427-1984',
  },
  the_little_prince: {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    language: 'English',
    year: 1943,
    link: 'https://www.goodreads.com/book/show/157993.The_Little_Prince',
  },
  frankenstein: {
    title: 'Frankenstein',
    author: 'Mary Wollstonecraft Shelley',
    language: 'English',
    year: 1818,
    link: 'https://www.goodreads.com/book/show/35031085-frankenstein',
  },
  crime_and_punishment: {
    title: 'Crime And Punishment',
    author: 'Fyodor Dostoyevsky',
    language: 'English',
    year: 1866,
    link: 'https://www.goodreads.com/book/show/7144.Crime_and_Punishment',
  },
};

// *** 1.5

function getInfo() {
  for (let i = 0; i < bookTitles.length; i++) {
    const listItem = document.createElement('li');
    createList.appendChild(listItem);
    const cover = document.createElement('img');
    listItem.appendChild(cover);
    const heading = document.createElement('h1');
    listItem.appendChild(heading);
    const authorName = document.createElement('h2');
    listItem.appendChild(authorName);
    const bookLanguage = document.createElement('h3');
    listItem.appendChild(bookLanguage);
    const publishDate = document.createElement('h4');
    listItem.appendChild(publishDate);
    const linkTo = document.createElement('h5');
    listItem.appendChild(linkTo);
  }

  const obj = Object.values(booksInfo);

  for (let i = 0; i < obj.length; i++) {
    document.getElementsByTagName('h1')[i].innerHTML = obj[i].title;
    document.getElementsByTagName('h2')[i].innerHTML = obj[i].author;
    document.getElementsByTagName('h3')[i].innerHTML = obj[i].language;
    document.getElementsByTagName('h4')[i].innerHTML = obj[i].year;
    document.getElementsByTagName('h5')[i].innerHTML = obj[i].link;
  }
}
getInfo();

// *** 1.6

//  css file created and attached to index.html

//  since reaching bookCovers from here for setting src and alt attribute throws "lexical declaration `bookCovers' before initialization", it has moved below 1.7

// *** 1.7

const bookCovers = {
  the_brothers_karamazov:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427728126l/4934.jpg',
  jane_eyre:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557343311l/10210._SY475_.jpg',
  to_kill_a_mockingbird:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg',
  war_and_peace:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1413215930l/656.jpg',
  don_quixote:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546112331l/3836._SY475_.jpg',
  animal_farm:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448.jpg',
  1984: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg',
  the_little_prince:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367545443l/157993.jpg',
  frankenstein:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498841231l/35031085.jpg',
  crime_and_punishment:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382846449l/7144.jpg',
};

const source = Object.values(bookCovers);
for (let i = 0; i < source.length; i++) {
  document.getElementsByTagName('img')[i].setAttribute('src', source[i]);
  document.getElementsByTagName('img')[i].setAttribute('alt', bookTitles[i]);
}
