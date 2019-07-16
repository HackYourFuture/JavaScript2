'use strict';

{
  const bookTitles = [
    'harry_potter_chamber_secrets',
    'awaken_the_giant_within_me',
    'if_tomorrow_comes',
    'unlimited_power',
    'the_power_of_positive_thinking',
    'the_power_of_character_in_leadership',
    'the_girl_on_the_train',
    'man_and_the_sea',
    'fiker_eske_mekabir',
    'oromay',
    'yetekolefebet',
  ];
  // creating HTML elements
  function bookListCreater() {
    const bookListBox = document.createElement('div');
    document.getElementById('pagebody').appendChild(bookListBox);

    const headingTitle = document.createElement('h1');
    const headingText = document.createTextNode('My Favorite Motivational Books');

    bookListBox.appendChild(headingTitle);
    headingTitle.appendChild(headingText);

    const ul = document.createElement('ul');
    bookListBox.appendChild(ul);
    // creating ul list
    for (let i = 0; i < bookTitles.length; i++) {
      // creat list Append and Display  on DOM

      const li = document.createElement('li');
      ul.appendChild(li);

      const titleli = document.createElement('titleli');
      titleli.innerHTML = bookTitles[i].title;
      li.appendChild(titleli);

      const img = document.createElement('img');
      img.setAttribute('src', bookTitles[i].imgLink);
      li.appendChild(img);

      const languageli = document.createElement('languageli');
      languageli.innerHTML = bookTitles[i].language;
      li.appendChild(languageli);

      const authorli = document.createElement('authorli');
      authorli.innerHTML = bookTitles[i].author;
      li.appendChild(authorli);
    }
  }
  // Creating object BookInformation  with constructor

  function BookInformation(bookIdFromArry, language, author, imgLink) {
    this.BookInformation = bookIdFromArry;
    this.title = bookIdFromArry.toUpperCase();
    this.language = language;
    this.author = author;
    this.imgLink = imgLink;
  }

  bookTitles[0] = new BookInformation(
    bookTitles[0],
    'English',
    'J.K.Rowling',
    'https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/a5/c0/fb/a5c0fbaa-2fb5-fefa-0e2e-552207b0376f/pr_source.lsr/268x0w.png',
  );
  bookTitles[1] = new BookInformation(
    bookTitles[1],
    'English',
    'Tony Robbins',
    'https://i1.wp.com/www.samuelthomasdavies.com/wp-content/uploads/2015/08/Awaken-The-Giant-Within.jpg?resize=198%2C300&ssl=1',
  );
  bookTitles[2] = new BookInformation(
    bookTitles[2],
    'English',
    'Sidney Sheldon',
    'https://images-na.ssl-images-amazon.com/images/I/314zId3Rr5L._AC_UL320_SR216,320_.jpg',
  );
  bookTitles[3] = new BookInformation(
    bookTitles[3],
    'English',
    'Tony Robbins',
    'https://images-na.ssl-images-amazon.com/images/I/51otVRzsbcL._SX321_BO1,204,203,200_.jpg',
  );
  bookTitles[4] = new BookInformation(
    bookTitles[4],
    'English',
    'Dr. Norman Vincent Peale',
    'https://images-na.ssl-images-amazon.com/images/I/515N6BJGE4L._SX304_BO1,204,203,200_.jpg',
  );
  bookTitles[5] = new BookInformation(
    bookTitles[5],
    'English',
    'Dr. Myles Munroe',
    'https://images-na.ssl-images-amazon.com/images/I/51nES%2Bb7QvL._SX331_BO1,204,203,200_.jpg',
  );
  bookTitles[6] = new BookInformation(
    bookTitles[6],
    'English',
    'Paula Hawkins',
    'https://images-na.ssl-images-amazon.com/images/I/51jZY1HSgVL._SX258_BO1,204,203,200_.jpg',
  );
  bookTitles[7] = new BookInformation(
    bookTitles[7],
    'English',
    'Ernest Hemingway',
    'https://images-na.ssl-images-amazon.com/images/I/41V91pPjbyL._SX331_BO1,204,203,200_.jpg',
  );
  bookTitles[8] = new BookInformation(
    bookTitles[8],
    'Amharic',
    'Dr. Haddis Alemayehu',
    'https://lh3.googleusercontent.com/4wxGLRmf0SJ8m0XCiWpSND1h2VgHW7tSShsziIn3EWd5WZWNZVNp_Uq_skMdBd1CcQ',
  );
  bookTitles[9] = new BookInformation(
    bookTitles[9],
    'Amharic',
    'Bealu girma',
    'https://upload.wikimedia.org/wikipedia/en/f/fd/Oromai_cover.png',
  );
  bookTitles[10] = new BookInformation(
    bookTitles[10],
    'Amharic',
    'Dr Mihret Debebe',
    ' https://cdn.shopify.com/s/files/1/0258/4531/products/yetekolefebet_large.jpg?v=1533244500',
  );
  // calling function
  bookListCreater();
}
