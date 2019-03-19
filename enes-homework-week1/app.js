{
  ('use strict');
  //1.1; 1.2,
  const listOfBooks = ['ak', 'bak', 'cak', 'dak', 'eak', 'fak', 'gak', 'hak', 'iak', 'jak'];

  //console.log(listOfBooks);

  //1.3

  // const objListOfBooks = Object.assign(listOfBooks);
  function listMaker() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'My Book List';
    root.appendChild(h1);
    const ul = document.createElement('ul');
    root.appendChild(ul);
    listItemMaker();
    bookListMaker();
    bookCover();
  }

  function listItemMaker() {
    for (let i = 0; i < listOfBooks.length; i++) {
      const li = document.createElement('li');
      li.innerText = listOfBooks[i];
      root.appendChild(li);
    }
  }

  //1.4

  const objListOfBooks = {
    ak: {
      title: 'book1',
      author: 'author1',
      language: 'language1',
    },
    bak: {
      title: 'book2',
      author: 'author2',
      language: 'language2',
    },
    cak: {
      title: 'book3',
      author: 'author3',
      language: 'language3',
    },
    dak: {
      title: 'book4',
      author: 'author4',
      language: 'language4',
    },
    eak: {
      title: 'book5',
      author: 'author5',
      language: 'language5',
    },
    fak: {
      title: 'book6',
      author: 'author6',
      language: 'language6',
    },
    gak: {
      title: 'book7',
      author: 'author7',
      language: 'language7',
    },
    hak: {
      title: 'book8',
      author: 'author8',
      language: 'language8',
    },
    iak: {
      title: 'book9',
      author: 'author9',
      language: 'language9',
    },
    jak: {
      title: 'book10',
      author: 'author10',
      language: 'language10',
    },
  };

  //1.5 1.6
  function bookListMaker() {
    const div = document.createElement('div');
    root.appendChild(div);
    const h2 = document.createElement('h2');
    h2.innerText = 'My Second Book Info List';
    div.appendChild(h2);
    const div1 = document.createElement('div');
    div.appendChild(div1);
    div1.className = 'container';
    for (const key in objListOfBooks) {
      const div2 = document.createElement('div');
      div2.className = 'wrapper';
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
      div2.style.background = bgColor;
      div1.appendChild(div2);
      const h2 = document.createElement('h2');
      h2.innerText = objListOfBooks[key]['title'];
      div2.appendChild(h2);
      const p1 = document.createElement('p');
      p1.innerText = 'author: ' + objListOfBooks[key]['author'];
      div2.appendChild(p1);
      const p2 = document.createElement('p');
      p2.innerText = 'language: ' + objListOfBooks[key]['language'];
      div2.appendChild(p2);
    }
  }

  //1.7

  const objBookCovers = {
    aak: 'bookcovers/cover1.jpg',
    bak: 'bookcovers/cover2.jpg',
    cak: 'bookcovers/cover3.jpg',
    dak: 'bookcovers/cover4.jpg',
    eak: 'bookcovers/cover5.jpg',
    fak: 'bookcovers/cover6.jpg',
    gak: 'bookcovers/cover7.jpg',
    hak: 'bookcovers/cover8.jpg',
    iak: 'bookcovers/cover9.jpg',
    jak: 'bookcovers/cover10.jpg',
  };

  //1.8

  function bookCover() {
    const arrOfKeys = Object.keys(objBookCovers);
    const div = document.createElement('div');
    root.appendChild(div);
    const h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.innerText = 'My Book Cover List';
    const div1 = document.createElement('div');
    div.appendChild(div1);
    const ul = document.createElement('ul');
    ul.id = 'bookcovers';
    ul.setAttribute(
      'style',
      'display:flex; flex-direction:row; flex-wrap:wrap; justify-content:center',
    );
    div1.appendChild(ul);
    for (key in objBookCovers) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const img = document.createElement('img');
      img.setAttribute('src', objBookCovers[key]);
      img.setAttribute('alt', key);
      img.setAttribute('width', '100%');
      img.setAttribute('height', '100%');
      li.appendChild(img);
    }
  }

  window.addEventListener('load', listMaker);
}
