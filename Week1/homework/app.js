'use strict';

const bookTitles = [
  // Replace with your own book titles
  'to_kill_a_mockingbird',
  'the_diary_of_a_young_girl',
  'harry_potter_and_the_philosophers_stone',
  'the_lord_of_the_rings',
  'the_great_gatsby',
  'pride_and_prejudice',
  'the_book_thief',
  'the_hobbit',
  'little_women',
  'animal_farm',
];

const bookCovers = {
  to_kill_a_mockingbird: './img/to_kill_a_mockingbird.jpg',
  the_diary_of_a_young_girl: './img/the_diary_of_a_young_girl.jpg',
  harry_potter_and_the_philosophers_stone: './img/harry_potter_and_the_philosophers_stone.jpg',
  the_lord_of_the_rings: './img/the_lord_of_the_rings.jpg',
  the_great_gatsby: './img/the_great_gatsby.jpg',
  pride_and_prejudice: './img/pride_and_prejudice.jpg',
  the_book_thief: './img/the_book_thief.jpg',
  the_hobbit: './img/the_hobbit.jpg',
  little_women: './img/little_women.jpg',
  animal_farm: './img/animal_farm.jpg',
};

const books = {
  to_kill_a_mockingbird: {
    title: 'To Kill a Mockingbird',
    language: 'English',
    author: 'Harper Lee',
  },
  the_diary_of_a_young_girl: {
    title: 'The Diary Of A Young Girl',
    language: 'English',
    author: 'Anne Frank',
  },
  harry_potter_and_the_philosophers_stone: {
    title: 'Harry Potter and the Philosopher’s Stone',
    language: 'English',
    author: 'J.K. Rowling',
  },
  the_lord_of_the_rings: {
    title: 'The Lord of the Rings',
    language: 'English',
    author: 'J.R.R. Tolkien',
  },
  the_great_gatsby: {
    title: 'The Great Gatsby',
    language: 'English',
    author: 'F. Scott Fitzgerald',
  },
  pride_and_prejudice: {
    title: 'Pride and Prejudice',
    language: 'English',
    author: 'Jane Austen',
  },
  the_book_thief: {
    title: 'The Book Thief',
    language: 'English',
    author: 'Markus Zusak',
  },
  the_hobbit: {
    title: 'The Hobbit',
    language: 'English',
    author: 'J.R.R. Tolkien',
  },
  little_women: {
    title: 'Little Women',
    language: 'English',
    author: 'Louisa May Alcott',
  },
  animal_farm: {
    title: 'Animal Farm',
    language: 'English',
    author: 'George Orwell',
  },
};

// Replace with your own code
// console.log(bookTitles);

const createBookListItem = (bookTitle, bookItem) => {
  const listItem = document.createElement('li');
  listItem.id = bookTitle;

  // List Item - Container Div
  const listItemContainer = document.createElement('div');
  listItemContainer.className = 'listItem';

  // Image cover
  const imageElm = document.createElement('img');
  imageElm.alt = `Cover image of ${bookItem.title}, by ${bookItem.author}`;

  // Title
  const titleElm = document.createElement('h3');
  titleElm.textContent = bookItem.title;

  // Author
  const authorElm = document.createElement('h4');
  authorElm.textContent = `by ${bookItem.author}`;

  // Language
  const languageElm = document.createElement('h4');
  languageElm.textContent = `in ${bookItem.language}`;

  // Append to the Container Div
  listItemContainer.appendChild(imageElm);
  listItemContainer.appendChild(titleElm);
  listItemContainer.appendChild(authorElm);
  listItemContainer.appendChild(languageElm);

  listItem.appendChild(listItemContainer);

  return listItem;
};

const createBookList = () => {
  const list = document.createElement('ul');
  for (let i = 0; i < bookTitles.length; ++i) {
    list.appendChild(createBookListItem(bookTitles[i], books[bookTitles[i]]));
  }
  return list;
};

/*
 * We could add the src attribute to the
 * list items in the createBookListItem() function
 * but this function is defined
 * in the MAKEME.md as required for homework.
 * !!!
 * IMPORTANT: This function gets the elements from DOM.
 * So, this must be called after the list is loaded
 * in the DOM!
 */
const loadCoverImagesToListItems = () => {
  for (const coverKey of Object.keys(bookCovers)) {
    const listItem = document.getElementById(coverKey);
    const imgElm = listItem.getElementsByTagName('img')[0];
    imgElm.src = bookCovers[coverKey];
  }
};

// Load the list in the DOM
document.body.appendChild(createBookList());

loadCoverImagesToListItems();
