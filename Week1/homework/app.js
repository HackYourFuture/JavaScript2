'use strict';


const booksTitles = [
    // I keep this array here as a reference
    'still_me',
    'the_outsider',
    'the_great_alone',
    'circe',
    'the_hate_u_give',
    'the_kiss_quotient',
    'vengeful',
    'elevation',
    'the_last_black_unicorn',
    'i_will_be_gone_in_the_dark',
];
const booksFullInfo = {
    still_me: { title: "Still Me", writer: "Jojo Moyes", category: "FICTION", price: 11.40 },
    the_outsider: { title: "The Outsider", writer: "Stephen King", category: "MYSTERY, THRILLER", price: 17.17 },
    the_great_alone: { title: "The Great Alone", writer: "Kristin Hannah", category: "HISTORICAL FICTION", price: 15.83 },
    circe: { title: "Circe", writer: "Madeline Miller", category: "FANTASY", price: 14.82 },
    the_hate_u_give: { title: "The Hate U Give", writer: "Angie Thomas", category: "ROMANCE", price: 10.43 },
    the_kiss_quotient: { title: "The Kiss Quotient", writer: "Helen Hoang", category: "ROMANCE", price: 0.20 },
    vengeful: { title: "Vengeful", writer: "V.E. Schwab", category: "SCIENCE FICTION", price: 14.27 },
    elevation: { title: "Elevation", writer: "Stephen King, Mark Edward Geyer ", category: "HORROR", price: 13.96 },
    the_last_black_unicorn: { title: "The Last Black Unicorn", writer: "Tiffany Haddish", category: "HUMOR", price: 14.86 },
    i_will_be_gone_in_the_dark: { title: "I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer", writer: "Michelle McNamara,  Gillian Flynn, Patton Oswalt", category: "NONFICTION", price: 10.21 },
};

const booksCovers = {
    still_me: "images/still_me.jpg",
    the_outsider: "images/the_outsider.jpg",
    the_great_alone: "images/the_great_alone.jpg",
    circe: "images/circe.jpg",
    the_hate_u_give: "images/the_hate_u_give.jpg",
    the_kiss_quotient: "images/the_kiss_quotient.jpg",
    vengeful: "images/vengeful.jpg",
    elevation: "images/elevation.jpg",
    the_last_black_unicorn: "images/the_last_black_unicorn.jpg",
    i_will_be_gone_in_the_dark: "images/i_will_be_gone_in_the_dark.jpg",
};


// Replace with your own code
// console.log(bookTitles.length + " books Titles: \n" + bookTitles);
const injectListBooksTitles = () => {
    let lisContainer = document.getElementById('books_array');
    let ul = document.createElement('ul');
    lisContainer.appendChild(ul);
    booksTitles.forEach(element => {
        let li = document.createElement('li');
        ul.appendChild(li);
        let titleNoUnderScore = element.replace(/_/g, " ");
        let titleFirstCapital = titleNoUnderScore.charAt(0).toUpperCase() + titleNoUnderScore.slice(1);
        li.textContent = titleFirstCapital;
    });
};
const injectListBooksFullInfo = () => {
    let lisContainer = document.getElementById('books_object');
    let ul = document.createElement('ul');
    lisContainer.appendChild(ul);
    booksTitles.forEach(element => {
        let li = document.createElement('li');
        ul.appendChild(li);
        let bookTitle = booksFullInfo[element].title;
        let bookWriter = booksFullInfo[element].writer;
        let bookCategory = booksFullInfo[element].category;
        let bookPrice = booksFullInfo[element].price;
        let bookCover = booksCovers[element];
        li.innerHTML = `<h3>${bookTitle}</h3> <p>By: ${bookWriter}.<br />Category: ${bookCategory}<br /> Price: $${bookPrice}</p> <img src="${bookCover}" alt="cover photo of the book: ${bookTitle}">`;
    });
};