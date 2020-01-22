const mondayTasks = [
    {
        name: 'Daily standup',
        duration: 30, // specified in minutes
    },
    {
        name: 'Feature discussion',
        duration: 120,
    },
    {
        name: 'Development time',
        duration: 240,
    },
    {
        name: 'Talk to different members from the product team',
        duration: 60,
    },

]



convertToHours = (minutes) => {
    return minutes / 60
}

moneyPerHour = (hours) => {
    hours *= 25
    return hours;
}

dailyPayRate = (total, day) => {
    return total + day
}

function mondayTotalPay() {

    let durationArray = []

    for (i in mondayTasks) {

        durationArray.push(mondayTasks[i]["duration"])

    }

    let hourlyDurationArray = durationArray.map(convertToHours);

    let hourlyPay = hourlyDurationArray.map(moneyPerHour)

    let totalPay = hourlyPay.reduce(dailyPayRate)


    return `Your Monday total pay check would be equal to ${totalPay} dollars`


}

console.log(mondayTotalPay())