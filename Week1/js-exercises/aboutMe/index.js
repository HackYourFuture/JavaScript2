let body = document.querySelector("BODY");
//document.getElementById("body").style.fontFamily = "Impact,Charcoal,sans-serif";

body.style.fontFamily = "Arial, sans-serif";


document.getElementById("nickname").textContent = "Kotsidas";
document.getElementById("fav-food").textContent = "Pasta";
document.getElementById("hometown").textContent = "Heraclion";

let list = document.querySelectorAll("li")
 
for (let i=0; i<list.length; i++){
  list[i].classList.add("list-item")
}

let profImage = document.createElement("img")
profImage.src = "http://i.imgur.com/TENxP.jpg"
profImage.width = "150"

document.body.appendChild(profImage)




