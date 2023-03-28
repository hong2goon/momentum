import './TodoList.scss';

function TodoList({ todos }) {
  const items = todos.map((todo) => 
    <li key={todo.id} className='todo-item'>
      {todo.text}
    </li>
  );

  return(
    <div className={todos.length === 0 ? 'todo-list-wrap' : 'todo-list-wrap active'}>
      <div className="js-toDoList" style={{height: todos.length === 0 ? 0 : 'auto'}}>
        <h2>To-Do</h2>
        <ul>
          {items}
        </ul>
      </div>
    </div>
  )
}

export default TodoList;