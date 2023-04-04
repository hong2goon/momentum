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
  const cpntTodoLS = (localStorage.getItem('componentTodo') === 'true' ? true : false);
  const [cpntGreetView, setcpntGreetView] = useState(cpntGreetLS);
  const [cpntWeatherView, setcpntWeatherView] = useState(cpntWeatherLS);
  const [cpntTodoView, setcpntTodoView] = useState(cpntTodoLS);
  const getCptGreet = (x) => {
    setcpntGreetView(!x);
  }
  const getCptWeather = (x) => {
    setcpntWeatherView(!x);
  }
  const getCptTodo = (x) => {
    setcpntTodoView(!x);
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

  let nextId = useRef(todosLS !== null ? (todosLS !== '' ? JSON.parse(todosLS).length + 1 : 1) : 0);
  if(todosLS === null || todosLS === '') {
    nextId.current = 1;
  }

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
    let todoItems = todosLS !== '' ? JSON.parse(todosLS) : [];
    localStorage.setItem('todos', JSON.stringify(todoItems.concat(todo)));
    nextId.current++; //nextId 1씩 더하기
  }, [todosLS]);

  const removeItem = useCallback((e) => {
    const nodes = [...e.target.closest('ul').querySelectorAll('.btn-remove')];
    const idx = nodes.indexOf(e.target);
    let todosArr = JSON.parse(todosLS);
    todosArr.splice(idx, 1);
    localStorage.setItem('todos', JSON.stringify(todosArr));
    nextId.current--;
  }, [todosLS]);

  const LayerHandler = (e) => {
    e.stopPropagation();
    const settingLayer = document.querySelector('.region.bottom .setting');
    if(settingLayer.classList.contains('active')) {
      settingLayer.classList.remove('active');
    }
  }

  // 라이프사이클
  useEffect(() => {
    document.title = 'Momentum (clone coding)';

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
    <div className="App" onClick={LayerHandler}>
      <div className="region flex">
        <div className="flex-item half-top">
          <Clock chkSec={getVwSec} chkMer={getVwMer} />
          {cpntGreetView === true ? <Greeting /> : null}
        </div>
        <div className="flex-item half-bottom">
          {cpntTodoView === true ? <TodoInput todosItems={todosLS} todos={todos} onInsert={onInsert} removeItem={removeItem} /> : null}
        </div>
      </div>
      <div className="region top right">
        {cpntWeatherView === true ? <Weather getWInfo={getWInfo} /> : null}
      </div>
      <div className="region bottom right">
        <Setting 
          getCptGreet={getCptGreet}
          getCptWeather={getCptWeather}
          getCptTodo={getCptTodo}
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
