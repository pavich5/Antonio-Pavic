"use client";
import React, { useEffect, useState } from "react";
import { Coffee } from "../products/page";
import "./cardPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Coffee[]>([]);
  const [itemQuantities, setItemQuantities] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const removeFromCart = (product: Coffee) => {
    const updatedCartItems = cartItems.filter(
      (cartItem: Coffee) => cartItem.id !== product.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const updateQuantity = (product: Coffee, quantity: number) => {
    const updatedQuantities = { ...itemQuantities, [product.id]: quantity };
    setItemQuantities(updatedQuantities);
  };

  const calcTotalPrice = () => {
    const totalPrice = cartItems.reduce((sum, cartItem) => {
      const quantity = itemQuantities[cartItem.id] || 1;
      return sum + cartItem.price * quantity;
    }, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cartPage">
      <h1>Shopping Cart</h1>
      {cartItems.map((cartItem: Coffee) => (
        <div key={cartItem.id} className="cartItem">
          <img src={cartItem.picture} alt={cartItem.type} />
          <h2>{cartItem.type}</h2>
          <p>{cartItem.details}</p>
          <p className="price">${cartItem.price.toFixed(2)}</p>
          <input
            type="number"
            value={itemQuantities[cartItem.id] || 1}
            onChange={(e) => updateQuantity(cartItem, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(cartItem)}>Remove</button>
          <p>
            Total Item Price: $
            {(cartItem.price * (itemQuantities[cartItem.id] || 1)).toFixed(2)}
          </p>
        </div>
      ))}
      <div className="totalPrice" data-testid={`totalPrice`}>
        <p>Total Price: ${calcTotalPrice()}</p>
      </div>
    </div>
  );
};

export default CartPage;
