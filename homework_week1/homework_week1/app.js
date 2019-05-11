'use strict';

{
  const bookTitles = [
    'pride_and_prejudice',
    'robinson_crusoe',
    'the_old_man_and_the_sea',
    'thirteen_short_stories',
    'narnia',
    'as_you_like_it',
    'hamlet',
    'pinocchio',
    'julius_caesar',
    'romeo_and_juliet',
  ];

  // console.log(bookTitles);

  const booksInfo = {
    pride_and_prejudice: {
      title: 'Pride and Prejudice',
      language: 'English',
      author: 'Jane Austen',
    },
    robinson_crusoe: {
      title: 'Robinson Crusoe',
      language: 'English',
      author: 'Daniel Defoe',
    },
    the_old_man_and_the_sea: {
      title: 'The Old Man and the Sea',
      language: 'English',
      author: 'Ernest Hemingway',
    },
    thirteen_short_stories: {
      title: 'Thirteen Short Stories',
      language: 'English',
      author: 'Harry Bell',
    },
    narnia: {
      title: 'Narnia',
      language: 'English',
      author: 'C. S. Lewis',
    },
    as_you_like_it: {
      title: 'As You Like It',
      language: 'English',
      author: 'Shakespeare',
    },
    hamlet: {
      title: 'Hamlet',
      language: 'English',
      author: 'Shakespeare',
    },
    pinocchio: {
      title: 'Pinocchio',
      language: 'English',
      author: 'Carlo Collodi',
    },
    julius_caesar: {
      title: 'Julius Caesar',
      language: 'English',
      author: 'Shakespeare',
    },
    romeo_and_juliet: {
      title: 'Romeo and Juliet',
      language: 'English',
      author: 'Shakespeare',
    },
  };

  const cover = {
    pride_and_prejudice: 'https://images.penguinrandomhouse.com/cover/9780307950901',
    robinson_crusoe: 'https://images.gr-assets.com/books/1505055646l/832554.jpg',
    the_old_man_and_the_sea:
      'https://images-na.ssl-images-amazon.com/images/I/411pakPjvdL._SX326_BO1,204,203,200_.jpg',
    thirteen_short_stories:
      'https://images-na.ssl-images-amazon.com/images/I/51uCL6Yc%2BGL._SX333_BO1,204,203,200_.jpg',
    narnia:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449868701i/11127._UY500_SS500_.jpg',
    as_you_like_it:
      'https://i.pinimg.com/236x/3b/1a/de/3b1adec055539160278d0bd1658cd733--as-you-like-it-shakespeare-festival.jpg',
    hamlet:
      'https://images-na.ssl-images-amazon.com/images/I/51VQaOw9dKL._SX331_BO1,204,203,200_.jpg',
    pinocchio: 'https://pictures.abebooks.com/isbn/9781402745812-us.jpg',
    julius_caesar: 'https://images-eu.ssl-images-amazon.com/images/I/51cgd89I9qL.jpg',
    romeo_and_juliet:
      'https://images-na.ssl-images-amazon.com/images/I/51dWHaLM2yL._SX331_BO1,204,203,200_.jpg',
  };

  function render(ul) {
    for (let i = 0; i < bookTitles.length; i++) {
      // list items
      const liItem = document.createElement('li');
      ul.appendChild(liItem);
      liItem.setAttribute('class', 'liItem');

      // book title
      const titling = document.createElement('h3');
      liItem.appendChild(titling);
      titling.innerText = booksInfo[bookTitles[i]].title;

      // book author
      const bookAuthor = document.createElement('h4');
      liItem.appendChild(bookAuthor);
      bookAuthor.innerText = booksInfo[bookTitles[i]].author;

      // book language
      const bookLanguage = document.createElement('p');
      liItem.appendChild(bookLanguage);
      bookLanguage.innerText = booksInfo[bookTitles[i]].language;

      // book image
      const image = document.createElement('img');
      liItem.appendChild(image);
      if (cover.key === bookTitles.key) {
        image.setAttribute('src', cover[bookTitles[i]]);
        image.setAttribute('alt', `${bookTitles[i]} cover`);
      }
    }
  }
  function main() {
    const root = document.getElementById('root');

    // the title
    const h1 = document.createElement('h1');
    h1.innerText = 'My Favorite Books';
    root.appendChild(h1);

    // create a list
    const ul = document.createElement('ul');
    root.appendChild(ul);
    ul.setAttribute('class', 'flex_list');
    render(ul);
  }

  window.addEventListener('load', main);
}
