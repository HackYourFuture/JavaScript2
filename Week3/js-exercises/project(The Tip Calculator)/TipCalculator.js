'use strict'


document.getElementById('calc').addEventListener('click',calculator);

function calculator(){
   
    let amount = document.getElementById('amount').value;
    let discount = document.getElementById('discount').value;
    let people = document.getElementById('people').value;
    

     if(amount === "" ||discount === 0 || people === ""){

        //  alert( "You need to fill in all the fields!"); // it's working when i load a page
         return;

     }

     if( people <= 1){
        document.getElementById('makeHidden').style.display="none";
     }else{
        document.getElementById('makeHidden').style.display="block";
     }

     
     let  percent = amount -(amount*discount /100);
    let total = percent / people;
    total = total.toFixed(2);

    document.getElementById('each').innerHTML= total;
    document.getElementById('makeHidden').style.display="block";

    

}
document.getElementById('makeHidden').style.display="none";
 
  
    





