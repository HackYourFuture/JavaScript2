
window.onload = function() {
  //2.1
  'use strict';

 var booksArray = ["harry_potter_chamber_secrets", "the_da_vinci_code", "the_world_order", "the_white_house_years", "as_if_repbulic", "the_alchemist",
              "love_in_the_time_of_cholira", "the_prophet", "herodotus_history", "the_yacoubian_building"];

// console.log(booksArray);

//2.3  
 /**
  * function ulGenerate(){
     let myUlDiv = document.getElementById('myUlDiv')
     let ul = document.createElement('ul');

     for(let i = 0; i<booksArray.length; i++){
         let li = document.createElement('li');
         li.innerHTML +=  books.id1[i]; 
         ul.appendChild(li);  
         myUlDiv.appendChild(ul);
     }   
 };

 ulGenerate();

  */
 
//2.4
 let books = {
     id1: {
         "title": "Harry Potter Chamber Secrets",
         "language": "English",
         "author": "Joanne Rowling"
     },

     id2: {
         "title": "The Da Vinci Code",
         "language": "English",
         "author": "Daniel Brown"
     },

     id3: {
         "title": "The World Order",
         "language": "English",
         "author": "Henry Kissinger"
     },

     id4: {
         "title": "The White House Years",
         "language": "English",
         "author": "Henry Kissinger"
     },

     id5: {
         "title": "The So-Called Republic",
         "language": "Erabic",
         "author": "Alaa Alaswani"
     },

     id6: {
         "title": "The Alchamist",
         "language": "English",
         "author": "Paulo Coelho"
     },

     id7: {
         "title": "Love In The Time Of Cholira",
         "language": "English",
         "author": "Gabriel Marquez"
     },

     id8: {
         "title": "The Prophet",
         "language": "Arabic",
         "author": "Kahlil Gibran"
     },

     id9: {
         "title": "Herodotus History",
         "language": "English",
         "author": "Herodotus"
     },

     id10: {
         "title": "The Yacoubian Building",
         "language": "Arabic",
         "author": "Alaa Alaswani"
     }

 };

 let bookImages = {
     id1: {
         "imagsrc": "harrypotter.jpg",
     },

     id2: {
         "imagsrc": "davenci.jpg",
       
     },

     id3: {
         "imagsrc": "worldorder.png",
       
     },

     id4: {
         "imagsrc": "whithouse.jpg",
     },

     id5: {
         "imagsrc": "asifrep.jpg",
     },

     id6: {
         "imagsrc": "alchemist.jpg",
     },

     id7: {
         "imagsrc": "love_in_the_time_of_cholira.jpg",
     },

     id8: {
         "imagsrc": "the_prophet.jpg",
     },

     id9: {
         "imagsrc": "herodotus_history.jpg",
     },

     id10: {
         "imagsrc": "the_yacoubian_building.jpg",
     }

 };

 
//2.5 and 2.7
 function printBook(){
     let myUlDiv = document.getElementById('myUlDiv')
     let ul = document.createElement('ul');
     let bookIdArray = Object.keys(books)
     let imagesArray = Object.keys(bookImages)
     
     for (let i = 0; i<bookIdArray.length; i++){
         let li = document.createElement('li');
         let img = document.createElement("img");
         let h2 = document.createElement('h2');
         let h3 = document.createElement('h3');
         let h4 = document.createElement('h4');
        
         //for the title, lang and author
         var bookId  = bookIdArray[i]
         const myBook = books[bookId];
         //for the images
         var imagesId = imagesArray[i];
         const myImages = bookImages[imagesId];
     
         //li.innerHTML += booksArray[i]; + "<br>" + books[key].language + "<br>"  + books[key].author ;
         h2.innerHTML += myBook.title;
         h3.innerHTML += myBook.author;
         h4.innerHTML += myBook.language;
         img.src = myImages["imagsrc"];

         
         li.appendChild(h2);
         li.appendChild(h3);
         li.appendChild(h4);
         li.appendChild(img);

          

         ul.appendChild(li); 
         myUlDiv.appendChild(ul);  
       
     }


 };

 printBook()


}



