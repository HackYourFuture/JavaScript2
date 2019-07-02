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
    still_me: { Title: "Still Me", Writer: "Jojo Moyes", Category: "FICTION", Price: 11.40 },
    the_outsider: { Title: "The Outsider", Writer: "Stephen King", Category: "MYSTERY, THRILLER", Price: 17.17 },
    the_great_alone: { Title: "The Great Alone", Writer: "Kristin Hannah", Category: "HISTORICAL FICTION", Price: 15.83 },
    circe: { Title: "Circe", Writer: "Madeline Miller", Category: "FANTASY", Price: 14.82 },
    the_hate_u_give: { Title: "The Hate U Give", Writer: "Angie Thomas", Category: "ROMANCE", Price: 10.43 },
    the_kiss_quotient: { Title: "The Kiss Quotient", Writer: "Helen Hoang", Category: "ROMANCE", Price: 0.20 },
    vengeful: { Title: "Vengeful", Writer: "V.E. Schwab", Category: "SCIENCE FICTION", Price: 14.27 },
    elevation: { Title: "Elevation", Writer: "Stephen King, Mark Edward Geyer ", Category: "HORROR", Price: 13.96 },
    the_last_black_unicorn: { Title: "The Last Black Unicorn", Writer: "Tiffany Haddish", Category: "HUMOR", Price: 14.86 },
    i_will_be_gone_in_the_dark: { Title: "I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer", Writer: "Michelle McNamara,  Gillian Flynn, Patton Oswalt", Category: "NONFICTION", Price: 10.21 },
};;

// Replace with your own code
// console.log(bookTitles.length + " books Titles: \n" + bookTitles);
const injectListBooksTitles = () => {
    let lisContainer = document.getElementById('books');
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