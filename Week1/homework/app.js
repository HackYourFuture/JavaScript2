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

  const booksImg = {
    pride_and_prejudice: './img/pride_and_prejudice.jpg',
    robinson_crusoe: './img/robinson_crusoe.jpg',
    the_old_man_and_the_sea: './img/the_old_man_and_the_sea.jpg',
    thirteen_short_stories: './img/thirteen_short_stories.jpg',
    narnia: './img/narnia.jpg',
    as_you_like_it: './img/as_you_like_it.jpg',
    hamlet: './img/hamlet.jpg',
    pinocchio: './img/pinocchio.jpg',
    julius_caesar: './img/julius_caesar.jpg',
    romeo_and_juliet: './img/romeo_and_juliet.jpg',
  };

  if (booksImg.key === bookTitles.key) {
    const cover = booksImg.value;
    console.log(cover);
  }

  function render(ul) {
    for (let i = 0; i < bookTitles.length; i++) {
      const liItem = document.createElement('li');
      liItem.setAttribute('id', `${bookTitles[i]}`);
      const details = Object.keys(booksInfo);
      const titling = document.createElement('h3');
      titling.innerText = booksInfo[details[i]].title;
      liItem.appendChild(titling);
      ul.appendChild(liItem);
      const bookAuthor = document.createElement('h4');
      bookAuthor.innerText = booksInfo[details[i]].author;
      liItem.appendChild(bookAuthor);
      const bookLanguage = document.createElement('p');
      bookLanguage.innerText = booksInfo[details[i]].language;
      liItem.appendChild(bookLanguage);
      const image = document.createElement('img');
      // image.setAttribute('src', `${booksImg[i]}`);
      image.setAttribute('alt', `${bookTitles[i]}` + ' cover');
      bookLanguage.appendChild(image);
    }
  }
  function main() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'My Favorite Books';
    root.appendChild(h1);
    const ul = document.createElement('ul');
    root.appendChild(ul);
    render(ul);
  }

  window.addEventListener('load', main);
}
