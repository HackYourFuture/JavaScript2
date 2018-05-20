'use strict';

function main() {

  const bookInfo = {
    geography_integrated: {
      title: 'Geography An Integrated Approach',
      author: 'David Waugh',
      language: 'English'
    },
    cinderella: {
      title: 'Cinderella',
      author: 'Wilhelm Grimm',
      language: 'English'
    },
    mr_bean: {
      title: 'Mr Bean',
      author: 'Johnny English',
      language: 'English'
    },
    mpho_search: {
      title: 'Mpho Search',
      author: 'Sandra Braude',
      language: 'Zulu'
    },
    eloquent_javascript: {
      title: 'Eloquent Javascript',
      author: 'Marijn Haverbeke',
      language: 'English'
    },
    kudzikotsira: {
      title: 'Kudzikotsira',
      author: 'Never Chimeno',
      language: 'Shona'
    },
    rain: {
      title: 'Rain',
      author: 'Marion Dane',
      language: 'English'
    },
    mini_farming: {
      title: 'Mini Farming',
      author: 'Brett Markham',
      language: 'English'
    },
    restoration_agriculture: {
      title: 'Restoration Agriculture',
      author: 'Mark Shepard',
      language: 'English'
    },
    umenzi_kakhalelwa: {
      title: 'Umenzi Kakhalelwa',
      author: 'Noel Mathema',
      language: 'Ndebele'
    }
  };

  let bookImages = {
    the_alchemist: 'geography.jpeg',
    war_and_peace: '1931_Jane_Eyre.jpg',
    jayne_ayre: '1931_Jane_Eyre.jpg',
    harry_potter_and_the_prisoner_of_azkaban: '1931_Jane_Eyre.jpg'
  };

  const ul = createUl(bookInfo, bookImages);

  document.body.appendChild(ul);

  console.log(JSON.stringify(bookInfo, null, 2));
}

function createUl(bookTitles, bookImages) {
  const ul = document.createElement('ul');

  for (let i in bookTitles) {

    let book = bookTitles[i];

    let li = document.createElement('li');

    let header = document.createElement('h2');
    header.innerHTML = book.title;

    let authorP = document.createElement('p');
    authorP.innerHTML = book.author;

    let languageP = document.createElement('p');
    languageP.innerHTML = book.language;

    let image = document.createElement('img');
    image.src = getSource(i, bookImages);
    image.style.width = '200px';
    li.appendChild(header);
    li.appendChild(authorP);
    li.appendChild(languageP);
    li.appendChild(image);

    ul.appendChild(li);
  }
  return ul;
}

function getSource(bookId, bookImages) {
  return bookImages[bookId];
}

window.addEventListener('load', main);


/*'use strict';

function main() {

  //let bookTitles = ['geography_integrated', 'cinderella', 'mr_bean', 'eloquent_javascript', 'mpho_search', 'kudzikotsira', 'rain', 'mini_farming', 'restoration_agriculture', 'umenzi_kakhalelwa'];
  let bookInfo = {
    geography_integrated: {
      title: 'Geography An Integrated Approach',
      author: 'David Waugh',
      language: 'English'
    },
    cinderella: {
      title: 'Cinderella',
      author: 'Wilhelm Grimm',
      language: 'English'
    },
    mr_bean: {
      title: 'Mr Bean',
      author: 'Johnny English',
      language: 'English'
    },
    eloquent_javascript: {
      title: 'Eloquent Javascript',
      author: 'Marijn Haverbeke',
      language: 'English'
    },
    mpho_search: {
      title: 'Mpho Search',
      author: 'Sandra Braude',
      language: 'Zulu'
    },
    kudzikotsira: {
      title: 'Kudzikotsira',
      author: 'Never Chimeno',
      language: 'Shona'
    },
    rain: {
      title: 'Rain',
      author: 'Marion Dane',
      language: 'English'
    },
    mini_farming: {
      title: 'Mini Farming',
      author: 'Brett Markham',
      language: 'English'
    },
    restoration_agriculture: {
      title: 'Restoration Agriculture',
      author: 'Mark Shepard',
      language: 'English'
    },
    umenzi_kakhalelwa: {
      title: 'Umenzi Kakhalelwa',
      author: 'Noel Mathema',
      language: 'Ndebele'
    }
  }
  //console.log(books.join(','));  (delete me plz)

  const ul = createUl(bookInfo);

  document.body.appendChild(ul);

  

  function createUl(bookTitles) {
    const ul = document.createElement('ul');

    for (let i in bookTitles) {
      let book = bookTitles[i];

      let li = document.createElement(li);
      //let li = createListItem(bookTitles[i]); delete after

      let header = document.createElement('h2');
      header.innerHTML = book.title;

      let authorP = document.createElement('p')
      authorP.innerHTML = book.author;

      let languageP = document.createElement('p')
      languageP.innerHTML = book.language;

      li.appendChild(header);
      li.appendChild(authorP);
      li.appendChild(languageP);
      ul.appendChild(li);
    }
    return ul;
  }
}
/*
function createListItem(bookTitle) {
  let li = document.createElement('li');
  li.innerHTML = bookTitle[i];
  return li;
}*/
/*
window.addEventListener('load', main);
*/









