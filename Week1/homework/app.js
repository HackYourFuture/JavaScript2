'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const bookTitles = [
    // Replace with your own book titles
    "sophie's_world",
    'lord_of_the_rings',
    'of_mice_and_men',
    'the_brothers_karamazov',
    'a_farewell_to_the_arms',
    'lord_of_the_flies',
    'the_dark_tower',
    'love_story',
    'harry_potter_chamber_secrets',
    'metamorphoses_and_other_stories',
  ];

  const books = {
    harry_potter_chamber_secrets: {
      title: 'Harry Potter Chamber Secrets',
      language: 'English',
      author: 'JK Rowling',
    },
    "sophie's_world": { title: "Sophie's World", language: 'English', author: 'Josten Gaarder' },
    metamorphoses_and_other_stories: {
      title: 'Metamorphoses And Other Stories',
      language: 'English',
      author: 'Franz Kafka',
    },
    lord_of_the_rings: { title: 'Lord Of The Rings', language: 'English', author: 'JJ Tolkien' },
    of_mice_and_men: { title: 'Of Mice And Men', language: 'English', author: 'John Steinbeck' },
    the_brothers_karamazov: {
      title: 'The Brothers Karamazov',
      language: 'English',
      author: 'Fyodor Dostoevsky',
    },
    a_farewell_to_the_arms: {
      title: 'A Farewell To The Arms',
      language: 'English',
      author: 'Ernst Hemmingway',
    },
    lord_of_the_flies: {
      title: 'Lord Of The Flies',
      language: 'English',
      author: 'William Golding',
    },
    the_dark_tower: { title: 'The Dark Tower', language: 'English', author: 'Stephen King' },
    love_story: { title: 'Love Story', language: 'English', author: 'Erich Segal' },
  };

  const imgSrc = {
    harry_potter_chamber_secrets: './images/harry_potter_chamber_secrets.jpg',
    "sophie's_world": "./images/sophie's_world.jpg",
    metamorphoses_and_other_stories: './images/metamorphoses_and_other_stories.jpg',
    lord_of_the_rings: './images/lord_of_the_rings.jpg',
    of_mice_and_men: './images/of_mice_and_men.jpg',
    the_brothers_karamazov: './images/the_brothers_karamazov.jpg',
    a_farewell_to_the_arms: './images/a_farewell_to_the_arms.jpg',
    lord_of_the_flies: './images/lord_of_the_flies.jpg',
    the_dark_tower: './images/the_dark_tower.jpg',
    love_story: './images/love_story.jpg',
  };

  function addLi(ul) {
    for (let i = 0; i < bookTitles.length; i++) {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      const author = document.createElement('h4');
      const language = document.createElement('h4');
      ul.appendChild(li);
      li.appendChild(title);
      li.appendChild(author);
      li.appendChild(language);
      li.setAttribute('id', bookTitles[i]);
      title.innerText = books[bookTitles[i]].title;
      author.innerText = books[bookTitles[i]].author;
      language.innerText = books[bookTitles[i]].language;
    }
  }

  function addImg() {
    for (let i = 0; i < bookTitles.length; i++) {
      const li = document.getElementById(bookTitles[i]);
      const img = document.createElement('img');
      li.appendChild(img);
      img.src = imgSrc[li.id];
    }
  }

  function main() {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    document.body.appendChild(div);
    div.appendChild(ul);
    addLi(ul);
    addImg();
  }

  window.addEventListener('load', main);
});
