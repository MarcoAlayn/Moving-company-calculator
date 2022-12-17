/* eslint-disable react/prop-types */
import React,{ useState, useEffect} from 'react'
import { useDispatch, useSelector,  } from 'react-redux';
import { incrementValues, decrementValues } from '../../Redux/Actions';



const Item = ({icon,name,valueM2, }) => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0);
  const x = useSelector(state => state.itemCount)    

  const increment = () => {
    setCount(count + 1);
    dispatch(incrementValues(valueM2))
  };

  const decrement = () => {
    if(count > 0){
    setCount(count - 1);}

    // This check helps to avoid unnecessary code execution, 
    // since the action will only be dispatched if the count is not 0.
    if(count !== 0)
    dispatch(decrementValues(valueM2))

  };
  const reset =() =>{
    if(x !== "initCount")
    setCount(0)
  }

  useEffect(() => {
    console.log('El estado ha cambiado', x);
    reset()
  }, [x]);

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
