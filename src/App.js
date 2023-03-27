import React, { useState, useEffect } from 'react';

import Background from './components/Background/Background';
import Clock from './components/Clock/Clock';
import Greeting from './components/Greeting/Greeting';
import Weather from './components/Weather/Weather';
import Setting from './components/Setting/Setting';
import './App.scss';



function App() {
  // component 세팅
  const cpntGreetLS = (localStorage.getItem('componentGreeting') === 'true' ? true : false);
  const cpntWeatherLS = (localStorage.getItem('componentWeather') === 'true' ? true : false);
  const [cpntGreetView, setcpntGreetView] = useState(cpntGreetLS);
  const [cpntWeatherView, setcpntWeatherView] = useState(cpntWeatherLS);
  const getCptGreet = (x) => {
    setcpntGreetView(!x);
  }
  const getCptWeather = (x) => {
    setcpntWeatherView(!x);
  }

  // Clock 세팅
  const viewMerLS = (localStorage.getItem('viewMeridiem') === 'true' ? true : false);
  const viewSecLS = (localStorage.getItem('viewSec') === 'true' ? true : false);
  const [getVwMer, setVwMer] = useState(viewMerLS);
  const [getVwSec, setVwSec] = useState(viewSecLS);
  const getMer = (x) => {
    setVwMer(!x);
  }
  const getSec = (x) => {
    setVwSec(!x);
  }

  // Weather 정보 가져오기
  const [weathersInfo, setWeathersInfo] = useState([]);
  const getWInfo = (x) => {
    setWeathersInfo(x);
  }

  // 라이프사이클
  useEffect(() => {
    document.title = 'Momentum (clone coding)';

    // component 초기화
    //if(cpntGreetLS === false) {
      //localStorage.setItem('componentGreeting', true);
    //}

    // clock 초기화
    if(viewMerLS === null) {
      localStorage.setItem('viewMeridiem', false);
    }
    if(viewSecLS === null) {
      localStorage.setItem('viewSec', false);
    }
  }, [viewMerLS, viewSecLS]);

  return (
    <div className="App">
      <div className="region flex">
        <div className="flex-item half-top">
          <Clock chkSec={getVwSec} chkMer={getVwMer} />
          {cpntGreetView === true ? <Greeting /> : null}
        </div>
        <div className="flex-item half-bottom">
          투두리스트 들어갈 자리
        </div>
      </div>
      <div className="region top right">
      {cpntWeatherView === true ? <Weather getWInfo={getWInfo} /> : null}
      </div>
      <div className="region bottom right">
        <Setting 
          getCptGreet={getCptGreet}
          getCptWeather={getCptWeather}
          getMer={getMer}
          getSec={getSec}
          weathersInfo={weathersInfo}
        />
      </div>
      <Background />
    </div>
  );
}

export default App;
