'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'moby_dick',
    'the_adventures_of_huckleberry_finn',
    'alices_adventures_in_wonderland',
    'charlie_and_the_chocolate_factory',
    'wuthering_heights',
    'war_and_peace',
    'anna_karenina',
    'animal_farm',
    'a_tale_of_two_cities',
    'the_alchemist'
  ];

  const books = {
    moby_dick: {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      language: 'English',
      length: 720,
      info:
        'In Herman Melvilles Moby- Dick, Captain Ahab is an eerily compelling madman who focuses his distilled hatred and suffering(and that of generations before him) into the pursuit of a creature as vast, dangerous and unknowable as the sea itself.More than just a novel of adventure, this is a haunting social commentary populated with some of the most enduring characters in literature.Written with wonderfully redemptive humour, Moby Dick is a profound and timeless inquiry into character, faith and the nature of perception.'
    },
    the_adventures_of_huckleberry_finn: {
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      language: 'English',
      length: 368,
      info:
        'The original Great American Novel, an incomparable adventure story and a classic of unruly humour, Twains masterpiece sees Huckleberry Finn and Jim the slave escape their difficult lives by fleeing down the Mississippi on a raft.There, they find steamships, feuding families, an unlikely Duke and King and vital lessons about the world in which they live.With its unforgettable cast of characters, Hemingway called '
    },
    alices_adventures_in_wonderland: {
      title: 'Alice Adventures in Wonderland',
      author: 'Lewis Carroll',
      language: 'English',
      length: 192,
      info:
        'Alice tumbles down a hole and an extraordinary adventure begins. In a strange world with even stranger characters, she meets a rabbit with a pocket watch, joins a Mad Hatters Tea Party, and plays croquet with the Queen! Lost in this fantasy land, Alice finds herself growing more and more curious by the minute. . .'
    },
    charlie_and_the_chocolate_factory: {
      title: 'Charlie and the Chocolate Factory ',
      author: 'Roald Dahl',
      language: 'English',
      length: 160,
      info:
        'Mr Willy Wonka is the most extraordinary chocolate maker in the world. And do you know who Charlie is? Charlie Bucket is the hero. The other children in this book are nasty little beasts, called: Augustus Gloop - a great big greedy nincompoop; Veruca Salt - a spoiled brat; Violet Beauregarde - a repulsive little gum-chewer; Mike Teavee - a boy who only watches television. Clutching their Golden Tickets, they arrive at Wonkas chocolate factory.But what mysterious secrets will they discover ? Our tour is about to begin.Please dont wander off. Mr Wonka wouldnt like to lose any of you at this stage of the proceedings. . .'
    },
    wuthering_heights: {
      title: 'Wuthering Heights',
      author: 'Emily Bronte',
      language: 'English',
      length: 384,
      info:
        'Lockwood, the new tenant of Thrushcross Grange on the bleak Yorkshire moors, is forced to seek shelter one night at Wuthering Heights, the home of his landlord. There he discovers the history of the tempestuous events that took place years before: of the intense passion between the foundling Heathcliff and Catherine Earnshaw, and her betrayal of him. As Heathcliffs bitterness and vengeance is visited upon the next generation, their innocent heirs must struggle to escape the legacy of the past.'
    },
    war_and_peace: {
      title: 'War And Peace',
      author: 'Leo Tolstoy',
      language: 'English',
      length: 1472,
      info:
        'At a glittering society party in St Petersburg in 1805, conversations are dominated by the prospect of war. Terror swiftly engulfs the country as Napoleons army marches on Russia, and the lives of three young people are changed forever.The stories of quixotic Pierre, cynical Andrey and impetuous Natasha interweave with a huge cast, from aristocrats and peasants, to soldiers and Napoleon himself.In War and Peace(1868 - 9), Tolstoy entwines grand themes - conflict and love, birth and death, free will and fate - with unforgettable scenes of nineteenth - century Russia, to create a magnificent epic of human life in all its imperfection and grandeur.'
    },
    anna_karenina: {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      language: 'English',
      length: 992,
      info:
        'Anna is a beautiful, intelligent woman whose passionate affair with the dashing Count Vronsky leads her to ruin. But her story is also about a search for meaning, and by twinning it with that of Levin, an awkward idealist whose happy marriage and domestic trials form the backdrop for a similar quest, Tolstoy creates a rich and complex masterpiece that has captured the imagination of readers for decades.'
    },
    animal_farm: {
      title: 'Animal Farm',
      author: 'George Orwell',
      language: 'English',
      length: 112,
      info:
        'Mr Jones of Manor Farm is so lazy and drunken that one day he forgets to feed his livestock. The ensuing rebellion under the leadership of the pigs Napoleon and Snowball leads to the animals taking over the farm. Vowing to eliminate the terrible inequities of the farmyard, the renamed Animal Farm is organised to benefit all who walk on four legs. But as time passes, the ideals of the rebellion are corrupted, then forgotten. And something new and unexpected emerges. . .'
    },
    a_tale_of_two_cities: {
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      language: 'English',
      length: 544,
      info:
        'After eighteen years as a political prisoner in the Bastille the aging Dr Manette is finally released and reunited with his daughter in England. There two very different men, Charles Darnay, an exiled French aristocrat, and Sydney Carton, a disreputable but brilliant English lawyer, become enmeshed through their love for Lucie Manette. From the tranquil lanes of London, they are all drawn against their will to the vengeful, bloodstained streets of Paris at the height of the Reign of Terror and soon fall under the lethal shadow of La Guillotine.'
    },
    the_alchemist: {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      language: 'English',
      length: 197,
      info:
        'Paulo Coelhos masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.His quest will lead him to riches far different—and far more satisfying—than he ever imagined.Santiagos journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along lifes path, and, most importantly, to follow our dreams.'
    }
  };
  const BookCovers = {
    moby_dick: 'img/moby_dick.jpg',
    the_adventures_of_huckleberry_finn: 'img/the_adventures_of_huckleberry_finn.jpg',
    alices_adventures_in_wonderland: 'img/alices_adventures_in_wonderland.jpg',
    charlie_and_the_chocolate_factory: 'img/charlie_and_the_chocolate_factory.jpg',
    wuthering_heights: 'img/wuthering_heights.jpg',
    war_and_peace: 'img/war_and_peace.jpg',
    anna_karenina: 'img/anna_karenina.jpg',
    animal_farm: 'img/animal_farm.jpg',
    a_tale_of_two_cities: 'img/a_tale_of_two_cities.jpg',
    the_alchemist: 'img/the_alchemist.jpg'
  };

  function createAndAppendElement(tag, parent, elementInnerText) {
    const element = document.createElement(tag);
    if (elementInnerText) {
      element.innerText = elementInnerText;
    }
    parent.appendChild(element);
    return element;
  }

  function generateBookCards(container) {
    for (let i = 0; i < bookTitles.length; i++) {
      const bookCard = createAndAppendElement('li', container);
      bookCard.setAttribute('id', bookTitles[i]);
    }
  }

  function insertBookCovers() {
    const bookList = Object.keys(BookCovers);
    for (const key of bookList) {
      const li = document.getElementById(key);
      const img = createAndAppendElement('img', li);
      img.src = BookCovers[key];
      img.alt = key;
    }
  }

  function insertBookDetails() {
    const bookList = Object.keys(books);
    for (const key of bookList) {
      const bookCard = document.getElementById(key);
      createAndAppendElement('h2', bookCard, books[key].title);
      createAndAppendElement('h3', bookCard, books[key].author);
      createAndAppendElement('p', bookCard, books[key].info);
      const pages = createAndAppendElement('p', bookCard, books[key].length + ' pages');
      pages.className = 'align-right bold';
    }
  }

  function main() {
    createAndAppendElement('h1', document.body, '10 Books That I Read');
    const booksContainer = createAndAppendElement('ul', document.body);
    generateBookCards(booksContainer);
    insertBookCovers();
    insertBookDetails();
  }
  window.addEventListener('load', main);
}
