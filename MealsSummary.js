import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, delivered to You!</h2>
      <p>
        Choose you favorite meals from our selection of available meals and enjoy
        a delicious lunch or dinner at your home
      </p>
      <p>
        All our meals are cooked with high qaulity ingresdients freshly by
        experienced chefs with a feel of home made
      </p>
    </section>
  );
};

export default MealsSummary;
