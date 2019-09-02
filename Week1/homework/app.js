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

  const completeBookList = [
    {
      id: 'harry_potter_chamber_secrets',
      title: 'Harry Potter Chamber Secrets',
      language: 'English',
      author: 'J.K. Rowling',
    },
    {
      id: 'sufisim',
      title: 'Sufism',
      language: 'English',
      author: 'F. Gulen',
    },
    {
      id: 'the_statue_of_our_souls',
      title: 'The Statue Of Our Souls',
      language: 'English',
      author: 'F. Gulen',
    },
    {
      id: 'the_words',
      title: 'The Words',
      language: 'English',
      author: 'S. Nursi',
    },
    {
      id: 'safahat',
      title: 'Safahat',
      language: 'Turkish',
      author: 'M.A. Ersoy',
    },
    {
      id: 'towards_the_lost_paradise',
      title: 'Towards The Lost Paradise',
      language: 'English',
      author: 'F. Gulen',
    },
    {
      id: 'sapiens',
      title: 'Sapiens',
      language: 'English',
      author: 'Yufal Noah Harari',
    },
    {
      id: 'facade',
      title: 'Facade',
      language: 'English',
      author: 'Esther Verhoef',
    },
    {
      id: 'love_and_tolerance',
      title: 'LOve And Tolarance',
      language: 'English',
      author: 'F. Gulen',
    },
    {
      id: 'from_seed_to_cedar',
      title: 'From Seed To Cedar',
      language: 'Turkish',
      author: 'F.Gulen',
    },
  ];

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

    for (let i = 0; i < obj.length; i++) {
      const bookTitle = document.createElement('li');
      bookTitle.setAttribute('class', 'li-bookTitle');

      bookList.appendChild(bookTitle);
      const bookName = document.createElement('h2');
      bookTitle.appendChild(bookName);
      bookName.innerHTML = obj[i].title;
      bookName.setAttribute('class', 'h2-bookName');

      const author = document.createElement('p');
      bookTitle.appendChild(author);
      author.innerHTML = obj[i].author;
      author.setAttribute('class', 'p-author');

      const language = document.createElement('p');
      bookTitle.appendChild(language);
      language.innerHTML = obj[i].language;
      language.setAttribute('class', 'p-language');

      const coverImage = document.createElement('img');
      bookTitle.appendChild(coverImage);
      const imgTarget = obj[i].id;
      coverImage.src = img[imgTarget].link;
      coverImage.alt = img[imgTarget].alt;
    }
  }
  getBookInfo(completeBookList, imageLink);
}
