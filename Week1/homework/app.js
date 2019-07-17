'use strict';

// never-used so I commented out
// const bookTitles = [
//   'the_lord_the_rings',
//   'the_little_prince',
//   'harry_potter_philosopher_stone',
//   'the_hobbit',
//   'and_then_there_were_none',
//   'dream_the_red_chamber',
//   'the_lion_the_witch_the_wardrobe',
//   'she_a_history_adventure',
//   'the_adventures_pinocchio',
//   'vardi_wala_gunda',
// ];

const bookDetails = {
  The_Lord_the_Rings: {
    title: 'The Lord of the Rings',
    language: 'English',
    author: 'J. R. R. Tolkien',
  },
  The_Little_Prince: {
    title: 'The Little Prince',
    language: 'English',
    author: 'Antoine de Saint-Exupéry',
  },
  Harry_Potter_Philosopher_Stone: {
    title: "Harry Potter and the Philosopher's Stone",
    language: 'English',
    author: 'J. K. Rowling',
  },
  The_Hobbit: {
    title: 'The Hobbit',
    language: 'English',
    author: 'J. R. R. Tolkien',
  },
  And_Then_There_Were_None: {
    title: 'And Then There Were None',
    language: 'English',
    author: 'Agatha Christie',
  },
  Dream_the_Red_Chamber: {
    title: 'Dream of the Red Chamber',
    language: 'English',
    author: 'Cao Xueqin',
  },
  The_Lion_the_Witch_the_Wardrobe: {
    title: 'The Lion, the Witch and the Wardrobe',
    language: 'English',
    author: 'C. S. Lewis',
  },
  She_A_History_Adventure: {
    title: 'She: A History of Adventure',
    language: 'English',
    author: 'H. Rider Haggard',
  },
  The_Adventures_Pinocchio: {
    title: 'The Adventures of Pinocchio',
    language: 'English',
    author: 'Carlo Collodi',
  },
  Vardi_Wala_Gunda: {
    title: 'Vardi Wala Gunda',
    language: 'English',
    author: 'Ved Prakash Sharma',
  },
};

const bookCovers = {
  the_lord_the_rings: '../images/The_Lord_the_Rings.jpg',
  the_little_prince: '../images/The_Little_Prince.jpg',
  harry_potter_philosopher_stone: '../images/Harry_Potter_Philosopher_Stone.jpg',
  the_hobbit: '../images/The_Hobbit.jpg',
  and_then_there_were_none: '../images/And_Then_There_Were_None.jpg',
  dream_the_red_chamber: '../images/Dream_the_Red_Chamber.jpg',
  the_lion_the_witch_the_wardrobe: '../images/The_Lion_the_Witch_the_Wardrobe.jpg',
  she_a_history_adventure: '../images/She_A_History_Adventure.jpg',
  the_adventures_pinocchio: '../images/The_Adventures_Pinocchio.jpg',
  vardi_wala_gunda: '../images/Vardi_Wala_Gunda.jpg',
};

const bookCoverKeys = Object.keys(bookCovers);
const bookCoverValues = Object.values(bookCovers);
const bookInfo = Object.entries(bookDetails);

function addMain() {
  const ul = document.createElement('ul');
  const body = document.body;
  for (let i = 0; i < bookInfo.length; i++) {
    const li = document.createElement('li');
    li.id = bookCoverKeys[i];
    ul.appendChild(li);
    const title = document.createElement('h1');
    title.textContent = 'Title: ' + bookInfo[i][1].title;
    li.appendChild(title);
    const languagePara = document.createElement('p');
    languagePara.textContent = 'Language: ' + bookInfo[i][1].language;
    li.appendChild(languagePara);
    const authorPara = document.createElement('p');
    authorPara.textContent = 'Author: ' + bookInfo[i][1].author;
    li.appendChild(authorPara);

    const images = document.createElement('img');
    images.setAttribute('src', bookCoverValues[i]);
    images.setAttribute('alt', bookCoverKeys[i]);
    li.appendChild(images);
  }
  body.appendChild(ul);
}

window.onload = () => addMain();
