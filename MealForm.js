import classes from "./MealForm.module.css";
import Input from "../UI/Input";
import { useContext} from "react";
import CartContext from "../../store/cart-context";
const MealForm = (props) => {
   const ctxCart=useContext(CartContext)
   const addToCart=(e)=>{
      e.preventDefault()
      let amount = document.getElementById('amount' + props.item.id).value;
      ctxCart.addItem({...props.item, amount:amount});
   }
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount' + props.item.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
      }}
      />
      <button onClick={addToCart}>+ Add</button>
    </form>
  );
};
export default MealForm;
