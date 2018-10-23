
//2: Custom DOM manipulation challenge
//--------------------------------------------------------------



//2.1-----------------------------------------------------------

  const bookTitles = ["harry_potter_chamber_of_secrets","the_grace_of_kings","game_of_thrones",
                      "children_of_blood_and_bone","fire_and_Blood","the_sea_and_civilisation",
                      "stalins_englishman","magna_carta","night_walking","napoleon_the_great"];

  // Replace with your own code
  /*
  for(var i = 0 ; i < bookTitles.length ; i++){
    console.log("book [" + i + "] : " + bookTitles[i] + '\n' )
  }
*/

//2.2-----------------------------------------------------------
//2.3-----------------------------------------------------------





function addList(){

  var fieldset = document.createElement('fieldset');
  fieldset.setAttribute('class','booksArray');


  var legend=document.createElement('legend'); 
  legend.innerHTML = 'Book IDs';  
  fieldset.appendChild(legend);

  
  let ul = document.createElement('ul');
  fieldset.appendChild(ul);



  for (var i=0; i<bookTitles.length; i++){

    var li=document.createElement('li');

    li.innerHTML = bookTitles[i];

    ul.append(li);

  }
  document.body.append(fieldset);
};


//2.4-----------------------------------------------------------

const bookInfo = {
  "harry_potter_chamber_of_secrets" : {
    'title': 'Harry Potter and the Chamber of Secrets',
    'language' : 'English',
    'author' : 'Chris Columbus',
    'date_of_publication' : 2002

  },

  "the_grace_of_kings" : {
    'title': 'The Grace of Kings',
    'language' : 'Chinese',
    'author' : 'Ken Liu',
    'date_of_publication' : 2015
  },

  "game_of_thrones" : {
    'title': 'A Game of Thrones ',
    'language' : 'English',
    'author' : 'George Martin',
    'date_of_publication' : 1996
  },

  "children_of_blood_and_bone" : {
    'title': 'Children of Blood and Bone',
    'language' : 'English',
    'author' : 'Tomi Adeyemi',
    'date_of_publication' : 2018
  },

  "fire_and_Blood" : {
    'title': 'Fire and Blood',
    'language' : 'English',
    'author' : 'George Martin',
    'date_of_publication' : 2018
  },

  "the_sea_and_civilisation" : {
    'title': 'The Sea and Civilization: A Maritime History of the World',
    'language' : 'English',
    'author' : 'Lincoln Paine',
    'date_of_publication' : 2013
  },

  "stalins_englishman" : {
    'title': "Stalin's Englishman: The Lives of Guy Burgess",
    'language' : 'English',
    'author' : 'Andrew Lownie',
    'date_of_publication' : 2015
  },

  "magna_carta" : {
    'title': 'Magna Carta',
    'language' : 'English',
    'author' : 'John King of England & Stephen Langton',
    'date_of_publication' : 1215
  },

  "night_walking" : {
    'title': 'Nightwalking: A Nocturnal ',
    'language' : 'English',
    'author' : 'Matthew Beaumont',
    'date_of_publication' : 2015
  },

  "napoleon_the_great" : {
    'title': 'Napoleon the Great',
    'language' : 'English',
    'author' : 'Andrew Roberts',
    'date_of_publication' : 2015
  }

};





//2.5   &   2.7   -----------------------------------------------------------


function addObject(){


  var fieldset = document.createElement('fieldset');
  fieldset.setAttribute('class','booksObject');


  var legend=document.createElement('legend'); 
  legend.innerHTML = 'All book information';  
  fieldset.appendChild(legend);


  for (var i=0; i<bookTitles.length; i++){


    var div=document.createElement('div');
    

    var h4=document.createElement('h4');
    h4.innerHTML = 'This is the ID of book number ' + i + ' : '+ bookTitles[i];
    div.appendChild(h4);


    
    var bookImage = document.createElement('img');
    bookImage.src = 'img/'+ bookTitles[i] + '.jpg';
    bookImage.setAttribute('alt',bookTitles[i]);
    div.append(bookImage);
    


    let ul = document.createElement('ul');
    div.appendChild(ul);

  
  
    var li1=document.createElement('li');
  
    li1.innerHTML = 'Title : ' + bookInfo[bookTitles[i]].title;
  
    ul.append(li1);
  
  
  
  
    var li2=document.createElement('li');
  
    li2.innerHTML = 'Language : ' +  bookInfo[bookTitles[i]].language;
  
    ul.append(li2);
  
  
  
    var li3=document.createElement('li');
  
    li3.innerHTML = 'Author : ' +  bookInfo[bookTitles[i]].author;
  
    ul.append(li3);
  
  
  
    var li4=document.createElement('li');
  
    li4.innerHTML = 'Date Of Publication : ' +  bookInfo[bookTitles[i]].date_of_publication;
  
    ul.append(li4);
    fieldset.appendChild(div);  
  }

  
  document.body.append(fieldset);
};


  //2.6-----------------------------------------------------------

  //style.css