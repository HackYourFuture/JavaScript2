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

  function createList() {
    const ul = document.createElement('ul');
    for (let i = 0; i < bookTitles.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.setAttribute('id', bookTitles[i]);
    }
  }
  window.onload = createList;

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
    Installing_And_Configuring_Windows_Server_2012: {
      title: 'Installing And Configuring Windows Server 2012',
      language: 'English',
      author: 'Craig Zacker'
    }
  };

  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const bookValue = Object.values(booksInformation);
  const body = document.body;
  function actualInfo() {
    bookValue.forEach(element => {
      h2.textContent = element.title;
      h3.textContent = element.language;
      p.textContent = element.author;
      body.appendChild(h2);
      body.appendChild(h3);
      body.appendChild(p);
      body.innerText += '<hr>';
    });
  }
  window.onload = actualInfo;

  const booksCover = {
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

  const booksKeys = Object.keys(booksCover);
  const coverValues = Object.values(booksCover);
  function displayBooks() {
    booksKeys.forEach(book => {
      const li = document.createElement('li');
      li.textContent = book;
      document.body.appendChild(li);
      coverValues.forEach(cover => {
        const img = document.createElement('img');
        img.setAttribute('src', `${cover}`);
        if (cover.includes(book)) {
          document.body.appendChild(img);
        }
      });
    });
  }
  window.onload = displayBooks;
}
