import Header from "./components/Layout/Header";
import {Fragment, useState} from "react";
import Meals from './components/Meals/Meals'
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [isCartOpen,setIsCartOpen] =useState(false)
  const showCartHandler =()=>{
    setIsCartOpen(true)
  }
  const hideCartHandler =()=>{
    setIsCartOpen(false)
  }
  return (
    <CartProvider>
      <Header onOpen={showCartHandler}/>
      {isCartOpen && <Cart onClose={hideCartHandler}/>}
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
