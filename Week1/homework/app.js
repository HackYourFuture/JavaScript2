/* eslint-disable strict */
/* eslint-disable quote-props */
/* eslint-disable guard-for-in */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */

'use strict';

{
  // 1.1
  // const bookTitles = [
  // Replace with your own book titles
  //   'war_and_peace',
  //   'the_great_gatsby',
  //   'great_expectations',
  //   'crime_and_punishment',
  //   'moby_dick',
  //   'hamlet',
  //   'madame_bovary',
  //   'jane_eyre',
  //   'pride_and_prejudice',
  //   'anna_karenina',
  // ];

  // 1.3

  // const ul = document.createElement('ul');

  // const createList = () => {
  //   for (let i = 0; i < bookTitles.length; i++) {
  //     const li = document.createElement('li');
  //     li.innerHTML = bookTitles[i];
  //     ul.appendChild(li);
  //   }
  // };
  // document.getElementById('renderList').appendChild(ul);

  // 1.4

  const myBooks = {
    'War and Peace': {
      book_info: {
        publication: 1869,
        language: {
          mainLanguage: 'Russian',
          translations: '89 languages',
        },
      },
      author: {
        name: 'Leo Tolstoy',
        country: 'Russia',
        age: 82,
      },
      plot: "War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.",
    },
    'The Great Gatsby': {
      book_info: {
        publication: 1925,
        language: {
          mainLanguage: 'American English',
          translations: '56 languages',
        },
      },
      author: {
        name: 'F. Scott Fitzgerald',
        country: 'United States',
        age: 44,
      },
      plot: "The Great Gatsby is the story of eccentric millionaire Jay Gatsby as told by Nick Carraway, a Midwesterner who lives on Long Island but works in Manhattan. Gatsby's enormous mansion is adjacent to Carraway 's modest home, and Carraway becomes curious about his neighbor after being invited to one of his famous parties.",
    },
    'Great Expectations': {
      book_info: {
        publication: 1861,
        language: {
          mainLanguage: 'English',
          translations: '89 languages',
        },
      },
      author: {
        name: 'Charles Dickens',
        country: 'United Kingdom',
        age: 58,
      },
      plot: 'As a young child, the orphan Pip lives with his sister and brother-in-law, the village blacksmith. On Christmas Eve, Pip is walking through the marshes when he meets an escaped convict who threatens him into bringing back food and a file to break the leg-irons.',
    },
    'Crime and Punishment': {
      book_info: {
        publication: 1866,
        language: {
          mainLanguage: 'Russian',
          translations: '70 languages',
        },
      },
      author: {
        name: 'Dostoevsky',
        country: 'Russia',
        age: 59,
      },
      plot: 'Crime and Punishment is about the troubles of Raskolnikov, a young man living in St. Petersburg. He used to be a student, but he became so poor he had to stop studying. He plans to kill a selfish old pawnbroker for her money, and he acts on his plan.',
    },
    'Moby Dick': {
      book_info: {
        publication: 1851,
        language: {
          mainLanguage: 'English',
          translations: '120 languages',
        },
      },
      author: {
        name: 'Herman Melville',
        country: 'United States',
        age: 72,
      },
      plot: 'Moby Dick famously begins with the narratorial invocation “Call me Ishmael.” The narrator, like his biblical counterpart, is an outcast. Ishmael, who turns to the sea for meaning, relays to the audience the final voyage of the Pequod, a whaling vessel.',
    },
    Hamlet: {
      book_info: {
        publication: 1603,
        language: {
          mainLanguage: 'English',
          translations: '96 languages',
        },
      },
      author: {
        name: 'William Shakespeare',
        country: 'United Kingdom',
        age: 52,
      },
      plot: "Prince Hamlet has been summoned home to Denmark to attend his father's funeral. He is in a state of mourning and despair over the death of his father. He is further disturbed that his mother, Queen Gertrude, has married his uncle, Claudius, who is also the brother of the late king.",
    },
    'Madame Bovary': {
      book_info: {
        publication: 1856,
        language: {
          mainLanguage: 'French',
          translations: '110 languages',
        },
      },
      author: {
        name: 'Gustave Flaubert',
        country: 'France',
        age: 58,
      },
      plot: "Madame Bovary tells the story of Emma, a peasant who marries an older doctor, Charles Bovary, to escape the dullness of rural life. Emma swiftly grows disillusioned with both her husband and their provincial ways, especially after she attends a ball thrown by one of her husband's aristocratic patients.",
    },
    'Jane Eyre': {
      book_info: {
        publication: 1847,
        language: {
          mainLanguage: 'English',
          translations: '89 languages',
        },
      },
      author: {
        name: 'Charlotte Brontë',
        country: 'United Kingdom',
        age: 38,
        gender: 'female',
      },
      plot: 'Ten-year-old orphan Jane Eyre lives unhappily with her wealthy, cruel cousins and aunt at Gateshead. Her only salvation from her daily humiliations, such as being locked up in a "red-room" (where she thinks she sees her beloved uncle\'s ghost), is the kindly servant, Bessie.',
    },
    'Pride and Prejudice': {
      book_info: {
        publication: 1813,
        language: {
          mainLanguage: 'English',
          translations: '105 languages',
        },
      },
      author: {
        name: 'Jane Austen',
        country: 'United Kingdom',
        age: 41,
        gender: 'female',
      },
      plot: 'Pride and Prejudice is a humorous story of love and life among English gentility during the Georgian era. Mr Bennet is an English gentleman living in Hartfordshire with his overbearing wife. The Bennets 5 daughters; the beautiful Jane, the clever Elizabeth, the bookish Mary, the immature Kitty and the wild Lydia.',
    },
    'Anna Karenina': {
      book_info: {
        publication: 1877,
        language: {
          mainLanguage: 'Russian',
          translations: '89 languages',
        },
      },
      author: {
        name: 'Leo Tolstoy',
        country: 'Russia',
        age: 82,
      },
      plot: 'In 1874, in the Imperial Russia, the aristocratic Anna Karenina travels from Saint Petersburg to Moscow to save the marriage of her brother Prince Oblonsky, who had had a love affair with his housemaid. Anna Karenina has a cold marriage with her husband, Count Alexei Karenin, and they have a son.',
    },
  };

  const ul1 = document.createElement('ul');

  // 1.5

  function getBookInfo() {
    for (const key in myBooks) {
      // Create li items
      const li = document.createElement('li');
      ul1.appendChild(li);

      // Create headings
      const heading = document.createElement('h2');
      li.appendChild(heading);
      heading.innerHTML = key;

      // Add author information
      const author = document.createElement('h3');
      author.setAttribute('class', 'authorname');
      const authorName = myBooks[key].author.name;
      const authorAge = myBooks[key].author.age;
      const authorCountry = myBooks[key].author.country;
      const authorGender = myBooks[key].author.gender;

      // if gender is female then return she
      const genderFinder = (person) => {
        if (person === 'female') {
          return 'she';
        } {
          return 'he';
        }
      };

      author.innerHTML = `by ${authorName}`;
      li.appendChild(author);
      const authorInfo = document.createElement('p');
      authorInfo.innerHTML = `${authorName} is originally from ${authorCountry}, ${genderFinder(
        authorGender,
      )} has died at the age of ${authorAge}.`;
      li.appendChild(authorInfo);

      // Add Book info
      const bookLanguage = myBooks[key].book_info.language.mainLanguage;
      const publishYear = myBooks[key].book_info.publication;
      const translateNum = myBooks[key].book_info.language.translations;

      const generalInfo = document.createElement('p');
      generalInfo.innerHTML = `The book was originally published in ${bookLanguage}, in ${publishYear}. Later it has been translated to ${translateNum}. `;
      li.appendChild(generalInfo);

      // Add plot
      const plot = document.createElement('h3');
      plot.innerHTML = 'Main Plot: ';
      li.appendChild(plot);
      const bookPlot = document.createElement('p');
      bookPlot.innerHTML = `'${myBooks[key].plot}'`;
      li.appendChild(bookPlot);
    }
  }

  document.getElementById('bookInfoList').appendChild(ul1);

  // 1.7

  const bookCovers = {
    'War and Peace': './images/war_and_peace.jpeg',
    'The Great Gatsby': './images/great_gatsby.jpg',
    'Great Expectations': './images/great_expectations.jpg',
    'Crime and Punishment': './images/crime_and_punishment.jpeg',
    'Moby Dick': './images/moby_dick.jpg',
    'Hamlet': './images/hamlet.jpg',
    'Madame Bovary': './images/madame_bovary.jpg',
    'Jane Eyre': './images/jane_eyre.jpg',
    'Pride and Prejudice': './images/pride_and_prejudice.jpg',
    'Anna Karenina': './images/anna_karenina.jpeg',
  };

  // 1.8 I could not do this with Object.keys(objectName) I hope I can learn it from someone

  const ul2 = document.createElement('ul');

  const getBookCovers = () => {
    for (const key in bookCovers) {
      // Add title
      const title = document.createElement('li');
      title.innerHTML = key;
      ul2.appendChild(title);
      document.body.appendChild(ul2);
      // Add image
      const image = document.createElement('img');
      image.src = bookCovers[key];
      image.alt = key;
      ul2.appendChild(image);
      // Add button
      const btn = document.createElement('button');
      btn.innerHTML = 'Add to cart';
      ul2.appendChild(btn);
    }
    document.getElementById('coverList').appendChild(ul2);
  };

  const main = () => {
    // createList();
    getBookInfo();
    getBookCovers();
  };

  window.onload = () => main();
}

// I used element.attribute instead of setAttribute() throughout this homework
// it feels easier to do it that way, but is it bad practice?
