'use strict'; {

  const bookTitles = [
    'gone_with_the_wind', 'the_lord_of_the_rings', 'the_other_woman', 'war_and_peace', 'song_of_solomon', 'the_fountain',
     'the_shadow_of_the_wind', 'the_golden_compass', 'catch_22', 'the_kite_runner'];
  
  const bookInfo = {
      'gone_with_the_wind': {
        'title': 'Gone with the wind',
        'language': 'English',
        'author': 'author1' 
      },
      'the_lord_of_the_rings': {
        'title': 'The Lord Of The Rings',
        'language': 'English',
        'author': 'author2'
      },
      'the_other_woman': {
        'title': 'The Other Woman',
        'language': 'English',
        'author': 'author3' 
      },
      'war_and_peace': {
        'title': 'War And Peace',
        'language': 'English',
        'author': 'author4'
      },
      'song_of_solomon': {
        'title': 'Song Of Solomon',
        'language': 'English',
        'author': 'author5' 
      },
      'the_fountain': {
        'title': 'The Fountain',
        'language': 'English',
        'author': 'author6'
      },
      'the_shadow_of_the_wind': {
        'title': 'The Shadow Of The Wind',
        'language': 'English',
        'author': 'author7'  
      },
      'the_golden_compass': {
        'title': 'The Golden Compass',
        'language': 'English',
        'author': 'author8' 
      },
      'catch_22': {
        'title': 'Catch 22',
        'language': 'English',
        'author': 'author9' 
      },
      'the_kite_runner': {
        'title': 'The Kite Runner',
        'language': 'English',
        'author': 'author10'
      }
    };
  
    const bookImages = {
      'gone_with_the_wind': 'images/0.jpg', 
      'the_lord_of_the_rings': 'images/1.jpg',
      'the_other_woman': 'images/2.jpg',
      'war_and_peace': 'images/3.jpg',
      'song_of_solomon': 'images/4.jpg',
      'the_fountain': 'images/5.jpg',
      'the_shadow_of_the_wind': 'images/6.jpg',
      'the_golden_compass': 'images/7.jpg',
      'catch_22': 'images/8.jpg',
      'the_kite_runner': 'images/9.jpg'
    };

  const list = document.createElement('section');
  document.body.appendChild(list);

  const ul = document.createElement('ul');
  ul.setAttribute('id', 'bookTitles');
  list.appendChild(ul);

  for ( const key in bookInfo) {
    const li = document.createElement('li');
    li.setAttribute('class', 'bookTitles-items');
    ul.appendChild(li);
    const h1 = document.createElement('h1');
    li.appendChild(h1);
    h1.innerHTML = bookInfo[key].title;
    const h2 = document.createElement('h2');
    li.appendChild(h2);
    h2.innerHTML = bookInfo[key].language;
    const h3 = document.createElement('h3');
    li.appendChild(h3);
    h3.innerHTML = bookInfo[key].author;
    const img = document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', bookImages[key]);
  }
}
