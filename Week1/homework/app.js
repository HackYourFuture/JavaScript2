'use strict';
{
  ///2.1
  const bookTitles  = [
    'harry_potter_chamber_secrets',
    'the_Hunger_Games',
    'to_kill_a_mockingbird',
    'Twilight',
    'The_Book_Thief',
    'Crime_and_Punishment',
    'The_Princess_Bride',
    'game_of_thrones',
    'Brave_New_World',
    'The_Outsiders'
  ];

  ///2.3
  function genBookList(ul) {
    for(let i = 0 ; i < bookTitles .length; i++){
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = bookTitles[i] ;
    }
  }

  function main() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'My books';
    root.appendChild(h1);
    const ul = document.createElement('ul');
    root.appendChild(ul);
    genBookList(ul);
  }

  window.addEventListener('load', main);


  ///2.4
  const bookInfo = {
    'harry_potter_chamber_secrets':{title:'harry potter chamber secrets',language:'english',author:'zzz'},
    'the_Hunger_Games':{title:'the Hunger Games',language:'english',author:'zzz'},
    'to_kill_a_mockingbird':{title:'to kill a mockingbird',language:'english',author:'zzz'},
    'Twilight':{title:'Twilight',language:'english',author:'zzz'},
    'The_Book_Thief':{title:'The Book Thief',language:'english',author:'zzz'},
    'Crime_and_Punishment':{title:'Crime and Punishment',language:'english',author:'zzz'},
    'The_Princess_Bride':{title:'The Princess Bride',language:'english',author:'zzz'},
    'game_of_thrones':{title:'game of thrones',language:'english',author:'zzz'},
    'Brave_New_World':{title:'Brave New World',language:'english',author:'zzz'},
    'The_Outsiders':{title:'The Outsiders',language:'english',author:'zzz'}
  };

  ///2.5
  function genBookInfo(){
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'My books details';
    root.appendChild(h1);
    const ul = document.createElement('ul');
    root.appendChild(ul);
    const opjectsIndex = Object.keys(bookInfo);
    for(let i = 0; i < opjectsIndex.length; i++){
      const pickOpject = opjectsIndex[i];
      const li = document.createElement('li');
      ul.appendChild(li);
      const h2 = document.createElement('h2');
      li.appendChild(h2);
      const lang = document.createElement('p');
      li.appendChild(lang);
      const authorName = document.createElement('p');
      li.appendChild(authorName);
      h2.innerText = bookInfo[pickOpject].title;
      lang.innerText = bookInfo[pickOpject].language;
      authorName.innerText = bookInfo[pickOpject].author;
    }
    
  }
  genBookInfo();

  ///2.7
  const bookimg = {
    harry_potter_chamber_secrets: './img/harry_potter_chamber_secrets.jpg',
    the_Hunger_Games: './img/the_Hunger_Games.jpg',
    to_kill_a_mockingbird: './img/to_kill_a_mockingbird.jpg',
    Twilight: './img/Twilight.jpg',
    The_Book_Thief: './img/The_Book_Thief.jpg',
    Crime_and_Punishment: './img/Crime_and_Punishment.jpg',
    The_Princess_Bride: './img/The_Princess_Bride.jpg',
    game_of_thrones: './img/game_of_thrones.jpg',
    Brave_New_World: './img/Brave_New_World.jpg',
    The_Outsiders: './img/The_Outsiders.jpg'
  };
  
  function genBookImg(){
      const root = document.getElementById('root');
      const h1 = document.createElement('h1');
      h1.innerText = 'My books details & covers';
      root.appendChild(h1);
      const ul = document.createElement('ul');
      root.appendChild(ul);
      const opjectsIndex = Object.keys(bookInfo);
      for(let i = 0; i < opjectsIndex.length; i++){
        const pickOpject = opjectsIndex[i];
        const li = document.createElement('li');
        ul.appendChild(li);
        const h2 = document.createElement('h2');
        li.appendChild(h2);
        const lang = document.createElement('p');
        li.appendChild(lang);
        const authorName = document.createElement('p');
        li.appendChild(authorName);
        h2.innerText = bookInfo[pickOpject].title;
        lang.innerText = bookInfo[pickOpject].language;
        authorName.innerText = bookInfo[pickOpject].author;
          const setImg = Object.values(bookimg);
          const images = document.createElement('img');
          images.setAttribute("src" , setImg[i]);
          ul.appendChild(images);   
  }
}
 genBookImg();

}
