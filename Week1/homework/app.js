'use strict';
//1.1

const bookTitles = [
  'harry_potter_chamber_secrets',
  'the_selfish_gene',
  'thinking_fast_slow',
  'the_idiot_brain',
  'the_laws_of_human_nature',
  'how to analyze people',
  'how_to_win_friends',
  'visual_thinking',
  'think_data_structure',
  'list_book',
];

//1.2

//1.3
let button = document.getElementById('clickButton');

button.addEventListener('click', function pickBookTitle() {
  const divElement = document.createElement('div');
  document.getElementsByClassName('flexbox1')[0].appendChild(divElement);

  for (let i = 0; i < bookTitles.length; i++) {
    let unorderedList = document.createElement('ul');
    let line = document.createElement('li');
    line.textContent = bookTitles[i];
    divElement.appendChild(unorderedList);
    unorderedList.appendChild(line);
  }
});

//1.4
const bookDetails = {
  objHarryPotter: {
    title: 'Harry Potter Chamber Secrets',
    language: 'English',
    author: 'J.K. Rowling',
  },
  objSelfishGene: {
    title: 'The Selfish Gene',
    language: 'English',
    author: 'Richard Dawkins',
  },
  objThinkingFastSlow: {
    title: 'Thinking Fast and Slow',
    language: 'English',
    author: 'Daniel Kahneman',
  },
  objIdiotBrain: {
    title: 'The Idiot Brain',
    languge: 'English',
    author: 'Dean Burnett',
  },
};

//1.5
const buttonTry = document.getElementById('tryMeButton');
const bookInfo = Object.entries(bookDetails);
console.log(bookInfo);

buttonTry.addEventListener('click', function getBookDetails() {
  const bookInfo = Object.entries(bookDetails);
  console.log(bookInfo);

  for (let i = 0; i < bookInfo.length; i++) {
    const divBook = document.createElement('div');
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    document.getElementsByClassName('flexbox2')[0].appendChild(divBook);
    divBook.appendChild(ul);
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
  }
});

//1.7

const objbookCover = {
  harryImage: 'https://images-na.ssl-images-amazon.com/images/I/81cgMGrqhdL._SY606_.jpg',
  selfishImage: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/8/0/0/6/9200000056066008.jpg',
  thinkingImage: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/4/4/4/9200000099334444.jpg',
  idiotImage: 'https://images-eu.ssl-images-amazon.com/images/I/51Orxc8w68L.jpg',
};

//1.8

const bookCover = Object.values(objbookCover);

console.log(objbookCover);
console.log(bookCover);

let bookImage = document.getElementById('imageButton');

bookImage.addEventListener('click', function pickBookCover() {
  const bookCoverDiv = document.createElement('div');
  bookCoverDiv.setAttribute('class', 'imageDiv');
  document.getElementsByClassName('flexbox3')[0].appendChild(bookCoverDiv);

  for (let i = 0; i < bookCover.length; i++) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    bookCoverDiv.appendChild(ul);
    ul.appendChild(li);
    const title = document.createElement('h1');
    title.textContent = bookInfo[i][1].title;
    li.appendChild(title);
    const bookCoverImage = document.createElement('img');
    bookCoverImage.src = bookCover[i];
    li.appendChild(bookCoverImage);
    bookCoverDiv.appendChild(li);
  }
});
