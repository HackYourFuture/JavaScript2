'use strict';
{
const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets', 'the_wind_in_the_willows', 'lord_of_the_files',
     'the_old_man_and_the_sea','anilmal_farm', 'tuesdays_with_morrie', 'high_fidelity',
      'the_giver', 'fantastic_mr_fox', 'the_secret_history'
];
let bookInformation = {
  harry_potter_chamber_secrets :{ title : 'Harry potter chamber secrets', language :'English', author : 'J. K. Rowling'},
  the_wind_in_the_willows :{ title : 'The wind in the willows', language :'English', author : 'Kenneth Grahame'},
  lord_of_the_files :{ title : 'Lord of the files', language :'English', author : 'William Golding'},
  the_old_man_and_the_sea :{ title : 'The old man and the sea', language :'English', author : 'Ernest Hemingway'},
  anilmal_farm :{ title : 'Anilmal farm', language :'English', author : 'George Orwell'},
  tuesdays_with_morrie :{ title : 'Tuesdays with morrie', language :'English', author : 'Mitch Albom'},
  high_fidelity :{ title : 'High fidelity', language :'English', author : 'Nick Hornby'},
  the_giver :{ title : 'The giver', language :'English', author : 'Lois Lowry'},
  fantastic_mr_fox :{ title : 'Fantastic Mr.fox', language :'English', author : 'Roald Dahl'},
  the_secret_history :{ title : 'The secret history', language :'English', author : 'Donna Tartt'},
};
//console.log(bookInformation);
  // Replace with your own code
function addBooks () { 
let test=document.createElement('section');
document.body.appendChild(test);
let ul=document.createElement('ul');
test.appendChild(ul);
for (let i=0; i<bookTitles.length; i++){
    let li=document.createElement('li');
    li.setAttribute("id", bookTitles[i]);
    ul.appendChild(li);
    //li.innerHTML= bookTitles[i]; For the ex 2.3 in homework
    let h1=document.createElement('h1');
    li.appendChild(h1);
    h1.innerHTML= (Object.values(bookInformation)[i]).title;
    let p1=document.createElement('p');
    li.appendChild(p1);
    p1.innerHTML=('Language  :  ' + (Object.values(bookInformation)[i]).language);
    let p2=document.createElement('p');
    li.appendChild(p2);
    p2.innerHTML=('Author  :  ' + (Object.values(bookInformation)[i]).author);

}
console.log(test);
}
addBooks();
}
