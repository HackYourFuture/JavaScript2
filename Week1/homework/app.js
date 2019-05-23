'use strict';

//1.1...

const bookTitles = [
  'harry_potter_chamber_secrets',
  'crime_and_punishment',
  'don_quixote',
  'war_and_peace',
  'robinson_crusoe',
  'the_red_and_the_black',
  'jane_eyre',
  'anna_karenina',
  'the_rainbow',
  'the_kite_runner',
];

//1.3....

function bookList(array) {
  const body = document.getElementsByName('body');
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  ul.id = 'booktitles';

  for (let i = 0; i < bookTitles.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = bookTitles[i];
    ul.appendChild(listItem);
  }
}

bookList(bookTitles);

//1.4.........

const booksInformation = {
  harry_potter_chamber_secrets: {
    title: 'Harry Potter and the Chamber of Secrets',
    language: 'English',
    author: 'J.K. Rowling',
  },
  crime_and_punishment: {
    title: 'Crime and Punishment',
    language: 'Russian',
    author: 'Fyodor Dostoyevsky',
  },
  don_quixote: {
    title: 'Don Quixote',
    language: 'English',
    author: 'Miguel De Cervantes',
  },
  war_and_peace: {
    title: 'War and Peace',
    language: 'Russian',
    author: 'Leo Tolstoy',
  },
  robinson_crusoe: {
    title: 'Robinson Crusoe',
    language: 'English',
    author: 'Daniel Defoe',
  },
  the_red_and_the_black: {
    title: 'The Red and The Black',
    language: 'French',
    author: 'Stendhal',
  },
  jane_eyre: {
    title: 'Jane Eyre',
    language: 'English',
    author: 'Charlotte Brontë',
  },
  anna_karenina: {
    title: 'Anna Karenina',
    language: 'Russian',
    author: 'Leo Tolstoy',
  },
  the_rainbow: {
    title: 'The Rainbow',
    language: 'English',
    author: 'D. H. Lawrence',
  },
  the_kite_runner: {
    title: 'The Kite Runner',
    language: 'English',
    author: 'Khaled Hosseini',
  },
};

//I ve constructed the bookCovers object as the 1.7 th part of the homework.
//But for using it in the bookListObject function, I written it here.
//I want to declare an unordered list that includes all the information about the books.

//1.7.........

const bookCovers = {
  harry_potter_chamber_secrets: './img/harry_potter_chamber_secrets.jpg',
  crime_and_punishment: './img/crime_and_punishment.jpg',
  don_quixote: './img/don_quixote.jpg',
  war_and_peace: './img/war_and_peace.jpg',
  robinson_crusoe: './img/robinson_crusoe.jpg',
  the_red_and_the_black: './img/the_red_and_the_black.jpg',
  jane_eyre: './img/jane_eyre.jpg',
  anna_karenina: './img/anna_karenina.jpg',
  the_rainbow: './img/the_rainbow.jpg',
  the_kite_runner: './img/the_kite_runner.jpg',
};

// 1.5..&..1.8......

function bookListObject(object) {
  const body = document.getElementsByName('body');
  const h1 = document.createElement('h1');
  h1.innerText = 'My Books';
  document.body.appendChild(h1);
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  ul.id = 'booklist';

  for (let i = 0; i < Object.keys(booksInformation).length; i++) {
    const bookId = Object.keys(object);
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    h2.innerText = object[bookId[i]].title;
    const img = document.createElement('img');
    const values = Object.values(bookCovers);
    img.src = values[i];
    img.alt = object[bookId[i]].title;

    const h3Language = document.createElement('h3');
    h3Language.innerText = 'Language';
    const pLanguage = document.createElement('p');
    pLanguage.innerText =
      'The original language of the book ' +
      object[bookId[i]].title +
      ' is ' +
      object[bookId[i]].language +
      '.';
    const h3Author = document.createElement('h3');
    h3Author.innerText = 'Author';
    const pAuthor = document.createElement('p');
    pAuthor.innerText =
      'The author of the book ' + object[bookId[i]].title + ' is ' + object[bookId[i]].author + '.';

    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(h3Language);
    li.appendChild(pLanguage);
    li.appendChild(h3Author);
    li.appendChild(pAuthor);

    ul.appendChild(li);
  }
}

bookListObject(booksInformation);

//1.7.....

/*
const bookCovers = {
  harry_potter_chamber_secrets: './img/harry_potter_chamber_secrets.jpg',    
  crime_and_punishment: './img/crime_and_punishment.jpg',
  don_quixote: './img/don_quixote.jpg',
  war_and_peace: './img/war_and_peace.jpg',
  robinson_crusoe: './img/robinson_crusoe.jpg',
  the_red_and_the_black: './img/the_red_and_the_black.jpg',
  jane_eyre: './img/jane_eyre.jpg',
  anna_karenina: './img/anna_karenina.jpg',
  the_rainbow: './img/the_rainbow.jpg',
  the_kite_runner: './img/the_kite_runner.jpg',
};
*/

//1.8....

/*
function bookCoversFunction(object) {
  
  const body = document.getElementsByName('body');
  const h1 = document.createElement('h1');
  h1.innerText = 'My Books Covers';
  document.body.appendChild(h1);
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  const li = document.createElement('li');    
   
  
  for (let i = 0; i < Object.keys(bookCovers).length; i++) { 
    const bookId = Object.keys(object);
    const h2 = document.createElement('h2'); 
    h2.innerText= bookId[i];
    const img = document.createElement('img');  
    const values = Object.values(object);
    img.src = values[i];
    img.alt = bookId[i];
    

    li.id = 'item_' + bookId[i];  
    li.appendChild(h2);
    li.appendChild(img);
    
    ul.appendChild(li); 
       
  }
};

bookCoversFunction(bookCovers);*/
