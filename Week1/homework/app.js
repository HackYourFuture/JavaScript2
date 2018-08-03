'use strict';
{
  const bookTitles = [
    'hp1',
    'hp2',
    'hp3',
    'hp4',
    'hp5',
    'hp6',
    'hp7',
    'lotr1',
    'lotr2',
    'lotr3'
  ];

  const booksInfo = {
    hp1: {title:'Harry Potter and The Sorcerer Stone', language:'English', author:'JK Rowling'},
    hp2: {title:'Harry Potter and The Chamber of Secrets', language:'English', author:'JK Rowling'},
    hp3: {title:'Harry Potter and The Prisioner of Askaban', language:'English', author:'JK Rowling'},
    hp4: {title:'Harry Potter and The Globet of Fire', language:'English', author:'JK Rowling'},
    hp5: {title:'Harry Potter and The Order of The Phoenix', language:'English', author:'JK Rowling'},
    hp6: {title:'Harry Potter and The Half Blood Prince', language:'English', author:'JK Rowling'},
    hp7: {title:'Harry Potter and The Deathly Hollow', language:'English', author:'JK Rowling'},
    lotr1: {title:'The Lord of The Ring: The Fellowship of the Ring', language:'Spanish', author:'J. R. R. Tolkien'},
    lotr2: {title:'The Lord of The Ring: The Two Towers', language:'Spanish', author:'J. R. R. Tolkien'},
    lotr3: {title:'The Lord of The Ring: The Return of the King', language:'Spanish', author:'J. R. R. Tolkien'},
  }

  const booksImages = {
    hp1: './img/hp1_cover.jpg',
    hp2: './img/hp2_cover.jpg',
    hp3: './img/hp3_cover.jpg',
    hp4: './img/hp4_cover.jpg',
    hp5: './img/hp5_cover.jpg',
    hp6: './img/hp6_cover.jpg',
    hp7: './img/hp7_cover.jpg',
    lotr1: './img/lotr1_cover.jpg',
    lotr2: './img/lotr2_cover.jpg',
    lotr3: './img/lotr3_cover.jpg'
  }
  
  // Replace with your own code

  function setImages(){
    for(let element of Object.keys(booksImages)){
      let li = document.getElementById(element);
      let img = document.createElement("img");      
      img.setAttribute('src', booksImages[element]);
      li.appendChild(img);

    }
  }
  function listBooks(){
    let ul = document.createElement("ul");
    let bookSection = document.getElementById("books");
 
    bookSection.appendChild(ul);
    bookTitles.forEach(element => { 
      let li = document.createElement("li");
      li.setAttribute('id', element);
      let titleHeader = document.createElement("h1");
      let authorHeader = document.createElement("h2");
      let languageHeader = document.createElement("h3");
      let title = document.createTextNode(booksInfo[element].title)
      let language = document.createTextNode(booksInfo[element].language)
      let author = document.createTextNode(booksInfo[element].author)
      titleHeader.appendChild(title);
      authorHeader.appendChild(author);
      languageHeader.appendChild(language);
      li.appendChild(titleHeader);
      li.appendChild(authorHeader);
      li.appendChild(languageHeader);
      ul.appendChild(li);
    });
    setImages();
  }

  window.addEventListener('load', listBooks);
}
