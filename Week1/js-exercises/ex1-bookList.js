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
  let ul = document.createElement('ul');
  ul.style.cssText = 'list-style: none;display: flex;flex-wrap: wrap; justify-content:center;';
  let div = document.querySelector('h1');
  div.appendChild(ul);

  books.forEach(element => {
    let p = document.createElement('p');
    p.textContent = `${element.title} ${element.author}`;
    let image = document.createElement('img');
    let li = document.createElement('li');
    li.appendChild(p);
    li.appendChild(image);


    
    if (element.title == 'The Design of Everyday Things'){
      image.src = 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg';
    }
    else if ( element.title == 'The Most Human Human' ){
      image.src = 'https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg';
    }
    else{
      image.src = 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg';
    }

      image.style.cssText = 'width: 200px';

    ul.appendChild(li);
    li.style.cssText = 'margin:20px; max-width:25rem; background: red'
    
    if (element.alreadyRead == false){
      li.style.background= 'red';
    }
    else{
      li.style.background = 'green'; 
    }

  });

};



  

  

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

createBookList(books);

