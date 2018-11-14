'use strict';
{
  const bookTitles =[
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
    "harry_potter_chamber_secrets":{lang:"English",author:"Joanne Rowling",title:"harry potter"},
    "tell_of_two_cities":{lang:"English",author:"Charles Dickens",title:"tell of two cities"},
    "hamlet":{lang:"English",author:"William Shakespeare",title:"hamlet"},
    "merchant_of_venice":{lang:"English",author:"William Shakespeare",title:"merchant of venice"},
    "hotel":{lang:"English",author:"Arthur Hailey",title:"hotel"},
    "the_sound_and_the_fury":{lang:"English",author:"William Faulkner",title:"the sound and the fury"},
    "for_whom_the_bell_tolls":{lang:"English",author:" Ernest Hemingway",title:"for whom the bell tolls"},
    "the_old_man_and_the_sea":{lang:"English",author:" Ernest Hemingway",title:"the old man and the sea"},
    "palace_walk":{lang:"arabic",author:"Nagieb Mahfoez",title:"palace walk"}, 
    "mirror":{lang:"arabic",author:"Nagieb Mahfoez",title:"mirror"}
  };


function arrToId(){
    let y =document.createElement("ol");
    document.body.append(y);
 for(let i = 0 ; i < bookTitles.length ;i++){
      let x =document.createElement("li");
      y.appendChild(x);
      x.setAttribute("id",bookTitles[i]);
}
}
arrToId();
//
}


