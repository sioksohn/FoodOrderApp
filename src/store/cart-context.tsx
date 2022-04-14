import React from "react";
export type Item = { id: string; name: string; amount: number; price: number };

type CartContextProps = {
  items: Item[];
  totalAmount: number;
  addItem(item: Item): void;
  removeItem(id: string): void;
};

const CartContext = React.createContext<CartContextProps>({
  items: [],
  totalAmount: 0,
  addItem: (item: Item) => {
    return item;
  },
  removeItem: (id: string) => {
    return id;
  },
});

export default CartContext;
