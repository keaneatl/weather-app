import "./styles.css";
import "./reset.css";
import regeneratorRuntime from "regenerator-runtime";

async function getWeather(city){
    try {
        const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=36304148de798623bfc32544c736df2a`);
        const weatherJson =  await weatherData.json();
        console.log(weatherJson);
        let temperature = weatherJson['main']['temp'];
        let feelsLike = weatherJson['main']['feels_like'];
        let humidity = weatherJson['main']['humidity'];
        displayWeather(temperature, feelsLike, humidity);
    }
    catch(error) {
        alert(error);
    }
    
}

const inputLocation =(() => {
    const inputLoc = document.querySelector('.search-loc');
    const submitBtn = document.querySelector('.submit-loc');

    submitBtn.addEventListener('click', () => getWeather(inputLoc.value));
})();

const displayWeather = (temp, fL, hum) => {
    const tempOutput = document.querySelector('.temperature');
    const fLOutput = document.querySelector('.feels-like');
    const humidity = document.querySelector('.humidity');

    tempOutput.textContent = temp;
    fLOutput.textContent = fL;
    humidity.textContent = hum;
}






