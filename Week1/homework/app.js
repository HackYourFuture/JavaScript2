'use strict';

function main() {

  // First part of the assignment from point 2.1 -2.3
  /* const bookList = [
     'sherlock_holmes',
     'murder_on_orient_express ',
     'peril_at_end_house',
     'harry_potter',
     'jane_eyre',
     'tom_sawyer',
     'the_smart_entrepreneur',
     'armenian_history',
     'the_forty_days_of_musa_ler',
     'huckleberry_finn',
   ];
 
   function createList(obj) {
 
     const list = document.createElement('ul');
 
     for (let i = 0; i < bookList.length; i++) {
 
       const listItem = document.createElement('li');
       listItem.appendChild(document.createTextNode(obj[i]));
       list.appendChild(listItem);
     }
 
     document.body.appendChild(list);
   }
 
   createList(bookList);*/


  const pageHeading = document.createElement('h1');
  pageHeading.innerHTML = "Some of the books I've read";
  pageHeading.setAttribute('class', 'title');
  document.body.appendChild(pageHeading);

  const bookListInfo = {

    sherlock_holmes: {

      title: 'The Adventures of Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      language: 'English',

    },

    murder_on_orient_express: {
      title: 'Murder on the Orient Express',
      author: 'Agatha Christie',
      language: 'English',
    },

    peril_at_end_house: {
      title: 'Peril at End House',
      author: 'Agatha Christie',
      language: 'English',
    },
    harry_potter: {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      language: 'English',
    },

    jane_eyre: {
      title: 'Jane Eyre',
      author: 'Charlotte Bronte',
      language: 'English',
    },

    tom_sawyer: {
      title: ' The adventures of Tom Sawyer',
      author: 'Mark Twain',
      language: 'English',
    },

    the_smart_entrepreneur: {
      title: 'The Smart Entrepreneur',
      author: 'Bart Clarysse & Sabrina Kiefer',
      language: 'English',
    },

    history_of_armenia: {
      title: 'History of Armenia',
      author: 'Movses Khorenatsi',
      language: 'Armenian',
    },

    the_forty_days_of_musa_dagh: {
      title: 'The Forty Days of Musa Ler',
      author: 'Franz Werfel',
      language: 'German, Armenian',
    },

    huckleberry_finn: {
      title: 'The adventures of Huckleberry Finn',
      author: 'Mark Twain',
      language: 'English',
    },
  };


  const createList = (obj) => {
    const ul = document.createElement('ul');
    ul.className = 'book-list';
    document.body.appendChild(ul);

    for (const keys in obj) {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const p1 = document.createElement('p');

      li.id = keys;
      h3.appendChild(document.createTextNode('Title: ' + obj[keys].title));
      p.appendChild(document.createTextNode('Author: ' + obj[keys].author));
      p1.appendChild(document.createTextNode('Language: ' + obj[keys].language));
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(p1);
      ul.appendChild(li);
    }
  };

  createList(bookListInfo);

  const bookCover = {
    sherlock_holmes: 'Bookcovers/SherlockH.jpg',
    murder_on_orient_express: 'Bookcovers/orientexpress.jpg',
    peril_at_end_house: 'Bookcovers/EndHouse.jpg',
    harry_potter: 'Bookcovers/harrypotter.jpg',
    jane_eyre: 'Bookcovers/JaneE.jpg',
    tom_sawyer: 'Bookcovers/TomS.jpg',
    the_smart_entrepreneur: 'Bookcovers/TSE.jpg',
    history_of_armenia: 'Bookcovers/ArmenianHistory.jpg',
    forty_days_of_musa_dagh: 'Bookcovers/MusaLer.jpg',
    huckleberry_finn: 'Bookcovers/HF.jpg',
  };

  const ListOfImages = (obj1) => {
    const ul = document.createElement('ul');
    ul.className = 'image-list';

    for (const key in obj1) {
      const li = document.createElement('li');
      const img = document.createElement('img');

      img.src = obj1[key];
      img.alt = 'Cover of book: ' + key;

      li.appendChild(img);
      ul.appendChild(li);
      document.body.appendChild(ul);
    }
  };

  ListOfImages(bookCover);
}

window.addEventListener('load', main);
