import CartIcon from "../Cart/CartIcon.js";
import classes from './HeaderCart.module.css'
import React, { useContext } from "react";
import CartContext from '../../store/cart-context.js'

const HeaderCart = (props) => {
  const ctxCart = useContext(CartContext)
  let amount=0;
  ctxCart.items.forEach(item => {
    amount = amount + Number(item.amount);
})
  return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{amount}</span>
      </button>
  );
};

export default HeaderCart;
