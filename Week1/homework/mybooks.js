'use strict';

const myFavorite = [
  'a_river_dies_of_thirst',
  'in_the_presence_of_absence',
  'the_grate_gatsby',
  'to_kill_a_mockingbird ',
  'tell_me_a_Riddle',
  'triple_ granada',
  'memory_of_the_body',
  'great_expectations',
  'war_and_peace',
  'murder_on_the_orient_express',
];

// console.log(myFavorite);

function constructElements() {

  const ul = document.createElement('ul');

  myFavorite.forEach(function (bookItems) {
    // console.log(bookItems);

    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += bookItems;
  });
  document.body.appendChild(ul);
}

// constructElements();

const addH1 = document.createElement('h1');
document.body.appendChild(addH1);
addH1.innerHTML = 'Books I Enjoyed';


const booksDetails = {

  a_river_dies_of_thirst: {
    title: 'A River of Thirst',
    author: 'Mahmoud Darwish',
    year: 2009,
    language: 'Translated to English',
  },
  in_the_presence_of_absence: {
    title: 'In The Presence of Absence',
    author: 'Mahmoud Darwish',
    year: 2006,
    language: 'Translated to English',
  },
  the_grate_gatsby: {
    title: 'The Grate Gatsby',
    author: ' F. Scott Fitzgerald',
    year: 1925,
    language: 'English',
  },
  to_kill_a_mockingbird: {
    title: 'To Kill a Mockingbird ',
    author: ' Harper Lee',
    year: 1960,
    language: 'English',
  },
  tell_me_a_Riddle: {
    title: 'Tell me a Riddle',
    author: ' Tillie Olsen',
    year: 1961,
    language: 'English',
  },
  triple_granada: {
    title: 'Triple Granada',
    author: 'Radwa Ashour',
    year: 2009,
    language: 'Arabic',
  },
  memory_of_the_body: {
    title: 'Memory of the body',
    author: ' Ahlam Mosteghanemi ',
    year: 2010,
    language: 'Arabic',
  },
  great_expectations: {
    title: 'Great Expectations',
    author: ' Charles Dickens',
    year: 1860,
    language: 'English',
  },
  war_and_peace: {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    language: 'English',
  },
  murder_on_the_orient_express: {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    year: 1934,
    language: 'English',
  }

};

function createBooksList() {
  const bookList = document.createElement('ul');
  bookList.setAttribute('id', 'main_list');
  document.body.appendChild(bookList);

  for (const bookIndex in booksDetails) {
    const bookListInfo = document.createElement('li');
    bookListInfo.setAttribute('id', bookIndex);
    bookList.appendChild(bookListInfo);

    const titleIn = document.createElement('h2');
    bookListInfo.appendChild(titleIn);
    titleIn.innerHTML = booksDetails[bookIndex].title;

    const authorIn = document.createElement('h4');
    bookListInfo.appendChild(authorIn);
    authorIn.innerHTML = 'By : ' + booksDetails[bookIndex].author;

    const yearIn = document.createElement('p');
    bookListInfo.appendChild(yearIn);
    yearIn.innerHTML = 'Published : ' + booksDetails[bookIndex].year;

    const languageIn = document.createElement('p');
    bookListInfo.appendChild(languageIn);
    languageIn.innerHTML = 'Language : ' + booksDetails[bookIndex].language;
  }

  document.body.appendChild(bookList);
}


createBooksList();

const covers = {
  a_river_dies_of_thirst: 'https://s31.postimg.cc/x3s2ees3f/a_river_dies_of_thirst.jpg',
  in_the_presence_of_absence: 'https://s31.postimg.cc/c6vu9u9iz/in_the_presence_of_absence.jpg',
  the_grate_gatsby: 'https://s31.postimg.cc/gg0kc17nf/The_Grate_Gatsby.jpg',
  to_kill_a_mockingbird: 'https://s31.postimg.cc/vbz3jn67f/To_Kill_a_Mockingbird.jpg',
  tell_me_a_Riddle: 'https://s31.postimg.cc/41dsbsvln/Tell_Me_a_Riddle.jpg',
  triple_granada: 'https://s31.postimg.cc/frrpsqtej/Triple_Granada.jpg',
  memory_of_the_body: 'https://s31.postimg.cc/9qu0vpwij/Memory_of_the_body.jpg',
  great_expectations: 'https://s31.postimg.cc/hjkonqzxn/Great_Expectations.jpg',
  war_and_peace: 'https://s31.postimg.cc/5ugozsw4b/War_and_Peace.jpg',
  murder_on_the_orient_express: 'https://s31.postimg.cc/omsk3f2t7/Murder_on_the_Orient_Express.jpg',
};

function content() {

  for (const keys in booksDetails) {
    const addImage = document.createElement('img');
    addImage.setAttribute('src', covers[keys]);
    addImage.setAttribute('alt', 'This is the cover image of ' + keys + ' book');
    document.getElementById(keys).appendChild(addImage);

  }
}

content();

