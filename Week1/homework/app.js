'use strict';

// 1.1
const bookTitle = [
  'lookAliveOut',
  'circe',
  'there',
  'changeMind',
  'incendiaries',
  'bloedFraude',
  'milkMan',
  'heavy',
  'theRecovering',
  'cristinHannah',
];
// 1.3//////////////removed and set in step 1.5///////////////////////
// function generate(arr) {
//   let ul = document.createElement("ul");
//   for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement("li")
//     ul.appendChild(li)
//     li.setAttribute("id", arr[i])
//   }
//   document.body.appendChild(ul)
// }
// generate(bookTitle)
// 1.4// create nested object///////////
const booksObject = {
  lookAliveOut: {
    title: 'lookAliveOut',
    pages: 120,
    author: 'author1',
    released: 2009,
    language: 'Arabic',
  },
  circe: {
    title: 'circe',
    pages: 100,
    author: 'author2',
    released: 2005,
    language: 'English',
  },
  there: {
    title: 'there',
    pages: 150,
    author: 'author3',
    released: 2005,
    language: 'Dutch',
  },
  changeMind: {
    title: 'changeMind',
    pages: 88,
    author: 'author4',
    released: 2008,
    language: 'Arabic',
  },
  incendiaries: {
    title: 'incendiaries',
    pages: 65,
    author: 'author5',
    released: 2010,
    language: 'English',
  },
  bloedFraude: {
    title: 'bloedFraude',
    pages: 188,
    author: 'author6',
    released: 2010,
    language: 'Arabic',
  },
  milkMan: {
    title: 'milkMan',
    pages: 105,
    author: 'author7',
    released: 2017,
    language: 'Dutch',
  },
  heavy: {
    title: 'heavy',
    pages: 88,
    author: 'author8',
    released: 2012,
    language: 'Arabic',
  },
  theRecovering: {
    title: 'theRecovering',
    pages: 65,
    author: 'author9',
    released: 2018,
    language: 'English',
  },
  cristinHannah: {
    title: 'cristinHannah',
    pages: 95,
    author: 'author10',
    released: 2019,
    language: 'Arabic',
  },
};

const bookSrc = {
  lookAliveOut:
    'http://t3.gstatic.com/images?q=tbn:ANd9GcSd9qk42ut0967WVXhQVa8exOndn0pHWj2EYTZ04WTcA274HGkf',
  circe:
    'http://t2.gstatic.com/images?q=tbn:ANd9GcQbzAjrxVH6ZiA_KczqrJuraqH0wNTEMt33G_Ppn-xLzc5iI-T7',
  there:
    'http://t0.gstatic.com/images?q=tbn:ANd9GcTb1YmRyJzI4UVmwdr4MRKDj6TWSKtMqTyyFoqOGYuITObg77To',
  changeMind:
    'http://t3.gstatic.com/images?q=tbn:ANd9GcRbvvRN_aCd_fJJjiINf9e1y7xW7FmXofxut8tI6Z-iXKrkwxsQ',
  incendiaries:
    'http://t0.gstatic.com/images?q=tbn:ANd9GcSgZYoEpcPleAOPQkHQgDmjvymuhpiJaMjUtD6IKLY6OcPKTBOK',
  bloedFraude: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/2/7/9/2/9200000093712972.jpg',
  milkMan:
    'http://t0.gstatic.com/images?q=tbn:ANd9GcT-7v9nlkRW3sEoK3OnqqJ7Xt-3w2GfA4iJ-xeLOZY27XGs72ae',
  heavy:
    'http://t0.gstatic.com/images?q=tbn:ANd9GcQpEDMgFCei6EmdblXzSq3N2OzzXDwFI1QtEDx5PEe7vUctq1f8',
  theRecovering:
    'http://t0.gstatic.com/images?q=tbn:ANd9GcR1_RIZ37NjjiuqBcxr9b3BsA6-vPEoMDsbwKBtXYC5AdLd9qdd',
  cristinHannah:
    'http://t1.gstatic.com/images?q=tbn:ANd9GcQNeuab6cglxHh01N7hJ07keStQaSOcNaYIaIQumTwsFuH3whPq',
};

// ///////////////1.3   +  1.5/////////////////////////////
function generate(obj) {
  // extra code to create sound click
  const sound = new Audio();
  sound.src = 'sound/button-50.mp3';
  function music() {
    sound.play();
  }
  const ul = document.createElement('ul');
  for (let x = 0; x < bookTitle.length; x++) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const img = document.createElement('img');
    h3.onmouseover = music;
    p1.onmouseover = music;
    p2.onmouseover = music;
    p3.onmouseover = music;
    p4.onmouseover = music;
    img.onclick = function() {
      h3.classList.toggle('show');
      p1.classList.toggle('show');
      p2.classList.toggle('show');
      p3.classList.toggle('show');
      p4.classList.toggle('show');
    };
    h3.innerText = obj[bookTitle[x]].title;
    p1.innerText = obj[bookTitle[x]].pages;
    p2.innerText = obj[bookTitle[x]].author;
    p3.innerText = obj[bookTitle[x]].released;
    p4.innerText = obj[bookTitle[x]].language;
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    li.appendChild(p4);
    li.setAttribute('id', bookTitle[x]);
    img.setAttribute('src', bookSrc[bookTitle[x]]);
    console.log(bookSrc[bookTitle[x]]);
    img.setAttribute('alt', bookTitle[x]);
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
generate(booksObject);
