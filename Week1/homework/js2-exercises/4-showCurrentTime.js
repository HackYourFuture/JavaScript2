
function eenklok() {
    const datum = new Date();
    const tijd = datum.toLocaleTimeString();
    document.querySelector('#klok').innerHTML = tijd;
}
setInterval(eenklok, 1000);