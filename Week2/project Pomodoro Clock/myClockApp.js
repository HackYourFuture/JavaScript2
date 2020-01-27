let displayTimer = document.getElementById('displayTimer')
console.log(displayTimer)

document.getElementById("startBtn").addEventListener("click", () => {
    let minutes = 0.1;
    let interval;
    var seconds = minutes * 60
    interval = setInterval(() => {
        seconds--;
        displayTimer.innerHTML = seconds

        console.log(seconds)
        if (seconds == 0) {
            console.log("yimes up")
            displayTimer.innerHTML = "Times Up"

            clearInterval(interval)
        }
    }, 1000)

})
