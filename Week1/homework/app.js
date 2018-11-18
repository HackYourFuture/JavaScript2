let theBooksIRead = [
  "harry_potter_and_the_deathly_hallows",
  "The_Baloch_and_Balochistan",
  "The_Baloch_Conflict_with_Iran_and_Pakistan",
  "Balochistan:_At_a_Crossroads_Reviews",
  "The_Alchemist",
  "The_Night_Bird",
  " From_Sand_and_Ash",
  "Dead_Certain",
  " I_Am_Watching_You ",
  "You_The_Letter_by_Kathryn_Hughes"
];

//console.log(theBooksIRead);

function generateItems() {
  let ul = document.createElement("ul");

  theBooksIRead.forEach(function (book) {
    console.log(book);

    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += book;
  });
  document.body.appendChild(ul);
}
//generateItems();

let myBooksInformation = {
  harry_potter_and_the_deathly_hallows: {
    title: "Harry Potter and the Deathly Hallows",
    language: "English",
    author: "J. K. Rowling"
  },
  les_miserables: {
    title: "The Baloch and Balochistan",
    language: "English",
    author: "Naseer Dashti"
  },
  da_vinci_code: {
    title: " The Baloch Conflict with Iran and Pakistan",
    language: "English",
    author: "Naseer Dashti"
  },
  to_kill_a_mockingbird: {
    title: "Balochistan: At a Crossroads Reviews",
    language: "English",
    author: "Willem Marx"
  },
  hero_of_our_time: {
    title: "The Alchemist ",
    language: "English",
    author: "PAULO COELHO"
  },
  don_quixote: {
    title: "The Night Bird",
    language: "English",
    author: "Brian Freeman"
  },
  returning_to_haifa: {
    title: "From Sand and Ash",
    language: "English",
    author: "Amy Harmon"
  },
  beirut_nightmares: {
    title: "Dead Certain",
    language: "Englsih",
    author: "Adam Mitzner"
  },
  doctor_zhivago: {
    title: " I Am Watching You",
    language: "English",
    author: "Teresa Driscoll"
  },
  song_of_ice_and_fire: {
    title: "The Letter' by Kathryn Hughes",
    language: "English",
    author: " Kathryn Hughes"
  }
};

function generateBooksList() {
  let myBooksInfo = document.createElement("ul");
  document.body.appendChild(myBooksInfo);

  for (let booksId in myBooksInformation) {
    let li = document.createElement("li");
    li.setAttribute("id", booksId);
    myBooksInfo.appendChild(li);

    let b_title = document.createElement("h2");
    li.appendChild(b_title);
    b_title.innerHTML = myBooksInformation[booksId].title;

    let b_language = document.createElement("p");
    li.appendChild(b_language);
    b_language.innerHTML = myBooksInformation[booksId].language;

    let b_author = document.createElement("h4");
    li.appendChild(b_author);
    b_author.innerHTML = "by : <  " + myBooksInformation[booksId].author + "  >";
  };
}

generateBooksList();

let MyBookCovers = {
  harry_potter_and_the_deathly_hallows: "https://media.bloomsbury.com/rep/bj/9780747591061.jpg",
  The_Baloch_and_Balochistan: "https://images-na.ssl-images-amazon.com/images/I/51O3nqWcmqL._SX322_BO1,204,203,200_.jpg",
  The_Baloch_Conflict_with_Iran_and_Pakistan: "https://thewire.in/wp-content/uploads/2017/12/Baloch-conflict.png",
  Balochistan_At_a_Crossroads_Reviews: "https://images-na.ssl-images-amazon.com/images/I/81n%2B%2B6UluJL.jpg",
  The_Alchemist: "https://n1.sdlcdn.com/imgs/b/y/q/624303691271_1-ed95c.jpg",
  The_Night_Bird: "https://images-na.ssl-images-amazon.com/images/I/51HrCVynYBL.jpg",
  From_Sand_and_Ash: "https://images-na.ssl-images-amazon.com/images/I/51KRuC%2BmItL.jpg",
  Dead_Certain: "https://images-na.ssl-images-amazon.com/images/I/5132qfIGVwL._SY346_.jpg",
  I_Am_Watching_You: "https://images-na.ssl-images-amazon.com/images/I/51PeVt0WznL._SY346_.jpg",
  You_The_Letter_by_Kathryn_Hughes: "https://images-na.ssl-images-amazon.com/images/I/51VE8UMU35L.jpg"
};

function bookCovers() {
  for (let j in myBooksInformation) {
    var img = document.createElement("img");
    img.setAttribute("src", MyBookCovers[j]);
    img.setAttribute("alt", j);
    let bookImg = document.getElementById(j);
    bookImg.appendChild(img);
  }
}
bookCovers();
