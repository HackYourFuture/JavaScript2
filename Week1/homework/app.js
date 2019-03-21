('use strict');

{
  const bookTitles = [
    // Replace with your own book titles
    'the_subtle_art_of_not_giving_a_fuck',
    'the_outsider',
    'the_alchemist',
    'the_steppenwolf',
    'warriors_of_light',
    'veronica_decides_to_die',
    'the_god_conspiracy',
    'demian',
    'eleven_minutes',
    'the_book_of_secrets',
  ];
  let bookCovers = {
    the_subtle_art_of_not_giving_a_fuck: "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/5/0/9/7/9200000063067905.jpg",
    the_outsider: "https://images-na.ssl-images-amazon.com/images/I/51AqxPF7SuL._SX336_BO1,204,203,200_.jpg",
    the_alchemist: "https://dynamic.indigoimages.ca/books/0062315005.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=38&lang=en",
    the_steppenwolf: "https://ih0.redbubble.net/image.353650085.6847/flat,550x550,075,f.u1.jpg",
    warriors_of_light: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/6/7/7/1001004011107764.jpg",
    veronica_decides_to_die: "https://www.libertybooks.com/image/catalog/81517.jpg",
    the_god_conspiracy: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/6/4/0/8/9200000033408046.jpg",
    demian: "https://i.ebayimg.com/images/i/302380651666-0-1/s-l1000.jpg",
    eleven_minutes: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Eleven_Minutes_Book_cover.jpg/200px-Eleven_Minutes_Book_cover.jpg",
    the_book_of_secrets: "https://images.gr-assets.com/books/1316730248l/9049404.jpg"


  };

  // Replace with your own code

  const booksObject = {
    the_subtle_art_of_not_giving_a_fuck: {
      title: 'the subtle are of not giving a fuck',
      author: 'Mark manson',
      language: 'English',
    },
    the_outsider: {
      title: 'the outsider',
      author: 'Colin wilson',
      language: 'English',
    },
    the_alchemist: {
      title: 'the alchemist',
      author: 'Paulo coelho',
      language: 'English',
    },
    the_steppenwolf: {
      title: 'the steppenwolf',
      author: 'Herman hesse',
      language: 'German',
    },
    warriors_of_light: {
      title: 'warriors of light',
      author: 'Paulo coelho',
      language: 'English',
    },
    veronica_decides_to_die: {
      title: 'veronica decides to die',
      author: 'Paulo coelho',
      language: 'English',
    },
    the_god_conspiracy: {
      title: 'the god conspiracy',
      author: 'Osho',
      language: 'English',
    },
    demian: {
      title: 'demian',
      author: 'Herman hesse',
      language: 'English',
    },
    eleven_minutes: {
      title: 'eleven minutes',
      author: 'Paulo coelho',
      language: 'English',
    },
    the_book_of_secrets: {
      title: 'the book of secrets',
      author: 'Osho',
      language: 'English',
    },
  };
  function listingBooks() {
    const ul = document.createElement('ul');
    const div = document.getElementById('root');
    const head = document.createElement('h1');
    head.innerText = 'My favorites books';
    div.appendChild(head);
    div.appendChild(ul);
    for (let i = 0; i < bookTitles.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const img = document.createElement("img");
      li.appendChild(img);
      img.setAttribute('src', bookCovers[bookTitles[i]]);
      img.setAttribute('alt', bookCovers[bookTitles[i]]);
      const h2 = document.createElement('h2');
      li.appendChild(h2);
      const h3 = document.createElement('h3');
      li.appendChild(h3);
      const h = document.createElement('h3');
      li.appendChild(h);
      li.setAttribute('id', bookTitles[i]);
      for (let g = 0; g < 3; g++) {
        let y = document.getElementById(bookTitles[i]).getElementsByTagName('h2')[g];
        let f = document.getElementById(bookTitles[i]).getElementsByTagName('h3')[g];
        if (g === 0) {
          y.innerText = booksObject[bookTitles[i]]['title'];
          f.innerText = booksObject[bookTitles[i]]['author'];
        } else if (g === 1) {
          f.innerText = booksObject[bookTitles[i]]['language'];
        }
      }
    }
  }
  listingBooks();
}
