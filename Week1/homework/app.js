'use strict';

{
  // Step 1.1
  const bookTitles = [
    'to_kill_a_mockingbird',
    '1984',
    'harry_potter_and_the_philosophers_stone',
    'the_lord_of_the_rings',
    'the_great_gatsby',
    'pride_and_prejudice',
    'the_diary_of_a_young_girl',
    'the_book_thief',
    'the_hobbit',
    'little_women'
  ];

  // Step 1.3
  // function generateUlAndLiWithIds() {
  //   const ul = document.createElement('ul');
  //   for (let i = 0; i < bookTitles.length; i++) {
  //     const li = document.createElement('li');
  //     ul.appendChild(li);
  //     li.setAttribute('id', bookTitles[i]);
  //     console.log(li);
  //   }
  // }
  // console.log(generateUlAndLiWithIds());

  // Step 1.4
  const books = {
    to_kill_a_mockingbird: {
      title: 'To Kill a Mockingbird',
      language: 'English',
      author: 'Harper Lee',
      about:
        'Published in 1960, this timeless classic explores human behaviour and the collective conscience of The Deep South in the early 20th century. Humour entwines the delicate strands of prejudice, hatred, hypocrisy, love and innocence to create one of the best novels ever written.'
    },
    1984: {
      title: '1984',
      language: 'English',
      author: 'George Orwell',
      about:
        'Although 1984 has passed us by, George Orwell’s dystopian, totalitarian world of control, fear and lies has never been more relevant. Delve into the life of Winston Smith as he struggles with his developing human nature in a world where individuality, freewill and love are forbidden.'
    },
    harry_potter_and_the_philosophers_stone: {
      title: 'Harry Potter and the Philosopher’s Stone',
      language: 'English',
      author: 'J.K. Rowling',
      about:
        'I’m willing to bet you’ve heard of Harry Potter, but have you read the books? Join Harry Potter as he begins his journey into the world of magic, where he is the celebrated Boy Who Lived. Visit Hogwarts, meet your favourite characters and watch Harry grow into the one of the most famous literary characters in the world.'
    },
    the_lord_of_the_rings: {
      title: 'The Lord of the Rings',
      language: 'English',
      author: 'J.R.R. Tolkien',
      about:
        'Middle Earth is a wonderful, expansive fantasy world filled with turmoil, heroes, evil and innocence. Although our protagonist Frodo Baggins’ quest seems impossible to complete, this trilogy is a tale of triumph in the most impossible circumstances.'
    },
    the_great_gatsby: {
      title: 'The Great Gatsby',
      language: 'English',
      author: 'F. Scott Fitzgerald',
      about:
        'Published in 1925, Fitzgerald’s The Great Gatsby explores the decadence of the Jazz Age, and one man’s introduction into a world where even those with the most indulgent lives cannot earn love.'
    },
    pride_and_prejudice: {
      title: 'Pride and Prejudice',
      language: 'English',
      author: 'Jane Austen',
      about:
        'One of the most famous novels of all time, Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance.'
    },
    the_diary_of_a_young_girl: {
      title: 'The Diary Of A Young Girl',
      language: 'English',
      author: 'Anne Frank',
      about:
        'Unforgettable and deeply influential, Anne Frank’s diary is a raw account of a young girl’s life as she hides from the Nazis. Despite her circumstances, Anne believes that people are still good at heart and that the world is full of beauty: she will change your life.'
    },
    the_book_thief: {
      title: 'The Book Thief',
      language: 'English',
      author: 'Markus Zusak',
      about:
        'Set in Germany during 1939, The Book Thief follows Liesel as she rescues books from the tyranny of Nazi rule. Meanwhile, her family has hidden a Jewish fighter in their basement and death looks down on the family, narrating our tale. Experience bravery that is rarely found in the world, and friendship that is formed in the most unlikely of situations.'
    },
    the_hobbit: {
      title: 'The Hobbit',
      language: 'English',
      author: 'J.R.R. Tolkien',
      about:
        'Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.'
    },
    little_women: {
      title: 'Little Women',
      language: 'English',
      author: 'Louisa May Alcott',
      about:
        'Join four sisters, each with their own prominent personality, as they come of age in charming 19th Century New England. Experience their struggles and revel in their flaws, as these girls become strong women.'
    }
  };

  // Step 1.7
  const bookCoversLocation = {
    to_kill_a_mockingbird: './img/to_kill_a_mockingbird.jpg',
    1984: './img/1984.jpg',
    harry_potter_and_the_philosophers_stone: './img/harry_potter_and_the_philosophers_stone.jpg',
    the_lord_of_the_rings: './img/the_lord_of_the_rings.jpg',
    the_great_gatsby: './img/the_great_gatsby.jpg',
    pride_and_prejudice: './img/pride_and_prejudice.png',
    the_diary_of_a_young_girl: './img/the_diary_of_a_young_girl.jpg',
    the_book_thief: './img/the_book_thief.jpg',
    the_hobbit: './img/the_hobbit.jpg',
    little_women: './img/little_women.jpg'
  };

  // Step 1.5
  function getActualInfo() {
    const ol = document.createElement('ol');
    for (let i = 0; i < bookTitles.length; i++) {
      const div1 = document.createElement('div');
      div1.setAttribute('class', 'flip-card');
      const div2 = document.createElement('div');
      div2.setAttribute('class', 'flip-card-inner');
      const div3 = document.createElement('div');
      div3.setAttribute('class', 'flip-card-front');
      const div4 = document.createElement('div');
      div4.setAttribute('class', 'flip-card-back');

      const li = document.createElement('li');
      li.setAttribute('id', bookTitles[i]);
      console.log(li);

      const h1 = document.createElement('h1');
      h1.setAttribute('id', bookTitles[i]);
      h1.setAttribute('class', 'book-titles');
      h1.innerText = books[`${bookTitles[i]}`].title;

      const h2 = document.createElement('h2');
      h2.setAttribute('id', bookTitles[i]);
      h2.setAttribute('class', 'authors');
      h2.innerText = books[`${bookTitles[i]}`].author;

      const p = document.createElement('p');
      p.setAttribute('id', bookTitles[i]);
      p.setAttribute('class', 'about');
      p.innerText = books[`${bookTitles[i]}`].about;

      // Step 1.8
      const img = document.createElement('img');
      img.setAttribute('src', bookCoversLocation[`${bookTitles[i]}`]);
      img.setAttribute('alt', books[`${bookTitles[i]}`].title);

      div4.appendChild(h1);
      div4.appendChild(h2);
      div4.appendChild(p);
      div3.appendChild(img);
      div2.appendChild(div3);
      div2.appendChild(div4);
      div1.appendChild(div2);
      li.appendChild(div1);
      ol.appendChild(li);
      document.body.appendChild(ol);
    }
  }

  window.addEventListener('load', getActualInfo);
}
