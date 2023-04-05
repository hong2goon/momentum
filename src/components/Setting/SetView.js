import { useCallback } from 'react';
import { useState } from 'react';

function SetView( { setCmpGreet, setCmpWeather, setCmpTodo, chkClockMer, chkClockSec, weathersInfo, todos, onTodoReset }) {
  // Compnent 세팅
  const cmpntVwLS_Greeting = localStorage.getItem('componentGreeting') === 'true' ? true : false;
  const cmpntVwLS_Weather = localStorage.getItem('componentWeather') === 'true' ? true : false;
  const cmpntVwLS_Todo = localStorage.getItem('componentTodo') === 'true' ? true : false;
  const [cmpntVwGreeting, setCmpntVwGreeting] = useState(cmpntVwLS_Greeting);
  const [cmpntVwWeather, setCmpntVwWeather] = useState(cmpntVwLS_Weather);
  const [cmpntVwTodo, setCmpntVwTodo] = useState(cmpntVwLS_Todo);
  
  const chkGreetViewHandler = (e) => {
    setCmpntVwGreeting(!cmpntVwGreeting);
    setCmpGreet(!cmpntVwGreeting);
    cmpntVwGreeting ? localStorage.setItem('componentGreeting', false) : localStorage.setItem('componentGreeting', true); 
  }
  const chkWeatherViewHandler = (e) => {
    setCmpntVwWeather(!cmpntVwWeather);
    setCmpWeather(!cmpntVwWeather);
    cmpntVwWeather ? localStorage.setItem('componentWeather', false) : localStorage.setItem('componentWeather', true); 
  }
  const chkTodoViewHandler = (e) => {
    setCmpntVwTodo(!cmpntVwTodo);
    setCmpTodo(!cmpntVwTodo);
    cmpntVwTodo ? localStorage.setItem('componentTodo', false) : localStorage.setItem('componentTodo', true); 
  }

  const cmpntStGreeting = cmpntVwLS_Greeting ? "checked" : false;
  const cmpntStWeather = cmpntVwLS_Weather ? "checked" : false;
  const cmpntStTodo = cmpntVwLS_Todo ? "checked" : false;

  // Clock 세팅
  const viewMerLS = (localStorage.getItem('viewMeridiem') === 'true' ? true : false);
  const viewSecLS = (localStorage.getItem('viewSec') === 'true' ? true : false);
  const [chkMer, setChkMer] = useState(viewMerLS);
  const [chkSec, setChkSec] = useState(viewSecLS);
  
  const chkMerHandler = (e) => {
    setChkMer(!chkMer);
    chkClockMer(!chkMer);
    chkMer ? localStorage.setItem('viewMeridiem', false) : localStorage.setItem('viewMeridiem', true);
  }
  const chkSecHandler = (e) => {
    setChkSec(!chkSec);
    chkSec ? localStorage.setItem('viewSec', false) : localStorage.setItem('viewSec', true);
    chkClockSec(!chkSec);
  }
  const chkStateMeridiem = viewMerLS ? "checked" : false;
  const chkStateSec = viewSecLS ? "checked" : false;

  const onReset = useCallback(
    e => {
      onTodoReset(e);
    }, 
  [onTodoReset]);

  return(
    <div className="setting-view">
      {/* setting */}
      <div className="set-cont setting">
        <form className="js-settingForm js-settingForm1">
          <h2>Setting</h2>
          <span>Custom your board</span>
          <h3>View</h3>
          <ul className="setting-list">
            <li>
              <span className="label"><span>Clock</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-clock" checked="checked" disabled />
                  <span>clock</span>
                </label>
              </div>
            </li>
            <li>
              <span className="label"><span>Greeting</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-greet" checked={cmpntStGreeting} onChange={chkGreetViewHandler} />
                  <span>greeting</span>
                </label>
              </div>
            </li>
            <li>
              <span className="label"><span>Weather</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-weather" checked={cmpntStWeather} onChange={chkWeatherViewHandler} />
                  <span>weather</span>
                </label>
              </div>
            </li>
            <li>
              <span className="label"><span>To-Do</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-todo" checked={cmpntStTodo} onChange={chkTodoViewHandler} />
                  <span>to-do</span>
                </label>
              </div>
            </li>
          </ul>
        </form>
      </div>
      {/* clock */}
      <div className="set-cont clock">
        <form className="js-settingForm js-settingForm2">
          <h2>Clock</h2>
          <span>Setting clock options</span>
          <h3>Options</h3>
          <ul className="setting-list">
            <li>
              <span className="label"><span>show meridiem(AM/PM)</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-meridiem" checked={chkStateMeridiem} onChange={chkMerHandler} />
                  <span>show meridiem(AM/PM)</span>
                </label>
              </div>
            </li>
            <li>
              <span className="label"><span>show seconds</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-sec" checked={chkStateSec} onChange={chkSecHandler} />
                  <span>show seconds</span>
                </label>
              </div>
            </li>
          </ul>
        </form>
      </div>
      {/* weather */}
      <div className="set-cont weather">
        <div className="js-settingForm">
          <h2 className="mg-b0">Weather</h2>
          <span>Information is taken from OpenWeather API</span>

          <ul className="weather-info">
            <li>
              <span>
                <strong>현재위치</strong>
                location
              </span>
              <span className="value">{weathersInfo.location}</span>
            </li>
            <li>
              <span>
                <strong>날씨</strong>
                weather
              </span>
              <span className="value">
                <span>{weathersInfo.weather}</span><span>({weathersInfo.weatherDesc})</span>
              </span>
            </li>
            <li>
              <span>
                <strong>현재온도</strong>
                Current temperature
              </span>
              <span className="value">
                <span>{weathersInfo.temperature}</span>
                <span className="degree">℃</span>
              </span>
            </li>
            <li>
              <span>
                <strong>체감온도</strong>
                Feeling temperature
              </span>
              <span className="value">
                <span>{weathersInfo.tempFeelLike}</span>
                <span className="degree">℃</span>
              </span>
            </li>
            <li>
              <span>
                <strong>최고기온</strong>
                Max temperature
              </span>
              <span className="value">
                <span>{weathersInfo.tempMax}</span>
                <span className="degree">℃</span>
              </span>
            </li>
            <li>
              <span>
                <strong>최저기온</strong>
                Min temperature
              </span>
              <span className="value">
                <span>{weathersInfo.tempMin}</span>
                <span className="degree">℃</span>
              </span>
            </li>
            <li>
              <span>
                <strong>일출</strong>
                sunrise
              </span>
              <span className="value">
                <span>{weathersInfo.sunrise}</span>
              </span>
            </li>
            <li>
              <span>
                <strong>일몰</strong>
                sunset
              </span>
              <span className="value">
                <span>{weathersInfo.sunset}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* todo */}
      <div className="set-cont todo">
        <div className="js-settingForm">
          <h2 className="mg-b0">To-Do</h2>
          <span>Break your goals into manageable</span>

          <ul className="sett-todo">
            <li>
              <span>total</span>
              <strong>{todos.length}</strong>
            </li>
            <li>
              <span>complete</span>
              <strong></strong>
            </li>
            <li>
              <span>reset</span> 
              <strong>
                <button type="button" className="btn-reset" onClick={onReset}>RESET</button>
              </strong>
            </li>
          </ul>
        </div>
      </div>
      {/* about */}
      <div className="set-cont about">
        <div className="js-settingForm">
          <h2 className="mg-b0">About</h2>
          <span className="app-title">Personal Dashboard</span> <span className="app-version">V1.0.0</span>
          <h3>Info</h3>
          <span>This project is clone coding</span>
          <ul className="list-txt">
            <li>Origin service : <a href="https://momentumdash.com/" target="_blank" rel="noreferrer noopener">MOMENTUM</a></li>
            <li>Reference : <a href="https://www.youtube.com/playlist?list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK" target="_blank" rel="noreferrer noopener">Nomad Coder - JS Basics</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SetView;