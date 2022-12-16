import React from "react";
import "./App.css";
import Item from "./Components/Item";
import Menu from "./Components/Menu";
import bed from "./Assets/items_icons/Bed.png";

const App = () => {
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
      </section>
    </div>
  );
};

export default App;
