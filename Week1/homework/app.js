'use strict';

{
  /*
  const myBookTitles = [
    // Replace with your own book titles
    'Siddhartha',
    'one_hundred_years_of_solitude',
    'the_metamorphosis',
    'hamlet',
    'heidi',
    'frankenstein',
    'lolita',
    'ulysses',
    'deception',
    'scandal',
  ];

  // Replace with your own code
 
  function generateList() {
    const ul = document.createElement('ul');

    for (let i = 0; i < myBookTitles.length; i++) {
      const book = myBookTitles[i];
      const listItem = document.createElement('li');
      listItem.innerHTML = book;
      ul.appendChild(listItem);
    }
    return ul;
  }
  document.body.append(generateList());
*/

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

  function booksInfo() {
    const ul = document.createElement('ul');

    // Use "for in" loop with objects
    for (const book in myBooks) {
      const listItem = document.createElement('li');
      listItem.setAttribute('id', book);

      // create book title and link it to listItem. + add some styling.
      const bookTitle = document.createElement('h2');
      bookTitle.textContent = myBooks[book].title;
      listItem.style.listStyle = 'none';
      listItem.appendChild(bookTitle);

      // create book author and link it to listItem.
      const booksAuthor = document.createElement('p');
      booksAuthor.textContent = 'Author: ' + myBooks[book].author;
      listItem.appendChild(booksAuthor);

      // create book language and link it to listItem.
      const Bookslanguage = document.createElement('p');
      Bookslanguage.textContent = 'Language: ' + myBooks[book].language;
      listItem.appendChild(Bookslanguage);

      ul.appendChild(listItem);
    }
    // link the ul to the index file
    document.body.appendChild(ul);
  }
  booksInfo();

  /* Create new object for the book covers. 
  Used the same key names that been used in the nested objects in myBooks. 
  That will place each image under the right book title */
  const booksCoverObject = {
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
    my_name_is_red: 'https://upload.wikimedia.org/wikipedia/en/a/a4/MyNameIsRed.jpg',
    sarmada:
      'https://media.newyorker.com/photos/590953e42179605b11ad3bbc/master/w_1298,c_limit/sarmadaimage.jpg',
  };

  function bookCovers() {
    for (const book in myBooks) {
      // Create an image tage for the covers and link it to book key in myBooks object. +  styling the image width.
      const cover = document.createElement('img');
      cover.style.width = '350px';
      cover.setAttribute('src', booksCoverObject[book]);

      const bookCoverslist = document.getElementById(book);

      // link the covers to the book
      bookCoverslist.appendChild(cover);
    }
  }
  bookCovers();

  //
}
