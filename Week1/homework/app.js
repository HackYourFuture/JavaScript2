'use strict';


const booksTitles = [
    // Replace with your own book titles
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