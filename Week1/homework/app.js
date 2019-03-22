'use strict';

{
  // 1.1 declaring an array that contains 10 strings
  const bookTitles = [
    'maze_runner_death_cure',
    'fifty_shades_freed',
    'annihilation',
    'war_with_grandpa',
    'ready_player_one',
    'darkest_minds',
    'boy_erased',
    'first_man',
    'little_women',
    'ophelia',
  ];

  // 1.2 HTML is created and connected with the file app.js

  // 1.3 This function works well, but it's commented because we had to make a more detailed function in the question 1.5 instead of this
  // function ListOfBookId(ul) {
  //   for (let i = 0; i < bookTitles.length; i++) {
  //     const li = document.createElement('li');
  //     ul.appendChild(li);
  //     li.innerText = bookTitles[i];
  //   }
  // }

  /* cSpell:disable */

  // 1.4 Make an object (not an array!) containing information for each book.
  // Each property of this object should be another(i.e., nested) object with the book ID you thought up in step 1.1
  // as a key, and at least the following properties: title, language and author.
  const bookInformation = {
    maze_runner_death_cure: {
      title: 'Maze Runner: The Death Cure',
      language: 'English',
      author: 'James Dashner',
      published: 2018,
    },
    fifty_shades_freed: {
      title: 'Fifty Shades Freed',
      language: 'English',
      author: 'E L James',
      published: 2018,
    },
    annihilation: {
      title: 'Annihilation',
      language: 'English',
      author: 'Jeff VanderMeer',
      published: 2018,
    },
    war_with_grandpa: {
      title: 'The War with Grandpa',
      language: 'English',
      author: 'Robert Kimmel Smith',
      published: 2018,
    },
    ready_player_one: {
      title: 'Ready Player One',
      language: 'English',
      author: 'Ernest Cline',
      published: 2018,
    },
    darkest_minds: {
      title: 'The Darkest Minds',
      language: 'English',
      author: 'Alexandra Bracken',
      published: 2018,
    },
    boy_erased: {
      title: 'Boy Erased',
      language: 'English',
      author: 'Garrard Conley',
      published: 2018,
    },
    first_man: {
      title: 'First Man',
      language: 'English',
      author: 'James R. Hansen',
      published: 2016,
    },
    little_women: {
      title: 'Little Women',
      language: 'English',
      author: 'Louisa May Alcott',
      published: 2018,
    },
    ophelia: {
      title: 'Ophelia',
      language: 'English',
      author: 'Lisa Klein',
      published: 2018,
    },
  };

  /* cSpell:enable */

  // 1.7 Find and download book covers for each book and construct a new object which has as keys the book IDs again,
  //  and as value the path to the image source.
  const bookImages = {
    maze_runner_death_cure: 'images/maze_runner_death_cure.jpg',
    fifty_shades_freed: 'images/fifty_shades_freed.jpg',
    annihilation: 'images/annihilation.jpg',
    war_with_grandpa: 'images/war_with_grandpa.jpg',
    ready_player_one: 'images/ready_player_one.jpg',
    darkest_minds: 'images/darkest_minds.jpg',
    boy_erased: 'images/boy_erased.jpg',
    first_man: 'images/first_man.jpg',
    little_women: 'images/little_women.jpg',
    ophelia: 'images/ophelia.jpg',
  };

  // 1.6 Beautify your html page with css (use the style.css file for that), add sources and alts to each of the images.

  // 1.5 - 1.8
  function bookDetails(booksList) {
    for (let i = 0; i < bookTitles.length; i++) {
      const listItem = document.createElement('li');
      const bookInfo = Object.keys(bookInformation);
      // 1.8 giving each li item an id tag
      listItem.setAttribute('id', bookTitles[i]);
      listItem.className = 'list-item';
      booksList.appendChild(listItem);
      const titles = document.createElement('h3');
      titles.innerText = bookInformation[bookInfo[i]].title;
      listItem.appendChild(titles);
      const authors = document.createElement('p');
      authors.innerText = bookInformation[bookInfo[i]].author;
      listItem.appendChild(authors);
      const languages = document.createElement('p');
      languages.innerText = bookInformation[bookInfo[i]].language;
      listItem.appendChild(languages);
      const publishing = document.createElement('p');
      publishing.innerText = bookInformation[bookInfo[i]].published;
      listItem.appendChild(publishing);
      const images = document.createElement('img');
      // 1.6 sources to each of the images are added
      images.setAttribute('src', bookImages[bookInfo[i]]);
      // 1.6 alts to each of the images are added
      images.setAttribute('alt', bookTitles[i]);
      listItem.appendChild(images);
    }
  }

  function main() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'JS2 Homework Week 1';
    root.appendChild(h1);
    h1.className = 'header';
    const h2 = document.createElement('h2');
    h2.innerText = 'List of Books';
    root.appendChild(h2);
    h2.className = 'title';
    const booksList = document.createElement('ul');
    root.appendChild(booksList);
    booksList.className = 'books-list';
    // ListOfBookId(ul);
    bookDetails(booksList);
    const p = document.createElement('p');
    /* cSpell:disable */
    p.innerText = '© Wadeea Kiwan 2019';
    /* cSpell:enable */
    p.className = 'footer';
    root.appendChild(p);
  }

  window.addEventListener('load', main);
}
