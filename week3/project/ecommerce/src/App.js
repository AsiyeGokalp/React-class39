
import './App.css';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom'
import FavoriteProducts from './pages/favoritedProducts'
import Navigation from './components/navigation';
import { FavoriteProductProvider } from './contex/favoriteProductContext'


function App() {
  return (
    <div className="App">
      <Navigation />
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
