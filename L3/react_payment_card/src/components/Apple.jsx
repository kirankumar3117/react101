import React from 'react'
import{AiOutlineArrowRight,AiFillApple} from "react-icons/Ai"
import "./style.css"

const Apple = ({m,state}) => {
    state=(!state)
  return (
    <div className='container1'>
    <div className='left'>
        <p>{m[2]+" "+m[1]+" "+m[3]}</p>
        <button>Case Study</button>
        <h1>Apple Gift</h1>
        <h1>Pay</h1>
        <p>Desktop - Mobile</p>
    </div>
    <div className='right'>
         <AiFillApple size="80px"/>
        <AiOutlineArrowRight size="40"/>
    </div>
</div>
  )
}

export default Apple