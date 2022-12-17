import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
    const totalItemsState = useSelector(state => state.totalItems)
    const totalM2State = useSelector(state => state.totalM2)
    const subTotalState = useSelector(state => state.subTotal)
    const taxState = useSelector(state => state.tax)
    const totalState = useSelector(state => state.total)
    const dueTodayState = useSelector(state => state.dueToday)

  return (
    <div>
        <h2>Summary</h2>
        <div>
            <div><p>Total Items</p><p>{totalItemsState}</p></div>
            <div><p>Total m²</p><p>{totalM2State}</p></div>
            <div><p>Subtotal</p><p>{subTotalState}</p></div>
            <div><p>Tax</p><p>{taxState}</p></div>
            <div><p>Total</p><p>{totalState}</p></div>
            <div><p>Due Today 50%</p><p>{dueTodayState}</p></div>
        </div>
    </div>
  )
}

export default Summary