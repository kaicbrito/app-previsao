const key = "bc2f9f3bbf1fdfc12133ba0802c3c928";

function dataInScreen(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".text-prevision").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-prevision").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    dataInScreen(data)

}

function clickButton() {
    const city = document.querySelector(".input-city").value
    searchCity(city)
}
