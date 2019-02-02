'use strict';

{
  const bookTitles = [
    'So_Long_A_Letter',
    'Macbeth',
    'Julius_Caesar',
    'Silas_Marner',
    'The_Gods_Are_Not_To_Blame',
    'Things_Fall_Apart',
    'Database_Processing',
    'JavaScript_For_Web_Developers',
    'Installing_And_Configuring_Windows_10',
    'Installing_And_Configuring_Windows_Server_2012_R2'
  ];

  const booksInformation = {
    So_Long_A_Letter: {
      title: 'So Long A Letter',
      language: 'French',
      author: 'Mariama Ba'
    },
    Macbeth: {
      title: 'Macbeth',
      language: 'English',
      author: 'William Shakespeare'
    },
    Julius_Caesar: {
      title: 'Julius Caesar',
      language: 'English',
      author: 'William Shakespeare'
    },
    Silas_Marner: {
      title: 'Silas Marner',
      language: 'English',
      author: 'George Eliot'
    },
    The_Gods_Are_Not_To_Blame: {
      title: 'The Gods Are Not To Blame',
      language: 'English',
      author: 'Ola Rotimi'
    },
    Things_Fall_Apart: {
      title: 'Things Fall Apart',
      language: 'English',
      author: 'Chinua Achebe'
    },
    Database_Processing: {
      title: 'Database Processing',
      language: 'English',
      author: 'David Kroenke'
    },
    JavaScript_For_Web_Developers: {
      title: 'JavaScript For Web Developers',
      language: 'English',
      author: 'Nicholas C. Zakas'
    },
    Installing_And_Configuring_Windows_10: {
      title: 'Installing And Configuring Windows 10',
      language: 'English',
      author: 'Andrew Bettany'
    },
    Installing_And_Configuring_Windows_Server_2012_R2: {
      title: 'Installing And Configuring Windows Server 2012 R2',
      language: 'English',
      author: 'Craig Zacker'
    }
  };

  function createList() {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (const bookTitle of bookTitles) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.setAttribute('id', bookTitle);
      const bookInfo = booksInformation[bookTitle];

      const h2 = document.createElement('h2');
      li.appendChild(h2);
      h2.textContent = bookInfo.title;

      const h3 = document.createElement('h3');
      li.appendChild(h3);
      h3.textContent = bookInfo.language;

      const p = document.createElement('p');
      li.appendChild(p);
      p.textContent = bookInfo.author;
    }
  }

  const bookCovers = {
    So_Long_A_Letter: './images/So_Long_A_Letter.jpeg',
    Macbeth: './images/Macbeth.jpeg',
    Julius_Caesar: './images/Julius_Caesar.jpeg',
    Silas_Marner: './images/Silas_Marner.jpeg',
    The_Gods_Are_Not_To_Blame: './images/The_Gods_Are _Not _To _Blame.jpeg',
    Things_Fall_Apart: './images/Things_Fall_Apart.jpeg',
    Database_Processing: './images/Database_Processing.jpg',
    JavaScript_For_Web_Developers: './images/JavaScript_For_Web_Developers.jpeg',
    Installing_And_Configuring_Windows_10: './images/Installing_And_Configuring_Windows_10.jpg',
    Installing_And_Configuring_Windows_Server_2012_R2:
      './images/Installing_And_Configuring_Windows_Server_2012.jpg'
  };

  function displayBooks() {
    for (const key of Object.keys(bookCovers)) {
      const li = document.getElementById(key);
      const img = document.createElement('img');
      li.appendChild(img);
      img.setAttribute('src', `${bookCovers[key]}`);
    }
  }

  function main() {
    createList();
    displayBooks();
  }
  window.onload = main;
}
