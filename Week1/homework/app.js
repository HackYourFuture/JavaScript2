/* eslint-disable no-unused-expressions */
{
  ('use strict');
  let bookTitles = [
    'deep_work',
    'anna_frank',
    'forty_rules',
    'memory_in_flesh',
    'dust_of_promises',
    'art_of_forgetting',
    'black_suits_you',
    'Chaos_Of_Senses',
    'bed_hopper',
    'game_of_thrones',
  ];
  console.log(bookTitles);

  const listElement = document.createElement('ul');
  function listElements(ul, itemsArray) {
    const root = document.getElementById('root');
    root.appendChild(ul);
    for (let i = 0; i < itemsArray.length; i++) {
      const listItem = itemsArray[i];
      const li = document.createElement('li');
      li.innerText = listItem;
      ul.appendChild(li);
    }
  }
  //listElements(listElement, bookTitles);
}

{
  ('use strict');
  const bookTitles = [
    'deep_work',
    'anna_frank',
    'forty_rules',
    'memory_in_flesh',
    'dust_of_promises',
    'art_of_forgetting',
    'black_suits_you',
    'Chaos_Of_Senses',
    'bed_hopper',
    'game_of_thrones',
  ];
  // console.log(bookTitles);

  function elements() {
    const ul = document.createElement('ul');
    const root = document.getElementById('root');
    root.appendChild(ul);
    for (let i = 0; i < bookTitles.length; i++) {
      const bookElem = bookTitles[i];
      const li = document.createElement('li');
      li.innerText = bookElem;
      ul.appendChild(li);
    }
  }
  // elements();
}
// const load = () => {
//   console.log('load event detected!');
//   elements();
// };
// window.onload = load;
{
  ('use strict');
  const books = {
    deep_work: {
      title: 'Deep Work',
      language: 'English',
      author: 'Cal Newport',
      ImageAlt: 'book cover Deep Work',
    },
    anna_frank: {
      title: 'Anne Frank',
      language: 'Dutch',
      author: 'Otto Frank',
      ImageAlt: 'book cover Anne Frank',
    },
    forty_rules: {
      title: 'Forty Rules',
      language: 'Arabic',
      author: 'Elef Shafak',
      ImageAlt: 'book cover Forty Rules',
    },
    memory_in_flesh: {
      title: 'Memory in Flesh',
      language: 'Arabic',
      author: 'Ahlam Mostaganmi',
      ImageAlt: 'book cover Memory in Flesh',
    },
    dust_of_promises: {
      title: 'Dust of Promises',
      language: 'Arabic',
      author: 'Ahlam Mostaganmi',
      ImageAlt: 'book cover Dust of Promises',
    },
    art_of_forgetting: {
      title: 'Art of Forgetting',
      language: 'Arabic',
      author: 'Ahlam Mostaganmi',
      ImageAlt: 'book cover Art of Forgetting',
    },
    black_suits_you: {
      title: 'Black Suits You',
      language: 'Arabic',
      author: 'Ahlam Mostaganmi',
      ImageAlt: 'book cover Black Suits You',
    },
    chaos_of_senses: {
      title: 'Chaos Of Senses',
      language: 'Arabic',
      author: 'Ahlam Mostaganmi',
      ImageAlt: 'book cover Black Suits You',
    },
    bed_hopper: {
      title: 'Bed Hopper',
      language: 'Arabic',
      author: 'Ahlam Mostaganmi',
      ImageAlt: 'book cover Bed Hopper',
    },
    game_of_thrones: {
      title: 'Game of Thrones',
      language: 'English',
      author: 'George R.R. Martin',
      ImageAlt: 'book cover Bed Hopper',
    },
  };

  for (const key of Object.keys(books)) {
    console.log(books[key]);
  }

  const booksPath = {
    deep_work: './images/deep_work.jpg',
    anna_frank: './images/anna_frank.jpg',
    forty_rules: './images/forty_rules.jpg',
    memory_in_flesh: './images/memory_in_flesh.jpg',
    dust_of_promises: './images/dust_of_promises.jpg',
    art_of_forgetting: './images/art_of_forgetting.jpg',
    black_suits_you: './images/black_suits_you.jpg',
    chaos_of_senses: './images/chaos_of_senses.jpg',
    bed_hopper: './images/bed_hopper.jpg',
    game_of_thrones: './images/game_of_thrones.jpg',
  };

  function elements() {
    const root = document.getElementById('root');
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'I have read these 10 books';
    root.appendChild(headerTitle);
    const ul = document.createElement('ul');
    root.appendChild(ul);

    for (const key of Object.keys(books)) {
      const liElem = books[key];
      const li = document.createElement('li');
      ul.appendChild(li);
      li.setAttribute('id', key);

      const div = document.createElement('div');
      li.appendChild(div);
      div.setAttribute('class', 'item-container');
      const imageContainer = document.createElement('div');
      div.appendChild(imageContainer);
      imageContainer.setAttribute('class', 'image_container');
      const contentContainer = document.createElement('div');
      contentContainer.setAttribute('class', 'content_container');
      div.appendChild(contentContainer);
      const bookImage = document.createElement('img');
      bookImage.setAttribute('src', booksPath[key]);
      bookImage.setAttribute('alt', liElem.imageAlt);
      imageContainer.appendChild(bookImage);
      const heading = document.createElement('h2');
      heading.innerText = liElem.title;
      contentContainer.appendChild(heading);
      const paragraph1 = document.createElement('p');
      paragraph1.innerText = liElem.language;
      contentContainer.appendChild(paragraph1);
      const paragraph2 = document.createElement('p');
      paragraph2.innerText = liElem.author;
      contentContainer.appendChild(paragraph2);
    }
  }
  elements();
}
