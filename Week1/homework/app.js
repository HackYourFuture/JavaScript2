'use strict';

  const bookTitles = [
    // Replace with your own book titles
    'The_Lord_of_the_Rings',
    'Harry_Potter_and_The_Chamber_of_Secrets',
    'Harry_Potter_and_the_Order_of_the_Phoenix',
    'The_Master_and_Margarita',
    'The_Little_Tragedies',
    'Eugene_Onegin',
    'The_Cherry_Orchard',
    'Evenings_on_a_Farm_Nea_Dikanka',
    'Three_Men_in_a_Boat',
    'NotreDame_d_Paris',
    'The_Shining',
    'It'
  ];
  const booksInformation = {
    'The_Lord_of_the_Rings': {
      title: "The Lord of the Rings",
      language: "English",
      author: " J. R. R. Tolkien"
    },
    'Harry_Potter_and_The_Chamber_of_Secrets': {
      title: "Harry Potter and The Chamber of Secrets",
      language: "English",
      author: "J. K. Rowling",
    },
    'Harry_Potter_and_the_Order_of_the_Phoenix': {
      title: "Harry Potter and the Order of the Phoenix",
      language: "English",
      author: "J. K. Rowling",
    },
    'The_Master_and_Margarita': {
      title: "The Master and Margarita",
      language: "Russian",
      author: "Mikhail Bulgakov",
     
    },
    'The_Little_Tragedies': {
      title: "The Little Tragedies",
      language: "Russian",
      author: "Alexander Pushkin",
    },
    'Eugene_Onegin': {
      title: "Eugene Onegin",
      language: "Russian",
      author: "Alexander Pushkin",
    },
    'The_Cherry_Orchard': {
      title: "The Cherry Orchard",
      language: "Russian",
      author: "Anton Chekhov",
    },
    'Evenings_on_a_Farm_Nea_Dikanka': {
      title: "Evenings on a Farm Nea Dikanka",
      language: "Russian",
      author: "Nikolai Gogol",
    },
    'Three_Men_in_a_Boat': {
      title: "Three Men in a Boat",
      language: "English",
      author: "Jerome K. Jerome",
    },
    'NotreDame_d_Paris': {
      title: "Notre-Dame de Paris",
      language: "French",
      author: "Victor Hugo", 
    },
    'The_Shining': {
      title: "The Shining",
      language: "English",
      author: "Stephen King"
    },
    'It': {
      title: "It",
      language: "English",
      author: "Stephen King"
    }
  };
  const setImages = {
    'The_Lord_of_the_Rings': 'images/The_Lord_of_the_Rings.jpg', 
    'Harry_Potter_and_The_Chamber_of_Secrets': 'images/Harry_Potter_and_The_Chamber_of_Secrets.jpg',
    'Harry_Potter_and_the_Order_of_the_Phoenix': 'images/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
    'The_Master_and_Margarita': 'images/The_Master_and_Margarita.jpg',
    'The_Little_Tragedies': 'images/The_Little_Tragedies.jpg',
    'Eugene_Onegin': 'images/Eugene_Onegin.jpg',
    'The_Cherry_Orchard': 'images/The_Cherry_Orchard.jpg',
    'Evenings_on_a_Farm_Nea_Dikanka': 'images/Evenings_on_a_Farm_Nea_Dikanka.jpg',
    'Three_Men_in_a_Boat': 'images/Three_Men_in_a_Boat.jpg',
    'NotreDame_d_Paris': 'images/NotreDame_d_Paris.jpg',
    'The_Shining': 'images/The_Shining.jpg',
    'It': 'images/It.jpg'
  };

/*
  console.log(bookTitles);
*/
createBookList()
function createBookList() {
  let myMainDiv = document.getElementById('main');
  let myH1 = document.createElement('h1');
  myMainDiv.appendChild(myH1);
  let pageTitile = document.createTextNode("My favorite books");
  myH1.appendChild(pageTitile);
  let myUl = document.createElement('ul');
  myMainDiv.appendChild(myUl);
  for (let i = 0; i < bookTitles.length; i++) {
    let myLi = document.createElement('li');
    myUl.appendChild(myLi);
    let bookName = document.createTextNode(Object.values(booksInformation)[i].title);
    let bookAuthor = document.createTextNode("The book is written by " + Object.values(booksInformation)[i].author);
    let booklanguage = document.createTextNode("The book is written in " + Object.values(booksInformation)[i].language);
    let myH2 = document.createElement("h2");
    let myH4 = document.createElement("h4");
    let myH5 = document.createElement("h5");
    myH2.appendChild(bookName);
    myH4.appendChild(bookAuthor);
    myH5.appendChild(booklanguage);
    myLi.innerHTML += myH2.outerHTML + myH4.outerHTML + myH5.outerHTML;
    let bookImage = document.createElement("img");
    myLi.appendChild(bookImage);
    myLi.setAttribute("id", Object.keys(setImages)[i]);
    bookImage.setAttribute("src", Object.values(setImages)[i]);
  }
}

let content = document.getElementById("main");
let button = document.getElementById("show_more");
button.onclick = function() {
  if (content.className === "open") {
    content.className = "";
    button.innerHTML = "Show More";
  } else {
    content.className = "open";
    button.innerHTML = "Show Less";
  }
};
