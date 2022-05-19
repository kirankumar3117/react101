import React from 'react'
import Amazon from './Amazon'
import "../App.css"
import Apple from './Apple'
import {AiOutlineAmazon,AiOutlineArrowRight,AiFillApple} from "react-icons/Ai"

const Parent = () => {
   const m=Date().split(" ")
 
  let obj={
      "Jan":1,
      "Feb":2,
      "Mar":3,
      "Apr":4,
      "May":5,
      "Jun":6,
      "Jul":7,
      "Aug":8,
      "Sep":9,
      "Oct":10,
      "Nuv":11,
      "Des":12
  }
  var month=obj[m[1]]
  var pp=<AiOutlineAmazon size="80px"/>
  var ppp=<AiOutlineArrowRight size="40"/>
  var apple= <AiFillApple size="80px"/>
  var MI=[
    {
    1:ppp,
    2:pp,
    3:"right",
    4:"Desktop - Mobiles",
    5:"Pay",
    6:"Amazon Gift",
    7:`${m[2]}/${month}/${m[3]}`,
    8:"left",
    9:"container",
  },
{
  1:ppp,
  2:apple,
  3:"right",
  4:"MacOS - Mobiles",
  5:"Payment",
  6:"Apple Gift",
  7:`${m[2]} ${m[1]} ${m[3]}`,
  8:"left",
  9:"container1",
}
  ]

  return (
    <div>
        <Amazon result={MI}/>
       
    </div>
  )
}

export default Parent