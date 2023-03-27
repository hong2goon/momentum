
import React, { useState } from 'react';
import './Weather.scss';

const api = {
  key: "8743111fa6f5791c62e48884c89d323a",
  base: "https://api.openweathermap.org/data/2.5/",
}

function Weather( {getWInfo} ){
  const [getTemp, setTemp] = useState('');
  const [getWeaIcon, setWeaIcon] = useState('');
  const [getWeaDesc, setWeaDesc] = useState('');
  const [getLocal, setLocal] = useState('');

  let iconUrl ='';
  const getWeather = (lat, lon) => {
    fetch(`${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const weaDescript = json.weather[0].description;
      const weaIcoCode = json.weather[0].icon;
      const location = json.name;
      const weatherInfo = {
        location: json.name, 
        weather: json.weather[0].main,
        weatherDesc: json.weather[0].description,
        temperature: json.main.temp,
        tempFeelLike: json.main.feels_like,
        tempMax: json.main.temp_max,
        tempMin: json.main.temp_min,
        sunrise: new Date(json.sys.sunrise * 1000).toTimeString().split(' ')[0],
        sunset: new Date(json.sys.sunset * 1000).toTimeString().split(' ')[0],
      };
   
      setTemp(temperature);
      setWeaDesc(weaDescript);
      setWeaIcon(weaIcoCode);
      setLocal(location);
      getWInfo(weatherInfo);
    });
  } 

  const handleGeoSucces = (position) => {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  }

  const handleGeoError = () => {
    console.log('Cant access geo location');
  } 

  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);  

  iconUrl = 'http://openweathermap.org/img/w/' + getWeaIcon + '.png';

  return (
    <div className="js-weather">
      <div className="metric-stat">
        <span className="ico-weather" style={{backgroundImage: 'url(' + iconUrl + ')'}}>{getWeaDesc}</span>
        <span className="metric-stat-num">{getTemp}</span>
        <span className="degree">℃</span>
      </div>
      <div className="location">{getLocal}</div>
    </div>
  )
}

export default Weather;