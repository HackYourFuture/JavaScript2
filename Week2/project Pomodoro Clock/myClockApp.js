




let displayTimer = document.getElementById('displayTimer')
//console.log(displayTimer)

function pomodoro(minutes) {
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



}

//pomodoro(0.1);



document.getElementById("startBtn").addEventListener("click", pomodoro(0.2))