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
  totalAmount=totalAmount.toFixed(2)
  const cartItems = <ul className={classes['cart-items']}>{
    ctxCart.items.map(item => {
        return <li key={item.id}><div className={classes.nameAndPrice}>
        <span className={classes.itemName}>{item.name}</span>
        {/* <span className={classes.itemPrice}>{`${(item.price * item.amount).toFixed(2)}`}</span> */}
    </div>
    <div className={classes.quantityAndButtons}>
        <span>{item.price}</span>
        <span className={classes.amount}> {item.amount}</span>
        
        <span></span>
        <div className={classes.buttons}>
            <button onClick={() => ctxCart.addCart(item)}>+</button>
            <button  onClick={() => ctxCart.removeItem(item.id)}>-</button>
        </div>
    </div>
    <hr/></li>})
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
