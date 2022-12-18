/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementValues, decrementValues } from "../../Redux/Actions";
import "./item.css";
import subtract from "../../Assets/counter_icons/subtract.svg"
import add from "../../Assets/counter_icons/add.svg"

const Item = ({ icon, name, valueM2 }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const itemCountState = useSelector((state) => state.itemCount);

  const increment = () => {
    setCount(count + 1);
    dispatch(incrementValues(valueM2));
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    // This check helps to avoid unnecessary code execution,
    // since the action will only be dispatched if the count is not 0.
    if (count !== 0) dispatch(decrementValues(valueM2));
  };
  const resetCount = () => {
    if (itemCountState !== "initCount") setCount(0);
  };

  useEffect(() => {
    resetCount();
  }, [dispatch, itemCountState]);

  return (
    <div className="item-container">
      <div className="description-container">
        <img src={icon} alt={name} />
        <br />
        <span>{name}</span>
      </div>

      <div className="counter-container">
        <button className="substract" onClick={decrement}>
       <img src={subtract} alt="subtract" />
        </button>
        <span>{count}</span>
        <button className="add" onClick={increment}>
         <img src={add} alt="add" />
        </button>
      </div>
    </div>
  );
};
export default Item;
