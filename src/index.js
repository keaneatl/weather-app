import stylesCSS from "./styles.css";
import resetCSS from "./reset.css";
import regeneratorRuntime from "regenerator-runtime";

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

getWeather('Manila');

const inputLocation =(() => {
    const inputLoc = document.querySelector('.search-loc');
    const submitBtn = document.querySelector('.submit-loc');

    inputLoc.addEventListener('change', () => {
        if(!inputLoc.value)return
        getWeather(inputLoc.value);
    });
        
})();

const displayWeather = (nm, mn, mnD, temp, cld, fL, hum, mnT, mxT, tz, rn, cntry) => {
    const nmDOM = document.querySelector('.name');
    const mnDOM = document.querySelector('.main');
    const mnDDOM = document.querySelector('.desc');
    const tempDOM = document.querySelector('.temperature');
    const cldDOM = document.querySelector('.cloudiness')
    const fLDOM = document.querySelector('.feels-like');
    const humDOM= document.querySelector('.humidity');
    const mnTDOM = document.querySelector('.min-temp');
    const mxTDOM = document.querySelector('.max-temp');
    const tzDOM = document.querySelector('.thumbnail');

    if(!rn)tzDOM.src = '../dist/icons/rain.png'
    else if(tz.split(':')[0] >= 18)tzDOM.src = '../dist/icons/night.png';
    else if (cld > 70) tzDOM.src = '../dist/icons/cloudy.png';
    else tzDOM.src = '../dist/icons/default.png';
    

    nmDOM.textContent = nm + ', ' + cntry;
    mnDOM.textContent = mn;
    mnDDOM.textContent = mnD;
    tempDOM.textContent = `${Math.round(temp - 273.15)} °C`;
    cldDOM.textContent = `${cld}%`;
    fLDOM.textContent = `${Math.round(fL - 273.15)} °C`;
    humDOM.textContent = `${hum}%`;
    mnTDOM.textContent = `${Math.round(mnT - 273.15)} °C`;
    mxTDOM.textContent = `${Math.round(mxT - 273.15)} °C`;
    
}






