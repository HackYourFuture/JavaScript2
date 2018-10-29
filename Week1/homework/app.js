//book list i have read
'use strict';
  let bookTitles = [
    
    'allison graham_cart to business relationship',
    'bill vincent_apostolic breakthrough',
    'jason kro_web development',
    'shama hoque_full stack react project',
    'cody lindley_front end handbook',
    'adam smith_wealth of nations',
    'hunry potter_chamber of secretes',
    'karl marx_capital',
    'vipul sonpatki_react by example',
    'adam smith_moral sentiments',

  ];

  //
  // books changed from JSON to multiple ARRAY.
  //   be careful unique keyword=>"bookInfo" in JSON data format..
'use strict';
  let books = [
    {bookInfo :{
      title: 'cart to business relationship',
      author : 'allison graham',
      language : 'english',
    }},
    {bookInfo :{
      title: 'apostolic breakthrough',
      author : 'bill vincent',
      language : 'english',
    }},
    {bookInfo :{
      title: 'web development',
      author : 'jason kro',
      language : 'english',
    }},
    {bookInfo :{
      title: 'full stack react project',
      author : 'shama hoque',
      language : 'english',
    }},
    {bookInfo :{
      title: 'front end handbook',
      author : 'cody lindley',
      language : 'english',
    }},
    {bookInfo :{
      title: 'wealth of nations',
      author : 'adam smith',
      language : 'english',
    }},
    {bookInfo :{
      title: 'chamber of secretes',
      author : 'hunry potter',
      language : 'english',
    }},
    {bookInfo :{
      title: 'capital',
      author : 'karl marx',
      language : 'english',
    }},
    {bookInfo :{
      title: 'react by example',
      author : 'vipul sonpatki',
      language : 'english',
    }},
    {bookInfo :{
      title: 'moral sentiments',
      author : 'adam smith',
      language : 'english',
    }}
  ]
  
// adding "itemClick" event 
let temp = [];
let itemClick = (e) => {
	let id = e.target.id;
    if(temp.indexOf(id) == -1){
        temp.push(id);
    
        let title = books[id]['bookInfo']['title'];	
        let author = books[id]['bookInfo']['author'];
        let language = books[id]['bookInfo']['language'];

        let str = '<div class="card" onclick="myFunction()">';
          str += '<p>' + title + '</p>';
          str += '<img src="./pictures/'+title+'.jpg">';
          str += '<p> author: ' + author + '</p>';
          str += '<p> language: ' + language + '</p></div>';
        document.getElementById('pagecontent').innerHTML += str;
    }
}
//  getting list book's id  
bookTitles.forEach(function (bookTitle, i) {
    
    let li = document.createElement('p');
    li.setAttribute('id', i);
    li.classList.add('book');
    li.innerHTML = bookTitle;
    li.addEventListener('click', itemClick);

    document.getElementById('bookcontainer').appendChild(li);
    
  });
// obj with nested props
function myFunction() {
    document.getElementById('bookcontainer').height="400"
    
} 



