import React, { useState, useEffect, useRef, useCallback } from 'react';

import Background from './components/Background/Background';
import Clock from './components/Clock/Clock';
import Greeting from './components/Greeting/Greeting';
import Weather from './components/Weather/Weather';
import TodoInput from './components/Todo/TodoInput';
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

  // Todo
  const todosLS = localStorage.getItem('todos');
  const [todos, setTodos] = useState([]);
  // const [selectedTodo, setSelectedTodo] = useState(null);
  // const [insertToggle, setInsertToggle] = useState(false);
  const nextId = useRef(1);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
    const items = todos.concat(todo);
    //localStorage.setItem('todos', JSON.parse(localStorage.getItem('todos')).push(JSON.stringify(items)));
    nextId.current++; //nextId 1씩 더하기
  }, []);

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

    // todo item 체크
    if(todosLS === null) {
      localStorage.setItem('todos', []);
    }
  }, [viewMerLS, viewSecLS, todosLS]);

  return (
    <div className="App">
      <div className="region flex">
        <div className="flex-item half-top">
          <Clock chkSec={getVwSec} chkMer={getVwMer} />
          {cpntGreetView === true ? <Greeting /> : null}
        </div>
        <div className="flex-item half-bottom">
          <TodoInput todos={todos} onInsert={onInsert} />
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
