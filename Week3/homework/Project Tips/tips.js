

//grab the value passed in the form
const bill = document.getElementById("bill");
const numOfPpl = document.getElementById('pplNum');
const rateService = document.getElementById('rate-service');
const result = document.querySelector('.result');
let btn = document.querySelector('button');
btn.addEventListener('click', calcTip);

function calcTip() {
  if (!bill.value || numOfPpl === '') {
    alert("You need to fill in all the fields!")
  } else {
    let tips = (rateService.value / 100) * bill.value / numOfPpl.value;
    let resutlSpan = document.getElementById('result');
    resutlSpan.innerText = tips.toFixed(2);
    let each = document.querySelector('#each');
    numOfPpl.value <= 1 ? each.style.display = 'none' : each.style.display = 'inline';
    setTimeout(() => result.classList.add('giveResult'), 100)
    window.addEventListener('click', () => result.classList.remove('giveResult'));
  }
}


