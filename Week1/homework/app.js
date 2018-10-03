'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'dont_tell_me_your_afraid', 'dont_tell_mummy', 'positive_thinking', 'time_management', 'The alchemist', 'the_power_of_now', 'ekadoli', 'Before_we_were_yours', 'hebrew_female_in_my_heart', 'amareeta'
  ];

  // Replace with your own code
  //  2.3
  function makeBooksTitlesList() {
    const ul = document.createElement('ul');
    ul.innerHTML = 'Books Titles: ';
    document.getElementsByTagName('body')[0].appendChild(ul);
    for (let i = 0; i < bookTitles.length; ++i) {
      const li = document.createElement('li');
      li.innerHTML = bookTitles[i];
      ul.appendChild(li);
    }

  }

  makeBooksTitlesList();
  //2.4

  const booksDetails = {
    dont_tell_me_your_afraid: {
      title: 'don\'t tell me your afraid',
      language: 'english',
      author: 'Giuseppe Catozzella',
    },
    dont_tell_mummy: {
      title: 'don\'t tell mummy',
      language: 'english',
      author: 'Toni Maguire'
    },
    positive_thinking: {
      title: 'positive thinking',
      language: 'english',
      author: 'Lucy Legend'
    },
    time_management: {
      title: 'time management',
      language: 'arabic',
      author: 'Majed Khamis'
    },
    alchemist: {
      title: 'The alchemist',
      language: 'english',
      author: 'Paulo Coelho'
    },
    the_power_of_now: {
      title: 'The power of now',
      language: 'german',
      author: 'Eckhart Tolle'
    },
    ekadoli: {
      title: 'ekadoli',
      language: 'arabic',
      author: 'Hanan Lashin'
    },
    Before_we_were_yours: {
      title: 'Before we were yours',
      language: 'english',
      author: 'Lisa Wingate'
    },
    hebrew_female_in_my_heart: {
      title: 'hebrew female in my heart',
      language: 'arabic',
      author: 'Khawla Hamdi'
    },
    amareeta: {
      title: 'amareeta',
      language: 'arabic',
      author: 'Hanan Lashin'
    }

  };
  //2.5

  function makeBooksDetailsPage() {
    const container = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(container);
    container.innerText = 'Books Details:';
    for (const obj in booksDetails) {
      const img = document.createElement('img');
      const h1 = document.createElement('h1');
      const paragraph1 = document.createElement('p');
      const paragraph2 = document.createElement('p');

      h1.innerHTML = booksDetails[obj].title;
      img.setAttribute('src', './' + booksDetails[obj].title + '.jpg');
      img.setAttribute('alt', 'img ' + booksDetails[obj].title);
      paragraph1.innerHTML = 'Wrote in: ' + booksDetails[obj].language;
      paragraph2.innerHTML = 'By: ' + booksDetails[obj].author;

      document.getElementsByTagName('div')[0].appendChild(h1);
      document.getElementsByTagName('div')[0].appendChild(img);
      document.getElementsByTagName('div')[0].appendChild(paragraph1);
      document.getElementsByTagName('div')[0].appendChild(paragraph2);
    }
  }

  makeBooksDetailsPage();

}
