

function calculateTip(){ 

    const each = document.querySelector('#each');
    const bill = document.querySelector('#bill').value;
    const service = document.querySelector('#service').value;
    let totalPeople = document.querySelector('#totalPeople').value; // i used let to change the value later
      
    if(bill === "" || bill <= 0) { 
        return alert('You have to write down the value of the bill (( Except zero and a negative numbers ))');
    }
    if(service <= 0.04){
        return alert('Please choose an option from the list'); 
    }
      
    if(totalPeople === "" || totalPeople <=1){ // if total of people is empty or = 0 "each" will disappear
        totalPeople =1;
        each.style.display = "none";
    }else each.style.display = "block";
  
    let total = (bill * service) / totalPeople;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);
    
    document.querySelector('#tip').innerHTML= total;
}

document.querySelector('#calculate').onclick = function() {calculateTip();};


