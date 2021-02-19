'use strict';

{
  const bookTitles = [
    'wolf_hall',
    'secondhand_time',
    'never_let_me_go',
    'the_amber_spyglass',
    'between_the_world_and_me',
    'cloud_atlas',
    'my_brilliant_friend',
    'the_corrections',
    'the_road',
    'life_after_life',
  ];
  function makeBooksList() {
    const uList = document.createElement('ul');
    document.body.appendChild(uList);
    for (let i = 0; i < bookTitles.length; i++) {
      const listElement = document.createElement('li');
      listElement.innerHTML = bookTitles[i];
      uList.appendChild(listElement);
    }
    console.log(uList);
  }
  makeBooksList(bookTitles);
  const booksInformation = {
    wolf_hall: {
      title: 'Wolf hall',
      author: 'Hilary Mantel',
      language: 'English',
    },
    secondhand_time: {
      title: 'Secondhand time',
      author: 'Svetlana Alexievich',
      language: 'English',
    },
    never_let_me_go: {
      title: 'Never let me go',
      author: 'Kazvo Ishiguro',
      language: 'English',
    },
    the_amber_spyglass: {
      title: 'The amber spyglass',
      author: 'Philip Pullmar',
      language: 'English',
    },
    between_the_world_and_me: {
      title: 'Between the world and me',
      author: 'Ta-Nehisi Coates',
      language: 'English',
    },
    cloud_atlas: {
      title: 'Cloud atlas',
      author: 'David Mitchell',
      language: 'English',
    },
    my_brilliant_friend: {
      title: 'My brilliant friend',
      author: 'Elena Ferrante',
      language: 'English',
    },
    the_corrections: {
      title: 'The corrections',
      author: 'Jonathan Franzen',
      language: 'English',
    },
    the_road: {
      title: 'The road',
      author: 'Cormac McCarthy',
      language: 'English',
    },
    life_after_life: {
      title: 'Life after life',
      author: 'Kate Atkinson',
      language: 'English',
    },
  };
  console.log(booksInformation);
  function myBookObject(object) {
    const books = document.createElement('div');
    document.body.appendChild(books);
    const bookTitle = document.createElement('h1');
    bookTitle.innerHTML = `Book title: ${object.title}`;
    books.appendChild(bookTitle);
    const bookAuthor = document.createElement('h3');
    bookAuthor.appendChild(document.createTextNode(`Author: ${object.author}`));
    books.appendChild(bookAuthor);
    const bookLanguage = document.createElement('h4');
    bookLanguage.appendChild(document.createTextNode(`Language: ${object.language}`));
    books.appendChild(bookLanguage);
    return books;
  }

  for (const Key of Object.keys(booksInformation)) {
    document.body.appendChild(myBookObject(booksInformation[Key]));
  }
  const booksCover = {
    wolf_hall: {
      image: './images/wolfhall.jpg',
    },
    secondhand_time: {
      image: './images/secondhandtime.jpg',
    },
    never_let_me_go: {
      image: './images/neverletmego.jpg',
    },
    the_amber_spyglass: {
      image: './images/theamberspyglass.jpg',
    },
    between_the_world_and_me: {
      image: './images/betweentheworld andme.jpg',
    },
    cloud_atlas: {
      image: './images/cloudatlas.jpg',
    },
    my_brilliant_friend: {
      image: './images/mybrillantfriend.jpg',
    },
    the_corrections: {
      image: './images/thecorrections.jpg',
    },
    the_road: {
      image: './images/theroad.jpg',
    },
    life_after_life: {
      image: './images/lifeafterlife.jpg',
    },
  };
  console.log(booksCover);
  function addBookCover(bookCover, books) {
    const div = document.createElement('div');
    for (const key of Object.keys(bookCover)) {
      const listWithImages = document.createElement('ul');
      div.appendChild(listWithImages);
      const source = bookCover[key].image;
      const img = document.createElement('img');
      img.setAttribute('src', source);
      listWithImages.appendChild(img);
      for (const Key of Object.keys(books[key])) {
        const listElements = document.createElement('li');
        listWithImages.appendChild(listElements);
        listElements.innerText = books[key][Key];
      }
    }
    return div;
  }
  document.body.appendChild(addBookCover(booksCover, booksInformation));
}
