import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props: { children: React.ReactNode }) => {
  const addItemToCartHandler = (item: []) => {
    return item;
  };

  const removeItemFromCartHandler = (id: string) => {
    return id;
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
