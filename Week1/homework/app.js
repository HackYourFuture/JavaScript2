'use strict';
{
  const bookTitles = [
    'a_game_of_thrones',
    'a_clash_of_kings',
    'a_storm_of_swords',
    'a_feast_of_crows',
    'a_dance_with_dragons',
    'harry_potter_chamber_secrets',
    'harry_potter_prisoner_azkaban',
    'harry_potter_goblet_fire',
    'harry_potter_order_phoenix',
    'harry_potter_deathly_hallows'
  ];

  const booksInfo = {
    a_game_of_thrones: {
      title: 'A Song of Ice and Fire - A Game of Thrones',
      language: 'English',
      author: 'George R.R. Martin',
      pages: '694',
    },

    a_clash_of_kings: {
      title: 'A Song of Ice and Fire - A Clash of Kings',
      language: 'English',
      author: 'George R.R. Martin',
      pages: '768',
    },
    a_storm_of_swords: {
      title: 'A Song of Ice and Fire - A Storm of Swords',
      language: 'English',
      author: 'George R.R. Martin',
      pages: '973',
    },
    a_feast_of_crows: {
      title: 'A Song of Ice and Fire - A Feast of crows',
      language: 'English',
      author: 'George R.R. Martin',
      pages: '753',
    },
    a_dance_with_dragons: {
      title: 'A Song of Ice and Fire - A Dance with Dragons',
      language: 'English',
      author: 'George R.R. Martin',
      pages: '1040',
    },
    harry_potter_chamber_secrets: {
      title: 'Harry Potter and the Chamber of Secrets',
      language: 'English',
      author: 'J. K. Rowling',
      pages: '251',
    },
    harry_potter_prisoner_azkaban: {
      title: 'Harry Potter and the Prisoner of Azkaban',
      language: 'English',
      author: 'J. K. Rowling',
      pages: '317',
    },
    harry_potter_goblet_fire: {
      title: 'Harry Potter and the Goblet of Fire',
      language: 'English',
      author: 'J. K. Rowling',
      pages: '636',
    },
    harry_potter_order_phoenix: {
      title: 'Harry Potter and the Order of the Phoenix',
      language: 'English',
      author: 'J. K. Rowling',
      pages: '766',
    },
    harry_potter_deathly_hallows: {
      title: 'Harry Potter and the Deathly Hallows',
      language: 'English',
      author: 'J. K. Rowling',
      pages: '694',
    }
  };

  function main() {
    const container = document.getElementById('myBooks');
    const Header = document.createElement('h1');
    Header.innerHTML = 'My Top 10 Books';
    container.appendChild(Header);

    const booksList = document.createElement('ul');
    container.appendChild(booksList);

    for (const i in booksInfo) {
      const li = document.createElement('li');
      booksList.appendChild(li);
      li.setAttribute("id", [i]);

      const title = document.createElement('h2');
      li.appendChild(title);
      title.innerHTML = booksInfo[i].title;

      const language = document.createElement('p');
      li.appendChild(language);
      language.innerHTML = 'Language: ' + booksInfo[i].language;

      const author = document.createElement('p');
      li.appendChild(author);
      author.innerHTML = 'Author: ' + booksInfo[i].author;

      const pages = document.createElement('p');
      li.appendChild(pages);
      pages.innerHTML = 'Pages: ' + booksInfo[i].pages;
    }


    const images = {
      a_game_of_thrones: './img/a_game_of_Thrones.jpg',
      a_clash_of_kings: './img/a_clash_of_kings.jpg',
      a_storm_of_swords: './img/a_storm_of_swords.jpg',
      a_feast_of_crows: './img/a_feast_of_crows.jpg',
      a_dance_with_dragons: './img/a_dance_with_dragons.jpg',
      harry_potter_chamber_secrets: './img/harry_potter_chamber_secrets.jpeg',
      harry_potter_prisoner_azkaban: './img/harry_potter_prisoner_azkaban.jpg',
      harry_potter_goblet_fire: './img/harry_potter_goblet_fire.jpg',
      harry_potter_order_phoenix: './img/harry_potter_order_phoenix.jpeg',
      harry_potter_deathly_hallows: './img/harry_potter_deathly_hallows.jpg'
    };

    for (const key in images) {
      const img = document.createElement('img');
      img.setAttribute('src', images[key]);
      img.setAttribute('alt', key);

      const imgList = document.createElement('li');
      imgList.appendChild(img);

      const x = document.getElementById(key);
      x.appendChild(imgList);
    }
  }
  window.addEventListener('load', main);
}
