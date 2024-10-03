import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Addproduct from './components/addProductComp/Addproduct';
import ProductList from './components/productsListComp/ProductList';
import './components/editingProductComp/style.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Addproduct/>
        <ProductList/>
      </div>
    </Provider>
  );
}

export default App;
