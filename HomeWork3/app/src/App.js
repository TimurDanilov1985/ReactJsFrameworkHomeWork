import './App.css';
import TemperatureConverter from './components/temperatureConverterComp/temperatureConverter';
import TodoList from './components/todoListComp/todoList';

function App() {
  return (
    <div className="App center">
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
