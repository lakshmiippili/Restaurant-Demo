import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );
  const ctxCart=useContext(CartContext)
  let totalAmount= 0
  for( const item  of ctxCart.items){
    totalAmount += item.price *Number(item.amount)
  }
  const cartItems = <ul className={classes['cart-items']}>{
    ctxCart.items.map(item => {
        return <li key={item.id}>Name: {item.name} Price: {item.price} Amount: {item.amount}</li>})
}</ul>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
