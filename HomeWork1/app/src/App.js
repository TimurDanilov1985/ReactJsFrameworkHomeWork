import './style.css'
import Message from './components/messageComp/Message';

function App() {
  return (
    <div className="App center">
      <Message text="Надеюсь, все делаю правильно. Работает, вроде" />
      <Message text="Хорошо, что можно использовать препроцессоры для стилизации" />
    </div>
  );
}

export default App;
