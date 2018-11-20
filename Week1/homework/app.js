'use strict';
{
 

  const bookTitles = [

    'life_of_faith',
    'the_sign_and_seal',
    'the_book_of_genesius',
    'the_book_of_reveletion',
    'how_to_relate_with_children',
    'what_is_man',
    'even_the_stones_are_burning',
    'life_of_hope',
    'computer_architecture_and_organization',
    'maximize_your_social_media'
  ];


  const booksInfo = {
    'life_of_faith': {
      title: 'Life of faith',
      language: 'English',
      author: 'Pop Sheonoda'
    },
    'the_sign_and_seal': {
      title: 'The sign and seal',
      language: 'English',
      author: 'Graham Hancock'
    },
    'the_book_of_genesius': {
      title: 'The book of Genesius',
      language: 'Tigrigna',
      author: 'prophet Moses'
    },
    'the_book_of_reveletion': {
      title: 'The book of Reveletion',
      language: 'Geez',
      author: 'St.John'
    },
    'how_to_relate_with_children': {
      title: 'How to relate with children',
      language: 'English',
      author: 'Pop Sheonoda'
    },
    'what_is_man': {
      title: 'What is man',
      language: 'English',
      author: 'Pop Sheonoda'
    },
    'even_the_stones_are_burning': {
      title: 'Even the stones are burning',
      language: 'English',
      author: 'Roy Patheman'
    },
    'life_of_hope': {
      title: 'Life of hope',
      language: 'English',
      author: 'Pop Sheonoda'
    },
    'computer_architecture_and_organization': {
      title: 'Computer architecture and organization',
      language: 'English',
      author: 'Kanj Sharma'
    },
    'maximize_your_social_media': {
      title: 'Maximize your social media',
      language: 'English',
      author: 'Neal Sheffar'
    }

  }

  const bookCover = {
    life_of_faith: 'image/life_of_faith.jpg',
    the_sign_and_seal: 'image/the_sign_and_the_seal.jpg',
    the_book_of_genesius: 'image/genesius.jpg',
    the_book_of_reveletion: 'image/revelation.jpg',
    how_to_relate_with_children: 'image/how_to_relate_with_children.jpg',
    what_is_man: 'image/what_is_man.jpg',
    even_the_stones_are_burning: 'image/even_the_stones_are_burning.jpg',
    life_of_hope: 'image/life_of_hope.jpg',
    computer_architecture_and_organization: 'image/computer_architecture_and_organization.jpg',
    maximize_your_social_media: 'image/maximize_your_social_media.jpg'

  };



  function renderBookInfo() {

    for (let key of bookTitles) {

      let booksContainer = document.createElement('div');
      document.body.appendChild(booksContainer);
      let h2 = document.createElement('h2');
      h2.innerHTML = booksInfo[key].title;
      booksContainer.appendChild(h2);

      let p = document.createElement('p');
      p.innerHTML = 'Language: ' + booksInfo[key].language;
      booksContainer.appendChild(p);

      p = document.createElement('p');
      p.innerHTML = 'Author: ' + booksInfo[key].author;
      booksContainer.appendChild(p);
      
      let imageLink = bookCover[key];
      let img = document.createElement('img');
      img.setAttribute('src', imageLink);
      img.setAttribute("height", '680');
      img.setAttribute("width", '600');
      img.setAttribute("alt", key);
      booksContainer.appendChild(img);

    }
  }

function main(){

  
  let h1 = document.createElement('h1');
  h1.innerText = 'The Basic Info of the 10 books I have read';
  document.body.appendChild(h1);
 renderBookInfo();
}

  
  window.addEventListener('load', main);   
}

