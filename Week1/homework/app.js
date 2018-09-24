'use strict';
{
  const root = document.querySelector("#books");
  // Step 1
  /*
  const bookTitles = [
    "suhuf",
    "tawrat",
    "zabur",
    "injeel",
    "quran"
  ];
*/
  // Step 2 
  // console.log(bookTitles);
  
  // Step 3
/*
  function bookList() {
    for (let i = 0; i < bookTitles.length; i++) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    root.appendChild(ul);
    ul.appendChild(li);
    li.setAttribute("id", bookTitles[i]);
    }
  }
  bookList();
*/

  // Step 4
  const bookInfo = {
    "suhuf": {title: "Scrolls of Abraham", auther: "Ibrahim", lang: "Unknown"},
    "tawrat": {title: "Torah of Moses", auther: "Musa", lang: "Unknown"},
    "zabur": {title: "Psalms of David", auther: "Dawud", lang: "Unknown"},
    "injeel": {title: "Gospel of Jesus", auther: "Isa", lang: "Syriac"},
    "quran": {title: "Quran", auther: "Muhammad", lang: "Arabic"}
  };
  
  // Step 5
  /*
  function createAndAppend(name, parent, text){
    let elem = document.createElement(name);
    parent.appendChild(elem);
    if (text !== undefined){
    elem.innerText = text;
    }
    return elem
  }

  function bookList(detls, root) {
    let ul = create("ul", root);
    for (let x in detls) {
      let li = create("li", ul);
      create("h3", li, detls[x].title);
      create("p", li, "Prophet: " + detls[x].auther + "<br />" + "Language: " + detls[x].lang);
      let img = create("img", li);
      img.className = "imgs";
    }
  }
  bookList(bookInfo, root);
*/
  // Step 7
  const images = {
    suhuf: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BSSvkQ8zw7-yJOa1a1j8yhb3jzLFMSCdNLHoNQCfP3Zl0BVSyg",
    tawrat: "https://www.thoughtco.com/thmb/uxVKjHrNQuinx_V1AD60jBkqhAk=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BookMoses-56a536713df78cf77286f661.jpg",
    zabur: "https://www.thoughtco.com/thmb/tJaImQdvAb1oCthBxC96CkSDSNw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Psalms-56a536713df78cf77286f65e.jpg",
    injeel: "https://www.thoughtco.com/thmb/vnpJMnQ9LoEdJYOdbcZDs5ILwwE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Gospel-56a536715f9b58b7d0db88ae.jpg",
    quran: "https://www.thoughtco.com/thmb/KqhAnEZ9daNpd3D29OxyM6RFZj4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/quran-56a5365c3df78cf77286f5a6.jpg"
  };

  // Collecting all the steps in the Last Step
  function createAndAppend(name, parent, text){
    let elem = document.createElement(name);
    parent.appendChild(elem);
    if (text !== undefined){
    elem.innerHTML = text;
    }
    return elem
  }

  function bookList(info, imgs, root, create) {
    let ul = create("ul", root);
    for (let i in info) {
      let li = create("li", ul);
      create("h3", li, info[i].title);
      create("p", li, "Prophet: " + info[i].auther + "<br />" + "Language: " + info[i].lang);
      let img = create("img", li);
      li.setAttribute("id", i);
      for (let v of Object.keys(imgs)) {
        if (v == i)
        img.setAttribute("src", imgs[v]);
      }
  }
}
bookList(bookInfo, images, root, createAndAppend);

}


// Books of Revelation
// Quran, the holy book of islam, was sent down to prophet Muhammad, language is Arabic.
// Gospel of Jesus (Injeel), was sent down to prophet Jesus (Isa), language was was Syriac or Aramaic.
// Psalms of David (Zabur), was reveald to prophet David (Dawud)
// Torah of Moses (Tawrat), was sent down to prophet to Moses (Musa)
// Scrolls of Abraham (Suhuf), was sent down to prophet Ibrahim.