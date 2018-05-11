'use strict';
{
  /* 
  const bookTitles = [
  'the_mirage',
    'the_beginning_and_the_end',
    'palace_walk',
    'palace_of_desire',
    'sugar_street',
    'the_pub_of_the_black_cat',
    'the_thief_and_the_dogs',
    'autumn-quail',
    'the-search',
    'the-beggar'
   ];

  function main() {
    const container = document.getElementById('page_content');
    const list = document.createElement('ul');
    container.appendChild(list);
    for (let i = 0; i < bookTitles.length; i++) {
      const bookName = document.createElement('li');
      bookName.innerHTML = bookTitles[i];
      list.appendChild(bookName);
    }
  }
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

  function main() {
    const container = document.getElementById('page_content');
    const topHeader = document.createElement('h1');
    topHeader.innerHTML = 'Books I have Read';
    container.appendChild(topHeader);

    for (const key in books) {
      const header = document.createElement('h2');
      header.innerHTML = key.replace(/_/g, ' ');
      container.appendChild(header);
      const list = document.createElement('ul');
      list.setAttribute('id', key);
      container.appendChild(list);
      const arr = books[key];

      for (const key in arr) {
        const details = document.createElement('li');
        details.innerHTML = key + ' : ' + arr[key];
        list.appendChild(details);
      }
    }

    const covers = {
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

    for (const key in covers) {
      const image = document.createElement('img');
      image.setAttribute('src', covers[key]);
      image.setAttribute('alt', 'cover_photo_for_a_book_named_' + key);
      const listedImage = document.createElement('li');
      listedImage.appendChild(image);
      document.getElementById(key).appendChild(listedImage);
    }
  }

  window.addEventListener('load', main);
}
