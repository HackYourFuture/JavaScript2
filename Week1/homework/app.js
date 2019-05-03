'use strict';

{
  /*
  const bookTitles = [
    // Replace with your own book titles
    //'harry_potter_chamber_secrets',
    'remembering_again',
    'aesops\'s_fables',
    'the_golden_goose',
    'the_blockade_runners',
    'the_two_drovers',
    'cross_purposes',
    'once_a_hero',
    'the_stolen_body',
    'high_water_mark',
    'the_gift_of_the_magi'
  ];
  */
  // Replace with your own code
  
  //console.log(bookTitles);
  /* 
  function generateList() {
  const newList = document.createElement('ul');

  for (let i = 0; i < bookTitles.length; i++) {
    const book = bookTitles[i];
    newList.innerHTML += `<li>${book}</li>`; 
  }

  return newList;
};

document.body.append(generateList()); 

*/
const booksTitles = [
  '1-Remembering Again',
  '2-Aesops\'s Fables',
  '3-The Golden Goose',
  '4-The Blockade Runners',
  '5-The Two Drovers',
  '6-Cross Purposes',
  '7-Once a Hero',
  '8-The Stolen Body',
  '9-High Water Mark',
  '10-The Gift of the Magi',
  ];

  function generateList() {
  const newList = document.createElement('ul');

  for (let i = 0; i < booksTitles.length; i++) {
    const book = booksTitles[i];
    newList.innerHTML += `<li>${book}</li>`; 
  }

  return newList;
};

document.body.append(generateList()); 

  class book {
    constructor(title, language, author) {
      this.title = title;
      this.language = language;
      this.author = author;
    }
  }

  var myBook = new book("1-Remembering Again", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://i.ytimg.com/vi/FUdhgRJBxOE/maxresdefault.jpg">');
  document.write("<br>");

  var myBook = new book("2-Aesops\'s Fables", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://usborne-media.azureedge.net/cdn-imagecache/c/1/d/9/6/d/c1d96d5994371edfe5cc67018364dfcdd056e3db.JPG">');
  document.write("<br>");

  var myBook = new book("3-The Golden Goose", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://www.storiestogrowby.org/wp-content/uploads/2015/08/The-Golden-Goose-e1519391693135.jpg">');
  document.write("<br>");
  
  var myBook = new book("4-The Blockade Runners", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/%27The_Blockade_Runners%27_by_Jules_F%C3%A9rat_03.jpg">');
  document.write("<br>");

  var myBook = new book("5-The Two Drovers", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://images-na.ssl-images-amazon.com/images/I/31Sz1NoVuGL._SX373_BO1,204,203,200_.jpg">');
  document.write("<br>");
  
  var myBook = new book("6-Cross Purposes", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://images-na.ssl-images-amazon.com/images/I/31rZeh5EwqL._AC_SY400_.jpg">');
  document.write("<br>");

  var myBook = new book("7-Once a Hero", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/6/2/8/1001004001878263.jpg">');
  document.write("<br>");
  
  var myBook = new book("8-The Stolen Body", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="data:image/jpeg;base64,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">');
  document.write("<br>");

  var myBook = new book("9-High Water Mark", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="http://historyoftheupperyough.com/stories/wp-content/uploads/2015/06/Down-to-Tommys-4a-1024x576.jpg">');
  document.write("<br>");
  
  var myBook = new book("10-The Gift of the Magi", "English", "Learn English story");
  document.write("Book title is : " + myBook.title + "<br>");
  document.write("Book language is : " + myBook.language + "<br>");
  document.write("Book author is : " + myBook.author + "<br>");
  document.write('<img src="https://upload.wikimedia.org/wikipedia/en/5/5f/The_Gift_of_the_Magi.jpg">');
  document.write("<br>");

  var btn = document.getElementsByTagName(li);
  function newItem() {
    
  }

}  
