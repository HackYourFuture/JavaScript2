
{
  ('use strict');

  const myBooks = [
    'brave_new_world',
    'notes_from_underground',
    'blindness',
    'nineteen_eighty_four',
    'the_little_prince',
    'animal_farm',
    'the_alchemist',
    'essays_montaigne',
    'sherlock_holmes',
    'a_confession',
  ];

  const infoBookList = {
    notes_from_underground: {
      title: 'Notes from Underground',
      release: '(1864)',
      author: 'Dostoyevsky',
    },
    brave_new_world: { title: 'Brave New World', release: '(1932)', author: 'Aldous Huxley' },
    nineteen_eighty_four: { title: '1984', release: '(1949)', author: 'George Orwell' },
    animal_farm: { title: 'Animal Farm', release: '(1945)', author: 'George Orwell' },
    the_little_prince: { title: 'The Little Prince', release: '(1943)', author: 'Saint Exupery' },
    the_alchemist: { title: 'The Alchemist', release: '(1988)', author: 'Paulo Coelho' },
    essays_montaigne: { title: 'Essays', release: '(1580)', author: 'Montaigne' },
    sherlock_holmes: { title: 'Sherlock Holmes', release: '(1892)', author: 'AC Doyle' },
    blindness: { title: 'Blindness', release: '(1995)', author: 'Saramago' },
    a_confession: { title: 'A Confession', release: '(1884)', author: 'Tolstoy' },
  };

  const coverBookList = {
    notes_from_underground:
      'https://s.s-bol.com/imgbase0/imagebase3/large/FC/0/1/3/2/9200000024772310.jpg',
    brave_new_world:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg',
    nineteen_eighty_four: 'https://www.studystore.nl/images/9780141036144/3/1',
    animal_farm: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/6/2/8/8/1001004005988826.jpg',
    the_little_prince:
      'https://s.s-bol.com/imgbase0/imagebase3/large/FC/7/5/0/8/1001004000638057.jpg',
    the_alchemist: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/3/2/3/9200000041223239.jpg',
    essays_montaigne:
      'https://s.s-bol.com/imgbase0/imagebase3/large/FC/1/0/6/6/1001004000636601.jpg',
    blindness: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/0/6/8/0/9200000001310860.jpg',
    a_confession: 'https://images-na.ssl-images-amazon.com/images/I/71i8kz3FrZL.jpg',
    sherlock_holmes: 'https://images-na.ssl-images-amazon.com/images/I/91743TsDedL.jpg',
  };

  function makeBookList() {
    const divBookList = document.createElement('div');
    document.body.appendChild(divBookList);

    const bookListElement = document.createElement('ul');
    divBookList.appendChild(bookListElement);

    for (let i = 0; i < myBooks.length; i++) {
      const key = myBooks[i];
      const book = infoBookList[key];

      const bookListItem = document.createElement('li');
      bookListElement.appendChild(bookListItem);

      const titleh2 = document.createElement('h2');
      bookListItem.appendChild(titleh2);
      titleh2.innerHTML = book.title;

      const p1 = document.createElement('p');
      bookListItem.appendChild(p1);
      p1.innerHTML = book.release;

      const p2 = document.createElement('p');
      bookListItem.appendChild(p2);
      p2.innerHTML = book.author;

      const covers = document.createElement('img');
      bookListItem.appendChild(covers);
      covers.setAttribute('src', coverBookList[key]);
      covers.setAttribute('alt', book.title);
    }
  }

  makeBookList();
}
