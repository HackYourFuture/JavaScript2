'use strict';
//1.git

const bookIds = [
  'oliver_twist',
  'hamlet',
  'antony_and_cleopatra',
  'macbeth',
  'waiting_for_godot',
  'arms_and_the_man',
  'the-merchant_of_venice',
  'crime_and_punishment',
  'romeo_and_juliet',
  'a_tale_of_two_cities',
];
//console.log(bookIds);

//3.
function books(bookIds) {
  const ul = document.createElement('ul');
  document.items.appendChild(ul);
  for (let index = 0; index < bookIds.length; index++) {
    const li = document.createElement('li');
    li.textContent = bookIds[index];
    ul.appendChild(li);
  }
}

//4.
const DifferentBooks = [
  {
    title: 'Oliver Twist',
    language: 'English',
    author: 'Charles-Dickens',
  },
  {
    title: 'Hamlet',
    language: 'English',
    author: 'Shakespeare',
  },
  {
    title: 'Antony and Cleopatra',
    language: 'English',
    author: 'Shakespeare',
  },
  {
    title: 'Macbeth',
    language: 'English',
    author: 'Shakespeare',
  },
  {
    title: 'Waiting for Godot',
    language: 'English',
    author: 'Samuel Becket',
  },
  {
    title: 'Arms and the Man',
    language: 'English',
    author: 'George Bernard Show',
  },
  {
    title: 'The Merchant of Venice',
    language: 'English',
    author: 'Shakespeare',
  },
  {
    title: 'Crime and Punishment',
    language: 'Russian',
    author: 'Fyodor Dostoevsky',
  },
  {
    title: 'Romeo and Juliet',
    language: 'English',
    author: 'Shakespeare',
  },
  {
    title: 'A Tale of Two Cities',
    language: 'English',
    author: 'Charles Dickens',
  },
];

//5.
//Can NOT answer it.

//7.
const newBookIds = {
  oliver_twist: './img/oliver_twist.jpg',
  hamlet: './img/hamlet.jpg',
  antony_and_cleopatra: './img/antony_and_cleopatra.jpg',
  macbeth: './img/macbeth.jpg',
  waiting_for_godot: './img/waiting_for-godot.jpg',
  arms_and_the_man: './img/arms_and_the_man.jpg',
  the_merchant_of_venice: './img/the_merchant_of_venice.jpg',
  crime_and_punishment: './img/crime_and_punishment.jpg',
  romeo_and_juliet: './img/romeo_and_juliet.jpg',
  a_tale_of_two_cities: './img/a_tale_of_two_cities.jpg',
};

//8.
const entries = DifferentBooks.length;
for (let index = 0; index < entries; index++) {
  console.log(entries.author);
}
