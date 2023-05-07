/* eslint-disable no-use-before-define */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-empty */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-make me-ex1-demo.heroku app.com/

  */

const bookTitles = [
  'twilight',
  'secret_garden',
  'frankenstein',
  'little_women',
  'matilda',
  'alice',
  'dorian_gray',
  'petit_prince',
  'inferno',
  'great_gatsby',
];

function createBookList() {
  const ul = document.createElement('ul');
  for (let i = 0; bookTitles.length > i; i++) {
    const item = bookTitles[i];
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = item;
  }
  return ul;
}
document.querySelector('#bookList').appendChild(createBookList());

const booksInfo = [
  {
    title: 'The Design of Everyday Things1',
    author: 'Don Norman',
    language: 'english',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human2',
    author: 'Brian Christian',
    language: 'chinese',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer3',
    author: 'Andrew Hunt',
    language: 'turkish',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer4',
    author: 'Andrew Hunt',
    language: 'uighur',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer5',
    author: 'Andrew Hunt',
    language: 'kazak',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer6',
    author: 'Andrew Hunt',
    language: 'swedish',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer7',
    author: 'Andrew Hunt',
    language: 'ganja',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer8',
    author: 'Andrew Hunt',
    language: 'korean',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer9',
    author: 'Andrew Hunt',
    language: 'japan',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer10',
    author: 'Andrew Hunt',
    language: 'franca',
    alreadyRead: true,
  },
];

const bookCovers = {
  twilight: './img/alice.jpeg',
  secret_garden: './img/secret_garden.jpeg',
  frankenstein: './img/frankenstein.jpeg',
  little_women: './img/little_women.jpeg',
  matilda: './img/matilda.jpeg',
  alice: './img/alice.jpeg',
  dorian_gray: './img/dorian_gray.jpeg',
  petit_prince: './img/petit_prince.jpeg',
  inferno: './img/inferno.jpeg',
  great_gatsby: './img/great_gatsby.jpeg',
};

// 1.5

const header = document.querySelector('.header');
const h1 = document.createElement('h1');
h1.innerHTML = 'my Bookshelf ';
header.appendChild(h1);

const createMyBookShelf = () => {
  const container = document.querySelector('.container');
  const ul = document.createElement('ul');
  container.appendChild(ul);

  for (const key in booksInfo) {
    if (booksInfo.hasOwnProperty(key)) {
      console.log(key, booksInfo[key]);
      const item = booksInfo[key];

      const li = document.createElement('li');
      ul.appendChild(li);

      const title = document.createElement('h2');
      li.appendChild(title);
      title.innerHTML = `${item.title}`;

      const author = document.createElement('h3');
      li.appendChild(author);
      author.innerHTML = `By : ${item.author}`;

      const language = document.createElement('p');
      li.appendChild(language);
      language.innerHTML = `Language : ${item.language}`;

      displayCover(li, bookCovers[key], booksInfo[key].title);
    }
  }
};
createMyBookShelf();

function displayCover(book, id, alt) {
  const img = document.createElement('img');
  book.appendChild(img);
  img.src = id;
  img.alt = alt;
}
// const ulElement = createBookList(bookTitles);

// document.querySelector('#bookList').appendChild(ulElement);
