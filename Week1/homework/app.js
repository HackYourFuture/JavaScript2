// Replace with your own book titles

'use strict';

{
  const bookTitles = [
    'parallel-worlds',
    'masnavi',
    'black_holes_baby_universes',
    'blindness',
    'one_Hundred_years_solitude',
    'girl_train',
    'habits_highly_effective_people',
    'philosophy_fear',
    'sapiens',
    'lust_life',
  ];

  function makeList() {
    const body = window.document.getElementById('body');

    const ul = window.document.createElement('ul');

    for (let i = 0; i < bookTitles.length; i++) {
      const li = window.document.createElement('li');

      ul.appendChild(li);
      li.innerHTML = li.innerHTML + bookTitles[i];
    }
    body.appendChild(ul);
  }
  window.onload = () => makeList();
}
{
  const bookInfo = {
    parallel_worlds: {
      title: 'Parallel Worlds: The Science of Alternative Universes & Our Future in the Cosmos',
      language: 'english',
      author: 'Michio Kaku',
    },
    masnavi: {
      title: 'masnavi',
      language: 'persian',
      author: ' Rumi',
    },
    black_holes_baby_universes: {
      title: 'Black Holes and Baby Universes',
      language: 'english',
      author: 'Stephen Hawking',
    },
    blindness: {
      title: 'Blindness',
      language: 'english',
      author: 'José Saramago',
    },
    one_Hundred_years_solitude: {
      title: 'One Hundred Years of Solitude',
      language: 'english',
      author: ' Gabriel García Márquez',
    },
    girl_train: {
      title: 'The Girl on the Train',
      language: 'english',
      author: 'Paula Hawkins',
    },
    habits_highly_effective_people: {
      title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
      language: 'english',
      author: 'Stephen R. Covey',
    },
    philosophy_fear: {
      title: 'A Philosophy of Fear',
      language: 'english',
      author: 'Lars Fredrik Händler Svendsen',
    },
    sapiens: {
      title: 'Sapiens: A Brief History of Humankind',
      language: 'english',
      author: 'Yuval Noah Harari',
    },
    lust_life: {
      title: 'Lust for Life',
      language: 'english',
      author: 'Irving Stone',
      version: 2,
    },
  };
  const bookCover = {
    parallel_worlds:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348224200i/873687.jpg',
    masnavi:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171037882i/83264._SY475_.jpg',
    black_holes_baby_universes:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386924312i/53200.jpg',
    blindness:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327866409i/2526.jpg',
    one_Hundred_years_solitude:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg',
    girl_train:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490903702i/22557272.jpg',
    habits_highly_effective_people:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421842784i/36072.jpg',
    philosophy_fear:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328701163i/5800070.jpg',
    sapiens:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954i/23692271.jpg',
    lust_life:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348532272i/79834.jpg',
  };
  function makeList() {
    const body = window.document.getElementById('body');
    const ul = window.document.createElement('ul');
    // I think there is no need to add id to lists, because we can find it just by item name at first I used this codes but now I comment it:
    // li.setAttribute('id', item);
    // console.log(bookCover[item]);

    for (const item in bookInfo) {
      if ({}.hasOwnProperty.call(bookInfo, item)){
      const li = window.document.createElement('li');
      const image = window.document.createElement('img');
      image.setAttribute('src', bookCover[item]);
      li.appendChild(image);

      ul.appendChild(li);
      const h3Title = window.document.createElement('h3');
      h3Title.innerHTML = bookInfo[item].title;
      li.appendChild(h3Title);

      const bookProperties = Object.keys(bookInfo[item]);
      for (const itemChild in bookProperties) {
        if (itemChild !== 0) {
          const bookProperty = bookProperties[itemChild];
          const h4Author = window.document.createElement('h4');
          h4Author.innerHTML = bookProperty + ':' + bookInfo[item][bookProperty];
          li.appendChild(h4Author);
        }
      }
      // I made another loop inside each object to get out each property inside nested object insted of calling them by their names like this command codes:
      // const h4Author = window.document.createElement('h4');
      // h4Author.innerHTML = "Author:" + bookInfo[item].author;
      // li.appendChild(h4Author);

      // const h4Language = window.document.createElement('h4');
      // h4Language.innerHTML = "Language:" + bookInfo[item].language;
      // li.appendChild(h4Language);
    }
    
    body.appendChild(ul);
  }
}
  window.onload = () => makeList();
}
