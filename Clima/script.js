document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if (input !== '') {
        showWarning('Carregando ...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ee94f337603bb54e8f186b55f2b92410&units=metric&lang=pt_br`

        let result = await fetch(url)
        let json = await result.json()

        if (json.cod === 200) {
            showInfo({
                name : json.name,
                country : json.sys.country,
                temp : json.main.temp,
                tempIcon : json.weather[0].icon,
                windSpeed : json.wind.speed,
                windAngle : json.wind.deg
            })
        } else {
            clearInfo()
            showWarning('Não encontramos essa localização')
        }

        //Mudar a cor do botão e do resultado dependendo da temperatura
        if(json.main.temp>30){
            document.querySelector(".busca button").style.background="rgba(255, 0, 0, 0.700)";
            document.querySelector(".resultado").style.background="rgba(255, 0, 0, 0.700)";
        }
        if(json.main.temp<=29.99){
            document.querySelector(".busca button").style.background="rgba(255, 60, 0, 0.700)";
            document.querySelector(".resultado").style.background="rgba(255, 60, 0, 0.700)";
        }
        if(json.main.temp<=23.99){
            document.querySelector(".busca button").style.background="rgba(1, 94, 201, 0.700)";
            document.querySelector(".resultado").style.background="rgba(1, 94, 201, 0.700)";
        }
        if(json.main.temp<=15.99){
            document.querySelector(".busca button").style.background="rgba(85, 201, 255, 0.700)";
            document.querySelector(".resultado").style.background="rgba(85, 201, 255, 0.700)";
        }
    }

}) //Previne o enviamento do formulário

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function showInfo(json) {
    showWarning('') 

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`

    document.querySelector('.resultado').style.display = 'block'   
    
}

function clearInfo(){
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}
