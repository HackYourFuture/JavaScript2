{
  // 1.1

  const myFavoriteBooks = [
    '1984',
    'white_fang',
    'iron_heel',
    'animal_farm',
    'les_miserables',
    'war_and_peace',
    'crime_and_punishment',
    'the_great_gasby',
    'the_red_and_the_black',
    'the_lord_of_the_rings',
  ];

  // 1.3

  // const listBooks = () => {
  //   const ul = document.createElement('ul');
  //   ul.classList.add('books');
  //   ul.setAttribute('id', 'books-id');

  //   myFavoriteBooks.forEach(book => {
  //     const li = document.createElement('li');
  //     li.classList.add('book');
  //     li.textContent = book;
  //     ul.append(li);
  //   });

  //   document.body.prepend(ul);
  // };

  // listBooks();

  // 1.4
  // title, language and author.

  const books = {
    1984: {
      title: '1984',
      language: 'English',
      author: 'George Orwell',
    },
    white_fang: {
      title: 'white fang',
      language: 'English',
      author: 'Jack London',
    },
    iron_heel: {
      title: 'iron heel',
      language: 'English',
      author: 'Jack London',
    },
    animal_farm: {
      title: 'animal farm',
      language: 'English',
      author: 'George Orwell',
    },
    les_miserables: {
      title: 'les miserables',
      language: 'English',
      author: 'Victor Hugo',
    },
    war_and_peace: {
      title: 'war and peace',
      language: 'English',
      author: 'Leo Tolstoy',
    },
    crime_and_punishment: {
      title: 'crime and punishment',
      language: 'English',
      author: 'Fyodor Dostoevsky',
    },
    the_great_gasby: {
      title: 'the great gasby',
      language: 'English',
      author: 'Scott Fitzgerald',
    },
    the_red_and_the_black: {
      title: 'the red and the black',
      language: 'English',
      author: 'Henri Beyle',
    },
    the_lord_of_the_rings: {
      title: 'the lord of the rings',
      language: 'English',
      author: 'J. R. R. Tolkien',
    },
  };

  // 1.7

  const covers = {
    crime_and_punishment: 'books_cover/crime_punish.jpg',
    white_fang: 'books_cover/white_fang.jpg',
    animal_farm: 'books_cover/animal_farm.jpg',
    iron_heel: 'books_cover/iron_heel.jpg',
    the_lord_of_the_rings: 'books_cover/lord_rings.jpg',
    war_and_peace: 'books_cover/war_peace.jpg',
    les_miserables: 'books_cover/les_miserables.jpg',
    the_great_gasby: 'books_cover/the_great_gasby.jpg',
    1984: 'books_cover/1984.jpg',
    the_red_and_the_black: 'books_cover/red_and_black.jpg',
  };

  const listBooksInDetail = bookList => {
    Object.entries(bookList).forEach(book => {
      //
      const bookID = book[0];
      const bookDetails = book[1];
      ///create a div element for each book and write them to body
      const div = document.createElement('div');
      div.setAttribute('id', bookID);
      div.classList.add('book-list');
      document.body.prepend(div);
      ///create a ul element
      const ul = document.createElement('ul');
      ul.classList.add('book');
      div.prepend(ul);
      ///create a li element for each book properties
      const liTitleEl = document.createElement('li');
      liTitleEl.textContent = bookDetails.title;
      liTitleEl.classList.add('list', 'title');

      const liAuthorEl = document.createElement('li');
      liAuthorEl.textContent = bookDetails.author;
      liAuthorEl.classList.add('list', 'author');

      const liLangEl = document.createElement('li');
      liLangEl.textContent = bookDetails.language;
      liLangEl.classList.add('list', 'language');
      // append list elements inside ul element
      ul.append(liTitleEl, liAuthorEl, liLangEl);
    });
  };
  ///create an image element for the book
  const addCovers = (bookCovers, bookObj) => {
    Object.entries(bookCovers).forEach(cover => {
      const coverID = cover[0];
      const coverPath = cover[1];
      //creating books image element and append them inside the new ul which is sibling of other uls
      const ul = document.createElement('ul');
      ul.classList.add('book-cover');
      document.getElementById(coverID).prepend(ul);
      //creating img element and set its attributes and append
      const imgCoverEl = document.createElement('img');
      imgCoverEl.setAttribute('src', coverPath);
      imgCoverEl.setAttribute('alt', bookObj[coverID].title);
      // imgCoverEl.setAttribute('alt', coverID.replace(/_/g, ' ') + ' book cover');
      imgCoverEl.classList.add('cover');
      ul.append(imgCoverEl);
    });
  };

  listBooksInDetail(books);
  addCovers(covers, books);
}
