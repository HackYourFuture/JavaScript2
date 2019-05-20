'use strict';

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

  function createBookList(arr, title) {
    const h2 = document.createElement('h2');
    h2.innerText = title;
    const ul = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
      const book = arr[i];

      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = book;
    }
    const list = document.getElementById('book-list');
    list.appendChild(h2);
    list.appendChild(ul);
  }

  createBookList(bookTitles, "My Books' Ids");
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

  // Appends all items in an array to the parent element
  function ADD_CHILD(parent, childrens) {
    for (let i = 0; i < childrens.length; i++) {
      const child = childrens[i];
      parent.appendChild(child);
    }
  }

  // Insert value to the HTML of the specified tag
  function CREATE_ELEMENT(tag, value) {
    const el = document.createElement(tag);
    el.innerHTML = value;
    return el;
  }

  function createBookList(obj, title) {
    const h2 = document.createElement('h2');
    h2.innerText = title;
    const ul = document.createElement('ul');

    const bookIds = Object.keys(obj);

    for (let i = 0; i < bookIds.length; i++) {
      const book = bookIds[i];

      const li = document.createElement('li');
      const img = document.createElement('img');

      const h3 = CREATE_ELEMENT('h3', obj[book].title);
      const p = CREATE_ELEMENT('p', obj[book].author);
      const span = CREATE_ELEMENT('span', obj[book].language);
      img.src = 'img/' + book + '.jpg';

      ADD_CHILD(li, [img, h3, p, span]);
      ul.appendChild(li);
    }

    const list = document.getElementById('book-list');
    ADD_CHILD(list, [h2, ul]);
  }
  createBookList(books, 'My Books');
}
