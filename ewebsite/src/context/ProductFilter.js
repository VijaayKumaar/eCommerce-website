

import { createContext, useContext, useReducer, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import filterReducer from "./FilterRrducer";

const ProductFilterContext = createContext();

export const ProductFilterProvider = ({ children }) => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
  };
  const [state, dispatch] = useReducer(filterReducer, initialState);
  
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <ProductFilterContext.Provider value={{ ...state }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductFilterContext);
};
