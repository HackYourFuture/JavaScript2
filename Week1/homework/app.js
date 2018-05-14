'use strict';

{
  function main() {

    /*const bookTitles = [
      'glass_bead_game',
      'brief_history_time',
      'in_search_beauty',
      'war_peace',
      'siddhartha',
      'the_man_sea',
      'hitchhiker_guide_galaxy',
      'alchemist',
      'zorba_greek',
      'samarkand',
    ];*/

    const books = {
      glass_bead_game: {
        title: 'The Glass Bead Game',
        author: 'Hermann Hesse'
      },
      brief_history_time: {
        title: 'A Brief History of Time',
        author: 'Stephen Hawking'
      },
      in_search_beauty: {
        title: 'In the Search for Beauty',
        author: 'Vladimir Smilga'
      },
      war_peace: {
        title: 'War and Peace',
        author: 'Leo tolstoy'
      },
      siddhartha: {
        title: 'Siddhartha',
        author: 'Hermann Hesse'
      },
      the_man_sea: {
        title: 'The Man and the Sea',
        author: 'Ernest Hemingway'
      },
      hitchhiker_guide_galaxy: {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams'
      },
      alchemist: {
        title: 'The Alchemist',
        author: 'Paulo Coelho'
      },
      zorba_greek: {
        title: 'Zorba the Greek',
        author: 'Nikos Kazantzakis'
      },
      samarkand: {
        title: 'Samarkand',
        author: 'Amin Maalouf'
      }
    };

    const images = {
      glass_bead_game: './covers/glass_bead_game.jpg',
      brief_history_time: './covers/brief_history_time.jpg',
      in_search_beauty: './covers/in_search_beauty.jpg',
      war_peace: './covers/war_peace.jpg',
      siddhartha: './covers/siddhartha.jpg',
      the_man_sea: './covers/the_man_sea.jpg',
      hitchhiker_guide_galaxy: './covers/hitchhiker_guide_galaxy.jpg',
      alchemist: './covers/alchemist.jpg',
      zorba_greek: './covers/zorba_greek.jpg',
      samarkand: './covers/samarkand.jpg',
    };

    const div = document.getElementById('booksList');
    const outerList = createLists(books);
    div.appendChild(outerList);

    function createLists(books) {

      const outerList = document.createElement('ul');

      for (let i in books) {
        const book = books[i];
        const innerList = document.createElement('ul');

        const title = document.createElement('h2');
        title.innerHTML = book.title;

        const author = document.createElement('li');
        author.innerHTML = book.author;

        const image = document.createElement('img');
        image.src = images[i];

        outerList.appendChild(innerList);

        innerList.appendChild(title);
        innerList.appendChild(author);
        innerList.appendChild(image);
      }
      return outerList;
    }
  }
  window.addEventListener('load', main);
}
