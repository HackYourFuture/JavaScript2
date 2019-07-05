'use strict';

const bookTitles = [
  // Replace with your own book titles
  'The_Lord_the_Rings',
  'The_Little_Prince',
  'Harry_Potter_Philosopher_Stone',
  'The_Hobbit',
  'And_Then_There_Were_None',
  'Dream_the_Red_Chamber',
  'The_Lion_the_Witch_the_Wardrobe',
  'She_A_History_Adventure',
  'The_Adventures_Pinocchio',
  'Vardi_Wala_Gunda',
];

//1.3
/*Remove the temporary `console.log` from step 1.1. Make a function (or functions) that generate a `ul` with `li`
 elements for each book title in the array using a `for` loop. Make sure that the function names you choose are an 
 accurate reflection of what they do. As a reminder, here are the 
recommended [Naming Conventions]
(https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md). */

function main() {
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  const body = document.body;
  for (let i = 0; i < bookTitles.length; i++) {
    li.textContent = bookTitles[i];
    ul.appendChild(li);
  }

  body.appendChild(ul);
}

/*
 **1.4** Make an object (_not an array!_) containing information for each book. Each property
 of this object should be another (i.e., nested) object with the book title you thought up
  in step 1.1 as a key, and at least the following properties: `title`, `language` and `author`.
 */

const bookDetails = {
  The_Lord_the_Rings: {
    title: 'The Lord of the Rings',
    language: 'English',
    author: 'J. R. R. Tolkien',
  },
  The_Little_Prince: {
    title: 'The Little Prince',
    language: 'English',
    author: 'Antoine de Saint-Exupéry',
  },
  Harry_Potter_Philosopher_Stone: {
    title: "Harry Potter and the Philosopher's Stone",
    language: 'English',
    author: 'J. K. Rowling',
  },
  The_Hobbit: {
    title: 'The Hobbit',
    language: 'English',
    author: 'J. R. R. Tolkien',
  },
  And_Then_There_Were_None: {
    title: 'And Then There Were None',
    language: 'English',
    author: 'Agatha Christie',
  },
  Dream_the_Red_Chamber: {
    title: 'Dream of the Red Chamber',
    language: 'English',
    author: 'Cao Xueqin',
  },
  The_Lion_the_Witch_the_Wardrobe: {
    title: 'The Lion, the Witch and the Wardrobe',
    language: 'English',
    author: 'C. S. Lewis',
  },
  She_A_History_Adventure: {
    title: 'She: A History of Adventure',
    language: 'English',
    author: 'H. Rider Haggard',
  },
  The_Adventures_Pinocchio: {
    title: 'The Adventures of Pinocchio',
    language: 'English',
    author: 'Carlo Collodi',
  },
  Vardi_Wala_Gunda: {
    title: 'Vardi Wala Gunda',
    language: 'English',
    author: 'Ved Prakash Sharma',
  },
};

/*
**1.5** Now change the function from step 1.3 that you used to display the book title
 in a list to take the actual information about the book from the object and display that.
 Make sure you choose the correct HTML elements for each piece of info, for instance,
a heading for the title.
*/
const bookInfo = Object.entries(bookDetails);
console.log(bookInfo);

function main() {
  const ul = document.createElement('ul');
  const body = document.body;
  for (let i = 0; i < bookInfo.length; i++) {
    const li = document.createElement('li');
    li.id = bookCoverKeys[i]; //bookCoverKeys defined in Question 1.7/1.8
    ul.appendChild(li);
    const title = document.createElement('h1');
    title.textContent = 'Title: ' + bookInfo[i][1].title; //const bookInfo = Object.entries(bookDetails);
    li.appendChild(title);
    const para1 = document.createElement('p');
    para1.textContent = 'Language: ' + bookInfo[i][1].language;
    li.appendChild(para1);
    const para2 = document.createElement('p');
    para2.textContent = 'Author: ' + bookInfo[i][1].author;
    li.appendChild(para2);

    const images = document.createElement('img');
    images.setAttribute('src', bookCoverValues[i]); //bookCoverValues defined in Question 1.7/1.8
    images.setAttribute('alt', bookCoverKeys[i]); //bookCoverKeys defined in Question 1.7/1.8
    li.appendChild(images);
  }
  body.appendChild(ul);
}

/* 

**1.6** Beautify your html page with css (use the `style.css` file for that),
 add sources and alts to each of the images.
*/
// I added this question`s answer inside 1.5
/* 
const images = document.createElement('img');
images.setAttribute('src', '');
images.setAttribute('alt', '');
li.appendChild(images);
*/

/* 
**1.7** Find and download book covers for each book and construct a new object which has 
as keys the book titles again, and as value
 the path to the image source (e.g. `{ harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }`).
*/
const bookCovers = {
  The_Lord_the_Rings: '../images/The_Lord_the_Rings.jpg',
  The_Little_Prince: '../images/The_Little_Prince.jpg',
  Harry_Potter_Philosopher_Stone: '../images/Harry_Potter_Philosopher_Stone.jpg',
  The_Hobbit: '../images/The_Hobbit.jpg',
  And_Then_There_Were_None: '../images/And_Then_There_Were_None.jpg',
  Dream_the_Red_Chamber: '../images/Dream_the_Red_Chamber.jpg',
  The_Lion_the_Witch_the_Wardrobe: '../images/The_Lion_the_Witch_the_Wardrobe.jpg',
  She_A_History_Adventure: '../images/She_A_History_Adventure.jpg',
  The_Adventures_Pinocchio: '../images/The_Adventures_Pinocchio.jpg',
  Vardi_Wala_Gunda: '../images/Vardi_Wala_Gunda.jpg',
};
/* 
  **1.8** Loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_).
   Then write a function which places an image at the corresponding `li` element. Remember that objects are not 
   ordered, so you cannot guarantee that the first key is the first `li` element. 
  (_Hint: you could give each `li` item an `id` tag by modifying the function you made before._)
  
  */

const bookCoverKeys = Object.keys(bookCovers);
//In order to give id name for each list item I added this code to the main function
//li.id = bookCoverKeys[i];

const bookCoverValues = Object.values(bookCovers);
//In order to place images to corresponding list item I added this code to the main function
//in fact src and alt attributes were created in question 1.6.
// in this question I only added 'bookCoverValues[i],bookCoverValues[i]'
//images.setAttribute('src', bookCoverValues[i]);
//images.setAttribute('alt', bookCoverValues[i]);

window.onload = () => main();
