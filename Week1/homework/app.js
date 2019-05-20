'use strict';

{
  // 1.1 declaring an array 
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    "a_history_of_western_philosophy",
    'sophie’s_world',
    'meditations',
    'zen_and_the_art_of_motorcycle_maintenance',
    'man’s_search_for_meaning',
    'the_essential-epicurus' ,
    'meditations_on_first_philosophy',
    'critique_of_pure_peason',
    'beyond_good_and_evil'
  ];
  //1.3 Make a function
  // Replace with your own code
  function myFavouriteBooks(books , ul){
    for(let i = 0; i < books.length ; i++){
      let listItem =  document.createElement('li');
      listItem.innerText = books[i];
      ul.appendChild(listItem);
    }
  }

 //1.3 Make a function
  function main(){
  let newUl = document.createElement('ul');
  newUl.style.listStyle = 'circle';
  document.body.appendChild(newUl);
  myFavouriteBooks(bookTitles ,newUl );
 }
  main();
}

//1.4 Make an object
let objecBbookTitles = {
  '11':{
    title : 'harry_potter_chamber_secrets',
    autor : 'Bertrand Russell',
    language : "Enghlis",
    url : 'https://images-na.ssl-images-amazon.com/images/I/71e0pu5UN9L._SY445_.jpg'
   },
  12:{
    title : 'a_history_of_western_philosophy',
    autor : 'Bertrand Russell',
    language : "Enghlis",
    url : 'https://taylorpearson.me/wp-content/uploads/2017/08/243685.jpg'
   },
  13:{
    title : 'sophie’s_world',
    autor : 'Jostein Gaarder',
    language : "Enghlis",
    url : 'https://taylorpearson.me/wp-content/uploads/2017/08/796e94d6d2ac3bf48327be846c9c034d-w204@1x.jpg'
  },
  14:{
    title : 'meditations',
    autor : 'Marcus Aurelius',
    language : "Enghlis",
    url : "https://taylorpearson.me/wp-content/uploads/2017/08/9780141395869.jpg"
   },
  15:{
    title : 'zen_and_the_art_of_motorcycle_maintenance',
    autor : 'Robert M. Pirsig',
    language : "Enghlis",
    url: "https://taylorpearson.me/wp-content/uploads/2017/08/md11588828249.jpg" 
   },
  16:{
    title : 'man’s_search_for_meaning',
    autor : 'Viktor Frankl',
    language : "Enghlis",
    url : 'https://taylorpearson.me/wp-content/uploads/2017/08/11201237ba21276d57e6cb0fc7cc9422-mans-search-for-meaning-free-ebooks.jpg'
   },
  17:{
    title : 'the_essential',
    autor : 'Epicurus',
    language : "Enghlis",
    url : 'https://taylorpearson.me/wp-content/uploads/2017/08/41fCmU3HBJL._SX320_BO1204203200_.jpg'
   },
  18:{
    title : 'meditations_on_first_philosophy',
    autor : 'René Descartes',
    language : "Enghlis",
     url :'https://taylorpearson.me/wp-content/uploads/2017/08/41K4E2xLSEL._SL500_SY344_BO1204203200_.jpg'
   },
  19:{
    title : 'critique_of_pure_peason',
    autor : 'Emmanuel Kant',
    language : "Enghlis",
    url : 'https://images-na.ssl-images-amazon.com/images/I/41TPNFIgwGL._SX324_BO1,204,203,200_.jpg'
   },
  20:{
    title : 'beyond_good_and_evil',
    autor : 'Nietszche',
    language : "Enghlis",
    url : 'https://taylorpearson.me/wp-content/uploads/2017/08/81-kbdDkFTL.jpg'
   },
}

function obj(objecBbookTitles){
  let codeOfTheBooks='';
  let title = '';
  let autor = '';
  let language = '';
  let url = '';
  let objecBbookItems ;
  let listItemsToArray ;
  let newLi;
  objecBbookItems = Object.entries(objecBbookTitles);

  for(let i = 0; i <objecBbookItems.length; i++){
      codeOfTheBooks = Object.keys(objecBbookTitles);
      title = objecBbookItems[i][1]['title'];
      autor = objecBbookItems[i][1]['autor'];
      language = objecBbookItems[i][1]['language'];
      url = objecBbookItems[i][1]['url'];
      listItemsToArray = Object.entries(objecBbookItems[i][1]);

      let newUl =  document.createElement('ul');
      let div = document.createElement('div');
      document.body.appendChild(div);
      div.appendChild(newUl);
      
      newUl.innerText = "The code of the book is:" +" "+ codeOfTheBooks[i];
             let urls =Object.keys(objecBbookTitles[13]);
      for(let li = 0; li <listItemsToArray.length; li++){
        if(urls[li] == 'url'){
          
        let  imgs = document.createElement('img');
        imgs.src = objecBbookItems[i][1]['url'];;
        newUl.appendChild(imgs);
        imgs.width =200;
        imgs.height = 200;   
      }
      
      if(urls[li] !== 'url'){
        newLi = document.createElement('li');
        newLi.innerText= "The" +" " +listItemsToArray[li][0] +" : "+listItemsToArray[li][1];
       
      }else{
        continue;
      }
      newUl.appendChild(newLi);
    }
  }
}

obj(objecBbookTitles)