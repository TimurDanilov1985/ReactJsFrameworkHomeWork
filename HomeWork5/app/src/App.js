import { Provider } from 'react-redux';
import './App.css';
import Theme from './components/themeComp/Theme';
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Theme />
      </div>
    </Provider>
  );
}

export default App;
