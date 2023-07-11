import Header from "./components/Layout/Header";
import {Fragment, useState} from "react";
import Meals from './components/Meals/Meals'
import Cart from "./components/Cart/Cart";
function App() {
  const [isCartOpen,setIsCartOpen] =useState(false)
  const showCartHandler =()=>{
    setIsCartOpen(true)
  }
  const hideCartHandler =()=>{
    setIsCartOpen(false)
  }
  return (
    <Fragment>
      <Header onOpen={showCartHandler}/>
      {isCartOpen && <Cart onClose={hideCartHandler}/>}
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
