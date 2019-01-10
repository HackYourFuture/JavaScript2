'use strict';

(function () {

  const booksList = [
    'home_and_world',
    'the_rescue',
    'heart_of_darkness',
    'country_of_pointed_fires',
    'howards_end',
    'robinson_crusoe',
    'the_odyssey',
    'death_in_venice',
    'adventures_of_huckleberry_finn',
    'oliver_twist',
    'frankenstein',
    'return_of_native',
  ];

  /*
  function allBooks() {
    const ul = document.createElement('ul');
    for (let book of booksList) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.setAttribute('id', book);
      console.log(li);
    }
  }
  console.log(allBooks());

  */

  const information = {
    home_and_world: {
      author: 'Rabindranath Tagore',
      name: 'The Home and the World',
      alt: 'This is the cover of the book called The Home and the World',
      description: 'Originally written in Bengali and published in 1916, The Home and the World is the vision of Rabindranath Tagore, Asia\'s first Nobel laureate.'
    },
    the_rescue: {
      author: 'Joseph Conrad',
      name: 'The Rescue',
      alt: 'This is the cover of the book called The Rescue',
      description: 'This powerfully intense novel provides atmospheric seafaring glimpses of the Malay Archipelago along with a suspenseful plot that builds to an explosive climax.'
    },
    heart_of_darkness: {
      author: 'Joseph Conrad',
      name: 'Heart of Darkness',
      alt: 'This is the cover of the book called Heart of Darkness',
      description: 'Heart of Darkness centers around Marlow, an introspective sailor, and his journey up the Congo River to meet Kurtz, reputed to be an idealistic man of great abilities. '
    },
    country_of_pointed_fires: {
      author: 'Sarah Orne Jewett',
      name: 'The Country of the Pointed Firs',
      alt: 'This is the cover of the book called The Country of the Pointed Firs',
      description: 'The Maine-born author recorded what she felt were the rapidly disappearing traditions, manners, and dialect of Maine coast natives at the turn of the twentieth century.'
    },
    howards_end: {
      author: 'E. M. Forster',
      name: 'Howards End',
      alt: 'This is the cover of the book called Howards End.',
      description: 'The self-interested disregard of a dying woman\'s bequest, an impulsive girl\'s attempt to help an impoverished clerk, and the marriage between an idealist and a materialist'
    },
    robinson_crusoe: {
      author: 'Daniel Defoe',
      name: 'Robinson Crusoe',
      alt: 'This is the cover of the book called Robinson Crusoe',
      description: 'Robinson Crusoe tells the story of the sole survivor of a shipwreck, stranded on a Caribbean island, who prevails against all odds. '
    },
    the_odyssey: {
      author: 'Homer',
      name: 'The Odyssey',
      alt: 'This is the cover of the book of Verlag Der called The Odyssey',
      description: 'The Odyssey narrates the path of a fascinatingly complex hero through a world of wonders and danger-filled adventure.'
    },
    death_in_venice: {
      author: 'Thomas Mann',
      name: 'Death in Venice',
      alt: 'This is the cover of the book called Death in Venice',
      description: 'One of the most famous literary works of the 20th century, the novella "Death in Venice" embodies themes that preoccupied Thomas Mann (1875–1955) in much of his work.'
    },
    adventures_of_huckleberry_finn: {
      author: 'Mark Twain',
      name: 'Adventures of Huckleberry Finn',
      alt: 'This is the cover of the book called Adventures of Huckleberry Finn',
      description: 'The novel\'s preeminence derives from its wonderfully imaginative re-creation of boyhood adventures along the Mississippi River.'
    },
    oliver_twist: {
      author: 'Charles Dickens',
      name: 'Oliver Twist',
      alt: 'This is the cover of the book called Oliver Twist',
      description: 'A profound social critic, Dickens introduced genteel readers to the problems of the poor in a way that had rarely been attempted before.'
    },
    frankenstein: {
      author: 'Mary Shelley',
      name: 'Frankenstein',
      alt: 'This is the cover of the book called Frankenstein',
      description: 'The story of Victor Frankenstein\'s terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. '
    },
    return_of_native: {
      author: 'Thomas Hardy',
      name: 'The Return of the Native',
      alt: 'This is the cover of the book called The Return of the Native',
      description: 'It first appeared in the magazine Belgravia, a publication known for its sensationalism, and was presented in twelve monthly installments from January to December 1878.'
    },
  };

  const image = {
    home_and_world: './images/home_and_world.jpeg',
    the_rescue: './images/the_rescue.jpeg',
    heart_of_darkness: './images/heart_of_darkness.jpeg',
    country_of_pointed_fires: './images/country_of_pointed_fires.jpeg',
    howards_end: './images/howards_end.jpeg',
    robinson_crusoe: './images/robinson_crusoe.jpeg',
    the_odyssey: './images/the_odyssey.jpeg',
    death_in_venice: './images/death_in_venice.jpeg',
    adventures_of_huckleberry_finn: './images/adventures_of_huckleberry_finn.jpeg',
    oliver_twist: './images/oliver_twist.jpeg',
    frankenstein: './images/frankenstein.jpeg',
    return_of_native: './images/return_of_native.jpeg',
  };

  let div = document.getElementById('content');

  let favoriteBooks = document.createElement('h1');
  favoriteBooks.innerHTML = 'My Favourite Books';
  div.appendChild(favoriteBooks);
  favoriteBooks.className = 'favoriteBooks';

  let divTag = document.createElement('div');
  divTag.className = 'booksPart';

  let ulTag = document.createElement('ul');
  ulTag.className = 'books';

  booksList.forEach(function (id) {
    let img = document.createElement('img');
    img.alt = information[id].alt;
    img.src = image[id];
    img.className = 'altName';

    let liTag = document.createElement('li');
    liTag.className = 'book';

    let div2 = document.createElement('div');
    div2.className = 'section';

    let writer = document.createElement('h3');
    writer.innerHTML = information[id].author;
    writer.className = 'writer';

    let title = document.createElement('h2');
    title.innerHTML = information[id].name;
    title.className = 'title';

    let story = document.createElement('p');
    story.innerHTML = information[id].description;
    story.className = 'story';

    // div2.appendChild(title);
    // div2.appendChild(writer);
    div2.appendChild(story);
    liTag.appendChild(div2);
    liTag.appendChild(img);
    ulTag.appendChild(liTag);
  });

  div.appendChild(divTag);
  divTag.appendChild(ulTag);

})();