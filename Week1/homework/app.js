'use strict';

{
  const bookTitles = [
    'the_psychopath_test',
    'against_happiness',
    'the_bell_jar',
    'american_psycho',
    'amsterdam',
    'the_brief_history_of_the_dead',
    'a_clockwork_orange',
    'columbine',
    'on_seeing_and_noticing',
    'the_craftsman'
  ];

  // 1.3
  function createList() {
    const ol = document.createElement('ol');
    bookTitles.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      ol.appendChild(li);
    });
    document.body.appendChild(ol);
  }
  window.onload = createList;

  // 1.4
  const booksObj = {
    the_psychopath_test: {
      title: 'the psychopath test',
      language: 'English',
      author: 'Jon Ronson'
    },
    against_happiness: {
      title: 'against happiness',
      language: 'English',
      author: 'Eric G. Wilson'
    },
    the_bell_jar: { title: 'the bell jar', language: 'English', author: 'Sylvia Plaith' },
    american_psycho: { title: 'american psycho', language: 'English', author: 'Bret Easton Ellis' },
    amsterdam: { title: 'amsterdam', language: 'English', author: 'Ian McEwan' },
    the_brief_history_of_the_dead: {
      title: 'the brief history of the dead',
      language: 'English',
      author: 'Kevin Brockmeier'
    },
    a_clockwork_orange: {
      title: 'a clockwork orange',
      language: 'English',
      author: 'Anthony Burgess'
    },
    columbine: { title: 'columbine', language: 'English', author: 'Dave Cullen' },
    on_seeing_and_noticing: {
      title: 'on seeing and noticing',
      language: 'English',
      author: 'Alain de Botton'
    },
    the_craftsman: { title: 'the craftsman', language: 'English', author: 'Richard Sennett' }
  };

  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const h3 = document.createElement('h3');
  const valuesBooksObj = Object.values(booksObj);
  const body = document.body;
  function displayBooksObjInfo() {
    valuesBooksObj.forEach(obj => {
      h2.textContent = obj.title;
      p.textContent = obj.language;
      h3.textContent = obj.author;
      body.appendChild(h2);
      body.appendChild(p);
      body.appendChild(h3);
      body.innerHTML += '<hr>';
    });
  }
  window.onload = displayBooksObjInfo;

  // 1.7
  const booksCoversObj = {
    the_psychopath_test: './imgs/the_psychopath_test.jpg',
    against_happiness: './imgs/against_happiness.jpg',
    the_bell_jar: './imgs/the_bell_jar.jpg',
    american_psycho: './imgs/american_psycho.jpg',
    amsterdam: './imgs/amsterdam.jpg',
    the_brief_history_of_the_dead: './imgs/the_brief_history_of_the_dead.jpg',
    a_clockwork_orange: './imgs/a_clockwork_orange.jpg',
    columbine: './imgs/columbine.jpg',
    on_seeing_and_noticing: './imgs/on_seeing_and_noticing.jpg',
    the_craftsman: './imgs/the_craftsman.jpg'
  };

  // 1.8
  const keysBooksCoversObj = Object.keys(booksCoversObj);
  const valuesCovers = Object.values(booksCoversObj);
  function displayBooksCovers() {
    keysBooksCoversObj.forEach(book => {
      const li = document.createElement('li');
      li.textContent = book;
      document.body.appendChild(li);
      valuesCovers.forEach(cover => {
        const img = document.createElement('img');
        img.setAttribute('src', `${cover}`);
        if (cover.includes(book)) {
          document.body.appendChild(img);
        }
      });
    });
  }
  window.onload = displayBooksCovers;
}
