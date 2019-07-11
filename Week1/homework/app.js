'use strict';

// never-used so I commented out
// const bookTitles = [
//   // Replace with your own book titles
//   'The_Lord_the_Rings',
//   'The_Little_Prince',
//   'Harry_Potter_Philosopher_Stone',
//   'The_Hobbit',
//   'And_Then_There_Were_None',
//   'Dream_the_Red_Chamber',
//   'The_Lion_the_Witch_the_Wardrobe',
//   'She_A_History_Adventure',
//   'The_Adventures_Pinocchio',
//   'Vardi_Wala_Gunda',
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
  The_Lord_the_Rings: '../images/The_Lord_the_Rings.jpg',
  The_Little_Prince: '../images/The_Little_Prince.jpg',
  Harry_Potter_Philosopher_Stone: '../images/Harry_Potter_Philosopher_Stone.jpg',
  The_Hobbit: '../images/The_Hobbit.jpg',
  And_Then_There_Were_None: '../images/And_Then_There_Were_None.jpg',
  Dream_the_Red_Chamber: '../images/Dream_the_Red_Chamber.jpg',
  The_Lion_the_Witch_the_Wardrobe: '../images/The_Lion_the_Witch_the_Wardrobe.jpg',
  She_A_History_Adventure: '../images/She_A_History_Adventure.jpg',
  The_Adventures_Pinocchio: '../images/The_Adventures_Pinocchio.jpg',
  Vardi_Wala_Gunda: '../images/Vardi_Wala_Gunda.jpg',
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
    title.textContent = 'Title: ' + bookInfo[i][1].title; // const bookInfo = Object.entries(bookDetails);
    li.appendChild(title);
    const para1 = document.createElement('p');
    para1.textContent = 'Language: ' + bookInfo[i][1].language;
    li.appendChild(para1);
    const para2 = document.createElement('p');
    para2.textContent = 'Author: ' + bookInfo[i][1].author;
    li.appendChild(para2);

    const images = document.createElement('img');
    images.setAttribute('src', bookCoverValues[i]);
    images.setAttribute('alt', bookCoverKeys[i]);
    li.appendChild(images);
  }
  body.appendChild(ul);
}

// window.onload = () => main();
window.onload = () => addMain();
