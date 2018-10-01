'use strict'; {
  const myBooks = [
    'angels_&_demons',
    'the_da_vinci_code',
    'anna_of_the_five_towns',
    'harry_potter_chamber_of_secrets',
    'the_god_delusion',
    'the_old_man_and_the_sea',
    'righteous',
    'the_fourth_monkey',
    'norse_mythology',
    'lincoln_in_the_bardo'
  ];

  function main() {
    const root = document.getElementById('root');
    const ul = document.createElement('ul');
    root.appendChild(ul);
    myBooksDetails(ul);
    imagesAndStyling();
  }

  const booksDetails = {
    'angels_&_demons': { title: 'Angels & Demons', author: 'Dan Brown', language: 'English' },
    'the_da_vinci_code': { title: 'The DaVinci Code', author: 'Dan Brown', language: 'English' },
    'anna_of_the_five_towns': { title: 'Anna Of The Five Towns', author: 'Arnold Bennett', language: 'English' },
    'harry_potter_chamber_of_secrets': { title: 'Harry Potter Chamber Of Secrets', author: ' J. K. Rowling', language: 'English' },
    'the_god_delusion': { title: 'The God Delusion', author: 'Richard Dawkins', language: 'English' },
    'the_old_man_and_the_sea': { title: 'The Old Man And The Sea', author: 'Ernest Hemingway', language: 'English' },
    'righteous': { title: 'Righteous', author: 'Joe Ide', language: 'English' },
    'the_fourth_monkey': { title: 'The Fourth Monkey', author: 'Jeffery Deaver', language: 'English' },
    'norse_mythology': { title: 'Norse Mythology', author: 'Neil Gaiman', language: 'English' },
    'lincoln_in_the_bardo': { title: 'Lincoln In The Bardo', author: 'George Saunders', language: 'English' }
  };


  function myBooksDetails(ul) {

    for (let i = 0; i < myBooks.length; i++) {
      const id = myBooks[i];
      const li = document.createElement("li");
      const book = booksDetails[id];
      const titles = document.createElement('heading');
      titles.innerText = [book.title + ' Author: ' + book.author + ' Language: ' + book.language];
      titles.setAttribute('class', 'title' + [i]);
      li.appendChild(titles);
      li.setAttribute('id', (myBooks[i]));
      ul.appendChild(li);
    }

  }

  function imagesAndStyling() {
    const images = {
      'angels_and_demons': "http://www.angelsdemonsrome.com/images/whole/angel-and-demons-book.png",
      'the_da_vinci_code': "https://www.thoughtco.com/thmb/oGlBWzkZq5dhT-IfpPC3c-l-kcY=/736x1131/filters:fill(auto,1)/the-da-vinci-code-589f9cee3df78c4758a2d9e7.jpg",
      'anna_of_the_five_towns': "http://www.gdprice.com/j/03009.JPG",
      'harry_potter_chamber_of_secrets': "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL.jpg",
      'the_god_delusion': "https://images-na.ssl-images-amazon.com/images/I/41LMUsSTaNL._SX331_BO1,204,203,200_.jpg",
      'the_old_man_and_the_sea': "https://www.booksoftitans.com/assets/uploads/2017/01/the-old-man-and-the-sea.jpg",
      'righteous': "https://images-na.ssl-images-amazon.com/images/I/51cJrLu%2BjXL._SX327_BO1,204,203,200_.jpg",
      'the_fourth_monkey': "https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/0/5/4/9200000081754509.jpg",
      'norse_mythology': "https://m.media-amazon.com/images/I/61CrEYL26KL._SL500_.jpg",
      'lincoln_in_the_bardo': "https://images.penguinrandomhouse.com/cover/9780553397574",

    };
    const keys = Object.keys(images);
    const values = Object.values(images);

    for (let i = 0; i < myBooks.length; i++) {
      const li = document.getElementById((myBooks[i]));
      const imgDiv = document.createElement('div');
      const books = 'book' + [i];
      imgDiv.className = books;
      li.appendChild(imgDiv);
      const image = document.createElement("IMG");
      image.src = values[i];
      imgDiv.appendChild(image);
      image.setAttribute('id', (keys[i]));
    }

  }
  window.addEventListener('load', main);
}
