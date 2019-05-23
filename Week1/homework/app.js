'use strict';

{
  // Task 1.1
  const bookTitles = [
    'macbeth',
    'so_long_a_letter',
    'silas_marner',
    'julius_caesar',
    'the_gods_are_not_to_blame',
    'things_fall_apart',
    'chike_and_the_river',
    'a_man_for_all_seasons',
    'installing_and_configuring_windows_10',
    'installing_and_configuring_windows_server_2012',
  ];

  // Task 1.4
  const booksObject = {
    macbeth: {
      title: 'macbeth',
      language: 'English',
      author: 'William Shakespeare',
    },
    so_long_a_letter: {
      title: 'so_long_a_letter',
      language: 'French',
      author: 'Mariama Ba',
    },
    silas_marner: {
      title: 'silas_marner',
      language: 'English',
      author: 'George Eliot',
    },
    julius_caesar: {
      title: 'julius_caesar',
      language: 'English',
      author: 'William Shakespeare',
    },
    the_gods_are_not_to_blame: {
      title: 'the_gods_are_not_to_blame',
      language: 'English',
      author: 'Ola Rotimi',
    },
    things_fall_apart: {
      title: 'things_fall_apart',
      language: 'English',
      author: 'Chinua Achebe',
    },
    chike_and_the_river: {
      title: 'chike and_the_river',
      language: 'English',
      author: 'Chinua Achebe',
    },
    a_man_for_all_seasons: {
      title: 'a_man_for_all_season',
      language: 'English',
      author: 'Robert Bolt',
    },
    installing_and_configuring_windows_10: {
      title: 'installing_and_configuring_windows_7',
      language: 'English',
      author: 'Andrew Bettany & Andrew Warren',
    },
    installing_and_configuring_windows_server_2012: {
      title: 'installing_and_configuring_windows_server_2012',
      language: 'English',
      author: 'Craig Zacker',
    },
  };

  // Task 1.3 - 1.5
  function actualBooksInfo() {
    const root = document.createElement('div');
    const ul = document.createElement('ul');
    document.body.appendChild(root);
    root.appendChild(ul);

    for (const bookTitle of bookTitles) {
      const li = document.createElement('li');
      li.setAttribute('id', bookTitle);
      ul.appendChild(li);
      const bookInfo = booksObject[bookTitle];

      const h2 = document.createElement('h2');
      const h4 = document.createElement('h4');
      const p = document.createElement('p');

      li.appendChild(h2);
      li.appendChild(h4);
      li.appendChild(p);

      h2.innerText = bookInfo.title;
      h4.innerText = bookInfo.author;
      p.innerText = bookInfo.language;

      h2.id = 'title';
      h4.id = 'author';
      p.id = 'language';
    }
  }

  const bookCovers = {
    macbeth: './img/macbeth.jpg',
    so_long_a_letter: './img/so_long_a_letter.jpg',
    silas_marner: './img/silas_marner.jpg',
    julius_caesar: './img/julius_caesar.jpg',
    the_gods_are_not_to_blame: './img/the_gods_are_not_to_blame.jpg',
    things_fall_apart: './img/things_fall_apart.jpg',
    chike_and_the_river: './img/chike_and_the_river.jpg',
    a_man_for_all_seasons: './img/a_man_for_all_seasons.jpg',
    installing_and_configuring_windows_10: './img/installing_and_configuring_windows_10.jpg',
    installing_and_configuring_windows_server_2012:
      './img/installing_and_configuring_windows_server_2012.jpg',
  };

  // 1.7 - 1.8
  function displayBooks() {
    for (const key of Object.keys(bookCovers)) {
      const li = document.getElementById(key);
      const img = document.createElement('img');
      li.appendChild(img);
      img.setAttribute('src', bookCovers[key]);
    }
  }

  function main() {
    actualBooksInfo();
    displayBooks();
  }

  window.onload = main;
}
