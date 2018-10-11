'use strict';
{
  const bookTitles = ["zakerat_jasad","alasoad_yaliq_beke","kabo_alabaseen","hokol_aldam","yakfik_khalb_wahed","ant_li","shifret_divinchi","ontha_abria","alf_lila_wlila","ghoyom"
  ];

const bookInfo = {
  "zakerat_jasad":{
    "title":"Zakerat Jasad",
    "language":"Arabic",
    "auther":"Ahlam Mostaghanmi"
  },
  "alasoad_yaliq_beke":{
    "title":"Alasoad Yaliq Beke",
    "language":"Arabic",
    "auther":"Ahlam Mostaghanmi"
  },
  "kabo_alabaseen":{
    "title":"Kabo Alabaseen",
    "language":"Arabic",
    "auther":"Haifaa Bitar"
  },
  "hokol_aldam":{
    "title":"Hokol Aldam",
    "language":"Arabic",
    "auther":"Khathren"
  },
  "yakfik_khalb_wahed":{
    "title":"Yakfik Khalb Wahed",
    "language":"Arabic",
    "auther":"Haifaa Bitar"
  },
  "ant_li":{
    "title":"Ant Li",
    "language":"Arabic",
    "auther":"Ahlam Mostaghanmi"
  },
  "shifret_divinchi":{
    "title":"Shifret Divinchi",
    "language":"Arabic",
    "auther":"Dan Broun"
  },
  "ontha_abria":{
    "title":"Ontha Abria",
    "language":"Arabic",
    "auther":"Ahlam Mostaghanmi"
  },
  "alf_lila_wlila":{
    "title":"Alf Lila Wlila",
    "language":"Arabic",
    "auther":"Ahlam"
  },
  "Nsian":{
    "title":"Ghoyom",
    "language":"Arabic",
    "auther":"Ahlam Mostaghanmi"
  }  
  
}
let bookCovers = {"zakerat_jasad":"./img/IMG_2596.JPG",
"alasoad_yaliq_beke":"./img/IMG_2591.png",
"kabo_alabaseen":"./img/IMG_2592.JPG",
"hokol_aldam":"./img/IMG_2593.png",
"yakfik_khalb_wahed":"./img/IMG_2594.JPG",
"ant_li":"./img/IMG_2595.JPG",
"shifret_divinchi":"./img/IMG_2597.JPG",
"ontha_abria":"./img/IMG_2598.JPG",
"alf_lila_wlila":"./img/IMG_2599.JPG",
"Nsian":"./img/gh.jpg"
}



  // Replace with you own code
  // function createBookList(books){

  //   let list = document.createElement("UL");
  //   document.body.appendChild(list) ; 
  //   list.setAttribute("id","book_list");
  //   for(let i = 0; i < books.length; i++){
  //     let li = document.createElement("LI");
  //     let title = document.createTextNode(books[i]);
  //     li.appendChild(title);
  //     list.appendChild(li);
    
  //   }
    
  // }

  function createBookList(books){

    let list = document.createElement("UL");
    document.body.appendChild(list) ; 
    list.setAttribute("id","book_list");
    for(let i in books){
      let li = document.createElement("LI");
      li.setAttribute("ID",i);
      let header = document.createElement("H1");
      let headerText = document.createTextNode(books[i].title)
      header.appendChild(headerText);

      let language = document.createElement("P");
      let languageText = document.createTextNode(books[i].language);
      language.appendChild(languageText);


      let auther = document.createElement("P");
      let autherText = document.createTextNode(books[i].auther);
      auther.appendChild(autherText);
      li.appendChild(header);
      li.appendChild(language);
      li.appendChild(auther);
      list.appendChild(li);
    
    }
    
  }
  
  createBookList(bookInfo);


 
  function covering (covers){
    let coversArray = Object.keys(covers);
    console.log(coversArray);
    for (let i = 0; i < coversArray.length; i++){
      let img = document.createElement("IMG");
      img.setAttribute("src",covers[coversArray[i]]);
      document.getElementById(coversArray[i]).appendChild(img);
      console.log(coversArray[i]);
    }

   
    } 
   
  
   

covering(bookCovers);
console.log(bookCovers);
  }
