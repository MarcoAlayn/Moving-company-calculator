import React from "react";
import { resetValues } from "./Redux/Actions";
import { useDispatch } from "react-redux";
import "./App.css";
// ↓ components ↓
import Item from "./Components/Item";
import Menu from "./Components/Menu";
import Summary from "./Components/Summary";
import Footer from "./Components/Footer";
// ↓ images & icons ↓
import iconMenu from "./Assets/menu.png";
import Logo from "./Assets/Logo.png";
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
import imgTwitter from "./Assets/social_Icons/Twitter.png";
import imgFacebook from "./Assets/social_Icons/Facebook.png";
import imgInstagram from "./Assets/social_Icons/Instagram.png";
import imgWhatsApp from "./Assets/social_Icons/WhatsApp.png";

// The App component is the main component of the application.
// It renders the menu, the items list, the buttons to clear and calculate the values,
// the Summary component to show the total amount of items and their associated
// values and the Footer component with links to social media.
// It also dispatches the resetValues action when the clear button is clicked.

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <Menu logo={Logo} menu={iconMenu} />
      <div className="main-text">
        <h1>What items to store?</h1>
        <p>
          Select which items you wish to store before moving to <br /> your new
          home. We’ll keep ’em safe!
        </p>
      </div>
      <section className="items-container">
        <Item icon={bed} name={"Beds"} valueM2={1.2} />
        <Item icon={refridegator} name={"Refridegator"} valueM2={1} />
        <Item icon={furniture} name={"Furniture"} valueM2={0.5} />
        <Item icon={oven} name={"Oven"} valueM2={0.6} />
        <Item icon={sofa} name={"Sofa"} valueM2={1.5} />
        <Item icon={tv} name={"TV"} valueM2={0.25} />
        <Item icon={washerDryer} name={"Washer"} valueM2={0.5} />
        <Item icon={dining} name={"Dining"} valueM2={2} />
        <Item icon={desk} name={"Desk"} valueM2={0.75} />
        <Item icon={wardrobe} name={"Wardrobe"} valueM2={3.2} />
      </section>

      <div className="buttons-container">
        <button onClick={() => dispatch(resetValues())}>Clear</button>
        <button>Calculate</button>
      </div>
      <div>
        <Summary />
      </div>

      <div>
        <Footer
          logo={Logo}
          imgTwitter={imgTwitter}
          imgFacebook={imgFacebook}
          imgInstagram={imgInstagram}
          imgWhatsApp={imgWhatsApp}
        />
      </div>
    </div>
  );
};

export default App;
