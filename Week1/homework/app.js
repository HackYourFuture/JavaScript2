'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'the_count_of_monte_cristo',
    'the_alchemist',
    'footprint',
    'revitalized_land',
    'the_man_who_has_two_graves',
    'home_land',
    'the_last_theorem_of_fermat',
    'the_old_man_and_the_sea',
    'romeo_and_juliet',
  ];

  // Replace with your own code
  // 1.3
  function createUlList(element) {
    const ulList = document.createElement('ul');
    ulList.setAttribute('id', 'bookTitlesList');
    ulList.setAttribute('class', 'bookTitlesList');
    for (let i = 0; i < element.length; i++) {
      const liList = document.createElement('li');
      liList.innerText = element[i];
      liList.setAttribute('class', 'book');
      ulList.appendChild(liList);
    }
    document.body.appendChild(ulList);
  }
  //  1.4
  const bookInformationObject = {
    harry_potter_chamber_secrets: {
      title: bookTitles[0],
      language: 'English',
      author: 'J.K. Rowling',
    },
    the_count_of_monte_cristo: {
      title: bookTitles[1],
      language: 'English',
      author: ' ‎Alexander Dumas',
    },
    the_alchemist: {
      title: bookTitles[2],
      language: 'English',
      author: 'Paulo Coelho',
    },
    footprint: {
      title: bookTitles[3],
      language: 'Uyghur',
      author: 'A. Otkur',
    },
    revitalized_land: {
      title: bookTitles[4],
      language: 'Uyghur',
      author: 'A. Otkur',
    },
    the_man_who_has_two_graves: {
      title: bookTitles[5],
      language: 'Uyghur',
      author: 'A. Turdi',
    },
    home_land: {
      title: bookTitles[6],
      language: 'Uyghur',
      author: 'Z. Sabir',
    },
    the_last_theorem_of_fermat: {
      title: bookTitles[7],
      language: 'Chinese',
      author: 'S. Singh',
    },
    the_old_man_and_the_sea: {
      title: bookTitles[8],
      language: 'English',
      author: 'Ernest Hemingway',
    },
    romeo_and_juliet: {
      title: bookTitles[9],
      language: 'English',
      author: 'William Shakespeare',
    },
  };
  // 1.5
  function displayBookInformation(element) {
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'bookInformationList');
    ul.setAttribute('class', 'bookInformationList');
    // eslint-disable-next-line guard-for-in
    for (const book in element) {
      const li = document.createElement('li');
      li.setAttribute('id', element[book].title);
      ul.appendChild(li);
      li.setAttribute('class', 'book-information');
      const h1 = document.createElement('h1');
      h1.setAttribute('class', 'book-title');
      const p = document.createElement('p');
      p.setAttribute('class', 'book-language-author');
      h1.innerText = element[book].title.toUpperCase();
      p.innerHTML = 'Language: ' + element[book].language + '<br> Author: ' + element[book].author;
      li.appendChild(h1);
      li.appendChild(p);
    }
    document.body.appendChild(ul);
    return ul;
  }

  const bookImages = {
    harry_potter_chamber_secrets: './img/harry_potter_chamber_secrets.jpg',
    the_count_of_monte_cristo: './img/the_count_of_monte_cristo.jpg',
    the_alchemist: './img/the_alchemist.jpg',
    footprint: './img/footprint.jpg',
    revitalized_land: './img/revitalized_land.jpg',
    the_man_who_has_two_graves: './img/the_man_who_has_two_graves.jpg',
    home_land: './img/home_land.jpg',
    the_last_theorem_of_fermat: './img/the_last_theorem_of_fermat.jpg',
    the_old_man_and_the_sea: './img/the_old_man_and_the_sea.jpg',
    romeo_and_juliet: './img/romeo_and_juliet.jpg',
  };
  const bookTitlesArray = Object.keys(bookImages);
  const addPicture = element => {
    // eslint-disable-next-line guard-for-in
    for (const index in element) {
      const img = document.createElement('img');
      img.setAttribute('src', './img/' + element[index] + '.jpg');
      img.setAttribute('alt', element[index]);
      img.setAttribute('class', 'bookImage');
      document.getElementById(element[index]).appendChild(img);
    }
  };

  const main = () => {
    createUlList(bookTitles);
    displayBookInformation(bookInformationObject);
    addPicture(bookTitlesArray);
  };
  main();
}
