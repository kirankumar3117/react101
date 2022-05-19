import React from 'react'
import "./style.css"
import {AiOutlineAmazon,AiOutlineArrowRight} from "react-icons/Ai"

const Amazon = ({m,state,month}) => {
    console.log(m,)
  return (
    <div className='container'>
        <div className='left'>
            <p>{m[2]+"/"+month+"/"+m[3]}</p>
            <button>Case Study</button>
            <h1>Amazon Gift</h1>
            <h1>Pay</h1>
            <p>Desktop - Mobile</p>
        </div>
        <div className='right'>
            <AiOutlineAmazon size="80px"/>
            <AiOutlineArrowRight size="40"/>
        </div>
    </div>
  )
}

export default Amazon