/*"use strict";
{
  const bookTitles = [
    "Geography An Integrated Approach",
    "Cinderella",
    "Mr Bean",
    "Mpho Search",
    "Eloquent Javascript",
    "Kudzikotsira",
    "Rain",
    "Mini Farming",
    "Restoration Agriculture",
    "Umzenzi Kakhalelwa"
  ];
//Creating and displaying list items
    const ul = document.createElement('ul');
    document.getElementById('books').appendChild(ul);
  
    bookTitles.forEach(function (name) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML += name;
    });
  }
  
// Constructor function for book objects
function books(title, language, author) {
  this.bookTitle = title;
  this.bookLanguage = language;
  this.bookAuthor = author;
}

// Creating object for each book.
const geoIntegrated = new books("Geography An Integrated Approach", "English", "David Waugh");
const cinderella = new books("Cinderella", "English", "Wilhelm Grimm");
const mrBean = new books("Mr Bean", "English", "Johny English");
const mphoSearch = new books("Mpho Search", "Zulu", "Sandra Braude");
const eloquent = new books("Eloquent Javascript", "English", " Marijn Haverbeke");
const kudzi = new books("Kudzikotsira", "Shona", "Never Chimeno");
const rain = new books("Rain", "English", "Marion Dane");
const farming = new books("Mini Farming", "English", "Brett Markham");
const agriculture = new books("Restoration Agriculture", "English", "Mark Shepard");
const umenzi = new books("Umzenzi Kakhalelwa", "Ndebele", "Noel Mathema");

// Displaying full book information.
document.getElementById("geo").innerHTML ="Title: " + geoIntegrated.bookTitle + "." + " | " + "Language: "+ geoIntegrated.bookLanguage + "." + " | "+ "Author: " + geoIntegrated.bookAuthor + " .";
  
document.getElementById("cind").innerHTML ="Title: " + cinderella.bookTitle + "." + " | " + "Language: "+ cinderella.bookLanguage + "." + " | " + "Author: " + cinderella.bookAuthor + " .";

document.getElementById("bean").innerHTML ="Title: " + mrBean.bookTitle + "." + " | " + "Language: "+ mrBean.bookLanguage + "." + " | " + "Author: " + mrBean.bookAuthor + " .";

document.getElementById("mpho").innerHTML = "Title: " + mphoSearch.bookTitle + "." + " | " + "Language: " + mphoSearch.bookLanguage + "." + " | " + "Author: " + mphoSearch.bookAuthor + " .";

document.getElementById("eloquent").innerHTML = "Title: " + eloquent.bookTitle + "." + " | " + "Language: " + eloquent.bookLanguage + "." + " | " + "Author: " + eloquent.bookAuthor + " .";

document.getElementById("kudzikotsira1").innerHTML = "Title: " + kudzi.bookTitle + "." + " | " + "Language: " + kudzi.bookLanguage + "." + " | " + "Author: " + kudzi.bookAuthor + " .";

document.getElementById("rainn").innerHTML = "Title: " + rain.bookTitle + "." + " | " + "Language: " + rain.bookLanguage + "." + " | " + "Author: " + rain.bookAuthor + " .";

document.getElementById("farming").innerHTML = "Title: " + farming.bookTitle + "." + " | " + "Language: " + farming.bookLanguage + "." + " | " + "Author: " + farming.bookAuthor + " .";

document.getElementById("agriculture").innerHTML = "Title: " + agriculture.bookTitle + "." + " | " + "Language: " + agriculture.bookLanguage + "." + " | " + "Author: " + agriculture.bookAuthor + " .";

document.getElementById("umenzi").innerHTML = "Title: " + umenzi.bookTitle + "." + " | " + "Language: " + umenzi.bookLanguage + "." + " | " + "Author: " + umenzi.bookAuthor + " .";

//Function displaying book images 
function main() {
  const image1 = window.document.getElementById("geography_integrated_approach");
  const image2 = window.document.getElementById("cinderella");
  const image3 = window.document.getElementById("mr_bean");
  const image4 = window.document.getElementById("mpho_search");
  const image5 = window.document.getElementById("eloquent_javascript");
  const image6 = window.document.getElementById("kudzikotsira");
  const image7 = window.document.getElementById("rain1");
  const image8 = window.document.getElementById("mini_farming");
  const image9 = window.document.getElementById("restoration_agriculture");
  const image10 = window.document.getElementById("umenzi_kakhalelwa");

  image1.src = "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4085/9781408504079.jpg";
  image2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLg3YN_TLHKWHa_5O6cg-2rf415Tk5ynx5sKD4KlbmugBgndmV";
  image3.src = "http://t3.gstatic.com/images?q=tbn:ANd9GcR5pDymrsyh1bEe04pTod3lcnHQJkwCkk7HFANunW3xNnR6CnBN";
  image4.src = "http://t1.gstatic.com/images?q=tbn:ANd9GcSbdPVpRhwbjyOF74kiCwuD39-A2cuWjnJ6PrWQyra3k3xxUb4O";
  image5.src = "https://www.studystore.nl/images/9781593272821/3/1";
  image6.src = "http://www.booklot.co.zw/images/products/main/1494930437Kudzikotsira.jpg";
  image7.src = "https://www.scholastic.com/content5/media/products/10/9780439711210_mres.jpg";
  image8.src = "http://t3.gstatic.com/images?q=tbn:ANd9GcTYs7dZW_J2YkS3q5J6V3BNPXBA7A-4ny03IrCqJz6R8KVLd9ad";
  image9.src = "http://t3.gstatic.com/images?q=tbn:ANd9GcRVzZMLfEyKwBhwQBeHmNGysZlnuUpya6pPGI0kudn8dAzUvCxx";
  image10.src = "https://www.njabulondebele.co.za/wp-content/uploads/1993/01/SarahRingsAndI.jpg";
}
window.addEventListener("load", main);



//https://github.com/HackYourFuture/JavaScript2/pull/
//pull requests checks
*/
