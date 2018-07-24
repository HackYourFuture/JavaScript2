'use strict';

  const bookTitles = [
    "anna_frank_haar_leven",
    "meisje_in_de_trein",
    "hanna's_verjaardag",
    "Een_nieuwe_toekomst",
    "de_geur_van_regen",
    "detective_orhan",
    "last_minute",
    "de_man_van_de_bloemen",
    "ren_amina_ren",
    "het_diner"
  ];
//1st method(for step 2.3)
  /*function makeList() {
    let bookcontainer = document.getElementById("mybooks");
    let ul = document.createElement("ul");
    bookcontainer.appendChild(ul);

    for (let i = 0; i<bookTitles.length; i++) {
      let li = document.createElement("li");
      let content = document.createTextNode(bookTitles[i]);
      li.appendChild(content);
      ul.appendChild(li);
    }
    bookcontainer.appendChild(ul);
  }
  makeList();*/
  
  //2nd method(1(for step 2.3))
  
  /*bookTitles.forEach(function(book) {
    var li = document.createElement("li");
    var text = document.createTextNode(book);
    li.appendChild(text);
    document.getElementById("mybooks").appendChild(li);
  });*/

//step 2.4))
 const bookDetails = {
  "anna_frank_haar_leven" : {
     title : "anna_frank_haar_leven",
     language : "dutch",
     Author : "anna_frank"
   },
   "meisje_in_de_trein" : {
    title : "meisje_in_de_trein",
    language : "dutch",
    Author : "paula_hawkins"
   }, 
   "hanna's_verjaardag" : {
    title : "hanna's_verjaardag",
    language : "dutch",
    Author : "gull_akerblom"
   }, 
   "Een_nieuwe_toekomst" : {
    title : "Een_nieuwe_toekomst",
    language : "dutch",
    Author : "conor_grennan"
   },
   "de_geur_van_regen" : {
    title :     "de_geur_van_regen",
    language : "dutch",
    Author : "lieneke_dijkzeul"
   }, 
   "detective_orhan" : {
    title :     "detective_orhan",
    language : "dutch",
    Author : "sadik_yemni"
   }, 
   "last_minute" : {
    title :     "last_minute",
    language : "dutch",
    Author : "linda_van_rijn"
   },
   "de_man_van_de_bloemen" : {
    title :     "de_man_van_de_bloemen",
    language : "dutch",
    Author : "johan_van_caeneghem"
   }, 
   "ren_amina_ren" : {
    title :     "ren_amina_ren",
    language : "dutch",
    Author : "annelie_drewsen"
   },
   "het_diner" : {
    title :     "het_diner",
    language : "dutch",
    Author : "herman_koch"
  }
 }
 //console.log(bookDetails);

 const bookImg = {
 "anna_frank_haar_leven" : {adress: "data:image/jpeg;base64,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"},
 "meisje_in_de_trein" : {adress: "https://www.bookspot.nl/images/active/carrousel/fullsize/9789086962518_front.jpg"},
 "hanna's_verjaardag" : {adress: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/3/9/9/9200000056169934.jpg"},
 "Een_nieuwe_toekomst" : {adress: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/0/0/5/1001004010215004.jpg"},
 "de_geur_van_regen" : {adress: "https://static.fnac-static.com/multimedia/Images/FR/NR/15/b7/72/7517973/1540-1/tsp20151015175543/GEUR-VAN-REGEN.jpg"},
 "detective_orhan" : {adress: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/5/0/3/1001004005653059.jpg"},
 "last_minute" : {adress: "data:image/jpeg;base64,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"},
 "de_man_van_de_bloemen" : {adress: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/6/7/6/1/9200000077291676.jpg"},
 "ren_amina_ren" : {adress: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/2/9/9/9200000056169924.jpg"},
 "het_diner" : {adress: "https://www.lezenvooriedereen.be/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/d/i/diner_lowres.jpg"},
 };
 // step 2.5

 function makeList() {
  let bookcontainer = document.getElementById("mybooks");
  let ul = document.createElement("ul");
  bookcontainer.appendChild(ul);

  for (let i = 0; i<bookTitles.length; i++) {
    
    let contentTitle = document.createTextNode(Object.values(bookDetails)[i].title);
    let contentLanguage = document.createTextNode(Object.values(bookDetails)[i].language);
    let contentAuthor = document.createTextNode(Object.values(bookDetails)[i].author);
    let liTitle = document.createElement("li");
    let liLanguage = document.createElement("li");
    let liAuthor = document.createElement("li");
    let li = document.createElement("li");
    let content = document.createTextNode(bookTitles[i]);
    let img = document.createElement("img");
    
    /*let detailsTitle = object.values(bookDetails) [i].title;
    let detailsLanguage = object.values(bookDetails) [i].language;
    let detailsAuthor = object.values(bookDetails) [i].author;*/
    
    liTitle.appendChild(contentTitle);
    liLanguage.appendChild(contentLanguage);
    liAuthor.appendChild(contentAuthor);
    li.appendChild(content);
    li.appendChild(liTitle);
    li.appendChild(liLanguage);
    li.appendChild(liAuthor);
    li.appendChild(img);
    img.src = Object.values(bookImg) [i].adress;

    li.setAttribute("class", "bookList");
    img.setAttribute("class", "bookImage")
    liTitle.setAttribute("class", "detailsLi");
    liLanguage.setAttribute("class", "detailsLi");
    liAuthor.setAttribute("class",  "detailsLi");
    ul.appendChild(li);
  }
}
makeList();

   
