const API_KEY = "f7d74cc321b0dc2221d5b8fd056c013f";

function renderWeatherInfo(data) {
    let newPara = document.createElement("p");
    newPara.textContent = `${data.main.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function showWeather() {
    try {
        let city = "mandsaur";
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();
        console.log("Weather -> ", data);

        renderWeatherInfo(data);
    } catch (err) {
        console.warn(err);
    }
}

async function getCustomWeather() {
    try {
        let latitude = 26.34;
        let longitude = 86.07;

        let result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );

        let data = await result.json();
        console.log("Weather -> ", data);
        renderWeatherInfo(data);
    } catch (err) {
        console.log(err);
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("No geolocation Support available");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}
