'use strict';

{
  const bookTitles = [
    'siddhartha',
    'cities_of_salt',
    'the_metamorphosis',
    'hamlet',
    'heidi',
    'frankenstein',
    'lolita',
    'ulysses',
    'my_name_is_red',
    'sarmada',
  ];

  const myBooks = {
    siddhartha: {
      title: 'Siddhartha',
      language: 'English',
      author: 'Hermann Hesse',
    },
    cities_of_salt: {
      title: 'Cities of Salt',
      language: 'Arabic',
      author: 'Abdelrahman Munif',
    },
    the_metamorphosis: {
      title: 'The Metamorphosis',
      language: 'German',
      author: 'Franz Kafka',
    },
    hamlet: {
      title: 'Hamlet',
      language: 'English',
      author: 'William Shakespeare',
    },
    heidi: {
      title: 'Heidi',
      language: 'English',
      author: 'Johanna Spyri',
    },
    frankenstein: {
      title: 'Frankenstein',
      language: 'English',
      author: 'Mary Shelley',
    },
    lolita: {
      title: 'Lolita',
      language: 'English',
      author: 'Vladimir Nabokov',
    },
    ulysses: {
      title: 'Ulysses',
      language: 'English',
      author: 'James Joyce',
    },
    my_name_is_red: {
      title: 'My name is red',
      language: 'Turkish',
      author: 'Orhan Pamuk',
    },
    sarmada: {
      title: 'sarmada',
      language: 'Arabic',
      author: 'Fadi Azzam',
    },
  };

  const bookCovers = {
    siddhartha:
      'https://upload.wikimedia.org/wikipedia/commons/3/3e/Vorzugsausgabe_der_Erstauflage_von_1922%2C_Originalverlagseinband.JPG',
    cities_of_salt: 'https://images-na.ssl-images-amazon.com/images/I/51-o%2BeOPJBL.jpg',
    the_metamorphosis: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Metamorphosis.jpg',
    hamlet: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/7/6/1/4/9200000050294167.jpg',
    heidi: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Spyri_Heidi_Cover_1887.jpg',
    frankenstein:
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Frankenstein_1818_edition_title_page.jpg',
    lolita: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Lolita_1955.JPG',
    ulysses: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg',
    my_name_is_red: 'http://prosecraft.io/library/orhan-pamuk/my-name-is-red/cover-art.572x900.jpg',
    sarmada: 'https://www.interlinkbooks.com/wp-content/uploads/2018/11/9781566568722.jpg',
  };

  // Create and append unorderd ul & li
  function generateList() {
    const createUl = document.createElement('ul');
    document.body.appendChild(createUl);

    for (let i = 0; i < bookTitles.length; i++) {
      const createLi = document.createElement('li');
      createLi.setAttribute('id', bookTitles[i]);
      createUl.appendChild(createLi);
    }
  }

  function generateBookCards() {
    // Add Title
    for (let i = 0; i < bookTitles.length; i++) {
      const createHeading = document.createElement('h3');
      document.getElementById(bookTitles[i]).appendChild(createHeading);
      createHeading.innerText = myBooks[bookTitles[i]].title;

      // Add Language
      const createLanguage = document.createElement('p');
      document.getElementById(bookTitles[i]).appendChild(createLanguage);
      createLanguage.innerText = 'Language: ' + myBooks[bookTitles[i]].language;

      // Add Author
      const createAuthor = document.createElement('p');
      document.getElementById(bookTitles[i]).appendChild(createAuthor);
      createAuthor.innerText = 'Author: ' + myBooks[bookTitles[i]].author;
    }
    // Add Covers
    for (const cover of Object.keys(bookCovers)) {
      const createImg = document.createElement('img');
      const list = document.getElementById(cover);
      list.appendChild(createImg);
      createImg.setAttribute('src', bookCovers[cover]);
    }
  }

  function main() {
    generateList();
    generateBookCards();
  }
  window.onload = main();
}
