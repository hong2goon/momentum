import { useCallback } from 'react';
import './TodoList.scss';

function TodoList({ todosItems, onChkTodo, removeTodo }) {
  const todosLS = todosItems !== null ? (todosItems !== '' ? JSON.parse(todosItems) : []) : [];

  const onChkTodoHandler = useCallback(
    e => {
      onChkTodo(e);
    }, 
  [onChkTodo]);

  const removeTodoItem = useCallback(
    e => {
      removeTodo(e);
    }, 
  [removeTodo]);

  const todoItems = todosLS.map((todo) =>
    <li key={todo.id} className='todo-item'>
      <label>
        <input type="checkbox" className="chk-todo" checked={todo.checked} onChange={onChkTodoHandler}></input>
        <span>{todo.text}</span>
      </label>
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