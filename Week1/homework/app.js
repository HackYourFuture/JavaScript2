'use strict';

// ####################################  1.1  ###############################

const bookTitles = [
  'the_godfather',
  'one_hundred_years_of_solitude',
  'pride_and_prejudice',
  'crime_and_punishment',
  'the_call_of_the_wild',
  'nineteen_eighty_four',
  'the_lord_of_the_rings',
  'a_tale_of_two_cities',
  'anna_karenina',
  'war_and_peace',
];

// console.log(bookTitles);

// ####################################  1.3  ###############################

// eslint-disable-next-line no-unused-vars
function makeList(arr) {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    li.innerText = arr[i];
    ul.appendChild(li);
  }
}

// makeList(bookTitles);

// ####################################  1.4  ###############################

const books = {
  the_godfather: {
    id: '',
    title: 'The Godfather',
    language: 'English',
    author: 'Mario Puzo',
  },
  one_hundred_years_of_solitude: {
    id: '',
    title: 'One Hundred Years Of Solitude',
    language: 'English',
    author: 'Gabriel Garcia Marquez',
  },
  pride_and_prejudice: {
    id: '',
    title: 'Pride And Prejudice',
    language: 'English',
    author: 'Jane Austen',
  },
  crime_and_punishment: {
    id: '',
    title: 'Crime And Punishment',
    language: 'English',
    author: 'Fyodor Dostoevsky',
  },
  the_call_of_the_wild: {
    id: '',
    title: 'The Call Of The Wild',
    language: 'English',
    author: 'Jack London',
  },
  nineteen_eighty_four: {
    id: '',
    title: 'Nineteen Eighty-Four',
    language: 'English',
    author: 'George Orwell',
  },
  the_lord_of_the_rings: {
    id: '',
    title: 'The Lord Of The Rings',
    language: 'English',
    author: 'J. R. R. Tolkien',
  },
  a_tale_of_two_cities: {
    id: '',
    title: 'A Tale Of Two Cities',
    language: 'English',
    author: 'Charles Dickens',
  },
  anna_karenina: {
    id: '',
    title: 'Anna Karenina',
    language: 'English',
    author: 'Leo Tolstoy',
  },
  war_and_peace: {
    id: '',
    title: 'War And Peace',
    language: 'English',
    author: 'Leo Tolstoy',
  },
};

for (const prop in books) {
  if (Object.prototype.hasOwnProperty.call(books, prop)) {
    books[prop].id = prop;
  }
}

console.log(books);

// ####################################  1.5  ###############################

function makeBookList(myBooks) {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  for (const book in myBooks) {
    if (Object.prototype.hasOwnProperty.call(myBooks, book)) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const heading = document.createElement('h3');
      li.appendChild(heading);
      heading.innerText = myBooks[book].title;
      const paragraph1 = document.createElement('p');
      li.appendChild(paragraph1);
      paragraph1.innerText = Object.keys(myBooks[book])[0] + ' : ' + myBooks[book].id;
      const paragraph2 = document.createElement('p');
      li.appendChild(paragraph2);
      paragraph2.innerText = Object.keys(myBooks[book])[2] + ' : ' + myBooks[book].language;
      const paragraph3 = document.createElement('p');
      li.appendChild(paragraph3);
      paragraph3.innerText = Object.keys(myBooks[book])[3] + ' : ' + myBooks[book].author;
      const img = document.createElement('img');
      li.appendChild(img);
    }
  }
}

makeBookList(books);

// ####################################  1.7  ###############################

const imgPath = {
  the_godfather: './img/the_godfather.jpg',
  one_hundred_years_of_solitude: './img/one_hundred_years_of_solitude.jpg',
  pride_and_prejudice: './img/pride_and_prejudice.jpg',
  crime_and_punishment: './img/crime_and_punishment.jpg',
  the_call_of_the_wild: './img/the_call_of_the_wild.jpg',
  nineteen_eighty_four: './img/nineteen_eighty_four.jpg',
  the_lord_of_the_rings: './img/the_lord_of_the_rings.jpg',
  a_tale_of_two_cities: './img/a_tale_of_two_cities.jpg',
  anna_karenina: './img/anna_karenina.jpg',
  war_and_peace: './img/war_and_peace.jpg',
};

// ####################################  1.8  ###############################

console.log(Object.keys(imgPath));

function placesImg(imgObj) {
  const listElements = document.querySelectorAll('li');
  for (let i = 0; i < listElements.length; i++) {
    listElements[i].setAttribute('id', bookTitles[i]);
    listElements[i].lastChild.setAttribute('src', imgObj[Object.keys(imgObj)[i]]);
  }
}

placesImg(imgPath);
