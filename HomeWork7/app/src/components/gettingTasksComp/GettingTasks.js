import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/slices/todosSlice';
import { deleteTask } from '../../redux/slices/todosSlice';
import { changeStatus } from '../../redux/slices/todosSlice';
import './style.css';
// import { useEffect } from 'react';

function GettingTask() {

  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function addTasks() {
    dispatch(fetchTodos());
  }

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);
  

  return (
    <div>
      <h1>Список задач</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      <ul>
        {todos.map((todo) => (
            <li className='listBlock' key={todo.id}>
              <p>Задача {todo.id}: {todo.title}</p>
              {todo.completed ? <p>Статус: Выполнено</p> : <p>Статус: Не Выполнено</p>}
              <button onClick={() => dispatch(deleteTask(todo.id))}>Удалить задачу</button>
              <button onClick={() => dispatch(changeStatus(todo.id))}>Сменить статус задачи</button>
            </li>
        ))}
      </ul>
      <button onClick={addTasks}>Получить список задач</button>
    </div>
  );
}

export default GettingTask;