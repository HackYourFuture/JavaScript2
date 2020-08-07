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
let images = ['https://miro.medium.com/max/1000/1*Qo27inBKBKY4Q4Pgk5KkbQ.png', 'https://images1.penguinrandomhouse.com/cover/9780307476708','https://www.studystore.nl/images/9780132119177/3/1'];
function createBookList(books) {

  const bookList = document.querySelector('#bookList');
  const newUl = document.createElement('ul');

  for (let i = 0; i < books.length; i++) {
    const newLi = document.createElement('li');
    const titleAndAuthor = document.createElement('p');
    const newImage = document.createElement('img');

    // styling
    newLi.style.textAlign = 'center';
    newLi.style.maxWidth = '33%';
    newLi.style.height = '300px';
    newLi.style.margin = '20px';
    newLi.style.padding = '20px';
    newUl.style.listStyle = 'none';
    newUl.style.display = 'flex';
    newImage.style.width = "170px";

    if (books[i].alreadyRead == true) {
      newLi.style.background = 'green';
    } else if (books[i].alreadyRead == false) {
      newLi.style.background = 'red'
    }
    // appending
    bookList.appendChild(newUl);
    newUl.appendChild(newLi);
    newLi.appendChild(titleAndAuthor);
    newLi.appendChild(newImage);

    titleAndAuthor.innerText = `"${books[i].title}" by "${books[i].author}"`;
    newUl.children[i].children[1].setAttribute("src", images[i]);

    // console.log(newUl.children[i].children[1]);
    // console.log(images[i]);
  }
 
  
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

let ulElement = createBookList(books);

// document.querySelector('#bookList').appendChild(ulElement);
