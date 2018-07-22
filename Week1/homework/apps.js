

 const books =[
    "the_crimson_iver",
    "hobbit",
    "1984",
    "the_return_of_the_king",
    "the_ruins_of_gorlan ",
    "a_clash_of_kings",
    "the_forty_rules_of_love",
    "my_name_is_red",
    "the_new_york_triology",
    "the_tale_of_two_cities"

];
window.onload=function booksList(){
   
    let makeList = "<ul>";
    for (let i = 0; i<books.length; i++){
        makeList += "<li>" + books[i] + "</li>";
      }
    makeList += "</ul>"
    document.getElementById("show").innerHTML=makeList;
    //document.getElementById("show").appendChild(makeList)
   }
  