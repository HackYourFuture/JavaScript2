'use strict';

const booksTitles = [
  'still_me',
  'the_outsider',
  'the_great_alone',
  'circe',
  'the_hate_u_give',
  'the_kiss_quotient',
  'vengeful',
  'elevation',
  'the_last_black_unicorn',
  'i_will_be_gone_in_the_dark',
];
const booksFullInfo = {
  still_me: {
    title: 'Still Me',
    writer: 'Jojo Moyes',
    category: 'FICTION',
    price: 11.4,
  },
  the_outsider: {
    title: 'The Outsider',
    writer: 'Stephen King',
    category: 'MYSTERY, THRILLER',
    price: 17.17,
  },
  the_great_alone: {
    title: 'The Great Alone',
    writer: 'Kristin Hannah',
    category: 'HISTORICAL FICTION',
    price: 15.83,
  },
  circe: {
    title: 'Circe',
    writer: 'Madeline Miller',
    category: 'FANTASY',
    price: 14.82,
  },
  the_hate_u_give: {
    title: 'The Hate U Give',
    writer: 'Angie Thomas',
    category: 'ROMANCE',
    price: 10.43,
  },
  the_kiss_quotient: {
    title: 'The Kiss Quotient',
    writer: 'Helen Hoang',
    category: 'ROMANCE',
    price: 10.2,
  },
  vengeful: {
    title: 'Vengeful',
    writer: 'V.E. Schwab',
    category: 'SCIENCE FICTION',
    price: 14.27,
  },
  elevation: {
    title: 'Elevation',
    writer: 'Stephen King, Mark Edward Geyer ',
    category: 'HORROR',
    price: 13.96,
  },
  the_last_black_unicorn: {
    title: 'The Last Black Unicorn',
    writer: 'Tiffany Haddish',
    category: 'HUMOR',
    price: 14.86,
  },
  i_will_be_gone_in_the_dark: {
    title: "I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer",
    writer: 'Michelle McNamara,  Gillian Flynn, Patton Oswalt',
    category: 'NONFICTION',
    price: 10.21,
  },
};

const booksCovers = {
  still_me: 'images/still_me.jpg',
  the_outsider: 'images/the_outsider.jpg',
  the_great_alone: 'images/the_great_alone.jpg',
  circe: 'images/circe.jpg',
  the_hate_u_give: 'images/the_hate_u_give.jpg',
  the_kiss_quotient: 'images/the_kiss_quotient.jpg',
  vengeful: 'images/vengeful.jpg',
  elevation: 'images/elevation.jpg',
  the_last_black_unicorn: 'images/the_last_black_unicorn.jpg',
  i_will_be_gone_in_the_dark: 'images/i_will_be_gone_in_the_dark.jpg',
};

// console.log(bookTitles.length + " books Titles: \n" + bookTitles);
const injectListBooksTitles = () => {
  const listContainer = document.getElementById('books_array');
  listContainer.style.display = 'none';
  const ul = document.createElement('ul');
  listContainer.appendChild(ul);
  booksTitles.forEach(element => {
    const li = document.createElement('li');
    ul.appendChild(li);
    const titleNoUnderScore = element.replace(/_/g, ' ');
    const titleFirstCapital =
      titleNoUnderScore.charAt(0).toUpperCase() + titleNoUnderScore.slice(1);
    li.textContent = titleFirstCapital;
  });
};
const ListBooksTitles = () => {
  const checkButton = document.getElementById('books_array').style.display;
  if (checkButton === 'block') {
    document.getElementById('books_array').style.display = 'none';
    document.getElementById('btn_books_array').textContent = 'Show Array list';
  } else {
    document.getElementById('books_array').style.display = 'block';
    document.getElementById('btn_books_array').textContent = 'Hide Array list';
  }
};

const injectListBooksFullInfo = () => {
  const listContainer = document.getElementById('books_object');
  const pageTitle = document.createElement('h2');
  pageTitle.textContent = 'The 10 best books of 2018';
  listContainer.appendChild(pageTitle);
  const ul = document.createElement('ul');
  listContainer.appendChild(ul);
  ul.setAttribute('class', 'books_container');
  booksTitles.forEach(element => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.setAttribute('class', 'single_book_item');
    const bookTitle = booksFullInfo[element].title;
    const bookWriter = booksFullInfo[element].writer;
    const bookCategory = booksFullInfo[element].category;
    const bookPrice = booksFullInfo[element].price;
    const bookCover = booksCovers[element];
    li.innerHTML = `<h3>${bookTitle}</h3><img src="${bookCover}" alt="cover photo of the book: ${bookTitle}"> \
         <p><span>By: </span>${bookWriter}.<br /><span>Category: </span>${bookCategory}<br /><span>Price:</span> $ ${bookPrice}</p> `;
  });
};
window.addEventListener('load', injectListBooksFullInfo);
window.addEventListener('load', injectListBooksTitles);
document.getElementById('btn_books_array').addEventListener('click', ListBooksTitles);
