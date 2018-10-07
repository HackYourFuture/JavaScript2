'use strict';
function load() {
  const root = document.querySelector("#books");

  const bookTitles = [
    "suhuf",
    "tawrat",
    "zabur",
    "injeel",
    "quran"
  ];
  const bookInfo = {
    "suhuf": { title: "Scrolls of Abraham", auther: "Ibrahim", lang: "Unknown" },
    "tawrat": { title: "Torah of Moses", auther: "Musa", lang: "Unknown" },
    "zabur": { title: "Psalms of David", auther: "Dawud", lang: "Unknown" },
    "injeel": { title: "Gospel of Jesus", auther: "Isa", lang: "Syriac" },
    "quran": { title: "Quran", auther: "Muhammad", lang: "Arabic" }
  };

  const covers = {
    suhuf: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BSSvkQ8zw7-yJOa1a1j8yhb3jzLFMSCdNLHoNQCfP3Zl0BVSyg",
    tawrat: "https://www.thoughtco.com/thmb/uxVKjHrNQuinx_V1AD60jBkqhAk=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BookMoses-56a536713df78cf77286f661.jpg",
    zabur: "https://www.thoughtco.com/thmb/tJaImQdvAb1oCthBxC96CkSDSNw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Psalms-56a536713df78cf77286f65e.jpg",
    injeel: "https://www.thoughtco.com/thmb/vnpJMnQ9LoEdJYOdbcZDs5ILwwE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Gospel-56a536715f9b58b7d0db88ae.jpg",
    quran: "https://www.thoughtco.com/thmb/KqhAnEZ9daNpd3D29OxyM6RFZj4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/quran-56a5365c3df78cf77286f5a6.jpg"
  };

  function createEl(name, parent, nodes = {}) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    if (nodes.txt) { elem.innerHTML = nodes.txt; }
    if (nodes.id) {
      elem.setAttribute(nodes.id, nodes.val);
    }
    return elem;
  }

  const ul = createEl("ul", root);
  for (let i of bookTitles) {
    const li = createEl("li", ul, { id: "id", val: i });
    createEl("h3", li, bookInfo[i].title);
    createEl("p", li, { txt: `Prophet: ${bookInfo[i].auther}<br />Language: ${bookInfo[i].lang}` });
    createEl("img", li, { id: "src", val: covers[i] });
  }
}
window.onload = load();

// Books of Revelation
// Quran, the holy book of islam, was sent down to prophet Muhammad, language is Arabic.
// Gospel of Jesus (Injeel), was sent down to prophet Jesus (Isa), language was was Syriac or Aramaic.
// Psalms of David (Zabur), was reveald to prophet David (Dawud)
// Torah of Moses (Tawrat), was sent down to prophet to Moses (Musa)
// Scrolls of Abraham (Suhuf), was sent down to prophet Ibrahim.