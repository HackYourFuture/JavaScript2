'use strict';
{
  // Step 1
  const bookTitles = [
    "suhuf",
    "tawrat",
    "zabur",
    "injeel",
    "quran"
  ];

  // Step 2 
  // console.log(bookTitles);
  
  // Step 3
  let  library = document.querySelector("#books");
/*
  function bookList() {
    for (let i = 0; i < bookTitles.length; i++) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    ul.appendChild(li);
    library.appendChild(ul);
    li.setAttribute("id", bookTitles[i]);
    }
  }
  bookList();
*/
  // Step 4
  const details = {
    "suhuf": {title: "Scrolls of Abraham", auther: "Ibrahim", lang: "Unknown"},
    "tawrat": {title: "Torah of Moses", auther: "Musa", lang: "Unknown"},
    "zabur": {title: "Psalms of David", auther: "Dawud", lang: "Unknown"},
    "injeel": {title: "Gospel of Jesus", auther: "Isa", lang: "Syriac"},
    "quran": {title: "Quran", auther: "Muhammad", lang: "Arabic"}
  };
  
  // Step 5
  let lg = "Language: ";
  let auth = "Prophet: ";
  function bookList(detls) {
    for (let x in detls) {
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let img = document.createElement("img");
      img.setAttribute("class", "imgs")
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(img);
      ul.appendChild(li);
      library.appendChild(ul);
      h3.innerHTML = detls[x].title;
      p.innerHTML = auth + detls[x].auther + "<br />" + lg + detls[x].lang;
    }
  }
  bookList(details);

  // Step 7
  const images = {
    suhuf: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BSSvkQ8zw7-yJOa1a1j8yhb3jzLFMSCdNLHoNQCfP3Zl0BVSyg",
    tawrat: "https://www.thoughtco.com/thmb/uxVKjHrNQuinx_V1AD60jBkqhAk=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BookMoses-56a536713df78cf77286f661.jpg",
    zabur: "https://www.thoughtco.com/thmb/tJaImQdvAb1oCthBxC96CkSDSNw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Psalms-56a536713df78cf77286f65e.jpg",
    injeel: "https://www.thoughtco.com/thmb/vnpJMnQ9LoEdJYOdbcZDs5ILwwE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Gospel-56a536715f9b58b7d0db88ae.jpg",
    quran: "https://www.thoughtco.com/thmb/KqhAnEZ9daNpd3D29OxyM6RFZj4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/quran-56a5365c3df78cf77286f5a6.jpg"
  };

  // The Last Step
  function src(srcs) {
    let imgs = document.getElementsByClassName("imgs");
    let i = 0;
    for (let s in srcs) {
    imgs[i].setAttribute("src", srcs[s]);
    i++;
  }
}
src(images);

}


// Books of Revelation
// Quran, the holy book of islam, was sent down to prophet Muhammad, language is Arabic.
// Gospel of Jesus (Injeel), was sent down to prophet Jesus (Isa), language was was Syriac or Aramaic.
// Psalms of David (Zabur), was reveald to prophet David (Dawud)
// Torah of Moses (Tawrat), was sent down to prophet to Moses (Musa)
// Scrolls of Abraham (Suhuf), was sent down to prophet Ibrahim.