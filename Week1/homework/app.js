'use strict';
{
  const bookTitles = [
    "harry_potter_chamber_secrets",
    "tell_of_two_cities",
    "hamlet",
    "merchant_of_venice",
    "hotel",
    "the_sound_and_the_fury",
    "for_whom_the_bell_tolls",
    "the_old_man_and_the_sea",
    "palace_walk",
    "mirror"
  ];
  const bookInfo = {
    "harry_potter_chamber_secrets": { lang: "English", author: "Joanne Rowling", title: "harry potter" },
    "tell_of_two_cities": { lang: "English", author: "Charles Dickens", title: "tell of two cities" },
    "hamlet": { lang: "English", author: "William Shakespeare", title: "hamlet" },
    "merchant_of_venice": { lang: "English", author: "William Shakespeare", title: "merchant of venice" },
    "hotel": { lang: "English", author: "Arthur Hailey", title: "hotel" },
    "the_sound_and_the_fury": { lang: "English", author: "William Faulkner", title: "the sound and the fury" },
    "for_whom_the_bell_tolls": { lang: "English", author: " Ernest Hemingway", title: "for whom the bell tolls" },
    "the_old_man_and_the_sea": { lang: "English", author: " Ernest Hemingway", title: "the old man and the sea" },
    "palace_walk": { lang: "arabic", author: "Nagieb Mahfoez", title: "palace walk" },
    "mirror": { lang: "arabic", author: "Nagieb Mahfoez", title: "mirror" }
  };
  const bookCover = {
    "harry_potter_chamber_secrets":"https://media.bloomsbury.com/rep/bj/9783551354020.jpg",
    "tell_of_two_cities":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jVk7_YkxlOVkXqflwQb4KzNNfJ8DxdH7OX7K4HyBZitVmmg-",
    "hamlet":"https://i.pinimg.com/originals/c3/fe/8a/c3fe8adaacda307dca5a03a72bb97448.jpg",
    "merchant_of_venice":"https://is1-ssl.mzstatic.com/image/thumb/Publication/v4/fa/01/4f/fa014fba-e3dc-3aa2-bb6b-c8ed9ffefb7a/source/1200x630bb.jpg",
    "hotel":"https://pictures.abebooks.com/AYEREGO/md/md17074436068.jpg",
    "the_sound_and_the_fury":"https://nighthawknews.files.wordpress.com/2013/02/sf87.jpg",
    "for_whom_the_bell_tolls":"https://images-na.ssl-images-amazon.com/images/I/51ITaxhiA8L._SX326_BO1,204,203,200_.jpg",
    "the_old_man_and_the_sea":"https://images-na.ssl-images-amazon.com/images/I/411pakPjvdL._SX326_BO1,204,203,200_.jpg",
    "palace_walk":"https://images-na.ssl-images-amazon.com/images/I/91rKINHFpkL.jpg",
    "mirror":"https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/7/0/9/1001004001419075.jpg",
  };


  function amazingFun() {
    const generateList = document.createElement("ol");
    document.body.appendChild(generateList);
    const titles = Object.values(bookInfo).map((x) => x.title);
    const authors = Object.values(bookInfo).map((x) => x.author);
    const langs = Object.values(bookInfo).map((y) => y.lang);
    const pics = Object.values(bookCover);
    for (let i = 0; i < bookTitles.length; i++) {
      const items = document.createElement("li");
      const headers = document.createElement("h3");
      const para = document.createElement("p");
      const addImg = document.createElement("img");
      generateList.appendChild(items);
      items.appendChild(headers);
      items.appendChild(para);
      items.appendChild(addImg);
      addImg.setAttribute("src",pics[i]);
      items.setAttribute("id", bookTitles[i]);
      headers.appendChild(document.createTextNode(titles[i]));
      para.appendChild(document.createTextNode(authors[i]));
      para.appendChild(document.createTextNode(langs[i]));
      
    } 
  }
  amazingFun();
 

}
