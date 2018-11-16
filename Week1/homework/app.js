'use strict';
{
  const bookTitles = [
    { 'title': 'Becoming', 'language': 'English', 'author': 'Michelle Obama' },
    { 'title': 'Those Who Knew', 'language': 'English', 'author': 'Scott Belsky' },
    { 'title': 'Good and Mad', 'language': 'English', 'author': 'Rebecca Traister' },
    { 'title': 'The Messy Middle', 'language': 'English', 'author': 'Scott Belsky' },
    { 'title': 'Lake Success', 'language': 'English', 'author': 'Gary Shteyngart' },
    { 'title': 'Fashion Climbing', 'language': 'English', 'author': 'Bill Cunningham' },
    { 'title': 'Crudo', 'language': 'English', 'author': 'Olivia Laing' },
    { 'title': 'Winners Take All', 'language': 'English', 'author': 'Anand Giridharadas' },
    { 'title': 'French Exit', 'language': 'English', 'author': 'Patrick deWitt' },
    { 'title': 'How To Be Famous', 'language': 'English', 'author': 'Caitlin Moran' }
  ];

  function makeList() {
    let b1 = document.createElement('list');
    document.body.appendChild(b1);

    let ul = document.createElement('ul');
    b1.appendChild(ul);

    for (let i = 0; i < bookTitles.length; i++) {

      let li = document.createElement('li');
      li.setAttribute("id", "book" + [i]);
      li.setAttribute("class", "images");
      ul.appendChild(li);

      let div = document.createElement('div');
      li.appendChild(div);
      div.setAttribute('id', 'cover');
      div.style.width = "250px";
      div.style.height = "350px";


      let h1 = document.createElement('h1');
      li.appendChild(h1);
      h1.innerHTML = (Object.values(bookTitles)[i]).title;

      let p1 = document.createElement('p');
      li.appendChild(p1);
      p1.innerHTML = ('Language: ' + (Object.values(bookTitles)[i]).language);

      let p2 = document.createElement('p');
      li.appendChild(p2);
      p2.innerHTML = ('Author: ' + (Object.values(bookTitles)[i]).author);
    }
  }
  makeList();
} 5