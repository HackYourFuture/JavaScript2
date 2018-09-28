
"use strict";
{

function main(){
  const linksElem = document.getElementsByTagName('a');
  const firstLinkElem = linksElem[0];
  //console.log('first link file is:' + firstLinkElem)
  console.log( " the value of the first elements a is:" + firstLinkElem.href)
  console.log(firstLinkElem.innerText)

  const droneElem = document.getElementById('drone');
  console.log(droneElem.alt);

  const paragraphElems = document.body.getElementsByTagName('p')
  for(const paragraphElem of Array.from(paragraphElems)){
    if(paragraphElem.getAttribute('data-classified')=== 'secret'){
      paragraphElem.remove()

    }
  }
const clickmeElem = document.getElementById("click-me");
clickmeElem.addEventListener("click", function(){
   console.log("The element was clicked");
  })
  const pizzaPricesElem = document.getElementById("pizza-prices");
  pizzaPricesElem.addEventListener("change", function() {
      console.log("you have changed the selection");
      console.log("the value of the selected pizza is " +pizzaPricesElem.value)
      console.log("You selected: " + pizzaPricesElem.options[pizzaPricesElem.selectedIndex].text)
  })
  

}

window.onload =main();

}

