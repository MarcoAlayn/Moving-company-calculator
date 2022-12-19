import React from 'react'
import { useSelector } from 'react-redux'
import "./summary.css"

// Summary is a component that displays a summary of purchase expenses.
//  It shows the number of items, the number of square meters, the sub-total, taxes,
//   total and the initial payment that must be made today.

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
        <div className='tags-container values-container text-bold'>
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