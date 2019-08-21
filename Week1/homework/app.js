'use strict';
//1.1

const bookTitles = [
  // Replace with your own book titles
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

console.log(bookTitles);

//1.2

console.log(bookTitles[2]);

//1.3
let button = document.getElementById('clickButton');

button.addEventListener('click', function() {
  const divElement = document.createElement('div');

  document.getElementsByClassName('flexbox1')[0].appendChild(divElement);
  let list = document.createElement('ul');
  divElement.appendChild(list);
  let line = document.createElement('li');
  line.innerText = 'harry_potter_chamber_secrets';
  list.appendChild(line);

  let line1 = document.createElement('li');
  line1.innerText = 'the_selfish_gene';
  list.appendChild(line1);

  let line2 = document.createElement('li');
  line2.innerText = 'thinking_fast_slow';
  list.appendChild(line2);

  let line3 = document.createElement('li');
  line3.innerText = 'the_idiot_brain';
  list.appendChild(line3);

  let line4 = document.createElement('li');
  line4.innerText = 'the_laws_of_human_nature';
  list.appendChild(line4);

  let line5 = document.createElement('li');
  line5.innerText = 'how_to_win_friends';
  list.appendChild(line5);

  let line6 = document.createElement('li');
  line6.innerText = 'how to analyze people';
  list.appendChild(line6);

  let line7 = document.createElement('li');
  line7.innerText = 'think_data_structure';
  list.appendChild(line7);
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

buttonTry.addEventListener('click', function getBookDetails() {
  const bookInfo = Object.entries(bookDetails);
  console.log(bookInfo);

  for (let i = 0; i < bookInfo.length; i++) {
    const divBook = document.createElement('div');
    const li = document.createElement('li');
    const ul = document.createElement('ul');
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
    document.getElementsByClassName('flexbox2')[0].appendChild(divBook);
  }
});

//1.7

const objbookCover = {
  harryImage: 'https://images-na.ssl-images-amazon.com/images/I/81cgMGrqhdL._SY606_.jpg',
  selfishImage: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/8/0/0/6/9200000056066008.jpg',
  thinkingImage: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/4/4/4/9200000099334444.jpg',
  idiotImage: 'https://images-eu.ssl-images-amazon.com/images/I/51Orxc8w68L.jpg',
};

const bookCover = Object.values(objbookCover);

console.log(bookCover);

let bookImage = document.getElementById('imageButton');

bookImage.addEventListener('click', function() {
  const bookCoverDiv = document.createElement('div');
  bookCoverDiv.setAttribute('class', 'imageDiv');
  document.getElementsByClassName('flexbox3')[0].appendChild(bookCoverDiv);

  for (let i = 0; i < bookCover.length; i++) {
    const bookCoverImage = document.createElement('img');
    bookCoverImage.src = bookCover[i];
    bookCoverDiv.appendChild(bookCoverImage);
  }
});
