'use strict';

// Favourite books of Utku Kopuz, class 19
const booksJSON = `
[
  { "title": "The Old Man and The Sea", "language": "English", "author": "Ernest Hemmingway" },
  { "title": "The Apostates: When Muslims Leave Islam", "language": "English", "author": "Simon Cottee" },
  { "title": "Efsane", "language": "Turkish",  "author": "Iskender Pala" },
  { "title": "Robinson Crusoe", "language": "English", "author": "Daniel Defoe" },
  { "title": "Les Miserables", "language": "English", "author": "Victor Hugo" },
  { "title": "First Muslim: The Story of Muhammad", "language": "English", "author": "Lesley Hazleton" },
  { "title": "Denizler Altında 20000 Fersah", "language": "Turkish", "author": "Jules Verne" },
  { "title": "Cingöz Recai", "language": "Turkish", "author": "Peyami Safa" },
  { "title": "Just for Fun", "language": "English", "author": "Linus Torvalds" },
  { "title": "Mercan Adası", "language": "Turkish", "author": "R. M. Ballantyne"  }
]`;

function getCountOfBooksForLanguage(books, language) {
  const booksForLanguage = books.filter(book => book.language === language);
  return booksForLanguage.length;
}

function getAllAuthors(books) {
  return books.map(book => book.author);
}

function getTitlesForLanguage(books, language) {
  return books.filter(book => book.language === language).map(book => book.title);
}

// function getUniqueLanguages(books) {
//   return books.reduce((acc, book) => {
//     if (!acc.includes(book.language)) {
//       acc.push(book.language);
//     }
//     return acc;
//   }, []);
// }

function getUniqueLanguages(books) {
  return books.reduce((acc, book) => {
    acc.add(book.language);
    return acc;
  }, new Set());
}

function main() {
  const books = JSON.parse(booksJSON);
  // console.log(books);

  const englishBookCount = getCountOfBooksForLanguage(books, 'English');
  console.log('Number of English books:', englishBookCount);

  const turkishBookCount = getCountOfBooksForLanguage(books, 'Turkish');
  console.log('Number of Turkish books:', turkishBookCount);

  const authors = getAllAuthors(books);
  console.log('All authors:', authors);

  const turkishTitles = getTitlesForLanguage(books, 'Turkish');
  console.log('Turkish titles:', turkishTitles);

  // const uniqueLanguages = getUniqueLanguages(books);
  // console.log('Unique languages:', uniqueLanguages);

  const uniqueLanguages = getUniqueLanguages(books);
  console.log('Unique languages:', Array.from(uniqueLanguages));
}

main();
