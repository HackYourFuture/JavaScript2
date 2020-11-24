
const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  alreadyRead: true
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: false
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  alreadyRead: true
}
];

function createBookList(books) {
  let li = document.createElement('li');
  li.textContent = books;
  return li;

}




let ulElement = createBookList(books);// starnge when I use "ulElement(books)" bellow it says that the function doesnt exist

const firstBook = document.querySelector("#bookList").appendChild(createBookList(books[0].none));
const secondBook = document.querySelector("#bookList").appendChild(createBookList(books[1].none));
const thirdBook = document.querySelector("#bookList").appendChild(createBookList(books[2].none));

// assingment doesnt say if it has to be done in html or js, so i wrote everything in js just for more practice. it is super not dry, could i please get some advice how i could make it drier without using html!

let paragraph1 = document.createElement("p")
paragraph1.textContent = "The Little Prince Antoine De Saint-Exupéry";
firstBook.append(paragraph1)

let paragraph2 = document.createElement("p")
paragraph2.textContent = "Veronika Decides To Die by Paulo Coelho";
secondBook.append(paragraph2)

let paragraph3 = document.createElement("p")
paragraph3.textContent = "Anna Karenina by Leo Tolstoy";
thirdBook.append(paragraph3)

const imageFirstBook = document.createElement("img");
imageFirstBook.src =
  "https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781853261589/0000/the-little-prince.jpg";
firstBook.appendChild(imageFirstBook);

const imageSecondBook = document.createElement("img");
imageSecondBook.src = "https://images-na.ssl-images-amazon.com/images/I/411YxgRv1bL._SX324_BO1,204,203,200_.jpg";
secondBook.appendChild(imageSecondBook);

const imageThirdBook = document.createElement("img");
imageThirdBook.src = "https://images-na.ssl-images-amazon.com/images/I/51vPf2CfSEL.jpg";
thirdBook.appendChild(imageThirdBook);

firstBook.style.cssText = "background-color:green; padding-left: 20px; width: 400px"
secondBook.style.cssText = "background-color:red; padding-left: 20px; width: 400px"
thirdBook.style.cssText = "background-color:green; padding-left: 20px; width: 400px"

document.querySelector("#bookList").style.cssText = "display: flex; flex-direction: row; justify-content: space-evenly;"
