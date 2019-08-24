'use strict';
{
  //the_brothers_karamazov
  //three_men_in_a_boat
  //ulysses
  //the_great_gatsby
  //war_and_peace
  //the_odyssey
  //crime_and_punishment
  //the_stranger
  //the_sun_also_rises
  //candide

  // 1.1
  // const bookList = [
  //   'the_brothers_karamazov ',
  //   'three_men_in_a_boat',
  //   'ulysses',
  //   'the_great_gatsby ',
  //   'war_and_peace',
  //   'the_odyssey',
  //   'crime_and_punishment',
  //   'the_stranger ',
  //   'the_sun_also_rises',
  //   'candide'
  // ];

  //1.3
  // function general() {
  //   const newList = document.createElement('ul');

  //   for (let i = 0; i < bookList.length; i++) {
  //     const book = bookList[i];
  //     newList.innerHTML += `<li>${book}</li>`;
  //   }

  //   return newList;
  // }

  // document.body.append(general());

  //1.4
  const bookList = {
    the_brothers_karamazov: {
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoyevski',
      language: 'English',
    },
    three_men_in_a_boat: {
      title: 'Three Men In a Boat',
      author: 'Jerome Klapka Jerome',
      language: 'English',
    },
    ulysses: {
      title: 'Ulysses',
      author: 'James Joyce',
      language: 'English',
    },
    the_great_gatsby: {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      language: 'English',
    },
    war_and_peace: {
      title: 'War and Peace',
      author: 'Lev Tolstoy ',
      language: ' ‎Russian',
    },
    the_odyssey: {
      title: 'The Odyssey',
      author: 'Homeros ',
      language: ' Greek',
    },
    crime_and_punishment: {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoyevski ',
      language: ' ‎Russian',
    },
    the_stranger: {
      title: 'The Stranger',
      author: 'Albert Camus',
      language: 'French',
    },
    the_sun_also_rises: {
      title: 'The Sun Also Rises',
      author: 'Ernest Hemingway',
      language: 'English',
    },
    candide: {
      title: 'Candide',
      author: 'Voltaire',
      language: 'French',
    },
  };
  //1.7

  const covers = {
    the_brothers_karamazov: 'images/the-brothers-karamazov-7.jpg',
    three_men_in_a_boat: 'images/three_men_in_a_boat.jpg',
    ulysses: 'images/ulysses.jpg',
    the_great_gatsby: 'images/the_great_gatsby.jpg',
    war_and_peace: 'images/war_and_peace.jpg',
    the_odyssey: 'images/the_odyssey.jpg',
    crime_and_punishment: 'images/crime_and_punishment.jpg',
    the_stranger: 'images/the_stranger.jpg',
    the_sun_also_rises: 'images/the_sun_also_rises.jpg',
    candide: 'images/candide.jpg',
  };

  const section = document.createElement('section');
  document.body.prepend(section);
  const ul = document.createElement('ul');
  section.appendChild(ul);

  Object.keys(bookList).forEach(bookID => {
    const li = document.createElement('li');
    li.setAttribute('id', bookID);
    ul.appendChild(li);

    const title = document.createElement('h1');
    title.textContent = bookList[bookID].title;
    li.appendChild(title);

    const author = document.createElement('p');
    author.setAttribute('class', 'aut');
    author.textContent = 'Author: ' + bookList[bookID].author;
    li.appendChild(author);

    const language = document.createElement('p');
    language.setAttribute('class', 'lang');
    language.textContent = 'Language: ' + bookList[bookID].language;
    li.appendChild(language);
  });

  Object.keys(covers).forEach(bookID => {
    const li = document.getElementById(bookID);
    const bookIMG = document.createElement('img');
    bookIMG.setAttribute('src', covers[bookID]);
    bookIMG.setAttribute('alt', bookList[bookID].title + ' Book Image');
    li.prepend(bookIMG);
    ul.appendChild(li);
  });
}
