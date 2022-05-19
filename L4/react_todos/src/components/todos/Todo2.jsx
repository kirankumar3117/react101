import React, { useState } from 'react'

const Todo2 = ({list2,setList2}) => {
    const [state,setState]=useState(true)
  return (
    <div><button onClick={()=>{
        setState(!state)
    }}><h1>{state==true ? "Hide Completed":"Show Completed"}</h1></button>
    
    {state==true ? <div>{list2.map(e=>{
        return <div>{e.value}</div>
    })}</div> : null}
    
    </div>
  )
}

export default Todo2