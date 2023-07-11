import classes from './MealForm.module.css'
import Input from '../UI/Input';
const MealForm =(props)=>{
 return <form className={classes.form}>
    <Input label="Amount" 
        id='amount'
        type='number'
        min='1'
        max='10'
        step='1'
    />
    <button>
       +  Add 
    </button>
 </form>
}
export default MealForm;