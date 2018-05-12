'use strict';
//https://github.com/HackYourFuture/JavaScript2/blob/master/Week1/MAKEME.md

let textOfH1 = document.getElementById("this-is-the-header");
console.log(textOfH1);
textOfH1.textContent = "Hello From The Book Space";
document.getElementById("this-is-the-header").style.fontFamily = "Impact,Charcoal,sans-serif";
document.getElementById("this-is-the-header").style.color = "black";
document.getElementById("this-is-the-header").style.position = "relative";


let texOfH2 = document.getElementById("this-is-secondtitle");
console.log(texOfH2);
texOfH2.textContent = "Welcome to a list with some of my favorite books by the most \" FANTASTIC\" writers";
document.getElementById("this-is-secondtitle").style.color = "purple";


const myFaveBooks = ["stranger-in-strange-land",
  "the-foundation-series",
  "the-moon-is-a-harsh-mistress",
  "2001-a-space-odissey",
  "the-godfather",
  "pedro-paramo",
  "isle-of-passion",
  "the-great-gatsby",
  "the-house-of-the-spirits",
  "the-picture-of-dorian-grey"];

console.log(myFaveBooks);
let ul = document.getElementById("recentlist");
function generateUl() {
  myFaveBooks.forEach(element => {
    console.log(element)
    let li = document.createElement('li')
    li.id = element;
    ul.appendChild(li)

  });
}

const bookData = {
  "stranger-in-strange-land": {
    title: 'Stranger in a Strange Land',
    author: 'Robert A. Heinlein',
    language: 'English',
    genera: 'Science Fiction'

  }
  ,

  "the-foundation-series": {
    title: 'The Foundation Series',
    author: 'Isaac Asimov',
    language: 'English',
    genera: 'Science Fiction'
  }
  ,
  "the-moon-is-a-harsh-mistress": {
    title: 'The Moon is a Harsh Mistress',
    author: 'Robert A. Heinlein',
    language: 'English',
    genera: 'Science Fiction'
  }
  ,
  "2001-a-space-odissey": {
    title: '2001 A Space Odissey',
    author: 'Arthur C. Clarke',
    language: 'English',
    genera: 'Science Fiction'

  }
  ,
  "the-godfather": {
    title: 'The Godfather',
    author: 'Mario Puzzo',
    language: 'English',
    genera: 'Science Fiction'

  }
  ,
  "pedro-paramo": {
    title: 'Pedro Paramo',
    author: 'Juan Rulfo',
    language: 'Spanish',
    genera: 'Science Fiction'

  }
  ,
  "isle-of-passion": {
    title: 'Isle of Passion',
    author: 'Laura Restrepo',
    language: 'Spanish',
    genera: 'Science Fiction'

  }
  ,
  "the-great-gatsby": {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    language: 'English',
    genera: 'Science Fiction'

  }
  ,
  "the-house-of-the-spirits": {
    title: 'The House of the Spirits',
    author: 'Isabel Allende',
    language: 'Spanish',
    genera: 'Science Fiction'

  }
  ,
  "the-picture-of-dorian-grey": {
    title: 'The Picture-of Dorian Grey',
    author: 'Robert A. Heinlein',
    language: 'English',
    genera: 'Science Fiction'

  }
}

generateUl()

myFaveBooks.forEach(function (id) {
  console.log(id);
  var li = document.getElementById(id);
  //document.getElementById(id).style.color = "darksilver"; //<this is just an exercise to change color lol, this changes all elements.
  const titleElement = document.createElement("h3");
  titleElement.textContent = bookData[id].title
  titleElement.style.color = "darkblue";
  titleElement.style.fontFamily = "fantasy";
  const authorElement = document.createElement("h4");
  authorElement.textContent = bookData[id].author
  authorElement.style.color = "silver"
  const languageElement = document.createElement("h5");
  languageElement.textContent = bookData[id].language
  languageElement.style.color = "gold";
  const generaElement = document.createElement("h5");
  generaElement.textContent = bookData[id].genera
  generaElement.style.color = "gold";
  li.appendChild(titleElement);
  li.appendChild(authorElement);
  li.appendChild(languageElement);
  li.appendChild(generaElement);


});

const myFaveBookCovers = {
  "stranger-in-strange-land": "img/https://cdn1.thr.com/sites/default/files/2016/11/stranger_in_a_strange_land_cover.jpg",
  "the-foundation-series": "img/https://i.pinimg.com/236x/9a/ac/c4/9aacc49b1e5dcba14e50b36588b24869--asimov-foundation-science-fiction.jpg",
  "the-moon-is-a-harsh-mistress": "https://images-na.ssl-images-amazon.com/images/I/7122S6p7XTL.jpg",
  "2001-a-space-odissey": "img/http://images-eu.amazon.com/images/P/0451452739.02.LZZZZZZZ.jpg",
  "the-godfather": "img/https://images.gr-assets.com/books/1394988109l/22034.jpg",
  "pedro-paramo": "img/https://i1.wp.com/media.tumblr.com/tumblr_l4y7xuwt6t1qalmun.jpg",
  "isle-of-passion": "img/https://images-na.ssl-images-amazon.com/images/I/419E66CB24L._SX330_BO1,204,203,200_.jpg",
  "the-great-gatsby": "img/http://www.ustarnovels.co.uk/media/1000x1000/Cover_The_Great_Gatsby.jpg",
  "the-house-of-the-spirits": "img/http://www.abc.net.au/radionational/image/9207424-3x4-340x453.jpg",
  "the-picture-of-dorian-grey": "img/https://images-na.ssl-images-amazon.com/images/I/51IPe62r8gL._SX313_BO1,204,203,200_.jpg"
};


function booksListImg() {
  for (let bookId in myFaveBookCovers) {
    let booksImg = document.createElement("img");
    booksImg.setAttribute("src", myFaveBookCovers[bookId]);
    let x = document.getElementById(bookId);
    x.appendChild(booksImg);
    booksImg.innerHTML;
  }
}
console.log(booksListImg())
