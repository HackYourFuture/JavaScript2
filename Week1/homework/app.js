'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'the_ragged_edge_of_night',
    'a_case_of_need',
    'the_ocean_liner',
    'what_I\'ve_done',
    'dirty_headlines',
    'the_storyteller\'s_secret',
    'origin',
    'harry_potter_and_the sorcerer\'s_stone',
    'her_cherry',
    'worth_the_wait'
  ];
  class bookInfo {
    constructor(id, title, language, author, imgSrc) {
      this.id = id;
      this.title = title;
      this.language = language;
      this.author = author;
      this.src = imgSrc;
    }
  }
  const books = [];
  let book1 = new bookInfo(bookTitles[0], 'Harry Potter Chamber Secrets', 'Engels', 'J. K. Rowling', 'https://images-na.ssl-images-amazon.com/images/I/61S%2Bdv-DgIL._AC_UL160_.jpg');
  books.push(book1);
  let book2 = new bookInfo(bookTitles[1], 'The Ragged Edge of Night', 'Engels', 'Olivia Hawker', 'https://images-na.ssl-images-amazon.com/images/I/916epYlsgUL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg');
  books.push(book2);
  let book3 = new bookInfo(bookTitles[2], 'A Case of Need', 'Engels', ' Michael Crichton', 'https://images-na.ssl-images-amazon.com/images/I/51eq3q%2BPFWL._SX303_BO1,204,203,200_.jpg');
  books.push(book3);
  let book4 = new bookInfo(bookTitles[3], 'The Ocean Liner', 'Engels', 'Marius Gabriel', 'https://images-na.ssl-images-amazon.com/images/I/41lvz1GJKuL._SX331_BO1,204,203,200_.jpg');
  books.push(book4);
  let book5 = new bookInfo(bookTitles[4], 'What I\'ve Done', 'Engels', 'Melinda Leigh', 'https://images-na.ssl-images-amazon.com/images/I/51ip6aYwZwL.jpg');
  books.push(book5);
  let book6 = new bookInfo(bookTitles[5], 'Dirty Headlines', 'Engels', 'L J Shen', 'https://images-na.ssl-images-amazon.com/images/I/41m8diPiujL._SX331_BO1,204,203,200_.jpg');
  books.push(book6);
  let book7 = new bookInfo(bookTitles[6], 'The Storyteller\'s Secret', 'Engels', 'Jini S', 'https://images-na.ssl-images-amazon.com/images/I/51GC3g1SSXL._SX331_BO1,204,203,200_.jpg');
  books.push(book7);
  let book8 = new bookInfo(bookTitles[7], 'Origin', 'Engels', 'Dan Brown', 'https://images-na.ssl-images-amazon.com/images/I/51Z0WWdD7CL._SY498_BO1,204,203,200_.jpg');
  books.push(book8);
  let book9 = new bookInfo(bookTitles[8], 'Harry Potter And The Sorcerer\'s Stone', 'Engels', 'J.K.Rowling', 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg');
  books.push(book9);
  let book10 = new bookInfo(bookTitles[9], 'Her Cherry', 'Engels', 'Penelope Bloom', 'https://images-na.ssl-images-amazon.com/images/I/31xusWau6zL.jpg');
  books.push(book10);
  let book11 = new bookInfo(bookTitles[10], 'Worth The Wait', 'Engels', 'Claudia Connor', 'https://images-na.ssl-images-amazon.com/images/I/51oBN8F0X0L.jpg');
  books.push(book11);

  // Replace with your own code
  console.log(bookTitles);

  function render(container) {
    // add your code here
    const ulElem = document.createElement('ul');

    for (let book of books) {
      const liElem = document.createElement('li');
      //liElem.innerText = bookTitle;
      const liImg = document.createElement('img');
      liImg.setAttribute("src", book.src);
      liImg.setAttribute("width", "120");
      //liImg.setAttribute("height", "228");
      liImg.setAttribute("alt", book.id);
      const explanationImg = document.createElement('p');
      explanationImg.innerText = book.title;
      liElem.appendChild(liImg);
      liElem.appendChild(explanationImg);


      ulElem.appendChild(liElem);
    }
    return container.appendChild(ulElem);
  }

  function main() {
    const r = document.getElementById('bookList');
    const h1 = document.createElement('h1');
    h1.innerText = 'Best Seller';
    r.appendChild(h1);
    render(r);

  }

  window.addEventListener('load', main);
}
