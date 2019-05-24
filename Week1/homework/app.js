'use strict';

{
  // Q1.1

  const books = [
    'animal_farm',
    'veronica_decide_to_die',
    '1984',
    'the_lord_of_the_rings',
    'the_book_thief',
    'romeo_and_juliet',
    'the_color_purple',
    'alice_in_wonderland',
    'frankenstein',
    'the_kite_runner',
  ];

  // Q1.3

  function booksGenerator() {
    const bookList = document.createElement('ul');
    const main = document.getElementById('main');
    main.appendChild(bookList);
    for (let i = 0; i < books.length; i++) {
      const Li = document.createElement('li');
      Li.innerText = books[i];
      bookList.appendChild(Li);
    }
  }
  booksGenerator();
}

// Q1.4

const booksInformation = {
  animal_farm: {
    title: 'animal farm',
    language: 'english',
    author: 'george orwell',
  },
  veronica_decide_to_die: {
    title: 'veronica decides to die',
    language: 'english',
    author: 'Paulo Coelho',
  },
  1984: {
    title: '1984',
    language: 'english',
    author: 'george orwell',
  },
  the_lord_of_the_rings: {
    title: 'the lord of the ring',
    language: 'english',
    author: ' j.r.r. tolkien',
  },
  the_book_thief: {
    title: 'the book thief',
    language: 'english',
    author: 'markus zusak',
  },
  romeo_and_juliet: {
    title: 'romeo and juliet',
    language: 'english',
    author: 'william shakespeare',
  },
  the_color_purple: {
    title: 'the color purple',
    language: 'english',
    author: 'alice walker',
  },
  alice_in_wonderland: {
    title: 'alice in wonderland',
    language: 'english',
    author: 'lewis carroll',
  },
  frankenstein: {
    title: 'frankenstein',
    language: 'english',
    author: 'mary sheley',
  },
  the_kite_runner: {
    title: 'the kite runner',
    language: 'english',
    author: 'khaled hosseini',
  },
};

// Q1.5

function getInformation() {
  const bookcolection = document.getElementById('books_collections');
  const x = Object.entries(booksInformation);
  for (let i = 0; i < x.length; i++) {
    const booksDiv = document.createElement('div');
    booksDiv.setAttribute('id', x[i][0]);
    booksDiv.setAttribute('class', 'css_class');
    bookcolection.appendChild(booksDiv);
    const bookTitle = document.createElement('h2');
    booksDiv.appendChild(bookTitle);
    bookTitle.innerText = x[i][1].title;
    const bookAuthor = document.createElement('h3');
    bookAuthor.innerText = 'written by : ' + x[i][1].author;
    booksDiv.appendChild(bookAuthor);
    const bookLanguage = document.createElement('h3');
    bookLanguage.innerText = 'language of book : ' + x[i][1].language;
    booksDiv.appendChild(bookLanguage);
  }
}
getInformation();

// Q1.7

const bookCovers = {
  animal_farm: 'pics/animal_farm.jpg',
  veronica_decide_to_die: 'pics/veronica.jpg',
  1984: 'pics/1984.jpg',
  the_lord_of_the_rings: 'pics/lord_of_rings.jpg',
  the_book_thief: 'pics/the_book_thief.jpg',
  romeo_and_juliet: 'pics/romeo.jpg',
  the_color_purple: 'pics/purple.jpg',
  alice_in_wonderland: 'pics/alice_cover.jpg',
  frankenstein: 'pics/frank.jpg',
  the_kite_runner: 'pics/kiterunner.jpg',
};

// Q1.8

function dispalyImage() {
  for (const key of Object.keys(bookCovers)) {
    const img = document.createElement('img');
    const location = document.getElementById(key);
    location.appendChild(img);
    img.setAttribute('src', bookCovers[key]);
    img.setAttribute('alt', 'the_book_cover_of_' + key);
  }
}
dispalyImage();
