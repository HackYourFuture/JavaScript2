'use strict';

{
  // *** there are some green wavy lines. those are
  // because of turkish names of books or authors.
  const myBooks = [
    'huzursuzluk',
    'oliver_twist',
    'war_and_peace',
    'the_death_of_ivan_ilyich',
    'resurrection',
    'the_da_vinci_code',
    'think_and_grow_rich',
    'gone_with_the_wind',
    'peygamberim',
    'benim_adim_kirmizi',
  ];

  /* THIS FUNCTION CHANGED ON STEP 1.5
function makeUlFromMyBooksArray() {
  const ul = document.createElement('ul');
  for (let i = 0; i < myBooks.length; i++) {
    const li = document.createElement('li');
    li.innerText = myBooks[i];
    li.id = myBooks[i].slice(0, 6);
    ul.appendChild(li);
  }
  console.log(ul);
}
makeUlFromMyBooksArray();
*/

  const myBooksInfo = {
    huzursuzluk: {
      title: 'Huzursuzluk',
      language: 'Turkish',
      author: 'zulfu livaneli',
    },
    oliver_twist: {
      title: 'Oliver Twist',
      language: 'English',
      author: 'Charles Dickens',
    },
    war_and_peace: {
      title: 'War and Peace',
      language: 'Russian',
      author: 'Leo Tolstoy',
    },
    the_death_of_ivan_ilyich: {
      title: 'The Death of Ivan Ilyich',
      language: 'Russian',
      author: 'Leo Tolstoy',
    },
    resurrection: {
      title: 'Resurrection',
      language: 'Russian',
      author: 'Leo Tolstoy',
    },
    the_da_vinci_code: {
      title: 'The Da Vinci Code',
      language: 'english',
      author: 'Dan Brown',
    },
    think_and_grow_rich: {
      title: 'Think and Grow Rich',
      language: 'English',
      author: 'Napoleon Hill',
    },
    gone_with_the_wind: {
      title: 'Gone With The Wind',
      language: 'English',
      author: 'Margaret Mitchell',
    },
    peygamberim: {
      title: 'Peygamberim',
      language: 'Turkish',
      author: 'Salih Suruc',
    },
    benim_adim_kirmizi: {
      title: 'Benim Adim Kirmizi',
      language: 'Turkish',
      author: 'Orhan Pamuk',
    },
  };

  // books infos appended in ul as li
  function copyMyBooksInfoToHtml() {
    const h1 = document.createElement('h1');
    h1.innerText = 'MY BOOKS';
    document.body.appendChild(h1);
    const ul = document.createElement('ul');
    for (let book in myBooks) {
      console.log(book);
      const myBookInfo = myBooksInfo[myBooks[book]];
      console.log(myBookInfo);
      const li = document.createElement('li');
      const h2 = document.createElement('h2');
      const authorP = document.createElement('p');
      const languageP = document.createElement('p');
      h2.innerHTML = myBookInfo.title;
      authorP.innerHTML = 'Author: ' + myBookInfo.author;
      languageP.innerHTML = 'Original Language: ' + myBookInfo.language;
      li.id = myBooks[book].slice(0, 6);
      li.appendChild(h2);
      li.appendChild(authorP);
      li.appendChild(languageP);
      ul.appendChild(li);
      document.body.appendChild(ul);
      console.log(li);
    }
  }
  copyMyBooksInfoToHtml();

  const myBooksCovers = {
    huzursuzluk: {
      source: 'huzursuzluk.jpg',
    },
    oliver_twist: {
      source: 'oliver_twist.jpg',
    },
    war_and_peace: {
      source: 'war_and_peace.jpg',
    },
    the_death_of_ivan_ilyich: {
      source: 'the_death_of_ivan_ilyich.jpg',
    },
    resurrection: {
      source: 'resurrection.jpg',
    },
    the_da_vinci_code: {
      source: 'the_da_vinci_code.jpg',
    },
    think_and_grow_rich: {
      source: 'think_and_grow_rich.jpg',
    },
    gone_with_the_wind: {
      source: 'gone_with_the_wind.jpg',
    },
    peygamberim: {
      source: 'peygamberim.jpg',
    },
    benim_adim_kirmizi: {
      source: 'benim_adim_kirmizi.jpg',
    },
  };

  // in next function;
  // IDs of li elements stored in 'idList'
  // URLs of images stored in 'urlList'
  // 250px height set for images

  function putCoversToRightLiElem() {
    for (let prop in myBooksCovers) {
      const image = document.createElement('img');
      image.src = myBooksCovers[prop].source;
      image.style = 'height: 250px;';
      document.getElementById(prop.slice(0, 6)).appendChild(image);
    }
  }
  putCoversToRightLiElem();
}
