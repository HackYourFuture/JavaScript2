'use strict';

/*   const bookTitles = [
    'i_am_number_four',
    'the_power_of_six',
    'the_rise_of_nine',
    'the_fall_of_five',
    'the_revenge_of_seven',
    'the_fate_of_ten',
    'united_as_one',
    'twee_verhalen_van_sherlock_holmes',
    'the_analyst',
    'in_the_heat_of_summer' 
  ];
 
  function generatingBookList () { 

    // Creating the DOM element. 

    let generatingP = document.createElement('p');
    let generatingUl = document.createElement('ul');
    generatingP.appendChild(generatingUl);

    // Creating the function

    for (let i = 0; i<bookTitles.length; i++) {
        let list = document.createElement('li');
        generatingUl.appendChild(list);
        list.innerHTML = bookTitles[i];
        
    }
    console.log(generatingP);
    }
    generatingBookList();
    
     */

const infoBook = {
  i_am_number_four: {
    title: "I am the number four",
    author: "Pittacus Lore",
    language: "English"
  },

  the_power_of_six: {
    title: "The power of six",
    author: "Pittacus Lore",
    language: "English"
  },

  the_rise_of_nine: {
    title: "The Rise of nine",
    author: "Pittacus Lore",
    language: "English"
  },

  the_fall_of_five: {
    title: "The fall of five",
    author: "Pittacus Lore",
    language: "English"
  },

  the_revenge_of_seven: {
    title: "The revenge of seven",
    author: "Pittacus Lore",
    language: "English"
  }, 
  
  the_fate_of_ten: {
    title: "The fate of ten",
    author: "Pittacus Lore",
    language: "English"
  },

  united_as_one:{
    title: "United as one",
    author: "Pittacus Lore",
    language: "English"
  },

  twee_verhalen_van_sherlock_holmes: {
    title: "Twee verhalen van Sherlock Holmes",
    author: "A.C. Doyle",
    language: "Dutch"
  },

  the_analyst: {
    title: "The Analyst",
    author: "John Katzenbach",
    language: "English" 
  },

  in_the_heat_of_summer: {
    title: "In the Heat of Summer",
    author: "John Katzenbach",
    language: "English"
  }
};

let bookCovers = {

  i_am_number_four: "image/imnumber4.jpg",
  the_power_of_six: "image/thepowerof6.jpg",
  the_rise_of_nine: "image/theriseofnine.jpg",
  the_fall_of_five: "image/fallof5.jpg",
  the_revenge_of_seven: "image/revengeof7.jpg",
  the_fate_of_ten: "image/fateof10.jpg",
  united_as_one: "image/unitedasone.jpg",
  twee_verhalen_van_sherlock_holmes: "image/tweeverhalen.jpg",
  the_analyst: "image/theanalyst.jpg",
  in_the_heat_of_summer: "image/summer.jpg"
};


function generateListOfBooks() {
  console.log(bookCovers);
  let ul = createBookList(infoBook, bookCovers);
  document.body.appendChild(ul);
}

function createBookList(bookTitles, bookCovers) {
  let div = document.getElementById("root");
  let ul = document.createElement("ul");
  div.appendChild(ul);

  for (let i in bookTitles) {
    let books = bookTitles[i];

    let li = document.createElement("li");
    ul.appendChild(li);
    let header = document.createElement("h2");
    header.innerHTML = books.title;
    li.appendChild(header);

    let author = document.createElement("p");
    author.innerHTML = books.author;
    li.appendChild(author);

    let language = document.createElement("p");
    language.innerHTML = books.language;
    li.appendChild(language);

    let image = document.createElement("img");
    li.appendChild(image);
    image.src = getBookDetails(i, bookCovers);
    image.setAttribute("width", 150);
  }
  return ul;
}

function getBookDetails(src, bookCovers) {
  return bookCovers[src];
}

window.addEventListener("load", generateListOfBooks);