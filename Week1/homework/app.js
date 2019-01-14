'use strict';

// 1.1
const bookTitles = [
  // Replace with your own book titles
  'things_fall_apart',
  'fairy_tales',
  'the_divine_comedy',
  'the_epic_of_gilgamesh',
  'the_book_of_job',
  'one_thousand_and_one_nights',
  'pride_and_prejudice',
  'the_decameron',
  'ficciones',
  'the_stranger'
];

// Replace with your own code
// console.log(bookTitles);

// 1.3
const ulEle = document.createElement('ul');

function renderTitleBook(ulList) {
  for (const title of bookTitles) {
    const liElement = document.createElement('li');
    liElement.innerText = title;
    ulList.appendChild(liElement);
  }
}

// console.log(ul)
renderTitleBook(ulEle);

// 1.4
const titleProperties = {
  things_fall_apart: {
    title: 'Things Fall Apart',
    language: 'English',
    author: 'Chinua Achebe'
  },
  fairy_tales: {
    title: 'Fairy tales',
    language: 'Denmark',
    author: 'Hans Christian Andersen'
  },
  the_divine_comedy: {
    title: 'The Divine Comedy',
    language: 'Italy',
    author: 'Dante Alighieri'
  },
  the_epic_of_gilgamesh: {
    title: 'The Epic Of Gilgamesh',
    language: 'Akkadian',
    author: 'Unknown'
  },
  the_book_of_job: {
    title: 'The Book Of Job',
    language: 'Hebrew',
    author: 'Wuthering Heights'
  },
  one_thousand_and_one_nights: {
    title: 'One Thousand and One Nights',
    language: 'Arabic',
    author: 'Samuel Beckett'
  },
  pride_and_prejudice: {
    title: 'Pride and Prejudice',
    language: 'English',
    author: 'Jane Austen'
  },
  the_decameron: {
    title: 'The Decameron',
    language: 'Italian',
    author: 'Giovanni Boccaccio'
  },
  ficciones: {
    title: 'Ficciones',
    language: 'Spanish',
    author: 'Jorge Luis Borges'
  },
  the_stranger: {
    title: 'The-Stranger',
    language: 'French',
    author: 'Albert Camus'
  }
};

// 1.5
const ulList = document.createElement('ul');

function renderTitleProps() {
  Object.keys(titleProperties).forEach(item => {
    const liElement = document.createElement('li');
    const headerElement = document.createElement('h1');
    const spanElement = document.createElement('span');
    const paraElement = document.createElement('p');

    headerElement.innerText = titleProperties[item].title;
    spanElement.innerText = titleProperties[item].language;
    paraElement.innerText = titleProperties[item].author;

    liElement.appendChild(headerElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(paraElement);
    ulList.appendChild(liElement);
  });
}
const container = document.getElementById('container');
container.appendChild(ulList);
// console.log(ulList)
renderTitleProps();

// 1.7
const objectBookPhoto = {
  things_fall_apart: './img/ThingsFallApart.jpg',
  fairy_tales: './img/Hans_Christian_Andersen.jpg',
  the_divine_comedy: './img/Michelino_DanteAndHisPoem.jpg',
  the_epic_of_gilgamesh: './img/British_Museum_Flood_Tablet.jpg',
  the_book_of_job: './img/220px-Aleppo_Codex_Joshua_1_1.jpg',
  one_thousand_and_one_nights: './img/Ali_Baba,_by_Maxfield_Parrish.jpg',
  pride_and_prejudice: './img/220px-PrideAndPrejudiceTitlePage.jpg',
  the_decameron: './img/Boccaccio.jpg',
  ficciones: './img/Ficciones.jpg',
  the_stranger: './img/The_Strange.jpg'
};

// 1.8
function coverPhoto() {
  // const keysBookPhoto = Object.keys(objectBookPhoto);

  const ul = document.createElement('ul');
  Object.keys(objectBookPhoto).forEach(img => {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', objectBookPhoto[img]);

    const liElement = document.createElement('li');
    liElement.setAttribute('id', img);
    const header = document.createElement('h1');
    header.innerText = img;

    liElement.appendChild(header);
    liElement.appendChild(imageElement);
    ul.appendChild(liElement);

    document.getElementById('app_container').appendChild(ul);
    // console.log(ul)
  });
}
coverPhoto();
