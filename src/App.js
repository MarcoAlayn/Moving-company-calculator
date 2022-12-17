import React from "react";
import { resetValues } from "./Redux/Actions";
import { useDispatch } from "react-redux";
import "./App.css";
import Item from "./Components/Item";
import Menu from "./Components/Menu";
import bed from "./Assets/items_icons/Bed.png";
import refridegator from "./Assets/items_icons/Refridegator.png";
import furniture from "./Assets/items_icons/Furniture.png";
import oven from "./Assets/items_icons/Oven.png";
import sofa from "./Assets/items_icons/Sofa.png";
import tv from "./Assets/items_icons/TV.png";
import washerDryer from "./Assets/items_icons/washer-dryer.png";
import dining from "./Assets/items_icons/Dining.png";
import desk from "./Assets/items_icons/Desk.png";
import wardrobe from "./Assets/items_icons/Wardrobe.png";
import Summary from "./Components/Summary";

const App = () => {
  const dispatch = useDispatch();

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
        <Item icon={furniture} name={"Furniture"} valueM2={0.5} />
        <Item icon={oven} name={"Oven"} valueM2={0.6} />
        <Item icon={sofa} name={"Sofa"} valueM2={1.5} />
        <Item icon={tv} name={"TV"} valueM2={0.25} />
        <Item icon={washerDryer} name={"Washer-dryer"} valueM2={0.5} />
        <Item icon={dining} name={"Dining"} valueM2={2} />
        <Item icon={desk} name={"Desk"} valueM2={0.75} />
        <Item icon={wardrobe} name={"Wardrobe"} valueM2={3.2} />
      </section>

      <div>
        <button onClick={() => dispatch(resetValues())}>Clear</button>
        <button>Calculate</button>
      </div>
      <div>
        <Summary />
      </div>
    </div>
  );
};

export default App;
