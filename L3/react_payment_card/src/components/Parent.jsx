import React from 'react'
import Amazon from './Amazon'
import "../App.css"
import Apple from './Apple'

const Parent = () => {
   const m=Date().split(" ")
  const state=false;
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
  return (
    <div>
        <Amazon m={m} state={state} month={month}/>
        <Apple m={m} state={state}/>
    </div>
  )
}

export default Parent