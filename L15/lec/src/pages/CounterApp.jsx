import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { COUNTER_INC,COUNTER_DEC } from '../store/action.type';
import { counterdec, counterinc } from '../store/actions';

const CounterApp = () => {

const dispatch=useDispatch();
const count=useSelector((state)=>state.counter.counter)
  return (
    <div>CounterApp:{count}
    <button onClick={()=>{
        dispatch(counterinc())
    }}>+</button>
    <button
    onClick={()=>{
        dispatch(counterdec())
    }}>-</button>
    </div>
  )
}

export default CounterApp