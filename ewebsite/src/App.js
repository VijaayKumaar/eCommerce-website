
// import './App.css';
// // import "./components/header/Header"
// import Header from './components/header/Header';
// import Home from './components/Home/Home';
// import { Box } from '@mui/material';

//  import DataProvider from './context/Dataprovider';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import ItemView from './components/Home/items/ItemView';


// function App() {
//   return (
//     <DataProvider>
//       <BrowserRouter>
//      <Header />
//      <Box Style={{marginTop:54}} >
//       <Routes>
//      < Route path='/' element={<Home/>}/>
//      {/* < Route path='/product/:Id'ItemView={<ItemView/>}/> */}
//      <Route path= '/product/:id' element={<ItemView />} />
//      </Routes>
//      </Box>
//      </BrowserRouter>
//     </DataProvider>
//   );
// }

// export default App;

// import './App.css';
// import Header from './components/header/Header';
// import Home from './components/Home/Home';
// import { Box } from '@mui/material';
// import DataProvider from './context/Dataprovider';
// import ProductProvider from './context/ProductProvider';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProductList from './components/Test/ProductProvider';

// import DetailsItem from './components/Home/items/DetailsItem';
// function App() {
//   return (
//     <DataProvider>
     
//       <BrowserRouter>
//         <Header />
//         <Box >
//           <Routes>
//             <Route path="/" element={<Home />} />
           
//       {/* <Route path='product/:id' element={<DetailsItem/>} /> */}
//           </Routes>
          
//         </Box>
//       </BrowserRouter>
 
//     </DataProvider>
//   );
// }

// export default App;









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

