import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";


const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.company}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;