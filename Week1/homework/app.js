'use strict';

{
  // const bookTitles = [
  //   'animal_farm', 'hunchback_of_notre_dame', 'les_miserables', 'the_great_escape', 'sapiens_a_brief_history_of_humankind', 'het_meijse_in_de_trein', 'the_da_vinci_code', 'curiosity_shop', 'romeo_and_juliet', 'moby_dick'
  // ];

  //console.log(bookTitles.length);

  const bookInfo = {
    book_1: {
      title: 'animal farm',
      language: 'english',
      author: 'George Orwell',
    },

    book_2: {
      title: 'hunchback of notre dame',
      language: 'english',
      author: 'Victor Hugo',
    },

    book_3: {
      title: 'les miserables',
      language: 'english',
      author: 'Victor Hugo',
    },

    book_4: {
      title: 'the great escape',
      language: 'english',
      author: 'Paul Brickhill',
    },

    book_5: {
      title: 'sapiens a brief history of humankind',
      language: 'english',
      author: 'Yuval Noeh Harari',
    },

    book_6: {
      title: 'het meijse in de trein',
      language: 'dutch',
      author: 'Paula Hawkins',
    },

    book_7: {
      title: 'the da vinci code',
      language: 'english',
      author: 'Dan Brown',
    },

    book_8: {
      title: 'curiosity shop',
      language: 'english',
      author: 'Charles Dickens',
    },

    book_9: {
      title: 'romeo and juliet',
      language: 'english',
      author: 'Shakespeare',
    },

    book_10: {
      title: 'moby dick',
      language: 'english',
      author: 'Herman Melville',
    },
  };

  // for (let x in bookInfo) {
  //   console.log(bookInfo[x]);
  // }

  function main() {
    // create a new  h1
    var h1Element = document.createElement('h1');
    // and give it some content
    var newContent = document.createTextNode('Top 10 Books');
    // add the text node to the newly created h1
    h1Element.appendChild(newContent);
    // add the newly created element and its content into the DOM
    var newElement = document.getElementById('books');
    newElement.appendChild(h1Element);

    for (let x in bookInfo) {
      var newDiv1 = document.createElement('div'); //--------------
      newDiv1.setAttribute('class', 'xyz'); //---------------

      var newDiv = document.createElement('div');
      // create a new  h2
      var title = document.createElement('h2');
      // and give it some content
      var newContent = document.createTextNode('title: ' + bookInfo[x].title);
      // add the text node to the newly created h2
      title.appendChild(newContent);
      newDiv.appendChild(title);
      newDiv1.appendChild(newDiv); //------------------
      // add the newly created element and its content into the DOM
      var newElement = document.getElementById('books');
      newElement.appendChild(newDiv1); //--------------------
      newDiv.setAttribute('id', [x]);

      // create a new  h3

      newDiv1.setAttribute('class', 'xyz'); //-------------------

      var language = document.createElement('h3');
      // and give it some content
      var newContent = document.createTextNode('language: ' + bookInfo[x].language);
      // add the text node to the newly created h3
      language.appendChild(newContent);
      newDiv1.appendChild(language); //------------------------
      // add the newly created element and its content into the DOM
      var newElement = document.getElementById('books');
      newElement.appendChild(newDiv1); //--------------------

      // create a new  h3

      newDiv1.setAttribute('class', 'xyz'); //----------------------

      var author = document.createElement('h4');
      // and give it some content
      var newContent = document.createTextNode('author: ' + bookInfo[x].author);
      // add the text node to the newly created h3
      author.appendChild(newContent);
      newDiv1.appendChild(author); //-------------------------
      // add the newly created element and its content into the DOM
      var newElement = document.getElementById('books');
      newElement.appendChild(newDiv1); //-------------------
    }

    const images = {
      book_1: './img/animal_farm.jpg',
      book_2: './img/hunchback_of_notre_dame.jpg',
      book_3: './img/les_miserables.jpg',
      book_4: './img/the_great_escape.jpg',
      book_5: './img/sapiens_a_brief_history_of_humankind.jpg',
      book_6: './img/het_meijse_in_de_trein.jpg',
      book_7: './img/the_da_vinci_code.jpg',
      book_8: './img/curiosity_shop.jpg',
      book_9: './img/romeo_and_juliet.jpg',
      book_10: './img/moby_dick.jpg',
    };

    for (let y in images) {
      // create a new  h2
      var image = document.createElement('img');
      image.setAttribute('src', images[y]);
      image.src = images[y];
      var src = document.getElementById(y);
      src.appendChild(image);
    }
  }
  window.addEventListener('load', main);
}

// var img = document.createElement("img");
// img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

// var src = document.getElementById("header");
// src.appendChild(img);
