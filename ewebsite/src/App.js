















import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/Dataprovider';
import SingleProduct from './components/Home/items/Detailsitem';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductProvider from './context/ProductProvider';
import { ProductFilterProvider } from './context/ProductFilter';
import CartHistory from './components/Addtocart/CartHistory';
import { CartProvider } from './components/Addtocart/CartContext';
function App() {
  return (
    <ProductProvider>   
    <ProductFilterProvider>
     
    <DataProvider>
    <CartProvider/>
        <BrowserRouter>
          <Header />
          <Box >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CartHistory" element={<CartHistory />} />
              <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
            </Routes>
          </Box>
        </BrowserRouter>
        <CartProvider/>   
    </DataProvider>
    
    </ProductFilterProvider>
    </ProductProvider>
  );
}

export default App;

