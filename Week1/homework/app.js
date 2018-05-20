'use strict';
function main() {

  const books = {
    forty_rules_of_love: {
      bookTitle: 'Forty rules of love',
      language: 'Turkish',
      author: 'Elif Shabak',
    },
    azazel: {
      bookTitle: 'Azazel',
      language: 'Arabic',
      author: 'Youssef Zeidan',

    },
    alchemist: {
      bookTitle: 'The Alchemist',
      language: 'Portuguese',
      author: 'Paulo Coelho',
    },
    love_time_of_cholera: {
      bookTitle: 'Love in the time of cholera',
      language: 'Spanish',
      author: 'Gabriel García Márquez',
    },
    aleph: {
      bookTitle: 'Aleph',
      language: 'Potuguese',
      author: 'Paulo Coelho',
    },
    flesh_memory: {
      bookTitle: 'Memory in the Flesh',
      language: 'Arabic',
      author: 'Ahlam Mosteghanemi',
    },
    hundred_years_of_solitude: {
      bookTitle: 'One hundred years of solitude',
      language: 'Spanish',
      author: 'Gabriel García Márquez',
    },
    manuscript_found_in_accra: {
      bookTitle: 'Manuscript found in Accra',
      language: 'Portuguese',
      author: 'Paulo Coelho',
    },
    brida: {
      bookTitle: 'Brida',
      language: 'Portuguese',
      author: 'Paulo Coelho',
    },
    religion_history: {
      bookTitle: 'Religion history and philosophy',
      language: 'Arabic',
      author: 'Taha al-Hashimi',
    },
  };

  let bookImages = {
    forty_rules_of_love: 'images\\forty_rules_of_love.jpg',
    azazel: 'images\\azazel.jpg',
    alchemist: 'images\\alchemist.jpg',
    love_time_of_cholera: 'images\\love_time_of_cholera.jpg',
    aleph: 'images\\aleph.jpg',
    flesh_memory: 'images\\flesh_memory.jpg',
    hundred_years_of_solitude: 'images\\hundred_years_of_solitude.jpg',
    manuscript_found_in_accra: 'images\\manuscript_found_in_accra.jpg',
    brida: 'images\\brida.jpg',
    religion_history: 'images\\religion_history.jpg',
  };

  const pageHeader = document.createElement('h1');
  pageHeader.innerHTML = '10 books I have read!';
  const content = document.getElementById('book-list');
  content.appendChild(pageHeader);

  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'div-wrapper');
  content.appendChild(contentDiv);

  for (const key in books) {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', key);
    wrapper.setAttribute('class', 'wrapper');
    contentDiv.appendChild(wrapper);

    const header = document.createElement('h2');
    header.innerHTML = books[key]['bookTitle'];
    wrapper.appendChild(header);

    const list = document.createElement('ul');
    for (let i = 1; i < Object.keys(books[key]).length; i++) {
      list.innerHTML += '<li> ' + Object.keys(books[key])[i] + ' :\t' + Object.values(books[key])[i] + '</li>';
      wrapper.appendChild(list);
    }

    const image = document.createElement('img');
    image.src = getSource(key, bookImages);
    image.setAttribute('alt', 'book cover');
    wrapper.appendChild(image);
  }

}

function getSource(bookId, bookImages) {
  return bookImages[bookId]
}

window.addEventListener('load', main());
