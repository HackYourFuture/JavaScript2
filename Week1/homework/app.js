'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'currency_wars',
    'brief_history_time',
    'code_book',
    'how_analyze_people',
    'ana_yurt',
    'oyghanghan_zimin',
    'iz',
    'brain_rules_baby',
    'baby_minds',
  ];

  const myBooks = {
    harry_potter_chamber_secrets: {
      title: "Harry Potter's - The Chamber of Secrets",
      language: 'English',
      author: 'J. K. Rowling',
      img: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/1/7/4/5/9200000011395471.jpg',
    },
    currency_wars: {
      title: 'Currency Wars',
      language: 'English',
      author: 'James Richards',
      img: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/6/6/4/1/9200000002301466.jpg',
    },
    brief_history_time: {
      title: 'A Brief History Of Time',
      language: 'English',
      author: 'Stephen Hawking',
      img: 'https://s.s-bol.com/imgbase0/imagebase3/regular/FC/4/6/1/5/1001004011695164.jpg',
    },
    code_book: {
      title: 'The Code Book',
      language: 'English',
      author: 'Simon Singh',
      img: 'https://s.s-bol.com/imgbase0/imagebase3/regular/FC/6/3/3/2/1001004000572336.jpg',
    },
    how_analyze_people: {
      title: 'How to Analyze People',
      language: 'English',
      author: 'Emma Jones Zach Raymond',
      img: 'https://s.s-bol.com/imgbase0/imagebase3/regular/FC/0/4/2/5/9200000054225240.jpg',
    },
    ana_yurt: {
      title: 'Ana Yurt',
      language: 'Uyghur',
      author: 'Zordun Sabir',
      img: 'https://elkitab.org/wp-content/uploads/2017/05/anayurt-2.png',
    },
    oyghanghan_zimin: {
      title: 'Oyghanghan Zimin',
      language: 'Uyghur',
      author: 'Abdurehim Otkur',
      img: 'https://elkitab.org/wp-content/uploads/2017/05/abdurehim-otkur-oyghanghan-zimin-e1496141273584.jpeg',
    },
    iz: {
      title: 'Iz',
      language: 'Uyghur',
      author: 'Abdurehim Otkur',
      img: 'https://elkitab.org/wp-content/uploads/2017/05/abdurehim-otkur-iz-1-190x290.png',
    },
    brain_rules_baby: {
      title: 'Brain Rules for Baby',
      language: 'English',
      author: 'John Medina',
      img: 'https://s.s-bol.com/imgbase0/imagebase3/regular/FC/4/1/1/7/1001004010617114.jpg',
    },
    baby_minds: {
      title: 'Baby Minds',
      language: 'English',
      author: 'Linda Acredolo Susan Goodwin',
      img: 'https://s.s-bol.com/imgbase0/imagebase3/regular/FC/5/3/5/8/1001004001348535.jpg',
    },
  };

  function bookList() {
    // Create ul element
    const bookUl = document.createElement('ul');
    for (let i = 0; i < bookTitles.length; i++) {
      // Create li teg
      const bookLi = document.createElement('li');
      // Div Of  Book's Image
      const imgDiv = document.createElement('div');
      imgDiv.setAttribute('id', 'bookImg');
      // Book's Image
      const img = document.createElement('img');
      img.src = myBooks[bookTitles[i]].img;
      imgDiv.appendChild(img);
      // Div Of  Book's Info
      const infoDiv = document.createElement('div');
      infoDiv.setAttribute('id', 'bookInfo');
      // Book Name
      const bookName = document.createElement('h3');
      bookName.textContent = 'Title : ' + myBooks[bookTitles[i]].title;
      infoDiv.appendChild(bookName);
      // Book Language
      const bookLanguage = document.createElement('h4');
      bookLanguage.textContent = 'Language : ' + myBooks[bookTitles[i]].language;
      infoDiv.appendChild(bookLanguage);
      // Book Author
      const bookAuthor = document.createElement('h4');
      bookAuthor.textContent = 'Author : ' + myBooks[bookTitles[i]].author;
      infoDiv.appendChild(bookAuthor);
      // Add div to li & add li to ul
      bookLi.appendChild(imgDiv);
      bookLi.appendChild(infoDiv);
      bookUl.appendChild(bookLi);
    }
    return bookUl;
  }
  const headTitle = document.createElement('h1');
  headTitle.textContent = 'My Books';
  document.body.appendChild(headTitle);
  document.body.appendChild(bookList());
}
