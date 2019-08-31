'use strict';

{
// **1.1** declaring an array

  const bookTitles = [
    `The_Goldfinch`,
    `A_Garden_of_Earthly_Delights`,
    `Beloved`,
    `There_Once_Lived_a_Woman_Who_Tried_to_Kill_Her_Neighbors_Baby`,
    `The_House_of_the_Spirits`,
    `The_Left_Hand_of_Darkness`,
    `The_Unwomanly_Face_of_War`,
    `Chernobyl_Prayer`,
    `Runaway`,
    `The_Year_of_Magical_Thinking`
  ];

  /* **1.3** function that generate a `ul` with `li` elements for each book title
  
  function createListOfBookTitles() {

    const emptyList = document.createElement("ul");

    function placeList() {
      const placeForList = document.body;
      placeForList.insertBefore(emptyList, placeForList.childNodes[2]);
    };
    placeList();

    function addTitlesToList() {
      let x;
      for (x in bookTitles) {
        const newListItem = document.createElement("li");
        const titleItem = document.createTextNode(bookTitles[x]);
        newListItem.appendChild(titleItem);
        emptyList.appendChild(newListItem);
      };
    };
    addTitlesToList();
  };
  createListOfBookTitles();
  */

// **1.4** Making an object

  const Books = bookTitles.reduce((acc, elem) => {
    acc[elem] = {title:``, author:``, original_language:``};
    return acc;
  }, {});

// Adding content

  Books.The_Goldfinch.title = `The Goldfinch`;
  Books.The_Goldfinch.author =`Donna Tartt`;
  Books.The_Goldfinch.original_language = `English`;

  Books.A_Garden_of_Earthly_Delights.title = `A Garden of Earthly Delights`;
  Books.A_Garden_of_Earthly_Delights.author = `Carol Oates`;
  Books.A_Garden_of_Earthly_Delights.original_language = `English`;

  Books.Beloved.title = `Beloved`;
  Books.Beloved.author =`Toni Morrison`;
  Books.Beloved.original_language = `English`;

  Books.There_Once_Lived_a_Woman_Who_Tried_to_Kill_Her_Neighbors_Baby.title = `There Once Lived a Woman Who Tried to Kill Her Neighbo\`s Baby`;
  Books.There_Once_Lived_a_Woman_Who_Tried_to_Kill_Her_Neighbors_Baby.author = `Lyudmila Petrushevskaya`;
  Books.There_Once_Lived_a_Woman_Who_Tried_to_Kill_Her_Neighbors_Baby.original_language = `Russian`;

  Books.The_House_of_the_Spirits.title = `The House of the Spirits`;
  Books.The_House_of_the_Spirits.author = `Isabel Allende`;
  Books.The_House_of_the_Spirits.original_language = `Spanish`;

  Books.The_Left_Hand_of_Darkness.title = `The Left Hand of Darkness`;
  Books.The_Left_Hand_of_Darkness.author = `Ursula K. Le Guin`;
  Books.The_Left_Hand_of_Darkness.original_language = `English`;

  Books.The_Unwomanly_Face_of_War.title = `The Unwomanly Face of War`;
  Books.The_Unwomanly_Face_of_War.author = `Svetlana Alexievich`;
  Books.The_Unwomanly_Face_of_War.original_language = `Russian`;

  Books.Chernobyl_Prayer.title = `Chernobyl Prayer`;
  Books.Chernobyl_Prayer.author = `Svetlana Alexievich`;
  Books.Chernobyl_Prayer.original_language = `Russian`;

  Books.Runaway.title = `Runaway`;
  Books.Runaway.author = `Alice Munro`;
  Books.Runaway.original_language = `English`;

  Books.The_Year_of_Magical_Thinking.title = `The Year of Magical Thinking`;
  Books.The_Year_of_Magical_Thinking.author = `Joan Didion`;
  Books.The_Year_of_Magical_Thinking.original_language = `English`;

  console.log(Books);
  
  // **1.5** function that take the actual information about the book from the object
  
  const booksList = document.createElement(`ul`);
  document.body.insertBefore(booksList, document.body.childNodes[2]);
  
    function placeContent() {
      let x;
      for (x in Books) {
        const listItem = document.createElement(`li`);
        booksList.appendChild(listItem);
        listItem.setAttribute(`id`, x);

        const book = Books[`${x}`];

        const title = document.createElement(`h3`);
        listItem.appendChild(title);
        const titleContent = document.createTextNode(book[`title`]);
        title.appendChild(titleContent);

        const author = document.createElement(`p`);
        listItem.appendChild(author);
        author.setAttribute(`class`, `author`);
        const authorContent = document.createTextNode(`By ${book[`author`]}`);
        author.appendChild(authorContent);

        const originalLanguage = document.createElement(`p`);
        listItem.appendChild(originalLanguage);
        const originalLanguageContent = document.createTextNode(`Original language: ${book[`original_language`]}`);
        originalLanguage.appendChild(originalLanguageContent);
      };
    };
    placeContent();

    // **1.8** function that place an image at the corresponding `li` element

    function placeImages() {
      let x;
      for (x in Books) {
        const listItem = document.getElementById(`${x}`);

        const image = document.createElement(`img`);
        listItem.appendChild(image);
        listItem.insertBefore(image, listItem.childNodes[0]);
        image.setAttribute(`src`, `images/${x}.jpg`);
      };
    };
    placeImages();

  
};