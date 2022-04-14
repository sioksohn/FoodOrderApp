import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: []) => {
    return item;
  },
  removeItem: (id: string) => {
    return id;
  },
});

export default CartContext;
