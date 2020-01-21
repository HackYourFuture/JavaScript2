const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  }
];

//add classes :istItem to every li

var linkOne = document.createElement("a");
linkOne.classList.add("linkOne");

linkOne.href = "https://i.ebayimg.com/images/g/kHYAAOSwn1FZtG6R/s-l300.jpg";
var bookOneImage = document.createElement("img");
bookOneImage.classList.add("bookOne");
bookOneImage.src = "https://i.ebayimg.com/images/g/kHYAAOSwn1FZtG6R/s-l300.jpg";
bookOneImage.width = "200";

linkOne.innerHTML = bookOneImage;

//document.body.appendChild(linkOne)

//document.getElementsByClassName.read.

console.log(linkOne); //ayto prepei na mpei mesa sto li
console.log(bookOneImage);

var bookTwoImage = document.createElement("img");
bookTwoImage.src =
  "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
bookTwoImage.width = "200";

const bookCovers = [bookOneImage, bookTwoImage];

var bookUL = document.createElement("UL");
var bookULText = document.createTextNode("List of my favourite books");
document.body.appendChild(bookULText);

for (let i = 0; i < books.length; i++) {
  var bookLi = document.createElement("li");
  var bookTitle = document.createTextNode(
    ` ${books[i].title} from ${books[i].author}`
  );

  document.body.appendChild(bookUL);
  bookLi.appendChild(bookTitle);
  bookUL.appendChild(bookLi);
  bookLi.appendChild(bookCovers[i]);

  if (books[i]["alreadyRead"]) {
    bookLi.className += "readYes";
  } else {
    bookLi.className += "readNo";
  }
}

var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].classList.add("listItem");
}

for (let i = 0; i < listItems.length; i++) {
  listItems[i].appendChild(linkOne);
}

for (let i = 0; i < listItems.length; i++) {
  listItems[i].appendChild(linkOne);
}

console.log(listItems[0]);

let test1 = document.getElementsByClassName("listItem");
