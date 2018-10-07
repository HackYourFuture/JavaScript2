'use strict';
{
  const bookIDs = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'the_ragged_edge_of_night',
    'a_case_of_need',
    'the_ocean_liner',
    'what_I_have_done',
    'dirty_headlines',
    'the_storyteller_s_secret',
    'origin',
    'harry_potter_and_the_sorcerer_s_stone',
    'her_cherry',
    'worth_the_wait'
  ];
  class BookInfo {
    constructor(id, title, language, author, imgSrc) {
      this.id = id;
      this.title = title;
      this.language = language;
      this.author = author;
      this.src = imgSrc;
    }
  }
  const booksInfo = {
    harry_potter_chamber_secrets: { title: 'Harry Potter Chamber Secrets', language: 'Engels', author: 'J. K. Rowling' },
    the_ragged_edge_of_night: { title: 'The Ragged Edge of Night', language: 'Engels', author: 'Olivia Hawker' },
    a_case_of_need: { title: 'A Case of Need', language: 'Engels', author: ' Michael Crichton' },
    the_ocean_liner: { title: 'The Ocean Liner', language: 'Engels', author: 'Marius Gabriel' },
    what_I_have_done: { title: 'What I\'ve Done', language: 'Engels', author: 'Melinda Leigh' },
    dirty_headlines: { title: 'Dirty Headlines', language: 'Engels', author: 'L J Shen' },
    the_storyteller_s_secret: { title: 'The Storyteller\'s Secret', language: 'Engels', author: 'Jini S' },
    origin: { title: 'Origin', language: 'Engels', author: 'Dan Brown' },
    harry_potter_and_the_sorcerer_s_stone: { title: 'Harry Potter And The Sorcerer\'s Stone', language: 'Engels', author: 'J.K.Rowling' },
    her_cherry: { title: 'Her Cherry', language: 'Engels', author: 'Penelope Bloom' },
    worth_the_wait: { title: 'Worth The Wait', language: 'Engels', author: 'Claudia Connor' }
  };

  function render(container) {
    const ulElem = document.createElement('ul');

    for (let book of bookIDs) {

      const liElem = document.createElement('li');
      const p1 = document.createElement('p')
      p1.innerText = booksInfo[book].title;
      liElem.appendChild(p1);
      ulElem.appendChild(liElem);

      //inner Information
      const ul_detail = document.createElement('ul');
      ul_detail.setAttribute("id", book);

      const li_language = document.createElement('li');
      const p_language = document.createElement('p');
      p_language.innerText = booksInfo[book].language;
      li_language.appendChild(p_language);
      ul_detail.appendChild(li_language);

      const li_author = document.createElement('li');
      const p_author = document.createElement('p');
      p_author.innerText = booksInfo[book].author;
      li_author.appendChild(p_author);
      ul_detail.appendChild(li_author);

      ulElem.appendChild(ul_detail);

    }
    return container.appendChild(ulElem);
  }
  const imgInfo = {
    harry_potter_chamber_secrets: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61S%2Bdv-DgIL._AC_UL160_.jpg' },
    the_ragged_edge_of_night: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/916epYlsgUL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg' },
    a_case_of_need: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51eq3q%2BPFWL._SX303_BO1,204,203,200_.jpg' },
    the_ocean_liner: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41lvz1GJKuL._SX331_BO1,204,203,200_.jpg' },
    what_I_have_done: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51ip6aYwZwL.jpg' },
    dirty_headlines: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41m8diPiujL._SX331_BO1,204,203,200_.jpg' },
    the_storyteller_s_secret: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51GC3g1SSXL._SX331_BO1,204,203,200_.jpg' },
    origin: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51Z0WWdD7CL._SY498_BO1,204,203,200_.jpg' },
    harry_potter_and_the_sorcerer_s_stone: { imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' },
    her_cherry: { title: 'Her Cherry', language: 'Engels', author: 'Penelope Bloom', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/31xusWau6zL.jpg' },
    worth_the_wait: { title: 'Worth The Wait', language: 'Engels', author: 'Claudia Connor', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51oBN8F0X0L.jpg' }
  }
  /*function render2(container) {

    const ul = document.createElement('ul');
    for (let i = 0; i < bookIDs.length; i++) {

      const bookID = bookIDs[i];

      const li = document.createElement('li');
      const p = document.createElement('p')
      p.innerText = booksInfo[bookID].title;
      li.appendChild(p);
      ul.appendChild(li);

      //inner Information
      const ul_detail = document.createElement('ul');

      const li_language = document.createElement('li');
      const p_language = document.createElement('p');
      p_language.innerText = booksInfo[bookID].language;
      li_language.appendChild(p_language);
      ul_detail.appendChild(li_language);

      const li_author = document.createElement('li');
      const p_author = document.createElement('p');
      p_author.innerText = booksInfo[bookID].author;
      li_author.appendChild(p_author);
      ul_detail.appendChild(li_author);

      const li_image = document.createElement('li');
      const imgElement = document.createElement('img');
      imgElement.setAttribute("src", imgInfo[bookID].imgSrc);
      imgElement.setAttribute("width", "120");
      li_image.appendChild(imgElement);
      ul_detail.appendChild(li_image);

      ul.appendChild(ul_detail);

    }
    return container.appendChild(ul);
  }*/
  function render3() {
    for (let i = 0; i < bookIDs.length; i++) {
      let bookID = bookIDs[i];
      console.log(imgInfo[bookID].imgSrc);
      const ulElement = document.getElementById(bookID);

      const li_image = document.createElement('li');
      const imgElem = document.createElement('img');
      imgElem.setAttribute("src", imgInfo[bookID].imgSrc);
      imgElem.setAttribute("width", "120");
      li_image.appendChild(imgElem);//document.createTextNode

      ulElement.appendChild(li_image);

    }

  }

  function main() {
    const root = document.getElementById('bookList');
    const h1 = document.createElement('h1');
    h1.innerText = 'Best Seller';
    root.appendChild(h1);
    render(root);
    //render2(root);
    render3();

  }

  window.addEventListener('load', main);
}
