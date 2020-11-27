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

 const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  alreadyRead: true
}
];

function createBookList(books) {
  // your code goes in here, return the ul element

  //Creat un-order list to hold list items 
  let bookList = document.createElement('ul');

  for (let i = 0; i<books.length; i++){

    // Creat paragraph for each book and creat text inside each paragraph
    let bookTitleAndAuthor = document.createElement('p');
    bookTitleAndAuthor.textContent = books[i].title + ' by ' + books[i].author;

    // Design the paragraph
    bookTitleAndAuthor.style.fontWeight = 'bold';

    //Creat list item for each book and append a paragraph to a list item 
    let bookListItem = document.createElement('li');
    bookListItem.appendChild(bookTitleAndAuthor); 

    //Creat image for each book and assign a source for each image 
    let imgBook = document.createElement('img');
    imgBook.src = `book${i+1}.jpg`

    //Append an image to a list item
    bookListItem.appendChild(imgBook);

    
    // Check if the book already read or not and change the color 

    if( books[i].alreadyRead ){
      bookListItem.style.backgroundColor = 'green';
    }else{
      bookListItem.style.backgroundColor = 'red';
    }

     // Design book list item (li)
    bookListItem.style.margin = '20px';  
    bookListItem.style.padding = '5px';
    bookListItem.style.width = '350px';
    bookListItem.style.height = '350px';

    // Append a list item to un-order list
    bookList.appendChild(bookListItem);

  }

  // Design book list (ul)  
  bookList.style.listStyle = 'none';
  bookList.style.display = 'flex';

  // return un-order list 
  return bookList;
  }

let ulElement = createBookList(books);

document.querySelector('div').appendChild(ulElement);