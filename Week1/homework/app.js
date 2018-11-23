'use strict';

const bookTitles = [
  // Q2.1 Replace with your own book titles
  'fundamentals_islam', 'women_quran', 'pillars_islam', 'science_islam', 'garbage_king',
  'storytellers_beads', 'saba', 'faraway_home', 'cutting_stone', 'cry_giraffe'
];
function newH() {
  const createH1 = document.createElement('h1');
  createH1.id = 'heading_1';
  document.getElementsByTagName('body')[0].appendChild(createH1);
  createH1.innerHTML = "My book list";
}
newH();

//Q2.2  Replace with your own code
/*
for (let i = 0; i < bookTitles.length; i++) {
     console.log(bookTitles[i]);
}
*/

//Q2.3
/*
  function bookTitelList() {
      let listContainer = document.createElement('div');
      document.getElementsByTagName('body')[0].appendChild(listContainer);
      let listElement = document.createElement('ul');
      listContainer.appendChild(listElement);
 
    for (let i = 0; i < bookTitles.length; i++) {
       let listItem = document.createElement('li');
       listItem.innerHTML = bookTitles[i];
       listElement.appendChild(listItem);
    }
  }
  bookTitelList();
*/

//Q2.4

let bookInfo = {
  fundamentals_islam: { title: "Fundamentals of Islam", lang: "English", author: "Abul Maududi" },
  women_quran: { title: "Women in the quran", lang: "English", author: "Asma Lamrabet" },
  pillars_islam: { title: "Pillars of Islam", lang: "English", author: "Frances Gumley" },
  science_islam: { title: "Science and Islam", lang: "English", author: "Ehsan Masood" },
  garbage_king: { title: "The Garbage King", lang: "English", author: "Elizabeth Laird" },
  storytellers_beads: { title: "The Storytellers Beads", lang: "English", author: "Jane Kurtz" },
  faraway_home: { title: "Faraway home", lang: "English", author: "Jane Kurtz" },
  saba: { title: "Saba under the Hyena's Foot", lang: "English", author: "Jane Kurtz" },
  cutting_stone: { title: "Cutting for Stone", lang: "English", author: "Abraham verghese" },
  cry_giraffe: { title: "Cry of the Giraffe", lang: "English", author: "Judie Oron" },
}

//Q2.5 

function bookInfoList() {
  let bookListContainer = document.createElement('div');
  bookListContainer.id = 'listBox'
  document.getElementsByTagName('body')[0].appendChild(bookListContainer);

  let bookUl = document.createElement('ul');
  bookUl.id = 'lsit_book'
  bookListContainer.appendChild(bookUl);

  for (let book in bookInfo) {
    if (bookInfo.hasOwnProperty(book)) {
      let bookItem = document.createElement('li');
      bookItem.id = book;
      let list = bookInfo[book];
      bookItem.innerHTML = list.title + ' written in ' + list.lang + ' by ' + list.author + '.';
      bookUl.appendChild(bookItem);
    }
  }
}
bookInfoList();

//Q2.7 
const bookCover = {
  fundamentals_islam: 'fundamental_islam.jpg', women_quran: 'women_quran.jpg',
  pillars_islam: 'pillar_islam.jpg', science_islam: 'science_islam.jpg',
  garbage_king: 'garbage_king.jpg', storytellers_beads: 'storytellers_beads.jpg',
  saba: 'saba.jpg', faraway_home: 'faraway_home.jpg', cutting_stone: 'cutting_stone.jpg',
  cry_giraffe: 'cry_giraffe.jpg'
}


const liId = Object.keys(bookCover);
//console.log(liId);

function imageList() {
  let imgContainer = document.createElement('div');
  imgContainer.id = 'imgBox';
  let imageElement = document.createElement('ul');
  imageElement.id = 'imgUl';
  imgContainer.appendChild(imageElement);
  document.body.appendChild(imgContainer);

  for (let image in bookCover) {
    if (bookCover.hasOwnProperty(image)) {
      let imgList = document.createElement('li');
      imageElement.appendChild(imgList);
      let listElement = new Image(200, 250);
      listElement.src = bookCover[image];
      listElement.innerHTML = image;
      imgList.appendChild(listElement);
    }
  }
}
imageList();
