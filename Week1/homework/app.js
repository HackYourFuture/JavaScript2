'use strict';

{
  const bookTitles = [
    'harry_potter_chamber_secrets',
    'the_alchemist',
    'the_silver_sword',
    'the_pharaoh',
    'the_silky_roads',
    'narnia',
    'the_road_to_isphahan',
    'the_physician',
    'the_count_of_monte_cristo',
    'big_dreams'
  ]
  //console.log(bookTitles);
  const detailsOfBooks = {
    harry_potter_chamber_secrets: { title: 'Harry Potter, Chamber of Secrets', language: 'English', author: 'Rowling' },
    the_alchemist: { title: 'The Alchemist', language: 'Farsi', author: 'Coelho' },
    the_silver_sword: { title: 'The silver sword', language: 'Farsi', author: 'Ian Serraillier' },
    the_pharaoh: { title: 'The Pharaoh', language: 'Farsi', author: 'Jackie French' },
    the_silky_roads: { title: 'The silk roads', language: 'English', author: 'unknown' },
    narnia: { title: 'Narnia', language: 'Farsi', author: 'Lewis' },
    the_road_to_isphahan: { title: 'The road to Isphahan', language: 'Farsi', author: 'Sinoue' },
    the_physician: { title: 'The physician', language: 'Farsi', author: 'Gordon' },
    the_count_of_monte_cristo: { title: 'The Count Of Monte Cristo', language: 'Farsi', author: 'Dumas' },
    big_dreams: { title: 'Great Expectations', language: 'English', author: 'unknown' },
  }

  const bookImages = {
    harry_potter_chamber_secrets : 'https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg' ,
    the_alchemist : 'https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg' ,
    the_silver_sword : 'https://upload.wikimedia.org/wikipedia/en/2/2f/The_Silver_Sword_cover.jpg' ,
    the_pharaoh : 'https://images.gr-assets.com/books/1336828750l/7116443.jpg' ,
    the_silky_roads : 'https://upload.wikimedia.org/wikipedia/en/d/d8/The_cover_of_the_silk_roads_book.jpg' ,
    narnia : 'https://upload.wikimedia.org/wikipedia/en/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg' ,
    the_road_to_isphahan : 'https://shelffee.com/wp-content/uploads/2018/04/180317055643057.jpg' ,
    the_physician : 'https://images.gr-assets.com/books/1389582565l/4692.jpg' ,
    the_count_of_monte_cristo : 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis_Français-Dantès_sur_son_rocher.jpg' ,
    big_dreams : 'https://books.google.nl/books/content?id=bfRBBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71m6QWEZlhJT1kg-RYWdY3CdChKyXRApuNKaorVSZqvFlT7YewhWsBuQRTjfa3Z1fX0HTvtWuXuSJ968jX1kaV2e6wVCmaQ3SCSY4IZ7T_JY76hZN8cF8jbNjcFcwA32LMRbLh3' ,
  }

  function bookList() {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < bookTitles.length; i++) {
      const bookTitle = bookTitles[i];
      let li = document.createElement('li');
      li.setAttribute("id", bookTitles[i]);
      ul.appendChild(li);
      //li.innerHTML = bookTitle;
      //li.innerHTML = bookTitle[i];
      li.className = 'books';

      const h1 = document.createElement('h1');
      li.appendChild(h1);
      h1.innerHTML = (Object.values(detailsOfBooks)[i]).title;

      let p1 = document.createElement('p');
      li.appendChild(p1);
      p1.innerHTML = ('Language: ' + (Object.values(detailsOfBooks)[i]).language);

      let p2 = document.createElement('p');
      li.appendChild(p2);
      p2.innerHTML = ('It is written by:  ' + (Object.values(detailsOfBooks)[i]).author);

      let bookCovers = document.createElement('img');
      li.appendChild(bookCovers);
      li.setAttribute('id', Object.keys(bookImages)[i]);
      bookCovers.setAttribute('src', Object.values(bookImages)[i]);
      bookCovers.setAttribute('alt', Object.values(detailsOfBooks)[i].title);

    }
    console.log(ul);
  }
  bookList();
}
