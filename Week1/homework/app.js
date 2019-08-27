'use strict';

{
  const bookTitles = [
    'the_road',
    'one_hundred_years_of_solitude',
    'where_late_the_sweet_birds_sang',
    'to_kill_a_mockingbird',
    'the_help',
    'never_let_me_go',
    'gone_with_the_wind',
    'it',
    'interpreter_of_maladies',
    '1Q84',
  ];

  const mainHeading = document.createElement(`h1`);
  mainHeading.setAttribute(`class`, `mainHeading`);
  mainHeading.innerText = `My Favorite Books`;
  document.body.appendChild(mainHeading);

  function FavoriteBook(title, language, author) {
    this.title = title;
    this.language = language;
    this.author = author;
  }

  const favoriteBooks = {};

  favoriteBooks[bookTitles[0]] = new FavoriteBook(`The Road`, `English`, `Cormac McCarthy`);
  favoriteBooks[bookTitles[1]] = new FavoriteBook(
    `One Hundred Years of Solitude`,
    `English`,
    `Gabriel Garcia Marquez`,
  );
  favoriteBooks[bookTitles[2]] = new FavoriteBook(
    `Where Late the Sweet Birds Sang`,
    `English`,
    `Kate Wilhelm`,
  );
  favoriteBooks[bookTitles[3]] = new FavoriteBook(`To Kill a Mockingbird`, `English`, `Harper Lee`);
  favoriteBooks[bookTitles[4]] = new FavoriteBook(`The Help`, `English`, `Kathryn Stockett`);
  favoriteBooks[bookTitles[5]] = new FavoriteBook(`Never Let Me Go`, `English`, `Kazuo Ishiguro`);
  favoriteBooks[bookTitles[6]] = new FavoriteBook(
    `Gone With The Wind`,
    `English`,
    `Margaret Mitchell`,
  );
  favoriteBooks[bookTitles[7]] = new FavoriteBook(`It`, `English`, `Stephan King`);
  favoriteBooks[bookTitles[8]] = new FavoriteBook(
    `Interpreter of Maladies`,
    `English`,
    `Jhumpa Lahiri`,
  );
  favoriteBooks[bookTitles[9]] = new FavoriteBook(`1Q84`, `English`, `Haruki Murakami`);

  function BookCover(coverImage) {
    this.coverImage = coverImage;
  }

  const favoriteBooksCovers = {};

  favoriteBooksCovers[bookTitles[0]] = new BookCover(`images/the_road.jpg`);
  favoriteBooksCovers[bookTitles[1]] = new BookCover(`images/one_hundred_years_of_solitude.jpg`);
  favoriteBooksCovers[bookTitles[2]] = new BookCover(`images/where_late_the_sweet_birds_sang.jpg`);
  favoriteBooksCovers[bookTitles[3]] = new BookCover(`images/to_kill_a_mockingbird.jpg`);
  favoriteBooksCovers[bookTitles[4]] = new BookCover(`images/the_help.jpg`);
  favoriteBooksCovers[bookTitles[5]] = new BookCover(`images/never_let_me_go.jpg`);
  favoriteBooksCovers[bookTitles[6]] = new BookCover(`images/gone_with_the_wind.jpg`);
  favoriteBooksCovers[bookTitles[7]] = new BookCover(`images/it.jpg`);
  favoriteBooksCovers[bookTitles[8]] = new BookCover(`images/interpreter_of_maladies.jpg`);
  favoriteBooksCovers[bookTitles[9]] = new BookCover(`images/1q84.jpg`);

  let bookItem;
  let bookDiv;

  function createBookList() {
    const bookList = document.createElement('ul');

    //  for (const key of Object.keys(favoriteBooks)) {
    for (let i = 0; i < bookTitles.length; i++) {
      bookItem = document.createElement('li');
      bookDiv = document.createElement(`div`);
      const bookTitle = document.createElement('h2');
      const bookAuthor = document.createElement('h4');
      const bookLang = document.createElement('h4');

      bookItem.className = 'bookItem';

      bookDiv.id = `${bookTitles[i]}_div`;
      // addBookCover(bookItem, key);
      bookTitle.innerText = favoriteBooks[bookTitles[i]].title;
      bookAuthor.innerText = `written by ${favoriteBooks[bookTitles[i]].author}`;
      bookLang.innerText = `available in ${favoriteBooks[bookTitles[i]].language}`;

      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(bookAuthor);
      bookDiv.appendChild(bookLang);

      bookItem.appendChild(bookDiv);
      bookList.appendChild(bookItem);
    }
    document.body.appendChild(bookList);
  }

  createBookList();

  /* At first I added the images to listitems via a function while creating the book list, but when I reread the MAKEME.MD 
  I realized I should first create the list with the book infos and add the corresponding images later on. In order to add
  the book images before the book info, I used a method called insertBefore. It really makes difference to add images later on, 
  thanks to that I learned a lot ^^ */

  function addBookCover(keyVal) {
    for (const key of Object.keys(favoriteBooksCovers)) {
      if (keyVal === key) {
        const bookCover = document.createElement('img');

        bookCover.src = favoriteBooksCovers[key].coverImage;
        bookCover.alt = `${favoriteBooksCovers[key].coverImage}`;
        bookCover.className = 'bookCover';

        // Get a reference to the div element which we want to insert the img element before.
        const divToAddBefore = document.getElementById(key + '_div');
        // Get a reference to the parent element of div which is the corresponding li.
        const parentDiv = divToAddBefore.parentNode;
        // Insert the new cover img into the DOM before the div element which contains book info.
        parentDiv.insertBefore(bookCover, divToAddBefore);
      }
    }
  }

  for (let i = 0; i < bookTitles.length; i++) {
    addBookCover(bookTitles[i]);
  }
}
