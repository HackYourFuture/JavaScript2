'use strict';
{
  /*
  const bookTitles = [
    // Replace with your own book titles
    'the_nose',
    'the_overcoat',
    'the_collected_works',
    'palace_of_desire',
    'sugar_street',
    'children_of_geblawi',
    'the_thief_and_the_dogs',
    'autumn_quail',
    'a_tale_of_two_cities',
    'the_happy_prince'
  ];

  // Replace with your own code
  //console.log(bookTitles);
  
    function generateBookList(array) {
      const container = document.getElementById('container');
      const listOfBooks = document.createElement('ul');
      container.appendChild(listOfBooks);
      for (const element of array) {
        const book = document.createElement('li');
        book.innerHTML = element;
        listOfBooks.appendChild(book);
      }
    }
    generateBookList(bookTitles);
    */

  const books = {
    the_nose: { title: 'The Nose', language: 'Arabic (translated from Russian)', author: 'Nikolai Gogol', year: '1836' },
    the_overcoat: { title: 'The Overcoat', language: 'Arabic (translated from Russian)', author: 'Nikolai Gogol', year: '1842' },
    the_collected_works: { title: 'The Collected Works', language: 'Arabic (translated from Russian)', author: 'Anton Chekhov' },
    palace_of_desire: { title: 'Palace of Desire', language: 'Arabic', author: 'Naguib Mahfouz', year: '1957' },
    sugar_street: { title: 'Sugar Street', language: 'Arabic', author: 'Naguib Mahfouz', year: '1957' },
    children_of_gebelawi: { title: 'Children of Gebelawi', language: 'Arabic', author: 'Naguib Mahfouz', year: '1959' },
    the_thief_and_the_dogs: { title: 'The Thief and the Dogs', language: 'Arabic', author: 'Naguib Mahfouz', year: '1961' },
    autumn_quail: { title: 'Autumn Quail', language: 'Arabic', author: 'Naguib Mahfouz', year: '1962' },
    a_tale_of_two_cities: { title: 'A tale of Two Cities', language: 'English', author: 'Charles Dickens', year: '1859' },
    the_happy_prince: { title: 'The Happy Prince', language: 'English', author: 'Oscar Wilde', year: '1888' }
  };

  function generateBookListsOfInformationWithHeader(obj) {
    const container = document.getElementById('container');
    const pageHeader = document.createElement('h1');
    pageHeader.innerHTML = 'Books I have read';
    container.appendChild(pageHeader);

    for (const bookName in obj) {
      const bookSection = document.createElement('div');
      bookSection.setAttribute('id', bookName);
      bookSection.setAttribute('class', 'book_sections');
      container.appendChild(bookSection);
      const bookObject = obj[bookName];

      for (const property in bookObject) {
        const bookInformationList = document.createElement('ul');
        bookSection.appendChild(bookInformationList);
        if (property === 'title') {
          const sectionHeader = document.createElement('h2');
          sectionHeader.innerHTML = bookObject[property];
          bookSection.appendChild(sectionHeader);
        } else {
          const informationListItem = document.createElement('li');
          informationListItem.innerHTML = property + ': ' + bookObject[property];
          bookInformationList.appendChild(informationListItem);
        }
      }
    }
  }

  generateBookListsOfInformationWithHeader(books);

  const bookCovers = {
    the_nose: './img/the_nose.jpg',
    the_overcoat: './img/the_overcoat.jpg',
    the_collected_works: './img/the_collected_works.jpg',
    palace_of_desire: './img/palace_of_desire.jpg',
    sugar_street: './img/sugar_street.jpg',
    children_of_gebelawi: './img/children_of_gebelawi.jpg',
    the_thief_and_the_dogs: './img/the_thief_and_the_dogs.jpg',
    autumn_quail: './img/autumn_quail.jpg',
    a_tale_of_two_cities: './img/a_tale_of_two_cities.jpg',
    the_happy_prince: './img/the_happy_prince.jpg'
  };

  function addCoversToBookSections(arrayOfAddresses) {
    for (const bookName in arrayOfAddresses) {
      const section = document.getElementById(bookName);
      const bookCover = document.createElement('img');
      bookCover.setAttribute('src', arrayOfAddresses[bookName]);
      const altString = bookName.replace(/_/gi, ' ');
      bookCover.setAttribute('alt', altString + ' book cover');
      section.appendChild(bookCover);
    }
  }

  addCoversToBookSections(bookCovers);

}
