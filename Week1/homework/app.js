'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'the_great_gatsby',
    'to_kill_a_mockingbird', 
    'harry_potter_and_the_sorcerers_stone', 
    '1984', 
    'the_catcher_in_the_rye', 
    'the_hobbit', 
    'fahrenheit_451', 
    'pride_and_prejudice', 
    'brave_new_world', 
    'a_wrinkle_in_time', 
  ];

  
  var listContainer = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(listContainer);

  var booklist = document.createElement('ul');

  
  var itemCount = bookTitles.length;
  for (var i = 0; i < itemCount; ++i) {
    var listItem = document.createElement('li');
    listItem.innerText = bookTitles[i];
    booklist.appendchild(listItem);
  }
 listContainer.appendChild(booklist);  

}
