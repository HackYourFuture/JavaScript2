'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'nineteen_eighty_four',
    'animal_farm',
    'brave_new_world',
    'schindler_list',
    'the_pianist',
    'into_the_wild',
    'the_shining',
    'what_if',
    'the_house_with_a_clock_in_its_walls',
  ];

  const books = {
    'harry_potter_chamber_secrets': {
      title: 'Harry potter Chamber of secrets ',
      author: 'J.K. Rowling',
      language: 'EN',
    },
    'nineteen_eighty_four': {
      title: 'Nineteen eighty four ',
      author: 'George orwell',
      language: 'EN',
    },
    'animal_farm': {
      title: 'Animal farm',
      author: 'George orwell',
      language: 'EN',
    },
    'brave_new_world': {
      title: 'brave new world',
      author: 'Aldous Huxley',
      language: 'EN',
    },
    'schindler_list': {
      title: 'schindler list ',
      author: 'Thomas Keneally',
      language: 'EN ',
    },
    'the_pianist': {
      title: 'The pianist',
      author: 'Władysław Szpilman',
      language: 'EN ',
    },
    'into_the_wild': {
      title: 'Into the wild',
      author: 'Jon Krakauer',
      language: 'EN',
    },
    'the_shining': {
      title: 'The shining',
      author: 'Stephen King',
      language: 'EN',
    },
    'what_if': {
      title: 'What if',
      author: 'Randall Munroe',
      language: 'EN',
    },
    'the_house_with_a_clock_in_its_walls': {
      title: 'the house with a clock in its wall ',
      author: 'John Bellairs',
      language: 'EN',
    }

  }

  // // Replace with your own code
  // console.log(books);
  const array = bookTitles.length;

  function listGenerator() {
    let main = document.getElementById('content');
    let list = document.createElement('ul');
    main.appendChild(list);

    for (let i = 0; i < array; i++) {
      let listChild = document.createElement('li');
      list.appendChild(listChild);

      let text = document.createTextNode(Object.values(books)[i].title);
      let h1 = document.createElement('h1');
      listChild.appendChild(h1);
      h1.appendChild(text);

      let text2 = document.createTextNode(Object.values(books)[i].author);
      let h2 = document.createElement('h2');
      listChild.appendChild(h2);
      h2.appendChild(text2);

      let text3 = document.createTextNode(Object.values(books)[i].language);
      let anotherH2 = document.createElement('h2');
      listChild.appendChild(anotherH2);
      anotherH2.appendChild(text3);

    }
  }
  listGenerator();
}
