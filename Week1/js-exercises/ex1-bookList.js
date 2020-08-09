
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
