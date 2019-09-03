'use strict';

{

  const booksArray = [
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

  const booksObject = {
    The_Goldfinch: {
      title: `The Goldfinch`,
      author: `Donna Tartt`,
      original_language: `English`
    },
    A_Garden_of_Earthly_Delights: {
      title: `A Garden of Earthly Delights`,
      author: `Carol Oates`,
      original_language: `English`
    },
    Beloved: {
      title: `Beloved`,
      author: `Toni Morrison`,
      original_language: `English`
    },
    There_Once_Lived_a_Woman_Who_Tried_to_Kill_Her_Neighbors_Baby: {
      title: `There Once Lived a Woman Who Tried to Kill Her Neighbo\'s Baby`,
      author: `Lyudmila Petrushevskaya`,
      original_language: `Russian`
    },
    The_House_of_the_Spirits: {
      title: `The House of the Spirits`,
      author: `Isabel Allende`,
      original_language: `Spanish`
    },
    The_Left_Hand_of_Darkness: {
      title: `The Left Hand of Darkness`,
      author: `Ursula K. Le Guin`,
      original_language: `English`
    },
    The_Unwomanly_Face_of_War: {
      title: `The Unwomanly Face of War`,
      author: `Svetlana Alexievich`,
      original_language: `Russian`
    },
    Chernobyl_Prayer: {
      title: `Chernobyl Prayer`,
      author: `Svetlana Alexievich`,
      original_language: `Russian`
    },
    Runaway: {
      title: `Runaway`,
      author: `Alice Munro`,
      original_language: `English`
    },
    The_Year_of_Magical_Thinking: {
      title: `The Year of Magical Thinking`,
      author: `Joan Didion`,
      original_language: `English`
    }
  };

  for (const book of booksArray) {
    const title = booksObject[book].title;
    const author = booksObject[book].author;
    const original_language = booksObject[book].original_language;

    console.log(title);
    console.log(author);
    console.log(original_language);
  };
  
  const booksList = document.createElement(`ul`);
  document.body.insertBefore(booksList, document.body.childNodes[2]);

  for (const book of booksArray) {
    const listItem = document.createElement(`li`);
    booksList.appendChild(listItem);
    listItem.setAttribute(`id`, book);
    
    const title = document.createElement(`h3`);
    listItem.appendChild(title);
    const titleContent = document.createTextNode(booksObject[book].title);
    title.appendChild(titleContent);

    const author = document.createElement(`p`);
    listItem.appendChild(author);
    author.setAttribute(`class`, `author`);
    const authorContent = document.createTextNode(`By ${booksObject[book].author}`);
    author.appendChild(authorContent);

    const original_language = document.createElement(`p`);
    listItem.appendChild(original_language);
    const original_languageContent = document.createTextNode(`Original language: ${booksObject[book].original_language}`);
    original_language.appendChild(original_languageContent);
  };

  for (const book of booksArray) {
    const listItem = document.getElementById(book);

    const image = document.createElement(`img`);
    listItem.appendChild(image);
    listItem.insertBefore(image, listItem.childNodes[0]);
    image.setAttribute(`src`, `images/${book}.jpg`);
  };
  
};