'use strict';

//Step: 2.1
const bookTitles = [
  'haverbeke_eloquent_js',
  'crockford_js_good_parts',
  'myers_smarter_way_js',
  'flanagan_js_definitive_guide',
  'mcconnell_code_complete',
  'bronte_jane_eyre',
  'saleh_migration_north',
  'kazantzakis_zorba',
  'marquez_hundred_years_solitude',
  'hemmingway_old_man_sea',
];

// Step: 2.3
function createMyList() {
  for (let i = 0; i < bookTitles.length; i++) {

    const container = document.getElementById("myUl");
    const myList = document.createElement("ul");
    const listItem = document.createElement("li");
    const listValue = document.createTextNode(bookTitles[i]);

    listItem.appendChild(listValue);
    myList.appendChild(listItem);
    container.appendChild(myList);
  }
}
// createMyList(bookTitles);

// Step: 2.4

const myImages = {
  haverbeke_eloquent_js: 'book0.jpg', crockford_js_good_parts: 'book1.jpg',
  myers_smarter_way_js: 'book2.jpg', flanagan_js_definitive_guide: 'book3.jpg',
  mcconnell_code_complete: 'book4.jpg', bronte_jane_eyre: 'book5.jpg',
  saleh_migration_north: 'book6.jpg', kazantzakis_zorba: 'book7.jpg',
  marquez_hundred_years_solitude: 'book8.jpg', hemmingway_old_man_sea: 'book9.jpg',
};


const myBooks = {
  haverbeke_eloquent_js: {
    title: 'Eloquent JavaScript', category: 'Computer Programming',
    author: 'Marijn Haverbeke', language: 'English'
  },
  crockford_js_good_parts: {
    title: 'JavaScript: The Good Parts', category: 'Computer Programming',
    author: 'Douglas Crockford', language: 'English'
  },
  myers_smarter_way_js: {
    title: 'A Smarter Way to Learn JavaScript', category: 'Computer Programming',
    author: 'Mark Myers', language: 'English'
  },
  flanagan_js_definitive_guide: {
    title: 'JavaScript: The Definitive Guide', category: 'Computer Programming',
    author: 'David Flanagan', language: 'English'
  },
  mcconnell_code_complete: {
    title: 'Code Complete', category: 'Computer Programming',
    author: 'Steve Mcconnell', language: 'English'
  },
  bronte_jane_eyre: {
    title: 'Jane Eyre', category: 'Fiction',
    author: 'Charlotte Bronte', language: 'English'
  },
  saleh_migration_north: {
    title: 'Season of Migration to the North', category: 'Fiction',
    author: 'Tayeb Saleh', language: 'Arabic'
  },
  kazantzakis_zorba: {
    title: 'Zorba the Greek', category: 'Fiction',
    author: 'Nikos Kazantzakis', language: 'Greek'
  },
  marquez_hundred_years_solitude: {
    title: 'One Hundred Years of Solitude', category: 'Fiction',
    author: 'Gabriel Garcia Marquez', language: 'Spanish'
  },
  hemmingway_old_man_sea: {
    title: 'The Old Man and the Sea', category: 'Fiction',
    author: 'Ernest Hemmingway', language: 'English'
  }
};
//Step 2.5
function createAndAppend(name, parent, text) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  if (text !== undefined) {
    elem.innerHTML = text;
  }
  return elem;
}

function createAndAppend2(name, parent, options) {
  if (options === undefined) {
    options = {};
  }
  const elem = document.createElement(name);
  parent.appendChild(elem);
  const keys = Object.keys(options);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = options[key];
    if (key === 'text') {
      elem.innerHTML = value;
    } else {
      elem.setAttribute(key, value);
    }
  }
  return elem;
}

function myListProperties(books, keys) {
  // const keys = Object.keys(books);
  const myUl = document.getElementById("myUl");

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const book = books[key];

    const myLi = createAndAppend2("li", myUl, { class: "book-item" });

    createAndAppend2("h2", myLi, { text: book.title });

    const ul = createAndAppend2("ul", myLi, { id: key });
    createAndAppend2("li", ul, { text: "Category: " + book.category });
    createAndAppend2("li", ul, { text: "Author: " + book.author });
    createAndAppend2("li", ul, { text: "Language: " + book.language });
  }
}

function addImages(images, keys) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (images[key] !== undefined) {
      const ul = document.getElementById(key);
      const liImage = createAndAppend2("li", ul);
      createAndAppend2("img", liImage, {
        src: images[key],
        alt: key,
        class: "book-image"
      });
    }
  }
}


myListProperties(myBooks, bookTitles);
addImages(myImages, bookTitles);
