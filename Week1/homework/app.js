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
/* function createMyList() {
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
createMyList(bookTitles); */

// Step: 2.4
let myBooks = {
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
    title: 'Wuthering Heights', category: 'Fiction',
    author: 'Emily Bronte', language: 'English'
  },
  kazantzakis_zorba: {
    title: 'Zorba the Greek', category: 'Fiction',
    author: '', language: 'English'
  },
  marquez_hundred_years_solitude: {
    category: 'Fiction', title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez', language: 'English'
  },
  hemmingway_old_man_sea: {
    title: 'The Old Man and the Sea', category: 'Fiction',
    author: 'Ernest Hemmingway', language: 'English'
  }
};

//Step 2.5
// The way (direction of mind) I was trying to show the book title with the other info below was to create a sublist.
// However, unfortunately, after tens of trials I was not able to make it.
// I'm still very curuos to learn how to generate a sublist, please let me know.

function myListProperties() {
  for (const key of Object.keys(myBooks)) {

    const myUl = document.getElementById("myUl");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const listValue = document.createTextNode(myBooks[key].title);

    li.appendChild(listValue);
    ul.appendChild(li);
    myUl.appendChild(ul);

  }
}
myListProperties(myBooks);
