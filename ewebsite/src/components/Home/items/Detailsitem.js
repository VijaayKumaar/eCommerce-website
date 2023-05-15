
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import MyImage from "../../MyImage";
import { ProductContext } from "../../../context/ProductProvider";
import "../items/Items.css"
import AddToCart from "../../Addtocart/Addcart";
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProduct, isSingleLoading, singleProduct } = useContext(
    ProductContext
  );

  const {
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <h1>Loading...</h1>;
  }

  return (


    <div className="single-product">
      <div className="card">

        <div className="ProductImage">
          <MyImage imgs={image} />
        </div>


        <div className="details">
          <h1>Name: {name ? name.charAt(0).toUpperCase() + name.slice(1) : ''}</h1>
          <p className="rating">Stars{stars}</p>
          <p className="price"><span style={{ color: "blue", fontWeight: "bold" }}>Deal of the Day</span>MRP₹:{price}</p>
          <p className="description" >{description}</p>
          <p><span style={{ color: "blue", fontWeight: "bold" }}>Stock:</span>{stock}</p>
          <p style={{ fontWeight: 'bold' }}>Company: {company}</p>

          <p style={{ fontWeight: "bold" }}>Reviews:{reviews}</p>
          <hr />
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
    </div>



  );
};

export default SingleProduct;
