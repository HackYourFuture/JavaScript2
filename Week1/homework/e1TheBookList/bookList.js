'use strict'


const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
];



let numOfBooks=Object.values(books);

//for the paragraphs
let paragraph1=document.createElement('p');
paragraph1.setAttribute('id','book1Paragraph')
let paragraph2=document.createElement('p');
paragraph2.setAttribute('id','book2Paragraph')

let book1Name=(`${numOfBooks[0].title} by ${numOfBooks[0].author}`)
let book2Name=(`${numOfBooks[1].title} by ${numOfBooks[1].author}`)

paragraph1.innerText=book1Name 
paragraph2.innerText=book2Name 

if (numOfBooks[0].alreadyRead == true){
    paragraph1.style.color='green'
    } else{
    paragraph1.style.color='red'
}

if (numOfBooks[1].alreadyRead == true){
    paragraph2.style.color='green'
    } else{
    paragraph2.style.color='red'
}

document.body.insertBefore(paragraph1, document.querySelector('h1').nextSibling)
document.body.insertBefore(paragraph2, document.querySelector('h1').nextSibling)


//for Lists
let unnumberedList=document.createElement('ul')
unnumberedList.setAttribute('id', 'unnumberedList')
document.body.insertBefore(unnumberedList, document.querySelectorAll('h2').nextSibling)

let listBook1=document.createElement('li')
listBook1.setAttribute('id','listBook1')

let listBook2=document.createElement('li')
listBook2.setAttribute('id','listBook2')

listBook1.innerText=book1Name
listBook2.innerText=book2Name



if (numOfBooks[0].alreadyRead == true){
    listBook1.style.color='green'
    } else{
    listBook1.style.color='red'
}

if (numOfBooks[1].alreadyRead == true){
    listBook2.style.color='green'
} else{
    listBook2.style.color='red'
}

let book1Image=document.createElement('img')
book1Image.src='https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png'
book1Image.style.width='100px'
book1Image.onclick = function() {
    window.location.href = 'https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png';
}

let book2Image=document.createElement('img')
book2Image.src='https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
book2Image.style.width='100px'
book2Image.onclick = function() {
    window.location.href = 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg';
}


document.body.insertBefore(listBook2, document.querySelectorAll('#unnumberedList').nextSibling)
document.body.insertBefore(book2Image, document.querySelectorAll('#listBook2').nextSibling)

document.body.insertBefore(listBook1, document.querySelectorAll('#unnumberedList').nextSibling)
document.body.insertBefore(book1Image, document.querySelectorAll('#listBook1').nextSibling)












// for (let [key, item] of Object.entries(books)) {

//   //for the paragraphs
//   let paragraph=document.createElement('p');
//   paragraph.setAttribute('id','booksParagraph')

//   let booksName=(`${item.title} by ${item.author}`)
//   paragraph.innerText=booksName
//   paragraph.style.fontSize= "15px"

//   document.body.insertBefore(paragraph, document.querySelector('h1').nextSibling)

//   let bookImage=document.createElement('img')
//   bookImage.src='https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png'
//   bookImage.style.width='100px'
//   document.body.insertBefore(bookImage, document.querySelectorAll('#booksParagraph').nextSibling)

//   if (item.alreadyRead == true){
//     paragraph.style.color='green'
//   } else{
//     paragraph.style.color='red'
//   }

//   // for the list
//   let unnumberedList=document.createElement('ul')
//   unnumberedList.setAttribute('id', 'unnumberedList')
//   document.body.insertBefore(unnumberedList, document.querySelectorAll('h2').nextSibling)

//   let listOfbooks=document.createElement('li')
//   listOfbooks.setAttribute('id','listOfBooks')
  
//   listOfbooks.innerText=booksName
//   listOfbooks.style.fontSize='15px'

//   if (item.alreadyRead == true){
//     listOfbooks.style.color='green'
//   } else{
//     listOfbooks.style.color='red'
//   }

//   document.body.insertBefore(listOfbooks, document.querySelectorAll('#unnumberedList').nextSibling)
// };

