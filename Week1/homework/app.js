'use strict';

// 1.1 & 1.2 Display array of book titles
{

  let booktitle = [
    'The_History_of_Tom_Jones',
    'Pride_and_Prejudice',
    'Le_Rouge_et_le_Noir',
    'Le_Père_Goriot',
    'David_Copperfield',
    'Madame_Bovary',
    'Moby_Dick',
    'Wuthering_Heights',
    'The_Brothers_Karamazov',
    'War_and_Peace'
  ];
  // console.log(booktitle);
  // document.write(booktitle);
  // 1.3 Function calling that generate list of book ids
  const rootDiv = document.getElementById('root');
  function generateList(arr) {
    let list = document.createElement('ul');
    rootDiv.appendChild(list);
    for (let i = 0; i < arr.length; i++) {
      let listItems = document.createElement('li');
      listItems.setAttribute('id', arr[i]);
      listItems.innerText = arr[i];
      list.appendChild(listItems);
      // console.log(listItems);
      // document.write(listItems);
    }
  }
  // generateList(booktitle);
  // 1.4 Store the book information in object form
  let bookDetails = {
    The_History_of_Tom_Jones: {
      title: 'The History of Tom Jones',
      author: 'Henry Fielding',
      language: 'English'
    },
    Pride_and_Prejudice: {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      language: 'English'
    },
    Le_Rouge_et_le_Noir: {
      title: 'Le Rouge et le Noir',
      author: 'Stendhal',
      language: 'French'
    },
    Le_Père_Goriot: {
      title: 'Le Père Goriot',
      author: 'Honoré de Balzac',
      language: 'French'
    },
    David_Copperfield: {
      title: 'David Copperfield',
      author: 'Charles Dickens',
      language: 'English'
    },
    Madame_Bovary: {
      title: 'Madame Bovary',
      author: 'Gustave Flaubert',
      language: 'French'
    },
    Moby_Dick: {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      language: 'English'
    },
    Wuthering_Heights: {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      language: 'English'
    },
    The_Brothers_Karamazov: {
      title: 'The Brothers Karamazov',
      author: 'Dostoevsky',
      language: 'Russian'
    },
    War_and_Peace: {
      title: 'War and Peace',
      author: 'Tolstoy',
      language: 'English'
    }
  };
  // 1.5 Displaying the details of book
  function generateListModification(obj) {
    let list = document.createElement('ul');
    rootDiv.appendChild(list);

    for (let i = 0; i < Object.keys(obj).length; i++) {
      let listItem = document.createElement('li');
      listItem.setAttribute('id', Object.keys(obj)[i]);
      list.appendChild(listItem);

      let listTitle = document.createElement('h2');
      listTitle.innerText = 'Title: ' + obj[Object.keys(obj)[i]].title;
      list.appendChild(listTitle);

      let listAuthor = document.createElement('h3');
      listAuthor.innerText = 'Author: ' + obj[Object.keys(obj)[i]].author;
      list.appendChild(listAuthor);

      let listLanguage = document.createElement('h4');
      listLanguage.innerText = 'Language: ' + obj[Object.keys(obj)[i]].language;
      list.appendChild(listLanguage);
    }
  }
  generateListModification(bookDetails);
  // 1.7 Image path of every book cover
  let bookCovers = {
    The_History_of_Tom_Jones: './img/The_History_of_Tom_Jones.png',
    Pride_and_Prejudice: './img/Pride_and_Prejudice.jpg',
    Le_Rouge_et_le_Noir: './img/Le_Rouge_et_le_Noir.jpg',
    Le_Père_Goriot: './img/Le_Père_Goriot.jpg',
    David_Copperfield: './img/David_Copperfield.jpg',
    Madame_Bovary: './img/Madame_Bovary.jpg',
    Moby_Dick: './img/Moby_Dick.jpg',
    Wuthering_Heights: './img/Wuthering_Heights.jpg',
    The_Brothers_Karamazov: './img/The_Brothers_Karamazov.jpg',
    War_and_Peace: './img/War_and_Peace.jpg'
  };
  // 1.6 && 1.8 Adding source and alts placing te image in appropriate list element
  function viewImages(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      let test = document.getElementById(Object.keys(obj)[i]);
      let picture = document.createElement('img');
      picture.setAttribute('src', obj[Object.keys(obj)[i]]);
      picture.setAttribute('alt', 'books cover');
      picture.setAttribute('class', 'bookCovers');

      test.appendChild(picture);
      // console.log('Test: ' + picture);
    }
  }
  viewImages(bookCovers);
}
