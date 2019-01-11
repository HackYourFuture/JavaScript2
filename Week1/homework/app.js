'use strict';

{
  function main() {
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

    const information = {
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
    const image = {
      id_book_one: './image/id_book_one.jpg',
      id_book_two: './image/id_book_two.jpg',
      id_book_three: './image/id_book_three.jpg',
      id_book_four: './image/id_book_four.jpg',
      id_book_five: './image/id_book_five.jpg',
      id_book_six: './image/id_book_six.jpg',
      id_book_seven: './image/id_book_seven.jpg',
      id_book_eight: './image/id_book_eight.jpg',
      id_book_nine: './image/id_book_nine.jpg',
      id_book_ten: './image/id_book_ten.jpg'
    };
    const div = document.getElementById('container');

    const h1Tag = document.createElement('h1');
    h1Tag.innerHTML = 'My Favourite Books';
    div.appendChild(h1Tag);
    h1Tag.className = 'h1Tag';

    const divTag = document.createElement('div');
    divTag.className = 'myBooks';

    const ulTag = document.createElement('ul');
    ulTag.className = 'books';
    listBooks.forEach(function(id) {
      const img = document.createElement('img');
      img.src = image[id];
      img.className = 'cover';
      const title = document.createElement('h2');
      title.innerHTML = information[id].name;
      title.className = 'title';
      const liTag = document.createElement('li');
      liTag.innerHTML = information[id].author;
      liTag.className = 'book';
      liTag.appendChild(title);
      liTag.appendChild(img);
      ulTag.appendChild(liTag);
      div.appendChild(divTag);
      divTag.appendChild(ulTag);
    });
  }

  window.addEventListener('load', main);
}
