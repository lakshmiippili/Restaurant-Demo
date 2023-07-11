import Header from "./components/Layout/Header";
import {Fragment} from "react";
import MealsSummary from "./components/Meals/MealsSummary";
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <MealsSummary/>
      </main>
    </Fragment>
  );
}

export default App;
