import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Item from "./Components/Item";
import Menu from "./Components/Menu";
import bed from "./Assets/items_icons/Bed.png";
import refridegator from "./Assets/items_icons/Refridegator.png";

const App = () => {
  // const totalFormItems = useSelector((state) => state.totalItems);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("montado");
  //   if (totalFormItems === 0) {
  //     // dispatch(resetValues());
  //   }
  // }, [dispatch]);

  return (
    <div>
      <Menu />
      <div>
        <h1>What items to store?</h1>
        <p>
          Select which items you wish to store before moving to your new home.
          We’ll keep ’em safe!
        </p>
      </div>
      <section>
        <Item icon={bed} name={"Bed"} valueM2={1.2} />
        <Item icon={refridegator} name={"Refridegator"} valueM2={1} />
      </section>
    </div>
  );
};

export default App;
