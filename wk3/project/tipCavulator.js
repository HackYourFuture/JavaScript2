const opt = document.querySelectorAll("option").values;
const person = document.querySelector("#person");
const btn = document.querySelector("#calc");
const service = document.getElementById("service");
const result = document.querySelector("#result");
const each = document.querySelector("#each");

function calculte() {
    const billContentS = document.getElementById("bill").value;
    let bill = parseInt(billContentS);
    const serv = parseInt(service.value);
    const eachPerson = parseInt(person.value);

    let percentage = (bill * serv) / 100;

    let dividedOnpeople = Math.floor(percentage / eachPerson);

    result.innerText = "$ " + dividedOnpeople;
    result.style.display = "block";

    if (eachPerson > 1) {
        each.style.display = "block";
    }
}

btn.addEventListener("click", calculte);