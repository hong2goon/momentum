import './TodoList.scss';

function TodoList({ todosItems }) {
  const todosLS = todosItems !== null ? (todosItems !== '' ? JSON.parse(todosItems) : []) : [];
  const todoItems = todosLS.map((todo) =>
    <li key={todo.id} className='todo-item'>
      <span>{todo.text}</span>
      <button type="button" className="btn-remove">remove</button>
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