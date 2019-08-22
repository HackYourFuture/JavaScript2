'use strict';

{
  //1.1
  /* const bookTitles = [
    'The_Winner_Stands_Alone',
    'The_Autumn_of_the_Patriarch',
    'In_the_Name_of_Identity',
    'War_and_Peace',
    'Pride_and_Prejudice',
    'The_Sound_and_the_Fury',
    'Stories_of_Anton_Chekhov',
    'Leaves_of_Grass',
    'Beloved',
    'Anna_Karenina',
  ];

  // 1.2
  // console.log(bookTitles);


  //1.3
  function generateList() {
    const newList = document.createElement('ul');

    for (let i = 0; i < bookTitles.length; i++) {
      const book = bookTitles[i];
      newList.innerHTML += `<li>${book}</li>`;
    }

    return newList;
  }

  document.body.append(generateList());
}*/
  //1.4
  //Make an object (not an array!) containing information for each book.
  const BooksDetails = {
    The_Winner_Stands_Alone: {
      title: 'The Winner Stands Alone',
      language: 'Portuguese',
      author: 'Paulo Coelho',
    },
    The_Autumn_of_the_Patriarch: {
      title: 'The Autumn of the Patriarch',
      language: 'Spanish',
      author: 'Gabriel García Márquez ',
    },
    In_the_Name_of_Identity: {
      title: 'In the Name of Identity',
      language: 'French',
      author: 'Amin Maalouf',
    },
    War_and_Peace: {
      title: 'War and Peace',
      language: 'Russian',
      author: ' Leo Tolstoy',
    },
    Pride_and_Prejudice: {
      title: 'Pride and Prejudice',
      language: 'English',
      author: 'Jane Austen',
    },
    The_Sound_and_the_Fury: {
      title: 'The Sound and the Fury',
      language: 'English',
      author: 'William Faulkner',
    },
    Stories_of_Anton_Chekhov: {
      title: 'Stories of Anton Chekhov',
      language: 'Russian',
      author: 'Anton Chekhov',
    },
    Leaves_of_Grass: {
      title: 'Leaves of Grass',
      language: 'English',
      author: 'Walt Whitman',
    },
    Beloved: {
      title: 'Beloved',
      language: 'English',
      author: 'Toni Morrison',
    },
    Anna_Karenina: {
      title: 'Anna Karenina',
      language: 'Russian',
      author: ' Leo Tolstoy',
      img: 'covers/cover10.jpg',
    },
  };
  console.log(BooksDetails);

  //1.7
  const BooksCovers = {
    The_Winner_Stands_Alone: "./img/cover1.jpg",
    The_Autumn_of_the_Patriarch: './img/cover2.jpg',
    In_the_Name_of_Identity: './img/cover3.jpg',
    War_and_Peace: './img/cover4.jpg',
    Pride_and_Prejudice: './img/cover5.jpeg',
    The_Sound_and_the_Fury: './img/cover6.jpg',
    Stories_of_Anton_Chekhov: './img/cover7.jpg',
    Leaves_of_Grass: './img/cover8.jpg',
    Beloved: './img/cover9.jpg',
    Anna_Karenina: './img/cover10.jpg',
  };
  console.log(BooksCovers);


  //1.5

  function generateList(obj) {
    const mainTitle = document.createElement('h1');
    document.body.appendChild(mainTitle);
    mainTitle.innerHTML = 'My favorite Books'

    const body = document.getElementsByName('body')
    const ul = document.createElement('ul');
    document.body.appendChild(ul);




    for (let i in obj) {
      const li = document.createElement('li');
      ul.appendChild(li);
      //li.setAttribute('id', [i]);




      const title = document.createElement('h2');
      li.appendChild(title);
      title.innerHTML = obj[i].title;

      const image = document.createElement('img');
      image.setAttribute('src', BooksCovers[i]);
      li.appendChild(image);

      const language = document.createElement('h4');
      li.appendChild(language);
      language.innerHTML = "Language: " + obj[i].language;

      const author = document.createElement('h3');
      li.appendChild(author);
      author.innerHTML = "Author: " + obj[i].author;
    }

  }

  (generateList(BooksDetails));




}

