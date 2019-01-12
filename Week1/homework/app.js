'use strict';

// const bookTitles = [
//   // Replace with your own book titles
//   'the_old_man_and_the_sea',
//   'the_apostates:when_muslims_leave_islam',
//   'efsane',
//   'robinson_crusoe',
//   'les_miserables',
//   'first_muslim:the_story_of_muhammad',
//   'denizler_altinda_20000_fersah',
//   'cingoz_recai',
//   'just_for_fun',
//   'mercan_adasi'
// ];

const bookDetails = {
  [`the_old_man_and_the_sea`]: {
    [`title`]: 'The Old Man and The Sea',
    [`language`]: 'English',
    [`author`]: 'Ernest Hemmingway'
  },
  [`the_apostates:when_muslims_leave_islam`]: {
    [`title`]: 'The Apostates: When Muslims Leave Islam',
    [`language`]: 'English',
    [`author`]: 'Simon Cottee'
  },
  [`efsane`]: {
    [`title`]: 'Efsane',
    [`language`]: 'Turkish',
    [`author`]: 'Iskender Pala'
  },
  [`robinson_crusoe`]: {
    [`title`]: 'Robinson Crusoe',
    [`language`]: 'English',
    [`author`]: 'Daniel Defoe'
  },
  [`les_miserables`]: {
    [`title`]: 'Les Miserables',
    [`language`]: 'English',
    [`author`]: 'Victor Hugo'
  },
  [`first_muslim:the_story_of_muhammad`]: {
    [`title`]: 'First Muslim: The Story of Muhammad',
    [`language`]: 'English',
    [`author`]: 'Lesley Hazleton'
  },
  [`denizler_altinda_20000_fersah`]: {
    [`title`]: 'Denizler Altında 20000 Fersah',
    [`language`]: 'Turkish',
    [`author`]: 'Jules Verne'
  },
  [`cingoz_recai`]: {
    [`title`]: 'Cingöz Recai',
    [`language`]: 'Turkish',
    [`author`]: 'Peyami Safa'
  },
  [`just_for_fun`]: {
    [`title`]: 'Just for Fun',
    [`language`]: 'English',
    [`author`]: 'Linus Torvalds'
  },
  [`mercan_adasi`]: {
    [`title`]: 'Mercan Adası',
    [`language`]: 'Turkish',
    [`author`]: 'R. M. Ballantyne'
  }
};

const imgSrc = {
  the_old_man_and_the_sea: 'images/the_old_man_and_the_sea.jpg',
  'the_apostates:when_muslims_leave_islam': 'images/the_apostates.png',
  efsane: 'images/efsane.jpg',
  robinson_crusoe: 'images/robinson_crusoe.jpg',
  les_miserables: 'images/les_miserables.jpeg',
  'first_muslim:the_story_of_muhammad': 'images/the_first_muslim.jpg',
  denizler_altinda_20000_fersah: 'images/denizler_altinda.jpg',
  cingoz_recai: 'images/cingoz_recai.jpg',
  just_for_fun: 'images/just_for_fun.jpg',
  mercan_adasi: 'images/mercan_adasi.jpg'
};

function generator() {
  const ul = document.createElement('ul');
  const root = document.getElementById('root');
  root.appendChild(ul);
  for (let i = 0; i < Object.values(bookDetails).length; i++) {
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const li = document.createElement('li');
    const book = Object.values(bookDetails)[i];
    ul.appendChild(li);
    li.appendChild(h1);
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(p);
    li.setAttribute('id', book);
    h1.innerText = book.title;
    h2.innerText = book.author;
    p.innerText = book.language;
    img.src = Object.values(imgSrc)[i];
    img.alt = h1.innerText;
  }
}

generator();
