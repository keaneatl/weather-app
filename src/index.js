import stylesCSS from "./styles.css";
import resetCSS from "./reset.css";
import regeneratorRuntime from "regenerator-runtime";
import { getWeather } from "./modules/fetchWeather";

getWeather('Manila');

const inputLocation =(() => {
    const inputLoc = document.querySelector('.search-loc');
    const submitBtn = document.querySelector('.submit');

    inputLoc.addEventListener('change', () => {
        if(!inputLoc.value)return
        getWeather(inputLoc.value);
    });

    submitBtn.addEventListener('click', () => {
        if(!inputLoc.value)return
        getWeather(inputLoc.value);
    });
})();








