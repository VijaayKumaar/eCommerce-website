

import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import ProductReducers from '../redux/action/reducers/ItemsReducrs';

export const ProductContext = React.createContext();
const API = "https://api.pujakaitem.com/api/products";
const ProductProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts:[],
    isSingleLoading: false,
    singleProduct: {},
  };
  const [state, dispatch] = useReducer(ProductReducers, initialState);

  const getProducts = async (url) => {
    dispatch({ type : "SET_LOADING"});
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.get(url);
      dispatch({ type: "SUCCESS", payload: response.data });
      // Extract the featureProducts from the response data and store in the state
      const featureProducts = response.data.filter(product => product.isFeatured);
      dispatch({ type: "SET_FEATURE_PRODUCTS", payload: featureProducts });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
    getSingleProduct(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state , getSingleProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;