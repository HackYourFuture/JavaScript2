/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>` element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {

  var ul = document.createElement("ul");  

  for (var i = 0; i < books.length; i++) {
      var myBook = books[i];

      const para = document.createElement("p");                                                             
      const paraInfo = document.createTextNode(myBook.title + " " + myBook.author);                               
      para.appendChild(paraInfo);

      if (myBook.alreadyRead === false) { para.style.backgroundColor = "red";  

      } else {    
          para.style.backgroundColor = "green";  }                                                                                                  
      var li = document.createElement('li');
      li.appendChild(para);
      ul.appendChild(li);

      const coverImage = document.createElement("img");
      coverImage.src = myBook.bookCover
      coverImage.style.maxHeight = '300px'
      li.appendChild(coverImage);
  } 

  return ul


}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCover: 'https://assets.wired.com/photos/w_1001/wp-content/uploads/2015/09/design-of-everyday-things.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCover: 'https://th.bing.com/th/id/OIP.Bwdfwq825Plrhn6iHAH1ggHaLZ?pid=Api&rs=1'

  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCover: 'http://www.informit.com/ShowCover.aspx?isbn=0135957052'

  }
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);

//https://www.w3schools.com/jsref/met_node_appendchild.asp 