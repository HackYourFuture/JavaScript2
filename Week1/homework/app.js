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
        author: 'Jim Thompson',
        language: 'english',
        name: 'Heed The Thunder',
        Artist: 'Unknown'
      },
      id_book_eight: {
        author: 'James Hawes',
        language: 'english',
        name: 'Title: Why You Should Read Kafka Before You Waste Your Life',
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

    let div = document.getElementById('container');

    let h1Tag = document.createElement('h1');
    h1Tag.innerHTML = 'My Favourite Books';
    div.appendChild(h1Tag);
    h1Tag.className = 'h1Tag';

    let divTag = document.createElement('div');
    divTag.className = 'myBooks';

    let ultag = document.createElement('ul');
    ultag.className = 'books';

    const body = document.body;
    body.appendChild(createList(listBooks));

    function createList(books) {
      const listBooks = document.createElement('ul');

      for (let i = 0; i < books.length; i++) {
        const item = document.createElement('li');
        item.id = books[i];
        item.appendChild(createChild('h2', 'Title', information[books[i]].name));
        item.appendChild(
          createChild('p', 'Author: By ', createChild('em', information[books[i]].author))
        );
        item.appendChild(
          createChild('div', 'Language: By ', createChild('em', information[books[i]].language))
        );
        item.appendChild(
          createChild('div', 'Cover Artist: By ', createChild('em', information[books[i]].Artist))
        );

        listBooks.appendChild(item);
      }
      return listBooks;
    }

    function createChild(type, ...children) {
      const node = document.createElement(type);

      for (const child of children) {
        if (typeof child === 'string') {
          node.appendChild(document.createTextNode(child));
        } else {
          node.appendChild(child);
        }
      }

      return node;
    }

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  window.addEventListener('load', main);
}
