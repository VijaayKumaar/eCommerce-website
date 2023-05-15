
import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductProvider";
import Product from "./Product";

const FeatureProducts = () => {
  const { featureProducts, isLoading, isError } = useContext(ProductContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching feature products data</div>;
  }

  return (
    <div className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
