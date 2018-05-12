'use strict';

function main() {
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'eloquent_java_script',
    'ccna_routing_and_switching',
    'from_tadmor_to_harvard',
    'introduction_to_automata_theory',
    'distributed_systems_concepts_and_design',
    'harry_potter_sorcerers_stone',
    'harry_potter_deathly_hallows',
    'harry_potter_cursed_child',
    'harry_potter_half_blood_prince'
  ];

  const booksInfo = {
    harry_potter_chamber_secrets: {
      title: 'Harry Potter - The Chamber of Secrets',
      language: 'English',
      author: 'J. K. Rowling',
      publisher: 'Scholastic Paperbacks; Reprint edition (September 1, 2000)',
      paperback: '341 pages',
      isbn: '0439064872',
      amazon: 'https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064872/'
    },
    eloquent_java_script: {
      title: 'Eloquent JavaScript',
      language: 'English',
      author: 'Marijn Haverbeke',
      publisher: 'No Starch Press; 2 edition (December 7, 2014)',
      paperback: '472 pages',
      isbn: '1593275846',
      amazon: 'https://www.amazon.com/Eloquent-JavaScript-2nd-Ed-Introduction/dp/1593275846/'
    },
    from_tadmor_to_harvard: {
      title: 'From Tadmor to Harvard',
      language: 'Arabic',
      author: 'Bara Sarraj',
      publisher: 'CreateSpace Independent Publishing Platform (February 2, 2016)',
      paperback: '318 pages',
      isbn: '1523402970',
      amazon: 'https://www.amazon.com/Tadmor-Harvard-Arabic-Bara-Sarraj/dp/1523402970'
    },
    ccna_routing_and_switching: {
      title: 'CCNA Routing and Switching',
      language: 'English',
      author: 'Wendell Odom',
      publisher: 'Cisco Press; 1 edition (August 5, 2016)',
      paperback: '1600 pages',
      isbn: '1587205815',
      amazon: 'https://www.amazon.com/Routing-Switching-200-125-Official-Library/dp/1587205815/'
    },
    introduction_to_automata_theory: {
      title: 'Introduction to Automata Theory, Languages and Computation',
      language: 'English',
      author: 'John E. Hopcroft & Jeffrey D. Ullman',
      publisher: 'Addison-Wesley Publishing Company; 1st edition (April 1979)',
      paperback: '500 pages',
      isbn: '020102988X',
      amazon: 'https://www.amazon.com/Introduction-Automata-Languages-Computation-Addison-Wesley/dp/020102988X/'
    },
    distributed_systems_concepts_and_design: {
      title: 'Distributed Systems: Concepts and Design',
      language: 'English',
      author: 'George Coulouris',
      publisher: 'Pearson; 5 edition (May 7, 2011)',
      paperback: '1008 pages',
      isbn: '0132143011',
      amazon: 'https://www.amazon.com/Distributed-Systems-Concepts-Design-5th/dp/0132143011/'
    },
    harry_potter_sorcerers_stone: {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      language: 'English',
      author: 'J. K. Rowling',
      publisher: 'Scholastic; 1st Edition edition (September 1998)',
      paperback: '309 pages',
      isbn: '0439708184',
      amazon: 'https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X'
    },
    harry_potter_deathly_hallows: {
      title: 'Harry Potter and the Deathly Hallows',
      language: 'English',
      author: 'J. K. Rowling',
      publisher: 'Arthur A. Levine Books (July 1, 2009)',
      paperback: '784 pages',
      isbn: '0545139708',
      amazon: 'https://www.amazon.com/Harry-Potter-Deathly-Hallows-Book/dp/0545139708'
    },
    harry_potter_cursed_child: {
      title: 'Harry Potter and the Cursed Child',
      language: 'English',
      author: 'J. K. Rowling',
      publisher: 'Arthur A. Levine Books (July 25, 2017)',
      paperback: '336 pages',
      isbn: '133821666X',
      amazon: 'https://www.amazon.com/Harry-Potter-Cursed-Child-Parts/dp/133821666X'
    },
    harry_potter_half_blood_prince: {
      title: 'Harry Potter and the Half-Blood Prince',
      language: 'English',
      author: 'J. K. Rowling',
      publisher: 'Scholastic Paperbacks; Reprint edition (July 25, 2006)',
      paperback: '652 pages',
      isbn: '0439785960',
      amazon: 'https://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960'
    },
  };

  const body = document.body; // get body element
  body.appendChild(createList(bookTitles));

  function createList(books) {
    const booksList = document.createElement('ul');

    for (let i = 0; i < books.length; i++) { // create list item for each book.

      const item = document.createElement('li');
      item.id = books[i];
      item.appendChild(createChild('h2', booksInfo[books[i]].title));
      item.appendChild(createChild('p', 'By ', createChild('em', booksInfo[books[i]].author)));
      booksList.appendChild(item);

      const bookDetails = document.createElement('ul');
      item.appendChild(bookDetails);

      for (const pro in booksInfo[books[i]]) {

        if (pro === 'amazon') { // add amazon link. 

          const link = createChild('a', capitalizeFirstLetter(pro));
          link.href = booksInfo[books[i]][pro];
          link.target = '_blank';
          bookDetails.appendChild(createChild('li', link, '.'));

        } else if (pro === 'isbn') { // isbn should be in uppercase.

          bookDetails.appendChild(createChild('li', createChild('b', pro.toUpperCase(), ': '), booksInfo[books[i]][pro], '.'));

        } else if (pro !== 'title' && pro !== 'author') { //Don't add title and author, already added before.

          bookDetails.appendChild(createChild('li', createChild('b', capitalizeFirstLetter(pro), ': '), booksInfo[books[i]][pro], '.'));

        }

      }

    }

    return booksList;
  }

  //function to create an element with specific TYPE and add CHILDREN to it.
  //CHILDREN could be string or node (which could be an another createChild() call).
  function createChild(type, ...children) {
    const node = document.createElement(type);

    for (const child of children) {

      if (typeof child === 'string') { // append string child as a text node.
        node.appendChild(document.createTextNode(child));
      } else { // else it's a node.
        node.appendChild(child);
      }

    }

    return node;
  }

  const booksCover = buildImagesObj(bookTitles); // create images object.
  addImage(booksCover); // add images to the page.

  function buildImagesObj(books) {
    const obj = new Object();

    for (let i = 0; i < books.length; i++) {
      obj[books[i]] = './img/' + books[i] + '.jpg';
    }

    return obj;
  }

  function addImage(images) {

    for (const image in images) {

      const li = document.getElementById(image); // get the list item that it's id == image name.
      const img = document.createElement('img');
      img.src = images[image];
      img.alt = image;

      const selector = '#' + image + ' > ul'; // select details list.
      li.insertBefore(img, document.querySelector(selector));// add image before details list.

    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}

window.addEventListener('load', main);
