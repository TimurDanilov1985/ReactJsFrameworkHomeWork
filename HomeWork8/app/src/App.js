import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/headerComp/Header';
import Index from './pages/Index';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
