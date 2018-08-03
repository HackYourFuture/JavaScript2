'use strict'; {

  const bookTitles = [
    'harry_potter_chamber_secrets', 'into_the_wild', 'outliers', 'blue_elephant', 'the_secret', 'the_da_vinci_code', 'the_lovely_bones', 'the_lord_of_the_rings', 'the_hunger_games', 'eat_pray_love'
  ];

  const bookInfo = {
    'harry_potter_chamber_secrets': {
      'title': 'Harry Potter and the Chamber of Secrets',
      'language': 'English',
      'author': 'J. K. Rowling'
    },
    'into_the_wild': {
      'title': 'Into The Wild',
      'language': 'English',
      'author': 'Jon Krakauer'
    },
    'outliers': {
      'title': 'Outliers',
      'language': 'English',
      'author': 'Malcolm Gladwell'
    },
    'blue_elephant': {
      'title': 'الفيل الازرق',
      'language': 'Arabic',
      'author': 'Ahmed Mourad'
    },
    'the_secret': {
      'title': 'The Secret',
      'language': 'English',
      'author': 'Rhonda Byrne'
    },
    'the_da_vinci_code': {
      'title': 'The Da Vinci Code',
      'language': 'English',
      'author': 'Dan Brown'
    },
    'the_lovely_bones': {
      'title': 'The Lovely Bones',
      'language': 'English',
      'author': 'Alice Sebold'
    },
    'the_lord_of_the_rings': {
      'title': 'The Lord of the Rings',
      'language': 'English',
      'author': 'J. R. R. Tolkien'
    },
    'the_hunger_games': {
      'title': 'The Hunger Games',
      'language': 'English',
      'author': 'Suzanne Collins'
    },
    'eat_pray_love': {
      'title': 'Eat Pray Love',
      'language': 'English',
      'author': 'Elizabeth Gilbert'
    }
  };

  const imageObj = {
    'harry_potter_chamber_secrets': 'images/Harry-Potter-and-the-Chamber-of-Secrets.jpg',
    'into_the_wild': 'images/into the wild.jpg',
    'outliers': 'images/outliers.jpg',
    'blue_elephant': 'images/Al-Feel-al-Azraq-.jpg',
    'the_secret': 'images/the secret.jpg',
    'the_da_vinci_code': 'images/da vinci code.jpg',
    'the_lovely_bones': 'images/lovely bones.jpg',
    'the_lord_of_the_rings': 'images/lord of the rings.jpg',
    'the_hunger_games': 'images/hunger game.jpg',
    'eat_pray_love': 'images/eat-pray-love.jpg'
  };

  generateList(bookTitles);

  showBookInfo();

  showBookImage();

  function createElement(element) {
    return document.createElement(element);
  }

  function getAndAppend(id, parentElement) {
    return document.getElementById(id).appendChild(parentElement);
  }

  function generateList(bookTitles) {
    // const ul = document.createElement('ul');
    const ul = createElement('ul');
    // document.getElementById('book-list').appendChild(ul);
    getAndAppend('book-list', ul);
    for (let i = 0; i < bookTitles.length; i++) {
      const li = createElement('li');
      li.setAttribute('id', bookTitles[i]);
      // li.innerHTML = bookTitles[i]; ==>> I used this line for first task.
      ul.appendChild(li);
    }
  }

  function showBookInfo() {
    for (let key in bookInfo) {
      const h4 = createElement('h4');
      h4.innerText = bookInfo[key]["title"];
      getAndAppend(key, h4);
      const p = createElement('p');
      getAndAppend(key, p);
      p.innerHTML = `<p>Author: ${bookInfo[key]["author"]} </p><p>Language: ${bookInfo[key]["language"]} </p>`;

    }
  }

  function showBookImage() {
    for (let j in imageObj) {
      const img = createElement('img');
      img.className = 'book-img';
      img.setAttribute('src', imageObj[j]);
      img.setAttribute('alt', j);
      getAndAppend(j, img);
    }
  }

}