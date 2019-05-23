/**
 * https://7alip.github.io/JavaScript2/Week1/homework/
 */

'use strict';

/*  //////////////////
    HELPER FUNCTIONS
  /////////////////
*/

// Create HTML Element
function UI(tag) {
  return document.createElement(tag);
}

// Appends all items in an array to the parent element
function addChildrenToParent(parent, childrens) {
  for (let i = 0; i < childrens.length; i++) {
    const child = childrens[i];
    parent.appendChild(child);
  }
}

// Insert value to the HTML of the specified tag
function createElementWithValue(tag, value) {
  const el = UI(tag);
  el.innerHTML = value;
  return el;
}

// Query selector function
function $(selector) {
  let element;
  if (selector[0] !== '.' || selector[0] !== '#') {
    element = document.querySelector(selector);
  } else {
    element = document.getElementsByTagName(selector);
  }
  return element;
}

/*
//////////////////////////////////////
*/

{
  const theme = $('#theme');
  const body = $('#body');
  const wrap = $('#switch-wrap');

  theme.addEventListener('click', function() {
    if (this.checked && !body.classList.contains('dark')) {
      body.classList.add('dark');
      wrap.classList.add('light');
    } else {
      body.classList.remove('dark');
      wrap.classList.remove('light');
    }
  });
}

{
  const bookTitles = [
    'in_search_of_lost_time',
    'don_quixote',
    'ulysses',
    'the_great_gatsby',
    'moby_dick',
    'hamlet',
    'war_and_peace',
    'the_odyssey',
    'one_hundred_years_of_solitude',
    'the_brothers_karamazov',
  ];

  function createBookLinksUI(books, title) {
    const h2 = createElementWithValue('h2', title);
    const ul = UI('ul');

    for (let i = 0; i < books.length; i++) {
      const book = books[i];

      const li = createElementWithValue('li', book);
      ul.appendChild(li);
    }

    const list = $('#book-list');
    addChildrenToParent(list, [h2, ul]);
  }

  createBookLinksUI(bookTitles, "My Books' Ids");
}

{
  const books = {
    in_search_of_lost_time: {
      title: 'In Search of Lost Time',
      language: 'English',
      author: 'Marcel Proust',
    },
    don_quixote: {
      title: 'Don Quixote',
      language: 'English',
      author: 'Cervantes',
    },
    ulysses: {
      title: 'Ulysses',
      language: 'English',
      author: 'James Joyce',
    },
    the_great_gatsby: {
      title: 'The Great Gatsby',
      language: 'English',
      author: 'F. Scott Fitzgerald',
    },
    moby_dick: {
      title: 'Moby Dick',
      language: 'English',
      author: 'Herman Melville',
    },
    hamlet: {
      title: 'Hamlet',
      language: 'English',
      author: 'Shakespeare',
    },
    war_and_peace: {
      title: 'War and Peace',
      language: 'English',
      author: 'Leo Tolstoy',
    },
    the_odyssey: {
      title: 'The Odyssey',
      language: 'English',
      author: 'Homer',
    },
    one_hundred_years_of_solitude: {
      title: 'One Hundred Years of Solitude',
      language: 'English',
      author: 'Gabriel Garcia Marquez',
    },
    the_brothers_karamazov: {
      title: 'The Brothers Karamazov',
      language: 'English',
      author: 'Fyodor Dostoyevsky',
    },
  };

  function createBookLinksUI(obj, title) {
    const h2 = createElementWithValue('h2', title);
    const ul = UI('ul');

    const entries = Object.entries(obj);

    for (const [key, value] of entries) {
      const li = UI('li');
      const img = UI('img');
      const h3 = createElementWithValue('h3', value.title);
      const p = createElementWithValue('p', value.author);
      const span = createElementWithValue('span', value.language);
      img.src = `img/${key}.jpg`;
      img.alt = value.title;

      addChildrenToParent(li, [img, h3, p, span]);
      ul.appendChild(li);
    }

    /*
    const bookIds = Object.keys(obj);

    for (let i = 0; i < bookIds.length; i++) {
      const book = bookIds[i];

      const li = UI('li');
      const img = UI('img');

      const h3 = createElementWithValue('h3', obj[book].title);
      const p = createElementWithValue('p', obj[book].author);
      const span = createElementWithValue('span', obj[book].language);
      img.src = `img/${book}.jpg`;

      addChildrenToParent(li, [img, h3, p, span]);
      ul.appendChild(li);
    }
    */

    const list = $('#book-list');
    addChildrenToParent(list, [h2, ul]);
  }
  createBookLinksUI(books, 'My Books');
}
