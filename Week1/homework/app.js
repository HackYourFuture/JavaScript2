'use strict';

// 1.1
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_and_the_chamber_of_secrets',
    'the_art_of_war',
    'the_rise_and_fall_of_the_great_powers',
    'the_brothers_karamazov',
    'in_search_of_lost_time',
    'great_expectations',
    'war_and_peace',
    'the_great_gatsby',
    'to_kill_a_mockingbird',
    'the_adventures_of_huckleberry_finn',
  ];

  const infoForEachBook = {
    harry_potter_and_the_chamber_of_secrets: {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ' J. K. Rowling',
      genre: 'Fantasy',
      language: 'English',
      country: 'United Kingdom',
    },
    the_art_of_war: {
      title: 'The Art of War',
      author: 'Sun Tzu',
      genre: 'Historical fiction',
      language: 'Chinese',
      country: 'China',
    },
    the_rise_and_fall_of_the_great_powers: {
      title: 'The Rise and Fall of the Great Powers',
      author: 'Paul Kennedy',
      genre: 'Economics, History',
      language: 'English',
      country: 'United States',
    },
    the_brothers_karamazov: {
      title: 'The Brothers Kazamazov',
      author: ' Fyodor Dostoevsky',
      genre: 'Philosophical novel',
      language: 'Russian',
      country: 'Russia',
    },
    in_search_of_lost_time: {
      title: 'In Search of Lost Time',
      author: ' Marcel Proust',
      genre: 'Modernist',
      language: 'French',
      country: 'France',
    },
    great_expectations: {
      title: 'Great Expectations',
      author: ' Charles Dickens',
      genre: 'Novel',
      language: 'English',
      country: 'United Kingdom',
    },
    war_and_peace: {
      title: 'War and Peace',
      author: ' Leo Tolstoy',
      genre: 'Historical novel',
      language: 'Russian',
      country: 'Russia',
    },
    the_great_gatsby: {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Novel',
      language: 'English',
      country: 'United States',
    },
    the_adventures_of_huckleberry_finn: {
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      genre: 'Picaresque novel',
      language: 'English',
      country: 'United States',
    },
    to_kill_a_mockingbird: {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: ' Southern Gothic, Bildungsroman',
      language: 'English',
      country: 'United States',
    },
  };

  const bookCovers = {
    the_adventures_of_huckleberry_finn: ' ./img/the_adventures_of_huckleberry_finn.jpg',
    harry_potter_and_the_chamber_of_secrets: './img/harry_potter_and_the_chamber_of_secrets.jpg',
    the_art_of_war: ' ./img/the_art_of_war.jpg',
    the_rise_and_fall_of_the_great_powers: ' ./img/the_rise_and_fall_of_the_great_powers.jpg',
    the_brothers_karamazov: ' ./img/the_brothers_karamazov.jpg',
    in_search_of_lost_time: './img/in_search_of_lost_time.jpg',
    great_expectations: ' ./img/great_expectations.jpg',
    war_and_peace: ' ./img/war_and_peace.jpg',
    the_great_gatsby: ' ./img/the_great_gatsby.jpg',
    to_kill_a_mockingbird: ' ./img/to_kill_a_mockingbird.jpg',
  };

  const container = document.createElement('section');
  document.body.appendChild(container);
  const headingH1 = document.createElement('h1');

  container.appendChild(headingH1);
  headingH1.innerText = 'THE BEST 10 HIGH RANKED BOOKS EVER';

  function generateMyFavoriteBookList() {
    const unOrderedListUl = document.createElement('ul');

    container.appendChild(unOrderedListUl);

    const detailsOfBooks = Object.values(infoForEachBook);
    const bookInfos = Object.keys(infoForEachBook);
    for (let i = 0; i < detailsOfBooks.length; i++) {
      // create elements

      const listLi = document.createElement('li');
      const images = document.createElement('img');
      const headingH2 = document.createElement('h2');
      const headingH3 = document.createElement('h3');
      const paragraphOfGenre = document.createElement('p');
      const paragraphOfLanguage = document.createElement('p');
      const paragraphOfCountry = document.createElement('p');

      // append elements
      listLi.appendChild(images);
      listLi.appendChild(headingH2);
      listLi.appendChild(headingH3);
      listLi.appendChild(paragraphOfGenre);
      unOrderedListUl.appendChild(listLi);
      listLi.appendChild(paragraphOfLanguage);
      listLi.appendChild(paragraphOfCountry);

      images.src = bookCovers[bookInfos[i]];
      const detailsOfBooksItem = detailsOfBooks[i];

      // add texts
      headingH2.innerText = detailsOfBooksItem.title;
      headingH3.innerText = detailsOfBooksItem.author;
      paragraphOfGenre.innerText = detailsOfBooksItem.genre;
      paragraphOfLanguage.innerText = detailsOfBooksItem.language;
      paragraphOfCountry.innerText = detailsOfBooksItem.country;

      // add class names
      images.className = 'images';
      unOrderedListUl.className = 'ulClass';
      headingH2.className = 'h2Class';
      headingH3.className = 'h3Class';
      paragraphOfGenre.className = 'paragraph';
      paragraphOfLanguage.className = 'paragraph';
      paragraphOfCountry.className = 'paragraph';
      listLi.className = 'classList';
      headingH1.className = 'h1Class';
    }
  }
  generateMyFavoriteBookList();
}
