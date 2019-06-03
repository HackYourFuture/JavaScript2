//1.1
('use strict');

const booksIds = [
  'a_tale_of_two_cities.',
  'awaken_the_giant_within.',
  'david_copperfield.',
  'nlp.',
  'notes_from_a_friend.',
  'stress_free_life.',
  'arabian_nights.',
  'the_secret.',
  'unlimited_power.',
  'the_power_of_self_mastery.',
];
console.log(booksIds);

//1.3

// listBooks = booksIds => {
//   const body = document.querySelector('body');
//   const h2 = document.createElement('h2');
//   h2.textContent = 'JS2 - Week1 - H.W';
//   body.appendChild(h2);
//   const ul = document.createElement('ul');
//   document.body.appendChild(ul);
//   ul.id = 'booksIds';

//   for (let i = 0; i < booksIds.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = booksIds[i];
//     ul.appendChild(li);
//   }
// };
// listBooks(booksIds);

//1.4
const booksDetails = {
  a_tale_of_two_cities: {
    title: 'a_tale_of_two_cities',
    language: 'English',
    author: 'charles_dickens',
  },
  awaken_the_giant_within: {
    title: 'awaken_the_giant_within',
    language: 'English',
    author: 'Anthony Robbins',
  },
  david_copperfield: {
    title: 'david_copperfield',
    language: 'English',
    author: 'charles_dickens',
  },
  nlp: {
    title: 'nlp',
    language: 'Arabic',
    author: 'Ibrahim el_fiky',
  },
  notes_from_a_friend: {
    title: 'notes_from_a_friend',
    language: 'English',
    author: 'Anthony Robbins',
  },
  stress_free_life: {
    title: 'stress_free_life',
    language: 'Arabic',
    author: 'Ibrahim el_fiky',
  },
  Arabian_Nights: {
    title: 'Arabian_Nights',
    language: 'Arabic',
    author: 'unknown',
  },
  the_secret: {
    title: 'the_secret',
    language: 'English',
    author: 'Rhonda_Byrne',
  },
  unlimited_power: {
    title: 'unlimited_power',
    language: 'English',
    author: 'Anthony Robbins',
  },
  the_power_of_self_mastery: {
    title: 'the_power_of_self_mastery',
    language: 'Arabic',
    author: 'Ibrahim el_fiky',
  },
};
console.log(booksDetails);

//1.3
listBooks = booksIds => {
  for (let i = 0; i < booksIds.length; i++) {
    const body = document.querySelector('body');
    body.innerHTML = '<ul>unforgettable books</ul>';
    document.querySelector('ul')[0].setAttribute('id', 'booksIds');
    document.querySelector('#booksIds').appendChild(li);
    ('<li>booksIds[i]</li>');
  }
};
listBooks(booksIds);

// listDetails = booksDetails => {
//   document.body.innerHTML = '<ul>unforgettable books</ul>';
//   //document.appendChild('body');
//   let li = '<li> booksDetails[i] </li>';

//   for (let i = 0; i < booksDetails.length; i++) {
//     document.ul.innerHTML = '<li> booksDetails[i] </li>';
//     document.ul.appendChild('li');
//   }
// };

//listDetails(booksDetails);

//1.7
// const booksCovers = {
//   a_tale_of_two_cities: 'file:///Users/riamalali/Desktop/js2w1hw/a_tale_of_two_cities.jpg',
//   awaken_the_giant_within: 'file:///Users/riamalali/Desktop/js2w1hw/Awaken_the_Giant_Within.jpg',
//   david_copperfield: 'file:///Users/riamalali/Desktop/js2w1hw/david_copperfield.jpg',
//   nlp: 'file:///Users/riamalali/Desktop/js2w1hw/neuro-linguistic-programming.jpg',
//   notes_from_a_friend: 'file:///Users/riamalali/Desktop/js2w1hw/notesfromafriend.jpg',
//   stress_free_life: 'file:///Users/riamalali/Desktop/js2w1hw/stress_free_life.jpg',
//   arabian_nights: 'file:///Users/riamalali/Desktop/js2w1hw/the_arabian_nights.jpg',
//   the_secret: 'file:///Users/riamalali/Desktop/js2w1hw/the_secret.jpg',
//   unlimited_power: 'file:///Users/riamalali/Desktop/js2w1hw/unlimited_power.jpg',
//   the_power_of_self_mastery:
//     'file:///Users/riamalali/Desktop/js2w1hw/the_power_of_self_mastery.jpg',
// };

//8
