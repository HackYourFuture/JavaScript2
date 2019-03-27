'use strict';

const bookTitles = [
  'george_orwell_1984',
  'alexandre_dumas_the_count_of_monte_cristo',
  'fyodor_dostoyevsky_the_brothers_karamazov',
  'leo_tolstoy_war_and_peace',
  'charles_dickens_a_tale_of_two_cities',
  'john_steinback_of_mice_and_men',
  'victor_hugo_the_miserables',
  'balzac_the_lily_of_the_valley',
  'turgenev_fathers_and_sons',
  'leo_tolstoy_resurrection',
];

function generateList() {
  const createUl = document.createElement('ul');
  document.body.appendChild(createUl);
  for (let i = 0; i < bookTitles.length; i++) {
    const createLi = document.createElement('li');
    createUl.appendChild(createLi);
    createLi.setAttribute('id', bookTitles[i]);
  }
}

const bookInfo = {
  george_orwell_1984: {
    title: 1984,
    language: 'English',
    author: 'George Orwell',
  },
  alexandre_dumas_the_count_of_monte_cristo: {
    title: 'The Count of Monte Cristo',
    language: 'French',
    author: 'Alexandre Dumas',
  },
  fyodor_dostoyevsky_the_brothers_karamazov: {
    title: 'The Brothers Karamazov',
    language: 'Russian',
    author: 'Fyodor Dostoyevsky',
  },
  leo_tolstoy_war_and_peace: {
    title: 'War and Peace',
    language: 'Russian',
    author: 'Leo Tolstoy',
  },
  charles_dickens_a_tale_of_two_cities: {
    title: 'A Tale Of Two Cities',
    language: 'English',
    author: 'Charles Dickens',
  },
  john_steinback_of_mice_and_men: {
    title: 'Of Mice and Men',
    language: 'English',
    author: 'John Steinback',
  },
  victor_hugo_the_miserables: {
    title: 'The Miserables',
    language: 'French',
    author: 'Victor Hugo',
  },
  balzac_the_lily_of_the_valley: {
    title: 'The Lily Of The Valley',
    language: 'French',
    author: 'Honore De Balzac',
  },
  turgenev_fathers_and_sons: {
    title: 'Fathers and Sons',
    language: 'Russian',
    author: 'Ivan Turgenev',
  },
  leo_tolstoy_resurrection: {
    title: 'Resurrection',
    language: 'Russian',
    author: 'Leo Tolstoy',
  },
};

const bookCovers = {
  george_orwell_1984: 'images/1984.jpg',
  alexandre_dumas_the_count_of_monte_cristo: 'images/montecristo.jpg',
  fyodor_dostoyevsky_the_brothers_karamazov: 'images/karamazov.jpg',
  leo_tolstoy_war_and_peace: 'images/warandpeace.jpg',
  charles_dickens_a_tale_of_two_cities: 'images/twocities.jpg',
  john_steinback_of_mice_and_men: 'images/ofmice.jpg',
  victor_hugo_the_miserables: 'images/miserables.jpg',
  balzac_the_lily_of_the_valley: 'images/valley.jpg',
  turgenev_fathers_and_sons: 'images/fathers.jpg',
  leo_tolstoy_resurrection: 'images/leo.jpg',
};

function generateCover() {
  for (const cover of Object.keys(bookCovers)) {
    const createImg = document.createElement('img');
    const list = document.getElementById(cover);
    list.appendChild(createImg);
    createImg.setAttribute('src', bookCovers[cover]);
    createImg.setAttribute('alt', cover);
  }

  for (let i = 0; i < bookTitles.length; i++) {
    const createHeading = document.createElement('h2');
    document.getElementById(bookTitles[i]).appendChild(createHeading);
    const arrBookInfo = Object.keys(bookInfo);
    createHeading.innerText = bookInfo[arrBookInfo[i]].title;
    // Adds p for language
    const createp1 = document.createElement('p');
    document.getElementById(bookTitles[i]).appendChild(createp1);
    createp1.innerText = bookInfo[arrBookInfo[i]].language;
    // Adds p for author
    const createp2 = document.createElement('p');
    document.getElementById(bookTitles[i]).appendChild(createp2);
    createp2.innerText = bookInfo[arrBookInfo[i]].author;
  }
}

function main() {
  generateList();
  generateCover();
}

window.onload = main();
