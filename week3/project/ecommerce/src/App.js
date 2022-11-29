import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom'
import FavoriteProducts from './favoritedProducts'
import { FavoriteProductProvider } from './favoriteProductContext'


function App() {
  return (
    <div className="App">
      <FavoriteProductProvider>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path="/favorite" element={<FavoriteProducts />} />
        </Routes>
      </FavoriteProductProvider>


    </div>
  );
}

export default App;
