let displayTimer = document.getElementById('displayTimer')
console.log(displayTimer)

document.getElementById("startBtn").addEventListener("click", () => {
    let minutes = 1;
    let interval;
    var seconds = minutes * 60
    interval = setInterval(() => {
        seconds--;
        displayTimer.innerHTML = `${minutes}:${seconds}`

        console.log(seconds)
        if (seconds == 0) {
            console.log("times up")
            displayTimer.innerHTML = "Times Up"

            clearInterval(interval)
        }
    }, 1000)

})

