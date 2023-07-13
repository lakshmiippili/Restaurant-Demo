import { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addToCart = (item) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      const existingItem = items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        amount: Number(existingItem.amount) + Number(item.amount),
      };

      const updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
      setItems(updatedItems);
    } else {
      setItems([...items, item]);
    }
  };
  
  const removeFromCart = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === id);
      const existingItem = prevItems[existingItemIndex];
      const updatedItems = [...prevItems];

      if (existingItem.amount === 1) {
        updatedItems.splice(existingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      }
      return updatedItems;
    });
  };
  const cartContext = {
    items: items,
    addItem: addToCart,
    removeItem: removeFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
