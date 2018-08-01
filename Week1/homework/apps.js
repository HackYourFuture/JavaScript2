let books = [
    "the_little_prince", "the_great_Gatsby", "the_book_thief",
    "lord_of_the_Flies", "romeo_and_juliet", "the_kite_runner",
    "the_giving_tree ", "charlotte's_web","the_hobbit", "hamlet",
    "the_outsiders","ce_gevara"
];

let aboutBooks = {
    "the_little_prince": {
        title:"Le Petit Prince: La planète des Globus",
        language:"English",
        author:"Antoine de Saint-Exupéry"
    },
    "the_great_Gatsby": {
        title:"The Great Gatsby",
        language:"English",
        author:" F. Scott Fitzgerald"
    },
    "the_book_thief": {
        title:"The Book Thief",
        language:"English",
        author:" Markus Zusak"
    },
    "lord_of_the_Flies": {
        title:"Lord of the Flies",
        language:"English",
        author:" William Golding"
    },
    "romeo_and_juliet": {
        title:"Romeo and Juliet",
        language:"English",
        author:"William Shakespeare,"
    },
    "the_kite_runner": {
        title:"The Kite Runner",
        language:"English",
        author:"Khaled Hosseini"
    },
    "the_giving_tree": {
        title:"the giving tree",
        language:"English",
        author:"Shel Silverstein"
    },
    "charlotte's_web": {
        title:"charlotte's web",
        language:"English",
        author:" E.B. White"
    },
    "the_hobbit": {
        title:"The Hobbit or There and Back Again",
        language:"English",
        author:"J.R.R. Tolkien"
    },
    "hamlet": {
        title:"The Tragicall Historie of Hamlet",
        language:"English",
        author:"William Shakespeare"
    },     
    "the_outsiders": {
        title:"The Outsiders",
        language:"English",
        author:"S.E. Hinton "
    },   
    "ce_gevara": {
        title:"Če Gevara - Revolucionaran život",
        language:"Serbian",
        author:" Jon Lee Anderson"
    },      
};


let bookImages = {
    "the_little_prince": "images/book1.jpg", 
    "the_great_Gatsby": "images/book2.jpg",
    "the_book_thief": "images/book3.jpg",
    "lord_of_the_Flies": "images/book4.jpg",
    "romeo_and_juliet": "images/book5.jpg",
    "the_kite_runner": "images/book6.jpg",
    "the_giving_tree": "images/book7.jpg",
    "charlotte's_web": "images/book8.jpg",
    "the_hobbit": "images/book9.jpg",
    "hamlet": "images/book10.jpg",
    "the_outsiders":"images/book11.jpg",
    "ce_gevara":"images/book12.jpg"
  };


  function myBookList(){
      let mydiv = document.getElementById('thing');
      let pageH1 = document.createElement('h1');
      mydiv.appendChild(pageH1);
      let pageTitile = document.createTextNode("The books I read");
      pageH1.appendChild(pageTitile);
      let booksUl = document.createElement('ul');
      mydiv.appendChild(booksUl);
      for (let k = 0; k < books.length; k++){
          let booksLi = document.createElement('li');
          booksUl.appendChild(booksLi);
          let bN = document.createTextNode(Object.values(aboutBooks)[k].title);
          let bA = document.createTextNode("written by " + Object.values(aboutBooks)[k].author);
          let bL = document.createTextNode("book language " + Object.values(aboutBooks)[k].language);
          let pageH2 = document.createElement('h2');
          let pagep1 = document.createElement('p');
          let pagep2 = document.createElement('p');
          pageH2.appendChild(bN);
          pagep1.appendChild(bA);
          pagep2.appendChild(bL);
          booksLi.innerHTML += pageH2.outerHTML + pagep1.outerHTML + pagep2.outerHTML;
          let bookCover = document.createElement("img");
          booksLi.appendChild(bookCover);
          booksLi.setAttribute("id", Object.keys(bookImages)[k]);
          bookCover.setAttribute("src", Object.values(bookImages)[k]);
          bookCover.setAttribute("alt", Object.values(aboutBooks)[k].title);

      }
  }

myBookList();