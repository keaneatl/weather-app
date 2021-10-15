import { displayWeather } from "./displayWeather";

async function getWeather(city){
    try {
        const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=36304148de798623bfc32544c736df2a`);
        const weatherJson =  await weatherData.json();
        const name = weatherJson.name;
        const main = weatherJson.weather[0].main;
        const mainDesc = weatherJson.weather[0].description;
        const temperature = weatherJson.main.temp;
        const cloudiness = weatherJson.clouds.all;
        const feelsLike = weatherJson.main.feels_like;
        const humidity = weatherJson.main.humidity;
        const minTemp = weatherJson.main.temp_min;
        const maxTemp = weatherJson.main.temp_max;
        const time = (new Date((new Date().getTime()) + weatherJson.timezone*1000)).toTimeString();
        const rain = !weatherJson.rain;
        const country = weatherJson.sys.country;
       
        displayWeather(name, main, mainDesc,temperature, cloudiness, feelsLike, humidity, minTemp, maxTemp, time, rain, country);
    }

    catch(error) {
        alert('Country not found!');
        console.error(error);
    }
}

export { getWeather }