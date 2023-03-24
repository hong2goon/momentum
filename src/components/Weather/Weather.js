
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const api = {
  key: "8743111fa6f5791c62e48884c89d323a",
  base: "https://api.openweathermap.org/data/2.5/",
}

function Weather(){
  const [data, setData] = useState([]);
  //const url = `${api.base}weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${api.key}`;

  const handleGeoSucces = (position) => {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  }
  const handleGeoError = () => {
    console.log('Cant access geo location');
  } 
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);

  const getWeather = (lat, lon) => {
    console.log(lat, lon, api.base, api.key);
    fetch(`${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json.weather[0]);
        // const temperature = json.main.temp,
        //     description = json.weather[0].description,
        //     iconCode = json.weather[0].icon,
        //     place = json.name;
        // metricStat.innerHTML = `<span class="icon-weather"><img src="http://openweathermap.org/img/w/${iconCode}.png" alt="${description}" title="${description}"></span><span class="metric-stat-number">${temperature.toFixed(1)}</span><span class="degree">°</span>`;
        // metricLocation.innerHTML = `${place}`;
    });
  } 


  useEffect(() => {
    
  }, []);

  
  // const url = `${getBase}weather?lat=${getLoca[0]}&lon=${getLoca[1]}&appid=${getKey}`;
  //const [weather, setWeather] = useState("");
  
  //   const data = responseData.data;
  //   console.log(data);
  //   setWeather({
  //     iconCode: data.weather[0].icon,
  //     temperature: data.main.temp,
  //     description: data.weater[0].main,
  //     location: data.name
  //   });
  // });
 
  return (
    <div className="js-weather">
      
    </div>
  )
}

export default Weather;