'use strict';

(function() {
  const bookTitles = [
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
    'return_of_native'
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
      title: 'The Home and the World',
      alt: 'This is the cover of the book called The Home and the World',
      description:
        'Originally written in Bengali and published in 1916, The Home and the World is the vision of Rabindranath Tagore, Asias first Nobel laureate.'
    },
    the_rescue: {
      author: 'Joseph Conrad',
      title: 'The Rescue',
      alt: 'This is the cover of the book called The Rescue',
      description:
        'This powerfully intense novel provides atmospheric seafaring glimpses of the Malay Archipelago along with a suspenseful plot that builds to an explosive climax.'
    },
    heart_of_darkness: {
      author: 'Joseph Conrad',
      title: 'Heart of Darkness',
      alt: 'This is the cover of the book called Heart of Darkness',
      description:
        'Heart of Darkness centers around Marlow, an introspective sailor, and his journey up the Congo River to meet Kurtz, reputed to be an idealistic man of great abilities. '
    },
    country_of_pointed_fires: {
      author: 'Sarah Orne Jewett',
      title: 'The Country of the Pointed Firs',
      alt: 'This is the cover of the book called The Country of the Pointed Firs',
      description:
        'The Maine-born author recorded what she felt were the rapidly disappearing traditions, manners, and dialect of Maine coast natives at the turn of the twentieth century.'
    },
    howards_end: {
      author: 'E. M. Forster',
      title: 'Howards End',
      alt: 'This is the cover of the book called Howards End.',
      description:
        'The self-interested disregard of a dying womans bequest, an impulsive girls attempt to help an impoverished clerk, and the marriage between an idealist and a materialist'
    },
    robinson_crusoe: {
      author: 'Daniel Defoe',
      title: 'Robinson Crusoe',
      alt: 'This is the cover of the book called Robinson Crusoe',
      description:
        'Robinson Crusoe tells the story of the sole survivor of a shipwreck, stranded on a Caribbean island, who prevails against all odds. '
    },
    the_odyssey: {
      author: 'Homer',
      title: 'The Odyssey',
      alt: 'This is the cover of the book of Verlag Der called The Odyssey',
      description:
        'The Odyssey narrates the path of a fascinatingly complex hero through a world of wonders and danger-filled adventure.'
    },
    death_in_venice: {
      author: 'Thomas Mann',
      title: 'Death in Venice',
      alt: 'This is the cover of the book called Death in Venice',
      description:
        'One of the most famous literary works of the 20th century, the novella "Death in Venice" embodies themes that preoccupied Thomas Mann (1875–1955) in much of his work.'
    },
    adventures_of_huckleberry_finn: {
      author: 'Mark Twain',
      title: 'Adventures of Huckleberry Finn',
      alt: 'This is the cover of the book called Adventures of Huckleberry Finn',
      description:
        'The novels preeminence derives from its wonderfully imaginative re-creation of boyhood adventures along the Mississippi River.'
    },
    oliver_twist: {
      author: 'Charles Dickens',
      title: 'Oliver Twist',
      alt: 'This is the cover of the book called Oliver Twist',
      description:
        'A profound social critic, Dickens introduced genteel readers to the problems of the poor in a way that had rarely been attempted before.'
    },
    frankenstein: {
      author: 'Mary Shelley',
      title: 'Frankenstein',
      alt: 'This is the cover of the book called Frankenstein',
      description:
        'The story of Victor Frankensteins terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. '
    },
    return_of_native: {
      author: 'Thomas Hardy',
      title: 'The Return of the Native',
      alt: 'This is the cover of the book called The Return of the Native',
      description:
        'It first appeared in the magazine Belgravia, a publication known for its sensationalism, and was presented in twelve monthly installments from January to December 1878.'
    }
  };

  const images = {
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
    return_of_native: './images/return_of_native.jpeg'
  };

  function createAndAppend(tagName, parent, options = {}) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    for (const key of Object.keys(options)) {
      const value = options[key];
      if (key === 'text') {
        elem.textContent = value;
      } else {
        elem.setAttribute(key, value);
      }
    }
    return elem;
  }

  const mainDiv = createAndAppend('div', document.body);

  createAndAppend('h1', mainDiv, { text: 'My Favourite Books' });

  const ulTag = createAndAppend('ul', mainDiv, { class: 'books' });

  bookTitles.forEach(function(id) {
    const liTag = createAndAppend('li', ulTag, { class: 'book' });
    const section = createAndAppend('div', liTag, { class: 'section' });
    const bookInfo = createAndAppend('p', section);
    bookInfo.innerHTML = information[id].description;
    const img = createAndAppend('img', liTag);
    img.src = images[id];
  });
})();
