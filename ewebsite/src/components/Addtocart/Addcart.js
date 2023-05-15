
import { Button } from '@mui/material';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./cart.css"

import { useCartContext } from './CartContext';



const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const handleAddToCart = () => {
    const item = {
      id: id,
      color: color,
      amount: amount,
      product: product,
    };
    addToCart(item);
  };

  return (
    <div>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? 'btnStyle active' : 'btnStyle'}
              onClick={() => setColor(curColor)}
            >
              {color === curColor && <span className="checkStyle" />}
            </button>
          ))}
        </p>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <div className="minus-button">
            <button onClick={() => setDecrease()}>-</button>
            <div className="quantity-display">{amount}</div>
            <button onClick={() => setIncrease()}>+</button>
          </div>
        </div>
        <NavLink to="/CartHistory" onClick={handleAddToCart}>
          <Button variant='standard' className="addcartbtn" style={{ backgroundColor: "#FB641B", marginLeft: "30px", color: "white" }}>Add To Cart</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddToCart;