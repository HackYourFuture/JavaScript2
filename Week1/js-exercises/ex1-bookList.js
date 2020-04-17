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
  //your code goes in here, return the ul element
  
  let myBookList = document.createElement('ul');
  for (const i of books) 
    {
      let bookItem = document.createElement('li');
      let bookInfo = document.createElement('p');
      bookInfo.innerText = `${i.title}  -  ${i.author}`;
      bookItem.appendChild(bookInfo);
      let bookCover = document.createElement ('img');
      bookCover.src = i.imgUrl;
      bookItem.appendChild(bookCover);
    
      if (i.alreadyRead === true) bookItem.className = 'red';
        else
          bookItem.className = 'green';
      myBookList.appendChild(bookItem);
    }
    return myBookList;
  

}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false ,
    imgUrl : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true ,
    imgUrl : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true ,
    imgUrl : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg'
  }
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);