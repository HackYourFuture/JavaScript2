'use strict';

// 1-1 Open the apps.js and start by declaring an array that contains 10 strings
// These strings should be of book titles you have read (or made up) and be lowercase
// without spaces so that you can use these later as HTML id attributes
// (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets)
// Add a console.log statement to output this array to console
// (This is for debugging and making sure everything is in order
// Delete it later when you're done :))

{
  const bookTitles = [
    // Replace with your own book titles
    'the-da-vinci-code',
    'the-hunger-games',
    'the-maze-runner',
    'the-lord-of-the-rings',
    'the-hobbit',
    'a-game-of-thrones',
    'harry-potter-and-the-goblet-of-fire',
    'the-book-thief',
    'angels-and-demons',
    'harry-potter-and-the-order-of-the-phoenix',
  ];

  // I have two functions, one to create a li items, and the second is to create ul element which is the parent of li
  // I used for loop to loop through the array items, inside for loop I generate a list item
  // I used document.createElement() method to create the HTML element,  which takes one parameter (tagName).
  // I set the array elements which are string as a text content for li element using textContent property.
  // I append all li elements to the ul by using append method to add a node to the given parent node parent.appendChild(child).
  // For loop will loop as long as the condition is true.

  const createList = ul => {
    for (let i = 0; i < bookTitles.length; i++) {
      const list = document.createElement('li');
      list.textContent = bookTitles[i];
      ul.appendChild(list);
    }
    console.log(ul);
  };
  // This function will generate ul element
  const generateUl = () => {
    const ul = document.createElement('ul');
    createList(ul);
  };

  generateUl();

  // I created books object which, includes 10 properties, and each property's value is
  // another object nested inside books object, inside that object I have four keys and values:
  // Here I wanted to create a constructor function! But I didn't want to get out of question context.
  // cover: link to the photo alls sources from wikipedia.
  // title of the book.
  // the name of the author.
  // book's language.

  const books = {
    'the-da-vinci-code': {
      title: 'The Da Vinci Code',
      cover: 'https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg',
      language: 'English',
      author: 'By Dan Brown',
    },
    'the-hunger-games': {
      title: 'The Hunger Game',
      cover: 'https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg',
      language: 'English',
      author: 'By Suzanne Collins',
    },
    'the-maze-runner': {
      title: 'The Maze Runner',
      cover: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Maze_Runner_cover.png',
      language: 'English',
      author: 'By James Dashner',
    },
    'the-lord-of-the-rings': {
      title: 'The Lord of the Rings',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
      language: 'English',
      author: 'By J. R. R. Tolkien',
    },
    'the-hobbit': {
      title: 'The Hobbit',
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg',
      language: 'English',
      author: 'By J. R. R. Tolkien',
    },
    'a-game-of-thrones': {
      title: 'A Game of Thrones',
      cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
      language: 'English',
      author: 'By George R. R. Martin',
    },
    'harry-potter-and-the-goblet-of-fire': {
      title: 'Harry Potter and the Goblet of Fire',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/c/c7/Harry_Potter_and_the_Goblet_of_Fire.jpg',
      language: 'English',
      author: 'By J. K. Rowling',
    },
    'the-book-thief': {
      title: 'The Book Thief',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg',
      language: 'English',
      author: 'By Markus Zusak',
    },
    'angels-and-demons': {
      title: 'Angels and Demons',
      cover: 'https://upload.wikimedia.org/wikipedia/en/5/5f/AngelsAndDemons.jpg',
      language: 'English',
      author: 'By Dan Brown',
    },
    'harry-potter-and-the-order-of-the-phoenix': {
      title: 'Harry Potter and the Order of the Phoenix',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
      language: 'English',
      author: 'By J. K. Rowling',
    },
  };

  // I created another function, which takes books object as a parameter  Object.keys() method returns an array of a given object's own property names
  // in the same order as we get with a normal loop. After getting array of object names, I used forEach method which is
  // an array method to iterate through the names in the array.
  // Inside forEach method, I used The Document method getElementById()
  // that returns an Element object representing the element whose id property matches the specified string.
  // Then created div element by using document.createElement() method, and used setAttribute method to set class attribute and its value on div.
  // Here I wanted to be DRY, I created a re-useable function to create and append and set attribute.
  // Here I used element[property] bracket notation, since I'm using the string passed to the property parameter.
  // if you use dot notation JS thinks that I'm looking for a property that its name is property.
  // Used if statement to set alt attribute only when the elementName is img.
  // For how to use bracket notation:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors

  const listOfBooks = obj =>
    Object.keys(obj).forEach(item => {
      const booksContainer = document.getElementById('books-container');

      const bookDiv = document.createElement('div');
      bookDiv.setAttribute('class', 'book-info');

      const createElementAndSetAttr = (elementName, name, value, altName, altValue) => {
        const element = document.createElement(elementName);
        element.setAttribute(name, value);
        if (elementName === 'img') {
          element.setAttribute(altName, altValue);
        }
        bookDiv.appendChild(element);
      };

      const createElementAndAppend = (elementName, property, text) => {
        const element = document.createElement(elementName);
        element[property] = text;
        bookDiv.appendChild(element);
      };

      createElementAndAppend('h1', 'textContent', obj[item].title);
      createElementAndSetAttr('img', 'src', obj[item].cover, 'alt', obj[item].title);
      createElementAndAppend('p', 'textContent', obj[item].author);
      createElementAndAppend('p', 'textContent', obj[item].language);
      console.log(bookDiv);

      booksContainer.appendChild(bookDiv);
    });

  listOfBooks(books);
}
