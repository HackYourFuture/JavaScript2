'use strict';

{
  // 1.1
  // const bookTitles = [
  //   'harry_potter_chamber_secrets',
  //   'sufisim',
  //   'the_statue_of_our_souls',
  //   'the_words',
  //   'safahat',
  //   'towards_the_lost_paradise',
  //   'sapiens',
  //   'facade',
  //   'love_and_tolerance',
  //   'from_seed_to_cedar',
  // ];

  const rootDiv = document.getElementById('root');

  // 1.3
  // function getBooks(arr) {
  //   const bookList = document.createElement('ul');
  //   rootDiv.appendChild(bookList);

  //   for (const elem of arr) {
  //     const bookTitle = document.createElement('li');
  //     bookTitle.innerHTML = elem;
  //     bookList.appendChild(bookTitle);
  //   }
  // }
  // getBooks(bookTitles); it is for question 1.3

  const completeBookList = {
    harry_potter_chamber_secrets: {
      id: 'harry_potter_chamber_secrets',
      title: 'Harry Potter Chamber Secrets',
      language: 'English',
      author: 'J.K. Rowling',
    },
    sufisim: {
      title: 'Sufism',
      language: 'English',
      author: 'F. Gulen',
    },
    the_statue_of_our_souls: {
      title: 'The Statue Of Our Souls',
      language: 'English',
      author: 'F. Gulen',
    },
    the_words: {
      title: 'The Words',
      language: 'English',
      author: 'S. Nursi',
    },
    safahat: {
      title: 'Safahat',
      language: 'Turkish',
      author: 'M.A. Ersoy',
    },
    towards_the_lost_paradise: {
      title: 'Towards The Lost Paradise',
      language: 'English',
      author: 'F. Gulen',
    },
    sapiens: {
      title: 'Sapiens',
      language: 'English',
      author: 'Yufal Noah Harari',
    },
    facade: {
      title: 'Facade',
      language: 'English',
      author: 'Esther Verhoef',
    },
    love_and_tolerance: {
      title: 'LOve And Tolarance',
      language: 'English',
      author: 'F. Gulen',
    },
    from_seed_to_cedar: {
      title: 'From Seed To Cedar',
      language: 'Turkish',
      author: 'F.Gulen',
    },
  };

  const imageLink = {
    harry_potter_chamber_secrets: {
      link: './img/harry_potter_chamber_of_the_secrets.jpg',
      alt: 'harry potter',
    },
    sufisim: {
      link: './img/sufism.jpg',
      alt: 'sufism',
    },
    the_statue_of_our_souls: {
      link: './img/the_statue_of_our_souls.jpg',
      alt: 'the statue of our souls',
    },
    the_words: {
      link: './img/the_words.jpeg',
      alt: 'harry potter',
    },
    safahat: {
      link: './img/safahat.jpeg',
      alt: 'safahat',
    },
    towards_the_lost_paradise: {
      link: './img/towards_the_lost_paradise.jpg',
      alt: 'towards the lost paradise',
    },
    sapiens: {
      link: './img/sapiens.jpeg',
      alt: 'sapiens',
    },
    facade: {
      link: './img/facade.jpg',
      alt: 'facade',
    },
    love_and_tolerance: {
      link: './img/love_tolerance.jpg',
      alt: 'love and tolerance',
    },
    from_seed_to_cedar: {
      link: './img/from_seed_to_cedar.jpg',
      alt: 'from seed to cedar',
    },
  };

  function getBookInfo(obj, img) {
    const bookList = document.createElement('ul');
    rootDiv.appendChild(bookList);
    const arrBook = Object.keys(obj);

    for (let i = 0; i < arrBook.length; i++) {
      const bookTitle = document.createElement('li');
      bookTitle.setAttribute('class', 'li-bookTitle');
      bookTitle.setAttribute('id', arrBook[i]);

      bookList.appendChild(bookTitle);
      const bookName = document.createElement('h2');
      bookTitle.appendChild(bookName);
      bookName.innerHTML = obj[arrBook[i]].title;
      bookName.setAttribute('class', 'h2-bookName');

      const author = document.createElement('p');
      bookTitle.appendChild(author);
      author.innerHTML = obj[arrBook[i]].author;
      author.setAttribute('class', 'p-author');

      const language = document.createElement('p');
      bookTitle.appendChild(language);
      language.innerHTML = obj[arrBook[i]].language;
      language.setAttribute('class', 'p-language');
    }
    for (let i = 0; i < arrBook.length; i++) {
      const imgId = document.getElementById(arrBook[i]);
      const coverImage = document.createElement('img');
      imgId.appendChild(coverImage);
      coverImage.src = img[arrBook[i]].link;
      coverImage.alt = img[arrBook[i]].alt;
    }
  }
  getBookInfo(completeBookList, imageLink);
}
