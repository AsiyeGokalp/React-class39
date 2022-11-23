import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>

    </div>
  );
}

export default App;
