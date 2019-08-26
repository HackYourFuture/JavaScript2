'use strict';

// 1.1 Open the apps.js and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces so that you can use these later as HTML id attributes. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets). Add a console.log statement to output this array to console. (This is for debugging and making sure everything is in order. Delete it later when you're done :))
const bookTitles = [
  // Replace with your own book titles
  'Nation_and_Novel',
  'Robinson_Crusoe',
  'Gullivers_Travels',
  'Clarissa',
  'Tom_Jones',
  'Emma',
  'Frankenstein',
  'Nightmare_Abbey',
  'Sybil',
  'Jane_Eyre',
];

/* 1.2 Open the empty index.html and add the required HTML to load the app.js file. Open index.html in the browser and confirm that the console.log statement shows the array. (Open the Chrome Developer Tools and inspect the console.) */

/* 1.3 Remove the temporary console.log from step 1.1. Make a function (or functions) that generate a ul with li elements for each book title in the array using a for loop. Make sure that the function names you choose are an accurate reflection of what they do. As a reminder, here are the recommended Naming Conventions. */
/* 1.5 Now change the function from step 1.3 that you used to display the book title in a list to take the actual information about the book from the object and display that. Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title. */

// create function to make list of books
const myBooks = {
  Nation_and_Novel: {
    name: 'Nation and Novel',
    author: 'Patrick Parrinder',
    language: 'English',
  },
  Robinson_Crusoe: {
    name: 'Robinson Crusoe',
    author: 'Daniel Defoe',
    language: 'English',
  },
  Gullivers_Travels: {
    name: 'Gulliver’s Travels',
    author: 'Jonathan Swift',
    language: 'English',
  },
  Clarissa: {
    name: 'Clarissa',
    author: 'Samuel Richardson',
    language: 'English',
  },
  Tom_Jones: {
    name: 'Tom Jones ',
    author: 'Henry Fielding',
    language: 'English',
  },
  Emma: {
    name: 'Emma',
    author: 'Jane Austen',
    language: 'English',
  },
  Frankenstein: {
    name: 'Frankenstein',
    author: 'Mary Shelley',
    language: 'English',
  },
  Nightmare_Abbey: {
    name: ' Nightmare Abbey',
    author: 'Thomas Love Peacock',
    language: 'English',
  },
  Sybil: {
    name: 'Sybil',
    author: 'Benjamin Disraeli',
    language: 'English',
  },
  Jane_Eyre: {
    name: 'Jane Eyre',
    author: 'Charlotte Brontë',
    language: 'English',
  },
};
const bookCover = {
  Nation_and_Novel: 'https://i.postimg.cc/bwYx7JBp/L872-0-1.jpg',
  Robinson_Crusoe: 'https://i.postimg.cc/vmJ6ZH31/IMG-3914.jpg',
  Gullivers_Travels: 'https://i.postimg.cc/0Q7tP0Lh/Gulliver-s-Travels.jpg',
  Clarissa: 'https://i.postimg.cc/cJysKgGN/f120c581f1c831d884d0ab1be66cb4ea.jpg',
  Tom_Jones: 'https://i.postimg.cc/43LtD7LV/1281362.jpg',
  Emma: 'https://i.postimg.cc/vTMQXXrz/Emma.jpg',
  Frankenstein: 'https://i.postimg.cc/brFBdwwt/Frankenstein.jpg',
  Nightmare_Abbey: 'https://i.postimg.cc/mDdsNRrb/Nightmare-Abbey.jpg',
  Sybil: 'https://i.postimg.cc/TP0MfGgr/Sybil.jpg',
  Jane_Eyre: 'https://i.postimg.cc/prY1YJCK/Jane-Eyre.jpg',
};
// add title for the page
const h1 = document.createElement('h1');
h1.innerText = 'The 10 best classical novels';
document.body.appendChild(h1);
// create ul element
const ul = document.createElement('ul');
document.body.append(ul);

// for loop to add information of the books
for (let i = 0; i < bookTitles.length; i++) {
  const info = myBooks[bookTitles[i]];
  const li = document.createElement('li');
  ul.appendChild(li);
  li.id = 'item';

  // add the name
  const h2 = document.createElement('h2');
  //  h2.innerText = bookTitles[i];
  //  li.appendChild(h2);
  h2.innerText = info.name;
  li.appendChild(h2);
  const author = document.createElement('p');

  // add the Author
  li.appendChild(author);
  author.className = 'author';
  author.innerText = 'Author: ' + info.author;

  // add language
  const language = document.createElement('p');
  li.appendChild(language);
  language.className = 'language';
  language.innerText = 'language: ' + info.language;
}

// for loop to add the covers
for (const title of bookTitles) {
  const li = document.getElementById('item');
  const img = document.createElement('img');
  li.appendChild(img);
  img.setAttribute('src', bookCover[title]);
  img.setAttribute('alt', 'a cover for ' + myBooks[title].name);
  ul.appendChild(li);
}
