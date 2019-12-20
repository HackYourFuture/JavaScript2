'use strict'


function tellTime() {
    const time = new Date();

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const timeNow=hour+ ':' + minute + ':' + second

    document.querySelector('#time-now').firstChild.nodeValue=timeNow
}

setInterval('tellTime()', 1000)
