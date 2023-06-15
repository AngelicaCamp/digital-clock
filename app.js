const clockContainer = document.querySelector('.clock-container')
const spanDate = document.querySelector('#span-date')

const formatTime = time =>  String(time).length === 1 ? `0${time}` : time

const getClockHTML = (hours,minutes,seconds) => `
    <span>${formatTime(hours)}</span> :
    <span>${formatTime(minutes)}</span> :
    <span>${formatTime(seconds)}</span> 
`

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    clockContainer.innerHTML = getClockHTML(hours,minutes,seconds)
}
setInterval(updateClock,1000)


const showDate = () => {
    const present = new Date()
    const weekDay = present.toLocaleString('pt-br',{weekday: 'long'})
    const day = present.getDate()
    const month = present.toLocaleString('pt-br',{month: 'long'})
    const year = present.getFullYear()

    const textSpanDate = spanDate.textContent = `${weekDay}, ${formatTime(day)} de ${month} de ${year}`

    return textSpanDate
}

showDate()
