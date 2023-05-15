import React from 'react';
import { useCartContext } from './CartContext';
// Import CSS file for styling

import "./addCart.css"
const CartHistory = () => {
  const { cartItems } = useCartContext();




  return (

    <div className="container " style={{ marginTop: '100px' }} >
      <h2 style={{ textAlign: "center" }}>Your Items</h2> {/* Heading */}
      <div className="cart_history"> {/* Container for cart items */}
        {cartItems.map((item) => (
          <div key={item.id} className="cart_item"> {/* Individual cart item */}
            <div className="item_info"> {/* Item information */}
              <p className="item_name">Item: {item.product.name}</p>
              <p className="item_price">Price:₹ {item.product.price}</p>
              <p className="item_amount">Amount: {item.amount}</p>
              <p className="total_value">Total Price:₹ {item.product.price * item.amount}</p>

            </div>
            <div className="item_image">

              <img className='image' src={item.product.image} alt={item.product.name} />
              <button className='cartbtn ' >buy now</button>

            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>

  );
};

export default CartHistory;
