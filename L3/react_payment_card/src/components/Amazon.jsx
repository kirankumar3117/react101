import React from 'react'
import "./style.css"
import {AiOutlineAmazon,AiOutlineArrowRight} from "react-icons/Ai"

const Amazon = ({result}) => {
 
   
  return (
    <div>
    {result.map(list=>(
       <div className={list[9]}>
       <div className={list[8]}>
           <p>{list[7]}</p>
           <button>Case Study</button>
           <h1>{list[6]}</h1>
           <h1>{list[5]}</h1>
           <p>{list[4]}</p>
       </div>
       <div className={list[3]}>
          {list[2]}
          {list[1]}
       </div>
   </div>
    ))}
    </div>
   
   
  )
}

export default Amazon