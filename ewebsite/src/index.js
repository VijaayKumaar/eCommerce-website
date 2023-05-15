import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/action/reducers/constants/Store';
import AddToCart from './components/Addtocart/Addcart';
import { CartProvider } from './components/Addtocart/CartContext';
import ProductProvider from './context/ProductProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <ProductProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ProductProvider>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './redux/action/reducers/constants/Store';
// import AddToCart from './components/Addtocart/Addcart';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AddToCart />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
