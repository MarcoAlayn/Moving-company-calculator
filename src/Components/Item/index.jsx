/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { incrementValues, decrementValues } from '../../Redux/Actions';

const Item = ({icon,name,valueM2}) => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0);
      
  const increment = () => {
    setCount(count + 1);
    dispatch(incrementValues(valueM2))
  };

  const decrement = () => {
    if(count > 0)
    setCount(count - 1);
    dispatch(decrementValues(valueM2))
  };
  
   
    return (
    <div>
        <div>
        <img src={icon} alt={name} />
        <span>{name}</span>
        </div>

        <div>
        <button onClick={decrement}> - </button>
              <span>{count}</span>
              <button onClick={increment}> + </button>
        </div>
    </div>
  )
}
export default Item
