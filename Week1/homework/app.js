'use strict';

const listBooks = [
  'id_book_one',
  'id_book_two',
  'id_book_three',
  'id_book_four',
  'id_book_five',
  'id_book_six',
  'id_book_seven',
  'id_book_eight',
  'id_book_nine',
  'id_book_ten'
];

const bookInformation = {
  id_book_one: {
    author: 'Kevin Brockmeier',
    language: 'english',
    name: 'The Brief History of the Dead',
    Artist: 'Archie Ferguson'
  },
  id_book_two: {
    author: 'Bret Easton Ellis',
    language: 'english',
    name: ' American Psycho',
    Artist: 'Marshall Arisman'
  },
  id_book_three: {
    author: 'Jon Ronson',
    language: 'english',
    name: 'Columbine',
    Artist: 'Henry Sene Yee'
  },
  id_book_four: {
    author: 'Jon Ronson',
    language: 'english',
    name: 'The Psychopath Test',
    Artist: 'Alex Merto'
  },
  id_book_five: {
    author: 'Albert Camus',
    language: 'english',
    name: 'The Stranger',
    Artist: 'Helen Yentus'
  },
  id_book_six: {
    author: 'The Road',
    language: 'english',
    name: 'The Road',
    Artist: 'Nick Lowndes'
  },
  id_book_seven: {
    author: 'Jim Th',
    language: 'english',
    name: 'Heed The Thunder',
    Artist: 'Unknown'
  },
  id_book_eight: {
    author: 'James Hawes',
    language: 'english',
    name: 'You Should Read',
    Artist: 'Steve Snider'
  },
  id_book_nine: {
    author: 'The Humbling',
    language: 'english',
    name: 'The Humbling',
    Artist: 'Milton Glaser'
  },
  id_book_ten: {
    author: 'F. Scott Fitzgerald',
    language: 'english',
    name: 'he Great Gatsby',
    Artist: 'Unknown'
  }
};
const bookImage = {
  id_book_one: './imag/id_book_one.jpg',
  id_book_two: './imag/id_book_two.jpg',
  id_book_three: './imag/id_book_three.jpg',
  id_book_four: './imag/id_book_four.jpg',
  id_book_five: './imag/id_book_five.jpg',
  id_book_six: './imag/id_book_six.jpg',
  id_book_seven: './imag/id_book_seven.jpg',
  id_book_eight: './imag/id_book_eight.jpg',
  id_book_nine: './imag/id_book_nine.jpg',
  id_book_ten: './imag/id_book_ten.jpg'
};

function main() {
  const div = document.getElementById('container');

  const h1Tag = document.createElement('h1');
  h1Tag.innerHTML = 'My Favourite Books';
  div.appendChild(h1Tag);
  h1Tag.className = 'h1Tag';

  const divTag = document.createElement('div');
  divTag.className = 'my-books';

  const ulTag = document.createElement('ul');
  ulTag.className = 'books';
  listBooks.forEach(function(id) {
    const img = document.createElement('img');
    img.src = bookImage[id];
    img.className = 'cover';
    const title = document.createElement('h2');
    title.innerHTML = bookInformation[id].name;
    title.className = 'title';
    const liTag = document.createElement('li');
    liTag.innerHTML = bookInformation[id].author;
    liTag.className = 'book';
    liTag.appendChild(title);
    liTag.appendChild(img);
    ulTag.appendChild(liTag);
    div.appendChild(divTag);
    divTag.appendChild(ulTag);
  });
}

window.addEventListener('load', main);
