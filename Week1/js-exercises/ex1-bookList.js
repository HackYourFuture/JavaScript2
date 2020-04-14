/**

 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).//

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */
function createBookList(books) {
  const listOfBooks = document.createElement('ul');
  // iterate through the array by using for loop//
  for (let i = 0; i < books.length; i++) {

    // creating the list and the paragraph and the images //

    const listItem = document.createElement('li');
    const listTitle = document.createElement('p');
    const listImg = document.createElement('img');
    listImg.setAttribute('src', imgCoverUrl[i]);

    //style//

    listOfBooks.style.display = 'flex';
    listItem.style.listStyleType = 'none';
    listItem.style.margin = '20px';
    listItem.style.padding = '15px';
    listImg.style.width = '300px';
    listImg.style.height = '425px';
    // Change the style of the book depending on whether you have read it(green) or not(red).//
    const BookIsRead = books[i].alreadyRead;
    if (BookIsRead === true) {
      listItem.style.backgroundColor = 'green';
    }
    else {
      listItem.style.backgroundColor = 'red';
    }

    const bookTitle = books[i].title;
    const bookAutohr = books[i].author;
    const bookHeader = document.createTextNode(bookTitle + ' by ' + bookAutohr);

    listTitle.appendChild(bookHeader);
    listItem.appendChild(listTitle);
    listItem.appendChild(listImg);
    listOfBooks.appendChild(listItem);
  }
  return listOfBooks;

}
let imgCoverUrl = [];
imgCoverUrl[0] = 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/8/4/2/9200000010922484.jpg';
imgCoverUrl[1] = 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/0/1/4/1001004011834109.jpg';
imgCoverUrl[2] = 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/5/0/5/9200000110185055.jpg';

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

let ulElement = createBookList(books);
document.querySelector('#bookList').appendChild(ulElement);