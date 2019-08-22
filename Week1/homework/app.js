'use strict';

/* 1.1 Open the apps.js and start by declaring an array that contains 10 strings. 
These strings should be of book titles you have read (or made up) 
and be lowercase without spaces so that you can use these later as 
HTML id attributes. 
(Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets). 
Add a console.log statement to output this array to console. 
(This is for debugging and making sure everything is in order. 
Delete it later when you're done :)) */
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'where_the_crowdads_sing',
    'educated_a_memoir',
    'unfreedom_of_the_press',
    'howard_stern_comes_again',
    'the_mueller_report',
    'daring_greatly',
    'liver_rescue',
    'atomic_habits',
    'sapiens',
  ];
  console.log(bookTitles);

  /* 1.3 Remove the temporary console.log from step 1.1. 
  Make a function (or functions) that generate a ul with li elements 
  for each book title in the array using a for loop. 
  Make sure that the function names you choose are an accurate reflection 
  of what they do.  */

  const newUl = document.createElement('ul');
  bookTitles.forEach(book => {
    const listItem = document.createElement('li');
    const itemText = document.createTextNode(book);
    listItem.appendChild(itemText);
    newUl.appendChild(listItem);
  });

  console.log(newUl);

  // bookTitles.title;

  /* 1.4 Make an object (not an array!) containing information for each book. 
  Each property of this object should be another (i.e., nested) object with the book title 
  you thought up in step 1.1 as a key, and at least the following properties: 
  title, language and author. */

  const bookObjects = {
    harry_potter_chamber_secrets: {
      // value
      title: 'Harry Potter Chamber Secrets', // key: 'value'
      language: 'English',
      author: 'J. K. Rowling',
    },
    where_the_crowdads_sing: {
      title: 'Where the Crowdads Sing',
      language: 'English',
      author: 'Delia Owens',
    },
    educated_a_memoir: {
      title: 'Educated a Memoir',
      language: 'English',
      author: 'Tara Westover',
    },
    unfreedom_of_the_press: {
      title: 'Unfreedom of the Press',
      language: 'English',
      author: 'Mark R Levin',
    },
    howard_stern_comes_again: {
      title: 'Howard Stern Comes Again',
      language: 'English',
      author: 'Howard Stern',
    },
    the_mueller_report: {
      title: 'The Mueller Report',
      language: 'English',
      author: 'Robert Mueller',
    },
    daring_greatly: {
      title: 'Daring Greatly',
      language: 'English',
      author: 'Brene Brown',
    },
    liver_rescue: {
      title: 'Liver Rescue',
      language: 'English',
      author: 'Anthony William',
    },
    atomic_habits: {
      title: 'Atomic Habits',
      language: 'English',
      author: 'James Clear',
    },
    sapiens: {
      title: 'Sapiens',
      language: 'English',
      author: 'Yuval Harari',
    },
  };
  console.log(bookObjects);

  /* 1.5 Now change the function from step 1.3 that you used to display the book title 
  in a list to take the actual information about the book from the object and display that. 
  Make sure you choose the correct HTML elements for each piece of info, 
  for instance, a heading for the title. */

  const div = document.createElement('div');
  // eslint-disable-next-line guard-for-in
  for (const bookObject of Object.values(bookObjects)) {
    const bookDiv = document.createElement('div');

    const bookTitle = document.createElement('h1');
    const bookTitleText = document.createTextNode(bookObject.title);
    bookTitle.appendChild(bookTitleText);

    const bookLanguage = document.createElement('h4');
    const bookLanguageText = document.createTextNode(bookObject.language);
    bookLanguage.appendChild(bookLanguageText);

    const bookAuthor = document.createElement('p');
    const bookAuthorText = document.createTextNode(bookObject.author);
    bookAuthor.appendChild(bookAuthorText);

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookLanguage);
    bookDiv.appendChild(bookAuthor);

    div.appendChild(bookDiv);
  }
  document.body.appendChild(div);
  /* 1.6 Beautify your html page with css (use the style.css file for that), 
add sources and alts to each of the images. */

  // check css file please

  /* 1.7 Find and download book covers for each book and construct a new object 
which has as keys the book titles again, and as value the path to the image source 
(e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }). */

  const bookCovers = {
    harry_potter_chamber_secrets:
      'https://vignette.wikia.nocookie.net/harrypotter/images/c/c0/ALOExwKoxdkdeBvVi7NkaFl5Wa5.jpg/revision/latest?cb=20130803163017',
    where_the_crowdads_sing:
      'https://www.leeskost.nl/wp-content/uploads/2019/04/WheretheCrowdadssing.jpg',
    educated_a_memoir: 'https://images.booksense.com/images/504/590/9780399590504.jpg',
    unfreedom_of_the_press:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476773094/unfreedom-of-the-press-9781476773094_lg.jpg',
    howard_stern_comes_again:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501194290/howard-stern-comes-again-9781501194290_lg.jpg',
    the_mueller_report:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982129736/the-mueller-report-9781982129736_lg.jpg',
    daring_greatly:
      'https://cdn.shopify.com/s/files/1/0188/4830/products/daringgreatly_1024x1024.jpg?v=1477278732',
    liver_rescue:
      'https://www.bigw.com.au/medias/sys_master/images/images/hb6/he6/12774022971422.jpg',
    atomic_habits:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg',
    sapiens:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433930311l/20873740._SY475_.jpg',
  };

  /* 1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). 
Then write a function which places an image at the corresponding li element. 
Remember that objects are not ordered, so you cannot guarantee that the first key 
is the first li element. (Hint: you could give each li item an id tag 
  by modifying the function you made before.) */

  const div2 = document.createElement('div');

  for (const [bookKey, bookObject] of Object.entries(bookObjects)) {
    const bookDiv = document.createElement('div');
    const bookCover = document.createElement('img');
    bookCover.src = bookCovers[bookKey];

    const bookTitle = document.createElement('h1');
    const bookTitleText = document.createTextNode(bookObject.title);
    bookTitle.appendChild(bookTitleText);

    const bookLanguage = document.createElement('h4');
    const bookLanguageText = document.createTextNode(bookObject.language);
    bookLanguage.appendChild(bookLanguageText);

    const bookAuthor = document.createElement('p');
    const bookAuthorText = document.createTextNode(bookObject.author);
    bookAuthor.appendChild(bookAuthorText);

    bookDiv.appendChild(bookCover);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookLanguage);

    div2.appendChild(bookDiv);
  }
  document.body.appendChild(div2);
}
