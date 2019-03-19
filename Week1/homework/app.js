'use strict';

{
  const myLast10Books = ['Last 10 book titles I have read'];
  const idsOfBook = [
    'towards_the_lost_paradise',
    'light',
    'bizim_firavun',
    'hayatin_icinden',
    'kalbimin_efendisi',
    'mesel_denizi',
    'the_gulen_movement',
    'sjip_en_janneke',
    'bahar_nesidesi',
    'sozler',
  ];

  const detailsOfBook = [
    {
      id: 'towards_the_lost_paradise',
      title: 'Towards The Lost Paradise',
      language: 'English',
      author: 'M. F. Gulen',
    },
    { id: 'lemalar', title: 'Lemalar', language: 'Turkish', author: 'B. Said Nursi' },
    { id: 'bizim_firavun', title: 'Bizim Firavun', language: 'Turkish', author: 'Resit Haylamaz' },
    {
      id: 'hayatin_icinden',
      title: 'Hayatin Icinden',
      language: 'Turkish',
      author: 'Cuneyt Suavi',
    },
    {
      id: 'kalbimin_efendisi',
      title: 'Kalbimin Efendisi',
      language: 'Turkish',
      author: 'Salih Suruc',
    },
    { id: 'mesel_denizi', title: 'Mesel Denizi', language: 'Turkish', author: 'Mehmet Akar' },
    {
      id: 'the_gulen_movement',
      title: 'The Gulen Movement',
      language: 'English',
      author: 'Muhammet Cetin',
    },
    {
      id: 'jip_en_janneke',
      title: 'Jip en Janneke',
      language: 'Dutch',
      author: 'Annie M. G. Schmidt',
    },
    { id: 'bahar_nesidesi', title: 'Bahar Nesidesi', language: 'Turkish', author: 'M. F. Gulen' },
    { id: 'sozler', title: 'Sozler', language: 'Turkish', author: 'B. Said Nursi' },
  ];

  const imagesOfBook = [
    { towards_to_lost_paradise: './img/towards_to_lost_paradise.jpg' },
    { light: './img/light.jpg' },
    { bizim_firavun: './img/bizim_firavun.jpg' },
    { hayatin_icinden: './img/hayatin_icinden.jpg' },
    { kalbimin_efendisi: './img/kalbimin_efendisi.jpg' },
    { mesel_denizi: './img/mesel_denizi.jpg' },
    { the_gulen_movement: './img/the_gulen_movement.jpg' },
    { jip_en_janneke: './img/jip_en_janneke.jpg' },
    { bahar_nesidesi: './img/bahar_nesidesi.jpg' },
    { sozler: './img/sozler.jpg' },
  ];

  const altImage = [
    { towards_to_lost_paradise: 'book cover for towards_to_lost_paradise' },
    { light: 'book cover for light' },
    { bizim_firavun: 'book cover for bizim_firavun' },
    { hayatin_icinden: 'book cover for hayatin_icinden' },
    { kalbimin_efendisi: 'book cover for kalbimin_efendisi' },
    { mesel_denizi: 'book cover for mesel_denizi' },
    { the_gulen_movement: 'book cover for the_gulen_movement' },
    { jip_en_janneke: 'book cover for jip_en_janneke' },
    { bahar_nesidesi: 'book cover for bahar_nesidesi' },
    { sozler: 'sozler' },
  ];
  console.log(myLast10Books);
  console.log(
    idsOfBook +
      'This is for debugging and making sure everything is in order. Delete it later when you are done :',
  );
  console.log(detailsOfBook);

  // 1.3
  // function render(ul) {
  //   for (let i = 0; i < titlesOfBook.length; i++) {
  //     const listOfIds = idsOfBook[i];
  //     const li = document.createElement('li');
  //     ul.appendChild(li);
  //     li.textContent = listOfIds;
  //     li.className = 'listOfIds';
  //   }
  // }

  // 1.5
  function render(ul) {
    for (let i = 0; i < detailsOfBook.length; i++) {
      const listOfBooks = detailsOfBook[i].title;
      const listOfAuthors = detailsOfBook[i].author;
      const listOfLanguage = detailsOfBook[i].language;
      const bookImage = Object.values(imagesOfBook[i]);
      const listAltImage = Object.values(altImage[i]);

      const li = document.createElement('li');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const img = document.createElement('img');

      li.textContent = listOfBooks;
      h2.textContent = listOfAuthors;
      p.textContent = listOfLanguage;
      img.src = bookImage;
      img.alt = listAltImage;

      ul.appendChild(li);
      li.appendChild(h2);
      h2.appendChild(p);
      p.appendChild(img);

      li.className = 'listOfBooks';
      h2.className = 'listOfAuthors';
      p.className = 'listOfLanguage';
      img.className = 'bookImage';
    }
  }

  function main() {
    const instruction = document.getElementById('instruction');
    const h1 = document.createElement('h1');
    h1.innerText = 'Last 10 book titles I have read.';
    // h1.innerText = 'Open the Chrome Developer Tools and inspect the console.';
    instruction.appendChild(h1);

    const ul = document.createElement('ul');
    instruction.appendChild(ul);
    render(ul);
  }

  window.addEventListener('load', main);
}
