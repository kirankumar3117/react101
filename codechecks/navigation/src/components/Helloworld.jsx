import React from 'react'
import { Router, useNavigate } from 'react-router-dom'

const Helloworld = ({changeState1}) => {
    var nav=useNavigate()
  return (
    <div>Helloworld

        <button onClick={function(){changeState1();nav("/hello")}}>show</button>
    </div>
  )
}

export default Helloworld