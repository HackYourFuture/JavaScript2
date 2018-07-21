'use strict'
const bookKeys = [
    "tales",
    "oliver_twist",
    "hamlet",
    "monte_cristo",
    "king_lear",
    "mysterious_island",
    "nora",
    "dorian_gray ",
    "intrigue ",
    "search_castaways,"
];




'use strict'
const bookInfo = {
  tales: { title: "Black cat", language:"english", author: "Edgar Po"},
  oliver_twist: { title: "Oliver Twist", language:"english", author: "Charles Dickens"},
  hamlet: { title: "Hamlet", language:"english", author: "William Shakespeare"},
  monte_cristo: { title: "The Count of Monte Cristo", language:"french", author: "Alexandre Dumas"},
  king_lear: { title: "King Lear", language:"armenian", author: "William Shakespeare"},
  mysterious_island: { title: "The Mysterious Island", language:"russian", author: "Jules Verne"},
  nora: { title: "Nora", language:"russian", author: "Henrik Ibsen"},
  dorian_gray: { title: "the Picture of Dorian Gray", language:"armenian", author: "Oscar Wilde"},
  intrigue: { title: "Intrigue and Love", language:"german", author: "Friedrich Schiller"},
  search_castaways: { title: "Search of the castaways", language:"french", author: "Jules Verne"}
      
          };
          
'use strict' 
const covers = { tales: "https://rikrawling.files.wordpress.com/2017/06/poe-tales-of-m-and-i.jpg",
oliver_twist: "https://i.pinimg.com/736x/17/22/98/172298024e26b1d01bee80871305254d--oliver-twist-charles-dickens.jpg",
hamlet: "https://images-na.ssl-images-amazon.com/images/I/51VQaOw9dKL._SX331_BO1,204,203,200_.jpg",
monte_cristo:"https://images-na.ssl-images-amazon.com/images/I/51W5xvphHlL.jpg",
king_lear: "https://images-nitrosell-com.akamaized.net/product_images/8/1889/large-king%20lear%20forum%20new%20ed.jpg",
mysterious_island: "https://images-na.ssl-images-amazon.com/images/I/81ySxuhHRQL.__BG0,0,0,0_FMpng_AC_UL320_SR200,320_.jpg",
nora: "https://images-na.ssl-images-amazon.com/images/I/41FZWVMABKL._SX318_BO1,204,203,200_.jpg",
dorian_gray: "https://a.wattpad.com/cover/6626233-352-k168522.jpg",
intrigue: "https://images-na.ssl-images-amazon.com/images/I/51N2vwu3tdL.jpg",
search_castaways: "http://prodimage.images-bn.com/pimages/9781534866072_p0_v1_s1200x630.jpg"
};

'use strict'
  let list = document.createElement("LI");
 
function showBook() {

for (let [k, z] of Object.entries(bookInfo)){

  
  

    let header_2 = document.createElement("H2");
    let textnode = document.createTextNode(k + " - " +  z.title + "  " + z.language  + "  " + z.author);
    let book_title = document.createTextNode(z.title );
        let book_author = document.createTextNode( "\n" + z.author );
    
    list.appendChild(textnode);
    header_2.appendChild(book_title);
     header_2.appendChild(book_author);
    
 list.innerHTML += header_2.outerHTML
    
  
    document.getElementById("myBookList").appendChild(list);
 
 
 
}
  myXuy();
};


function myXuy(){
for (let [k, v] of Object.entries(covers)){
 

   let image = document.createElement("IMG");
    
    
   list.appendChild(image);
    list.setAttribute("id", k);
    image.setAttribute("width", "304");
    image.setAttribute("height", "300");
    image.setAttribute("src",  v);   


}
}







    



