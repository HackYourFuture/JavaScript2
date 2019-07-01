'use strict';

{
  // const bookTitles = [
  //   'a_tale_of_two_cities',
  //   'rogue_lawyer',
  //   'madonna_in_a_fur_coat',
  //   'crime_and_punishment',
  //   'my_name_is_red',
  //   'to_kill_a_mockingbird',
  //   'the_handmaids_tale',
  //   'chess',
  //   'the_atlas_of_misty_continents',
  //   'lord_of_the_flies',
  // ];

  const bookDetails = {
    a_tale_of_two_cities: {
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      language: 'English',
      published: 1859,
    },
    rogue_lawyer: {
      title: 'Rogue Lawyer',
      author: 'John Grisham',
      language: 'English',
      published: 2015,
    },
    madonna_in_a_fur_coat: {
      title: 'Madonna in a Fur Coat',
      author: 'Sabahattin Ali',
      language: 'Turkish',
      published: 1943,
    },
    crime_and_punishment: {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoyevsky',
      language: 'English',
      published: 1866,
    },
    my_name_is_red: {
      title: 'My Name is Red',
      author: 'Orhan Pamuk',
      language: 'English',
      published: 1998,
    },
    to_kill_a_mockingbird: {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      language: 'English',
      published: 1960,
    },
    the_handmaids_tale: {
      title: "The Handmaid's Tale",
      author: 'Margaret Atwood',
      language: 'English',
      published: 1985,
    },
    chess: {
      title: 'A Chess Story',
      author: 'Stefan Zweig',
      language: 'English',
      published: 1941,
    },
    the_atlas_of_misty_continents: {
      title: 'Puslu Kitalar Atlasi',
      author: 'Ihsan Oktay Anar',
      language: 'English',
      published: 1995,
    },
    lord_of_the_flies: {
      title: 'Lord of the Flies',
      author: 'William Golding',
      language: 'English',
      published: 1954,
    },
  };

  const bookImages = {
    a_tale_of_two_cities: './img/a_tale_of_two_cities.jpg',
    rogue_lawyer: './img/rogue_lawyer.jpg',
    madonna_in_a_fur_coat: './img/madonna_in_a_fur_coat.jpg',
    crime_and_punishment: './img/crime_and_punishment.jpg',
    my_name_is_red: './img/my_name_is_red.jpg',
    to_kill_a_mockingbird: './img/to_kill_a_mockingbird.jpg',
    the_handmaids_tale: './img/the_handmaids_tale.jpg',
    chess: './img/chess.png',
    the_atlas_of_misty_continents: './img/the_atlas_of_misty_continents.jpg',
    lord_of_the_flies: './img/lord_of_the_flies.jpg',
  };

  const createImgSrc = (obj, id) => {
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', obj[id]);
    return imgEl;
  };

  const createBookList = obj => {
    const ul = document.createElement('ul');
    Object.keys(obj).forEach(item => {
      const li = document.createElement('li');
      li.setAttribute('id', item);

      const bookName = document.createElement('h3');
      bookName.classList.add('book-name');
      li.appendChild(bookName);
      bookName.innerText = obj[item].title;

      const authorName = document.createElement('span');
      authorName.classList.add('author-name');
      li.appendChild(authorName);
      authorName.innerText = obj[item].author;

      const published = document.createElement('span');
      published.classList.add('published');
      li.appendChild(published);
      published.innerText = `(${obj[item].published})`;

      const bookImage = createImgSrc(bookImages, item);
      bookImage.setAttribute('alt', obj[item].title);
      li.insertBefore(bookImage, bookName);

      ul.appendChild(li);
    });

    const bookListContainer = document.getElementById('bookList');
    bookListContainer.prepend(ul);
  };

  createBookList(bookDetails);
}
