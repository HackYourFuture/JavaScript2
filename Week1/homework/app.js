'use strict';
{
  const books = {
    book1: {
      key: 'forty_rules_of_love',
      bookTitle: 'Forty rules of love',
      language: 'Turkish',
      author: 'Elif Shabak'
    },
    book2: {
      key: 'azazel',
      bookTitle: 'Azazel',
      language: 'Arabic',
      author: 'Youssef Zeidan'

    },
    book3: {
      key: 'alchemist',
      bookTitle: 'The Alchemist',
      language: 'Portuguese',
      author: 'Paulo Coelho'
    },
    book4: {
      key: 'love_time_of_cholera',
      bookTitle: 'Love in the time of cholera',
      language: 'Spanish',
      author: 'Gabriel García Márquez'
    },
    book5: {
      key: 'aleph',
      bookTitle: 'Aleph',
      language: 'Potuguese',
      author: 'Paulo Coelho'
    },
    book6: {
      key: 'flesh_memory',
      bookTitle: 'Memory in the Flesh',
      language: 'Arabic',
      author: 'Ahlam Mosteghanemi'
    },
    book7: {
      key: 'hundred_years_of_solitude',
      bookTitle: 'One hundred years of solitude',
      language: 'Spanish',
      author: 'Gabriel García Márquez'
    },
    book8: {
      key: 'manuscript_found_in_accra',
      bookTitle: 'Manuscript found in accra',
      language: 'Portuguese',
      author: 'Paulo Coelho'
    },
    book9: {
      key: 'brida',
      bookTitle: 'Brida',
      language: 'Portuguese',
      author: 'Paulo Coelho'
    },
    book10: {
      key: 'religion_history',
      bookTitle: 'Religion history and philosophy',
      language: 'Arabic',
      author: 'Taha al-Hashimi'
    }
  };

  function pageContentCreator(parentObject) {

    const pageHeader = document.createElement('h1');
    pageHeader.innerHTML = '10 books I have read!';
    pageHeader.style.textAlign = 'center';
    const content = document.getElementById('book-list');
    content.appendChild(pageHeader);

    for (const childObject in parentObject) {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('id', parentObject[childObject].key);
      wrapper.style.padding = '1vh 4vw';
      wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
      wrapper.style.margin = '4vh 4vw';
      wrapper.style.textAlign = 'center';
      content.appendChild(wrapper);

      const header = document.createElement('h2');
      header.innerHTML = parentObject[childObject]['bookTitle'];
      wrapper.appendChild(header);

      const list = document.createElement('ul');
      for (let i = 2; i < Object.keys(parentObject[childObject]).length; i++) {
        list.innerHTML += '<li> ' + Object.keys(parentObject[childObject])[i] + ' :\t' + Object.values(parentObject[childObject])[i] + '</li>';
        list.style.listStyle = 'none';
        wrapper.appendChild(list);
      }

      const image = document.createElement('img');
      image.src = './images/' + parentObject[childObject].key + '.jpg';
      image.width = 175;
      image.setAttribute('alt', 'book cover');
      wrapper.appendChild(image);
    }

  }

  window.addEventListener('load', pageContentCreator(books));

  function ImageIdEncapsulation() {
    for (const object in books) {
      this[Object.values(books[object])[0]] = './images/' + books[object][0] + '.jpg';
    }
  }

  const objectBookIdsAndImagePaths = new ImageIdEncapsulation();
  console.log(Object.keys(objectBookIdsAndImagePaths), Object.values(objectBookIdsAndImagePaths));
}
