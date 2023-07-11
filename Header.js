import mealsImage from "../../assets/meals.jpg";
import { Fragment } from "react";
import classes from './Header.module.css'
import HeaderCart from "./HeaderCart";

const Header = (props) => {
  return (
    <Fragment >
      <header className={classes.header}>
        {" "}
        <h1>Meals Orders</h1>
        <HeaderCart onClick={props.onOpen}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Table full of delicious food!!!'/>
      </div>
    </Fragment>
  );
};

export default Header;
