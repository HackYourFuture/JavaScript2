/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
    // your code goes in here, return the ul element
    const ul = document.createElement('ul');

    books.forEach((book) => {
        const img = document.createElement('img');
        const p = document.createElement('p');
        const listItem = document.createElement('li');
        img.src = book.url;
        p.innerText = book.title + ' ' + book.author;
        if (book.alreadyRead) {
            listItem.style.backgroundColor = 'green';
        } else {
            listItem.style.backgroundColor = 'red';
        }
        listItem.appendChild(img);
        listItem.appendChild(p);
        ul.appendChild(listItem);
    });
    return ul;
}

const books = [{
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        alreadyRead: false,
        url: 'https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg',
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg',
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        alreadyRead: true,
        url: 'https://servimg.eyrolles.com/static/media/6224/9780201616224_internet_h1400.jpg',
    },
];

let ulElement = createBookList(books);

document.getElementById('bookList').appendChild(ulElement);