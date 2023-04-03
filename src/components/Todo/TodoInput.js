import { useState, useEffect, useCallback } from 'react';

import TodoList from './TodoList';
import './TodoInput.scss';

function TodoInput({todosItems, todos, onInsert}) {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    }, 
  []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); //value 초기화
      const itemsUl = document.querySelector('.js-toDoList ul');
      setTimeout(() => {
        itemsUl.scrollTo(0, itemsUl.scrollHeight);
      }, 10);
      //기본이벤트(새로고침) 방지
      e.preventDefault();
    }, 
  [onInsert, value]);

  const resizeTodoPanel = () => {
    const todoPanel = document.querySelector('.todo-panel');
    const todoListWrap = todoPanel.querySelector('.todo-list-wrap');
    const todoInputWrap = todoPanel.querySelector('.todo-input-wrap');
    todoPanel.style.height = todoListWrap.offsetHeight + todoInputWrap.offsetHeight + 'px';
  }
 
  const btnHandler = (e) => {
    const wrapper = e.target.previousElementSibling;
    const settingWrap = e.target.closest('.App').querySelector('.region .setting');
    settingWrap.classList.remove('active');
    if(wrapper.classList.contains('active')) {
      setTimeout(() => {
        wrapper.classList.remove('active');
      }, 10);
      wrapper.classList.remove('fade-in');
      wrapper.querySelector('ul').style.maxHeight = '';
    } else {
      wrapper.classList.add('active');
      setTimeout(() => {
        wrapper.classList.add('fade-in');
      }, 10);
      wrapper.querySelector('ul').style.maxHeight = '100px';
    }
  }
  
  useEffect(() => {
    resizeTodoPanel();
  });

  return(
    <div className="todo-wrap">
      <div className="todo-panel">
        <TodoList todosItems={todosItems} />
        <div className="todo-input-wrap">
          <form className="js-todo-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a to-do." onChange={onChange} value={value} />
          </form>
        </div>
      </div>
      <button type="button" className="btn-todo" onClick={btnHandler}>ToDo</button>
    </div>
  )
}

export default TodoInput;
