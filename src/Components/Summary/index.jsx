import React from 'react'
import { useSelector } from 'react-redux'
import "./summary.css"

const Summary = () => {
    const totalItemsState = useSelector(state => state.totalItems)
    const totalM2State = useSelector(state => state.totalM2)
    const subTotalState = useSelector(state => state.subTotal)
    const taxState = useSelector(state => state.tax)
    const totalState = useSelector(state => state.total)
    const dueTodayState = useSelector(state => state.dueToday)

  return (
    <div className='summary-container'>
        <h2>Summary</h2>
        <div className='values-container text-bold'>
            <div className='tag-container text-bold'><p>Total Items</p><p>{totalItemsState}</p></div>
            <div className='tag-container text-bold'><p>Total m²</p><p>{totalM2State}</p></div>
            <div className='tag-container text-bold'><p>Subtotal</p><p>${subTotalState}</p></div>
            <div className='tag-container text-bold'><p>Tax</p><p>${taxState}</p></div>
            <div className='tag-container text-bolder'><p>Total</p><p>${totalState}</p></div>
            <div className='tag-container text-bolder'><p>Due Today 50%</p><p>${dueTodayState}</p></div>
        </div>
    </div>
  )
}

export default Summary