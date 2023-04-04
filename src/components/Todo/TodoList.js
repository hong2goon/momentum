import { useCallback } from 'react';
import './TodoList.scss';

function TodoList({ todosItems, removeTodo }) {
  const todosLS = todosItems !== null ? (todosItems !== '' ? JSON.parse(todosItems) : []) : [];

  // const removeTodoItem = (e) => {
  //   const nodes = [...e.target.closest('ul').querySelectorAll('.btn-remove')];
  //   const idx = nodes.indexOf(e.target);
  //   let todosArr = JSON.parse(todosItems);
  //   todosArr.splice(idx, 1);

  //   localStorage.setItem('todos', JSON.stringify(todosArr));
  // }

  const removeTodoItem = useCallback(
    e => {
      removeTodo(e);
    }, 
  [removeTodo]);


  const todoItems = todosLS.map((todo) =>
    <li key={todo.id} className='todo-item'>
      <span>{todo.text}</span>
      <button type="button" className="btn-remove" onClick={removeTodoItem}>remove</button>
    </li>
  );
  return(
    <div className={todosLS.length === 0 ? 'todo-list-wrap' : 'todo-list-wrap active'}>
      <div className="js-toDoList">
        <h2>To-Do</h2>
        <ul>
          {todoItems}
        </ul>
      </div>
    </div>
  )
}

export default TodoList;