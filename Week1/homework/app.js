'use strict';

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

const myBooks = { 
    Nation_and_Novel:{
    name: 'Nation and Novel',
    author: 'Patrick Parrinder',
    language: 'English',
  },
  Robinson_Crusoe:{
    name: 'Robinson Crusoe',
    author: 'Daniel Defoe',
    language: 'English',
  },
  Gullivers_Travels:{
    name: 'Gulliver’s Travels',
    author: 'Jonathan Swift',
    language: 'English',
  },
  Clarissa:{
    name: 'Clarissa',
    author: 'Samuel Richardson',
    language: 'English',
  },
  Tom_Jones:{
    name: 'Tom Jones ',
    author: 'Henry Fielding',
    language: 'English',
  },
  Emma:{
    name: 'Emma',
    author: 'Jane Austen',
    language: 'English',
  },
  Frankenstein:{
    name: 'Frankenstein',
    author: 'Mary Shelley',
    language: 'English',
  },
  Nightmare_Abbey:{
    name: ' Nightmare Abbey',
    author: 'Thomas Love Peacock',
    language: 'English',
  },
  Sybil:{
    name: 'Sybil',
    author: 'Benjamin Disraeli',
    language: 'English',
  },
  Jane_Eyre :{
    name: 'Jane Eyre',
    author: 'Charlotte Brontë',
    language: 'English',
  },
};
const bookCover = {
  Nation_and_Novel: 'https://i.postimg.cc/bwYx7JBp/L872-0-1.jpg',
  Robinson_Crusoe: 'https://i.postimg.cc/vmJ6ZH31/IMG-3914.jpg',
  Gullivers_Travels:'https://i.postimg.cc/0Q7tP0Lh/Gulliver-s-Travels.jpg',
  Clarissa:'https://i.postimg.cc/cJysKgGN/f120c581f1c831d884d0ab1be66cb4ea.jpg',
  Tom_Jones:'https://i.postimg.cc/43LtD7LV/1281362.jpg',
  Emma:'https://i.postimg.cc/vTMQXXrz/Emma.jpg',
  Frankenstein:'https://i.postimg.cc/brFBdwwt/Frankenstein.jpg',
  Nightmare_Abbey:'https://i.postimg.cc/mDdsNRrb/Nightmare-Abbey.jpg',
  Sybil:'https://i.postimg.cc/TP0MfGgr/Sybil.jpg',
  Jane_Eyre:'https://i.postimg.cc/prY1YJCK/Jane-Eyre.jpg',
};

// Create a function to build a list of books including the required  information.
function bookLibrary(createTheMainList) { 
  for (let i = 0; i < bookTitles.length; i++) {
    // declare the variables to loop through the objects.(bookTitles, myBooks, bookCover)
    const theTitle = bookTitles[i]; // loop through the titles   (bookTitles object)
    const info = myBooks[theTitle]; // loop through the book information (myBooks object)
    const photoOfCover = bookCover[theTitle]; // loop through the covers (bookCover object)

    // declare the variables to build and gather the books details ( name, author, language, cover)
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const author = document.createElement('p');
    const language = document.createElement('p');

    // add li
    createTheMainList.appendChild(li);
    li.className = 'item';

    // add the name
    h2.innerText = info.name;
    li.appendChild(h2);

    // add the cover
    li.appendChild(img);
    img.setAttribute('src', photoOfCover);
    img.setAttribute('alt', 'a cover for ' + info.name);

    // add the Author
    author.innerText = 'Author: ' + info.author;
    li.appendChild(author);
    author.className = 'author';

    // add language
    language.innerText = 'language: ' + info.language;
    li.appendChild(language);
    language.className = 'language';
  }
}
// the next step is to design a function to create a div => add it to the body => and call the bookLibrary(createTheMainList) 
function page() {
  // create div contains  ul & h1
  const listDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');

  // add h1 to the div
  h1.innerText = 'The 10 best classical novels';
  listDiv.appendChild(h1);

  // add ul to the div
  listDiv.appendChild(ul);

  // accessing a <body> element by using  document.body property to add the div to the <body> 
  document.body.appendChild(listDiv);

  // call the function of the creating list {bookLibrary(createTheMainList)}
  bookLibrary(ul);
}

window.addEventListener('load', page);
