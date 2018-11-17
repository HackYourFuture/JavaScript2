'use strict';
{
  let bookTitles = [
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

  //step 2.3
//   function bookList () { 

//     let bookcontainer = document.createElement("div");
//     let ul = document.createElement("ul");
//     bookcontainer.appendChild(ul);

//     for (let i = 0; i< bookTitles.length; i++) {
//       let li = document.createElement("li");
//       ul.appendChild(li);
//       let content = document.createTextNode(bookTitles[i]);
//       li.appendChild(content);
//     }
//     console.log(bookcontainer);

//   }
// bookList();


  //console.log(bookTitles);

  // Replace with your own code
  //console.log(bookTitles);


  const bookDetails = {
    "anna_frank_haar_leven": {
    title: "Anna Frank haar leven",
    language: "Dutch",
    author: "Anna Frank",
  },
    "meisje_in_de_trein": {
      title: "Meisje in de trein",
      language: "Dutch",
      author: "Paula Hawkins",
    },
    "hanna's_verjaardag": {
      title: "Hanna's verjaardag",
      language: "Dutch",
      author: "Gull Akerblom",
    },
    "Een_nieuwe_toekomst": {
      title: "Een nieuwe toekomst",
      language: "Dutch",
      author: "Conor Grennan",
    },
    "de_geur_van_regen": {
      title: "De geur van regen",
      language: "Dutch",
      author: "Lieneke Dijkzeul",
    },
    "detective_orhan": {
      title: "Detective Orhan",
      language: "Dutch",
      author: "Sadik Yemni",
    },
    "last_minute": {
      title: "Last Minute",
      language: "Dutch",
      author: "Linda van Rijn",
    },
    "de_man_van_de_bloemen": {
      title: "De man van de bloemen",
      language: "Dutch",
      author: "Johan van Caeneghem",
    },
    "ren_amina_ren": {
      title: "Ren Amina ren",
      language: "Dutch",
      author: "Annelie Drewsen",
    },
    "het_diner": {
      title: "Het diner",
      language: "Dutch",
      author: "Herman Koch",
    }
  
  }
  //console.log(bookDetails);
  
  const bookImg = {
    anna_frank_haar_leven : "images/Anna Frank.jpeg",
    meisje_in_de_trein : "images/meisje in de trein.jpg",
    hannas_verjaardag : "images/Hannas' verjaardag.jpg",
    Een_nieuwe_toekomst : "images/nieuwe toekomst.jpg",
    de_geur_van_regen : "images/de geur.jpg",
    detective_orhan : "images/detective orhan.jpg",
    last_minute : "images/last minute.jpg",
    de_man_van_de_bloemen : "images/man van de bloemen.jpg",
    ren_amina_ren : "images/ren amina.jpg",
    het_diner : "images/het diner.jpg"
    };
 
  function bookList () { 

    let bookcontainer = document.getElementById("mybooks");
    let div = document.createElement("div");
    bookcontainer.appendChild(div);
    let li = document.createElement("li");
    div.appendChild(li);
    
    


    for (let i = 0; i< bookTitles.length; i++) {

      // let content = document.createTextNode(bookTitles[i]);
      // li.appendChild(content);
      let titleList = document.createElement("li")
      li.appendChild(titleList);
      let titleContent = document.createTextNode(bookDetails[bookTitles[i]].title);
      titleList.appendChild(titleContent);
      let languageList = document.createElement("li")
      li.appendChild(languageList);
      let languageContent = document.createTextNode("Language: " + bookDetails[bookTitles[i]].language);
      languageList.appendChild(languageContent);
      let authorList = document.createElement("li")
      li.appendChild(authorList);
      let authorContent = document.createTextNode("Author: "+ bookDetails[bookTitles[i]].author);
      authorList.appendChild(authorContent);
      let img = document.createElement("img");
      li.appendChild(img);
      img.src = Object.values(bookImg)[i];
      
      
  

      li.setAttribute("class", "bookList");
      img.setAttribute("class", "bookImage");
      titleList.setAttribute("class", "liDetails");
      titleList.setAttribute("id", "titleDetails");
      languageList.setAttribute("class", "liDetails");
      authorList.setAttribute("class", "liDetails");

      
    }
    //console.log(bookcontainer);

  }
bookList();
}

