import { useState, useCallback } from 'react';

import NavWrap from './NavWrap';
import SetView from './SetView';
import './Setting.scss';

function Setting( { getCptGreet, getCptWeather, getCptTodo, getMer, getSec, weathersInfo, todos, todoReset }) {
  // 컴포넌트 세팅(데이터 상위 전달)
  const cmpntVwLS_Greeting = localStorage.getItem('componentGreeting') === 'true' ? true : false;
  const cmpntVwLS_Weather = localStorage.getItem('componentWeather') === 'true' ? true : false;
  const cmpntVwLS_Todo = localStorage.getItem('componentTodo') === 'true' ? true : false;
  const [cmpntVwGreeting, setCmpntVwGreeting] = useState(cmpntVwLS_Greeting);
  const [cmpntVwWeather, setCmpntVwWeather] = useState(cmpntVwLS_Weather);
  const [cmpntVwTodo, setCmpntVwTodo] = useState(cmpntVwLS_Todo);
  const setCmpGreet = (x) => {
    setCmpntVwGreeting(x);
    getCptGreet(cmpntVwGreeting);
  }
  const setCmpWeather = (x) => {
    setCmpntVwWeather(x);
    getCptWeather(cmpntVwWeather);
  }
  const setCmpTodo = (x) => {
    setCmpntVwTodo(x);
    getCptTodo(cmpntVwTodo);
  }

  // Clock 세팅(데이터 상위 전달)
  const viewMerLS = (localStorage.getItem('viewMeridiem') === 'true' ? true : false);
  const viewSecLS = (localStorage.getItem('viewSec') === 'true' ? true : false);
  const [clockMer, setClockMer] = useState(viewMerLS);
  const [clockSec, setClockSec] = useState(viewSecLS);
  const chkClockMer = (x) => {
    setClockMer(x);
    getMer(clockMer);
  }
  const chkClockSec = (x) => {
    setClockSec(x);
    getSec(clockSec);
  }

  // Todo 
  const onTodoReset = useCallback(
    e => {
      todoReset(e);
    }, 
  [todoReset]);
    
  

  // 세팅 메뉴 및 패널
  const toggleCls = (e) => {
    e.stopPropagation();
    const set = e.target.closest('.setting');
    const settingPanel = set.querySelector('.setting-panel');
    set.classList.contains('active') ? set.classList.remove('active') : set.classList.add('active');
    settingPanel.style.width = window.innerWidth - 14 + "px";
    settingPanel.style.height = "";
    setItemsInit(settingPanel);
  }

  const setItemsInit = (el) => {
    const itemMenu = el.querySelectorAll('.nav-wrap a');
    const itemView = el.querySelectorAll('.setting-view .set-cont');
    itemMenu.forEach(elm => {
      elm.parentElement.tagName === 'LI' ? elm.parentElement.classList.remove('active') : elm.classList.remove('active');
    });
    itemView.forEach(elm => {
      elm.classList.remove('active');
    });
    itemMenu[0].parentElement.classList.add('active');
    itemView[0].classList.add('active');
  }

  const panelHandler = (e) => {
    e.stopPropagation();
  }

  return (
    <div className="setting">
      <div className="setting-panel-wrap">
        <div className="setting-panel" onClick={panelHandler}>
          <NavWrap />
          <SetView 
            setCmpGreet={setCmpGreet}
            setCmpWeather={setCmpWeather}
            setCmpTodo={setCmpTodo}
            chkClockMer={chkClockMer}
            chkClockSec={chkClockSec}
            weathersInfo={weathersInfo}
            todos={todos}
            onTodoReset={onTodoReset}
          />
        </div>
      </div>
      <button type="button" onClick={toggleCls}><i className="icon">Setting</i></button>
    </div>
  )
}

export default Setting;