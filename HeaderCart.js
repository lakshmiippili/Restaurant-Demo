import CartIcon from "../Cart/CartIcon.js";
import classes from './HeaderCart.module.css'
import React from "react";

const HeaderCart = (props) => {
  return (
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
  );
};

export default HeaderCart;
