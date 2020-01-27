


function pomodoro(minutes) {
    let interval;
    var seconds = minutes * 60
    interval = setInterval(() => {
        seconds--;
        console.log(seconds)
        if (seconds == 0) {
            console.log("yimes up")
            clearInterval(interval)
        }
    }, 1000)



}

pomodoro(0.1);