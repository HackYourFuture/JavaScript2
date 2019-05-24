'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'crime_and_punishment',
    'the_idiot',
    'poor_folk',
    'demons',
    'the_gambler',
    'the_insulted_and_humiliated',
    'the_brothers_karamazov',
    'anna_karenina',
    'war_and_peace',
    'resurrection',
  ];

  const bookProperties = {
    crime_and_punishment: {
      title: 'Crime and Punishment',
      language: 'Russian',
      author: 'Dostoyevski',
    },

    the_idiot: {
      title: 'Poor Folk',
      language: 'Russian',
      author: 'Dostoyevski',
    },
    poor_folk: {
      title: 'Poor Folk',
      language: 'Russian',
      author: 'Dostoyevski',
    },

    demons: {
      title: 'Demons',
      language: 'Russian',
      author: 'Dostoyevski',
    },

    the_gambler: {
      title: 'The Gambler',
      language: 'Russian',
      author: 'Dostoyevski',
    },

    the_insulted_and_humiliated: {
      title: 'The Insulted and Humiliated',
      language: 'Russian',
      author: 'Dostoyevski',
    },

    the_brothers_karamazov: {
      title: 'The Brothers Karamazov',
      language: 'Russian',
      author: 'Dostoyevski',
    },

    anna_karenina: {
      title: 'Anna Karenina',
      language: 'Russian',
      author: 'Tolstoy',
    },

    war_and_peace: {
      title: 'War and Peace',
      language: 'Russian',
      author: 'Tolstoy',
    },

    resurrection: {
      title: 'Resurrection',
      language: 'Russian',
      author: 'Tolstoy',
    },
  };

  const imageObjects = {
    crime_and_punishment:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/07/181309.jpg',
    the_idiot:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/07/cover-jpg-rendition-320-492.png',
    poor_folk:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/07/cover-jpg-rendition-320-492-2.png',
    demons:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/07/cover-jpg-rendition-320-492-3.png',
    the_gambler:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/07/cover-jpg-rendition-320-492-4.png',
    the_insulted_and_humiliated:
      'https://img.theculturetrip.com/wp-content/uploads/2015/07/51fu5jzungl.jpg',
    the_brothers_karamazov:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/07/cover-jpg-rendition-320-492-5.png',
    anna_karenina:
      'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/10/anna-karenina.jpg',
    war_and_peace: 'http://images.penguinrandomhouse.com/cover/700jpg/9781400079988',
    resurrection:
      'https://img.theculturetrip.com/1440x/smart/images/56-3961671-144317773402d4e9a0aaa04420a47690267d66904b.jpg',
  };

  const root = document.querySelector('body');
  const bookList = document.createElement('ul');
  const header = document.createElement('h1');
  header.innerHTML = 'Books By Dostoyevski and Tolstoy';
  root.appendChild(bookList);
  bookList.appendChild(header);
  header.style.textAlign = 'center';

  for (let i = 0; i < bookTitles.length; i++) {
    const listItem = document.createElement('li');
    const cover = document.createElement('img');
    const title = document.createElement('h2');
    const author = document.createElement('h3');
    const language = document.createElement('h4');

    cover.setAttribute('src', imageObjects[bookTitles[i]]);
    title.innerHTML = bookProperties[bookTitles[i]].title;
    author.innerHTML = bookProperties[bookTitles[i]].author;
    language.innerHTML = bookProperties[bookTitles[i]].language;
    listItem.style.border = '1px dashed orange';
    cover.style.width = '20%';
    title.style.fontSize = '50px';
    title.style.color = 'red';
    cover.style.borderRadius = '10px';

    bookList.appendChild(listItem);
    listItem.appendChild(cover);
    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(language);
  }

  root.style.display = 'flex';
  root.style.justifyContent = 'center';
}
