"use strict";
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
