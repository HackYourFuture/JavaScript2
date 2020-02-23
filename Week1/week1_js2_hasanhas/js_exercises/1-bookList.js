const books = [{
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    isAlreadyRead: false,
    img: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
  },
  {
    title: '1984',
    author: 'George Orwell',
    isAlreadyRead: true,
    img: 'https://images3.penguinrandomhouse.com/cover/9780452284234',
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    isAlreadyRead: true,
    img: 'https://images4.penguinrandomhouse.com/cover/9780679783275',
  },
];

const root = document.getElementById('root');
const ul = document.createElement('ul');
root.appendChild(ul);


// Iterate through the array of books.    

for (index = 0; index < books.length; index++) {
  const book = books[index];


  // For each book, create a`<p>` element with the book title and author and append it to the page.

  const li = document.createElement('li');

  let p = document.createElement('p');
  p.innerText = `${book.title} - ${book.author}`;

  li.appendChild(p);

  // Add an`<img>` to each book that links to a URL of the book cover.

  const bookCover = document.createElement('img');
  bookCover.src = book.img

  li.appendChild(bookCover);

  // Change the style of the book depending on whether you have read it(green) or not(red).

  if (book.isAlreadyRead) {
    li.style.backgroundColor = 'green';
  } else {
    li.style.backgroundColor = 'red';
  }


  ul.appendChild(li);


}