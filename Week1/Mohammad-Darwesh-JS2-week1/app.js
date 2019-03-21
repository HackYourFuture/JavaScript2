'use strict';
{
  const bookTitles = [
    'the_great_gatsby',
    'city_on_the_edge',
    'harry_potter',
    'james_and_the_giant_peach',
    'set_me_free',
    'a_blind_eye',
    'good_to_great',
    'a_room_away_from_the_wolves',
    'church_of_marvels',
    'after_the_rain',
  ];
  const booksCovers = {
    the_great_gatsby: 'http://flavorwire.files.wordpress.com/2012/08/gatsby.jpg',
    city_on_the_edge: 'https://images.penguinrandomhouse.com/cover/9780425284469',
    harry_potter: 'https://hpmedia.bloomsbury.com/rep/s/9781408855911_309576.jpeg',
    james_and_the_giant_peach: 'https://images-na.ssl-images-amazon.com/images/I/51A5cHQhSqL.jpg',
    set_me_free:
      'https://dwtr67e3ikfml.cloudfront.net/bookCovers/dbce49e06c7ed4ff54b52d21ebcb41dd38ecb698',
    a_blind_eye: 'https://images-eu.ssl-images-amazon.com/images/I/51SN7zgwP7L.jpg',
    good_to_great: 'https://pictures.abebooks.com/HENNIKERBOOKFARM/22445761977.jpg',
    a_room_away_from_the_wolves:
      'https://images-na.ssl-images-amazon.com/images/I/5116zAISjzL._SX329_BO1,204,203,200_.jpg',
    church_of_marvels:
      'https://i.pinimg.com/originals/b8/19/0d/b8190d0fb7bcb1ced1bc4d69c3637c22.jpg',
    after_the_rain:
      'https://vicsmediaroom.files.wordpress.com/2016/04/after-the-rain-book-cover.jpg?w=308',
  };
  const div = document.createElement('div');
  document.body.appendChild(div);
  const header = document.createElement('h1');
  const addHeader = document.body.getElementsByTagName('div')[0];
  addHeader.appendChild(header);
  header.innerHTML = 'My favorite books';
  const list = document.createElement('ul');
  div.appendChild(list);
  list.setAttribute('class', 'books_list');
  function makingList() {
    for (let item of bookTitles) {
      const booksList = document.createElement('li');
      list.appendChild(booksList);
      booksList.setAttribute('id', item);
      const booksId = document.getElementById(item);
      const booksCover = document.createElement('img');
      booksCover.setAttribute('src', booksCovers[item]);
      booksCover.setAttribute('alt', item);
      booksId.appendChild(booksCover);
      for (let g = 0; g < 3; g++) {
        const booksHeading = document.createElement('h2');
        booksId.appendChild(booksHeading);
      }
    }
  }
  makingList();
  /* cSpell:disable */
  const books = {
    the_great_gatsby: {
      title: 'The great gatsby',
      language: 'English',
      author: 'Mike',
    },
    city_on_the_edge: {
      title: 'City on the edge',
      language: 'English',
      author: 'Yash',
    },
    harry_potter: {
      title: 'Harry potter',
      language: 'English',
      author: 'Ahmad',
    },
    james_and_the_giant_peach: {
      title: 'James and the giant peach',
      language: 'English',
      author: 'Mohannad',
    },
    set_me_free: {
      title: 'Set me free',
      language: 'English',
      author: 'Jack',
    },
    a_blind_eye: {
      title: 'A blind eye',
      language: 'English',
      author: 'Noor',
    },
    good_to_great: {
      title: 'Good to great',
      language: 'English',
      author: 'Mohammad',
    },
    a_room_away_from_the_wolves: {
      title: 'A room away from the wolves',
      language: 'English',
      author: 'Khaled',
    },
    church_of_marvels: {
      title: 'Church of marvels',
      language: 'English',
      author: 'Ali',
    },
    after_the_rain: {
      title: 'After the rain',
      language: 'English',
      author: 'Cor',
    },
  };
  /* cSpell:enable */
  function displayBooksInformation() {
    for (let book of bookTitles) {
      for (let i = 0; i < 3; i++) {
        const information = document.getElementById(book).getElementsByTagName('h2')[i];
        if (i === 0) {
          information.innerText = books[book]['title'];
        } else if (i === 1) {
          information.innerText = books[book]['language'];
        } else {
          information.innerText = books[book]['author'];
        }
      }
    }
  }
  displayBooksInformation();
}
