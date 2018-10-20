'use strict';
{
  const books = {
    ego_is_the_enemy: { title: 'Ego is the enemy', language: 'English', author: 'Ryan Holiday' },
    how_to_have_a_good_day: { title: 'How to have a good day', language: 'English', author: 'Caroline Webs' },
    the_legacy_of_rome: { title: 'The Legacy of Rome', language: 'English', author: 'Cyril Bailey' },
    dracula: { title: 'Dracula', language: 'English', author: 'Bram Stoker' },
    inside_strategy: { title: 'Inside Strategy', language: 'English', author: 'Bram Stoker' },
    a_junior_english_grammar_and_composition: { title: 'A Junior English Grammar and Composition', language: 'English', author: 'N. K. Agarwala' },
    map_skill: { title: 'Map Skill', language: 'English', author: 'workbook' },
    general_english: { title: 'General English', language: 'English', author: 'HYF' },
    les_miserables: { title: 'Les Miserables', language: 'Francais', author: 'Victor Hugo' },
    het_leven_van_een_loser: { title: 'Het leven van een loser', language: 'Neerlandes', author: 'Jeff Kinney' },
  };

  const covers = {
    ego_is_the_enemy: './img/book1.jpg',
    how_to_have_a_good_day: './img/book4.jpg',
    the_legacy_of_rome: './img/book6.jpg',
    dracula: './img/book7.jpg',
    inside_strategy: './img/book8.jpg',
    a_junior_english_grammar_and_composition: './img/book9.jpg',
    map_skill: './img/book10.jpg',
    general_english: './img/books.jpg',
    les_miserables: './img/book5.jpg',
    het_leven_van_een_loser: './img/book3.jpg',
  };

  function createBookElement(book, bookId) {
    let bookHtml =
      "<li id=" + bookId + " class='book'>"
      + " <h2 class='bookTitle'>" + book.title + "</h2>\n"
      + " <img src=''><br><br>"
      + " <span class='bookAuthor'><b>Author:</b> " + book.author + " (" + book.language + ")</span>\n"
      + "</li>\n";
    return bookHtml;
  }

  function createBookList(books) {
    let bookListHtml = "<h1>Book List</h1>";
    bookListHtml += "<ul class='books'>";
    for (let bookId in books) {
      bookListHtml += createBookElement(books[bookId], bookId);
    }
    bookListHtml += "</ul>";

    return bookListHtml;
  }

  function addBookCovers() {
    Object.keys(covers).forEach(bookId => {
      const bookElem = document.getElementById(bookId);
      const bookImgElems = bookElem.getElementsByTagName('img');

      for (let ix = 0; ix < bookImgElems.length; ix++) {
        const bookImgElem = bookImgElems.item(ix);
        bookImgElem.src = covers[bookId];
      }
    });
  }


  let htmlContent = createBookList(books);
  document.writeln(htmlContent);
  addBookCovers();
}