import React, { useState } from 'react'
import Todo1list from './Todo1list'
import {v4 as uuidv4} from "uuid"

const Todo1 = ({setList1,list1,handleDelete,handleremove}) => {
    const [input,setInput]=useState("")
    const handleChange=(e)=>{
        
       setInput(e.target.value)
      
    }
 
  
  return (
    <div>
        <input type="text" placeholder='Write Somthing' onChange={handleChange} /><button onClick={()=>{
            const payload={
                id:uuidv4(),
                state:false,
                value:input,
            }
            list1=[payload,...list1]
           setList1([...list1])
          
        }}>+</button>

        <Todo1list>
         {list1.map(e=>{
             return <div><button onClick={()=>handleDelete(e,e.id)}>+</button>{e.value}<button onClick={()=>handleremove(e.id)}>-</button></div>
         })}
        </Todo1list>
      

    </div>
  )
}

export default Todo1