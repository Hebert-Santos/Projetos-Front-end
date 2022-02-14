let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function updateClock() {
    let now = new Date()
    let hour = now.getHours() > 9 ? now.getHours() : `0${now.getHours()}`
    let minute = now.getMinutes() > 9 ? now.getMinutes() : `0${now.getMinutes()}`
    let second = now.getSeconds() > 9 ? now.getSeconds() : `0${now.getSeconds()}`

    digitalElement.innerHTML = `${hour}:${minute}:${second}`

    let sDeg = ((360 / 60) * second) - 90
    let mDeg = ((360 / 60) * minute) - 90
    let hDeg = ((360 / 12) * hour) - 90 

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}


setInterval(updateClock, 1000)
updateClock() //Para compensar o milisec do setInterval