'use strict';

{
  // 1.1
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
  // 1.2
  // 1.3
  function createList() {
    const ul = document.createElement('ul');
    bookTitles.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  }
  window.onload = createList;

  // 1.4
  const booksInfo = {
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
    the_bell_jar: {
      title: 'the bell jar',
      language: 'English',
      author: 'Sylvia Plaith'
    },
    american_psycho: {
      title: 'american psycho',
      language: 'English',
      author: 'Bret Easton Ellis'
    },
    amsterdam: {
      title: 'amsterdam',
      language: 'English',
      author: 'Ian McEwan'
    },
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
    columbine: {
      title: 'columbine',
      language: 'English',
      author: 'Dave Cullen'
    },
    on_seeing_and_noticing: {
      title: 'on seeing and noticing',
      language: 'English',
      author: 'Alain de Botton'
    },
    the_craftsman: {
      title: 'the craftsman',
      language: 'English',
      author: 'Richard Sennett'
    }
  };

  // 1.5
  const body = document.body;
  const valuesOfBooksInfo = Object.values(booksInfo);
  // to apply the function below, I had to move the <script> under the </body>.
  function createElemAndAppend(elem, val) {
    elem = document.createElement(`${elem}`);
    elem.textContent = val;
    body.appendChild(elem);
  }
  function displayBooksInfo() {
    valuesOfBooksInfo.forEach(obj => {
      createElemAndAppend('h2', obj.title);
      createElemAndAppend('p', obj.language);
      createElemAndAppend('h3', obj.author);
      body.innerHTML += '<hr>';
    });
  }
  window.onload = displayBooksInfo;

  // 1.6
  // 1.7 Find and download book covers for each book and construct a new object which has as keys the book IDs again, and as value the path to the image source (e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }).
  /*
  const booksAndCovers = {
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
  */
  // 1.8
  function displayBooksInfoAndCovers() {
    for (const [key, val] of Object.entries(booksInfo)) {
      createElemAndAppend('h2', val.title);
      createElemAndAppend('p', val.language);
      createElemAndAppend('h3', val.author);
      const img = document.createElement('img');
      img.setAttribute(`src`, `./imgs/${key}.jpg`);
      img.setAttribute('alt', key);
      document.body.appendChild(img);
    }
  }
  window.onload = displayBooksInfoAndCovers;
}
