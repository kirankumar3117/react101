import React from 'react'
import { useNavigate } from 'react-router-dom';



const Hello = ({changeState}) => {

  var nav=useNavigate()
   
  return (
    <div>Hello


        <button onClick={function(){changeState();nav("/helloworld")}}>show</button>
    </div>
  )
}

export default Hello