'use strict';

// creates an array containing book names.
const bookTitles = [
  'war_and_peace',
  'anna_karenina',
  'the_brothers_karamazov',
  'the_count_of_monte_cristo',
  'crime_and_punishment',
  'the_picture_of_dorian_gray',
  'the_metamorphosis',
  'the_little_prince',
  'lolita',
  'one_hundred_years_of_solitude',
];

// shows what is in the array.
// console.log(bookTitles);

// creates an object containing book names,languages and writers.
const bookDetails = {
  war_and_peace: {
    title: 'War and Peace',
    language: 'English',
    author: 'Tolstoy',
  },
  anna_karenina: {
    title: 'Anna Karenina',
    language: 'English',
    author: 'Tolstoy',
  },
  the_brothers_karamazov: {
    title: 'The Brothers Karamazov',
    language: 'English',
    author: 'Fyodor Dostoyevsky',
  },
  the_count_of_monte_cristo: {
    title: 'The Count of Monte Cristo',
    language: 'English',
    author: 'Alexandre Dumas',
  },
  crime_and_punishment: {
    title: 'Crime and Punishment',
    language: 'English',
    author: 'Fyodor Dostoyevsky',
  },
  the_picture_of_dorian_gray: {
    title: 'The Picture of Dorian Gray',
    language: 'English',
    author: 'Oscar Wilde',
  },
  the_metamorphosis: {
    title: 'The Metamorphosis',
    language: 'English',
    author: 'Franz Kafka',
  },
  the_little_prince: {
    title: 'The Little Prince',
    language: 'English',
    author: 'Antoine de Saint-Exupéry',
  },
  lolita: {
    title: 'Lolita',
    language: 'English',
    author: 'Vladimir Nabokov',
  },
  one_hundred_years_of_solitude: {
    title: 'One Hundred Years of Solitude',
    language: 'English',
    author: 'Gabriel García Márquez',
  },
};

// creates an object containing book covers.
const bookCoverList = {
  war_and_peace: './img/war-and-peace.jpg',
  anna_karenina: './img/anna-karenina.jpg',
  the_brothers_karamazov: './img/the-brothers-karamazov.jpg',
  the_count_of_monte_cristo: './img/the-count-of-monte-cristo.jpg',
  crime_and_punishment: './img/crime-and-punishment.jpg',
  the_picture_of_dorian_gray: './img/the-picture-of-dorian-gray.jpg',
  the_metamorphosis: './img/the-metamorphosis.jpg',
  the_little_prince: './img/the-little-prince.jpg',
  lolita: './img/lolita.jpg',
  one_hundred_years_of_solitude: './img/one-hundred-years-of-solitude.jpg',
};

// creates an unordered list and adds to body.
const listElement = document.createElement('ul');
document.body.appendChild(listElement);

// creates a function which shows book names.
// eslint-disable-next-line no-unused-vars
function oldBookInfo() {
  for (let i = 0; i < bookTitles.length; i++) {
    const listItemOld = document.createElement('li');
    listElement.appendChild(listItemOld);
    listItemOld.id = 'list';
    listItemOld.innerHTML = bookTitles[i];
  }
}

// oldBookInfo();

// creates a function which shows book details.
function newBookInfo() {
  // creates elements
  for (let i = 0; i < bookTitles.length; i++) {
    const listItem = document.createElement('li');
    listElement.appendChild(listItem);
    const divElement = document.createElement('div');
    listItem.appendChild(divElement);
    divElement.className = 'mainDiv';
    const bookCover = document.createElement('img');
    divElement.appendChild(bookCover);
    const divElementForInfo = document.createElement('div');
    divElement.appendChild(divElementForInfo);
    divElementForInfo.className = 'secondDiv';
    const title = document.createElement('h2');
    divElementForInfo.appendChild(title);
    const writer = document.createElement('h3');
    divElementForInfo.appendChild(writer);
    const lang = document.createElement('p');
    divElementForInfo.appendChild(lang);
  }
  // creates a method which takes information from bookDetails object.
  const objectValue = Object.values(bookDetails);

  // creates a for loop which takes information from bookDetails object and sends to elements.
  for (let i = 0; i < objectValue.length; i++) {
    document.getElementsByTagName('h2')[i].innerHTML = objectValue[i].title;
    document.getElementsByTagName('h3')[i].innerHTML = objectValue[i].language;
    document.getElementsByTagName('p')[i].innerHTML = objectValue[i].author;
  }

  // creates a method which takes information from bookCoverList object.
  const srcObjectValue = Object.values(bookCoverList);

  // creates a for loop which creates source for img elements.
  for (let i = 0; i < srcObjectValue.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('src', srcObjectValue[i]);
  }

  // creates a for loop which creates alt for img elements.
  // creates a for loop which creates id for li elements.
  for (let i = 0; i < bookTitles.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('alt', bookTitles[i]);
    document.getElementsByTagName('li')[i].setAttribute('id', bookTitles[i]);
  }
}

newBookInfo();
// creates a call which calls the function.
