import React from "react";
import Card from "./card";

const Cart = ({ cartItems }) => {
  let totalPrice = 0;
  totalPrice = cartItems.map((e, i) => totalPrice + Number(e.finalPrice));
  let discount = 0;
  discount = cartItems.map((e, i) => discount + Number(e.discount));
  let originalPrice = 0;
  originalPrice = cartItems.map(
    (e, i) => originalPrice + Number(e.strickPrice)
  );
  return (
    <div className="cartPage">
      <div className="cartItemsList">
        {cartItems.length === 0
          ? null
          : cartItems.map((e, i) => <Card key={i} {...e} />)}
      </div>
      <div className="calculation">
        <p>Total Items {cartItems.length}</p>
        <p>Total Original Price{originalPrice}</p>
        <p>Discount {discount}</p>
        <p>Total Price {totalPrice}</p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Cart;
