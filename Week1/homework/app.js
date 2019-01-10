'use strict';

//  1.1
const bookTitles = [
  'harry_potter_chamber_secrets',
  'moll_flanders',
  'joseph_andrews',
  'jude_the_obscure',
  'pride_and_prejudice',
  'to_sir_with_love',
  'to_miss_with_love',
  'where_the_wild_things_are',
  'me_talk_pretty_one_day',
  'another_bullshit_night_in_suck_city'
];

//  1.2
/*  function createBookList() {
    const divDom = document.createElement('div');
    const ulDom = document.createElement('ul');
    document.body.appendChild(divDom);
    divDom.appendChild(ulDom);
    for (let i = 0; i < bookTitles.length; i++) {
    const liDom = document.createElement('li');
    ulDom.appendChild(liDom);
    liDom.setAttribute('id', bookTitles[i]);
    liDom.textContent = bookTitles[i];
    }
  }
createBookList(); */

//  1.4
const bookListObj = {
  harry_potter_chamber_secrets: {
    title: 'Harry Potter Chamber Secret',
    language: 'English',
    author: 'Steve Kloves'
  },

  moll_flanders: {
    title: 'Moll Flanders',
    language: 'English',
    author: 'Daniel Defoe'
  },
  joseph_andrews: {
    title: 'Joseph Andrews',
    language: 'English',
    author: 'Henry Fielding'
  },
  jude_the_obscure: {
    title: 'Jude the Obscure',
    language: 'English',
    author: 'Thomas Hardy'
  },
  pride_and_prejudice: {
    title: 'Pride and prejudice',
    language: 'English',
    author: 'Jane Austen'
  },
  to_sir_with_love: {
    title: 'To Sir With Love',
    language: 'English',
    author: 'E. R. Braithwaite'
  },
  to_miss_with_love: {
    title: 'To Miss With Love',
    language: 'English',
    author: 'Katharine Birbalsingh'
  },
  where_the_wild_things_are: {
    title: 'Where the wild Things are',
    language: 'English',
    author: 'Maurice Sendak'
  },
  me_talk_pretty_one_day: {
    title: 'Me Talk Pretty One Day',
    language: 'English',
    author: 'David Sedaris'
  },
  another_bullshit_night_in_suck_city: {
    title: 'Another Bullshit Night in Suck City',
    language: 'English',
    author: 'Nick Flynn'
  }
};

//  1.5------1.8
function getBooksInfo() {
  const ulDom = document.createElement('ul');
  document.body.appendChild(ulDom);
  ulDom.setAttribute('class', 'books');
  for (let i = 0; i < bookTitles.length; i++) {
    // const divDom1 = document.createElement('div');
    const liDom = document.createElement('li');
    const divDom2 = document.createElement('div');
    const divDom3 = document.createElement('div');
    const h1Dom = document.createElement('h1');
    const h4Dom = document.createElement('h4');
    const h5Dom = document.createElement('h5');
    const img = document.createElement('img');

    divDom2.setAttribute('class', 'book_info');
    divDom3.setAttribute('class', 'book_cover');
    liDom.setAttribute('id', bookTitles[i] + '_container');
    liDom.setAttribute('class', 'book');
    h1Dom.setAttribute('class', 'books_titles');
    h4Dom.setAttribute('class', 'book_author');
    h4Dom.setAttribute('id', bookTitles[i] + '_author');
    h5Dom.setAttribute('class', 'book_language');
    h5Dom.setAttribute('id', bookTitles[i] + '_language');
    img.setAttribute('src', 'images/' + bookTitles[i] + '.jpg');
    img.setAttribute('alt', bookListObj[`${bookTitles[i]}`] + ' cover');
    img.setAttribute('id', bookTitles[i]);

    h1Dom.textContent = bookListObj[`${bookTitles[i]}`].title;
    h4Dom.textContent = bookListObj[`${bookTitles[i]}`].author;
    h5Dom.textContent = bookListObj[`${bookTitles[i]}`].language;

    ulDom.appendChild(liDom);
    liDom.appendChild(divDom3);
    divDom3.appendChild(divDom2);
    divDom3.appendChild(img);
    divDom2.appendChild(h1Dom);
    divDom2.appendChild(h4Dom);
    divDom2.appendChild(h5Dom);
  }
}
getBooksInfo();

function changeBg() {
  for (let i = 0; i < bookTitles.length; i++) {
    const img = document.getElementById(bookTitles[i]);
    img.addEventListener('mouseover', function() {
      img.setAttribute('src', 'images/' + bookTitles[i] + '_author.jpg');
      img.setAttribute('alt', bookListObj[`${bookTitles[i]}`] + ' author');
    });
  }
}
changeBg();
function changeBgOriginal() {
  for (let i = 0; i < bookTitles.length; i++) {
    const img = document.getElementById(bookTitles[i]);
    img.addEventListener('mouseout', function() {
      img.setAttribute('src', 'images/' + bookTitles[i] + '.jpg');
      img.setAttribute('alt', bookListObj[`${bookTitles[i]}`] + ' Cover');
    });
  }
}
changeBgOriginal();
