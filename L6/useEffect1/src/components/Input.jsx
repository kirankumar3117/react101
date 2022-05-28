import React, { useState } from 'react'
import axios from "axios"

const Input = ({change,setChange}) => {
    const [input,setInput]=useState("")
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    const postdata=async()=>{
        await axios.post("http://localhost:8080/posts",{
            title:input,
            state:false
        })
        setChange(!change)
        setInput("")
    }
  return (
    <div>
        <input type="text" value={input} placeholder='Write Something..' onChange={handleChange} />
        <button onClick={postdata}>save</button>
    </div>
  )
}

export default Input