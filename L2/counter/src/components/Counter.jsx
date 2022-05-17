import React,{useState} from 'react'
import "../App.css"

const Counter = (props) => {
    const [count,setCount]=useState(props.first)
  return (
    <div>
        <h1>Counter : <span className={count%2==0 ? "green":"red"}>{count}</span></h1>
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>increment</button>
            <button onClick={()=>{
                setCount(count-1)
            }}>decrement</button>
        </div>
        <br/>
        <button onClick={()=>{
            setCount(count*2)
        }}><h3>Double</h3></button>
    </div>
  )
}

export default Counter