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

export { displayWeather }