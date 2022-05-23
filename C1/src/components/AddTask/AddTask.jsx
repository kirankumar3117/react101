import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({setData,data}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [input,setInput]=useState("")
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  console.log(data)

  return (
    <div className={styles.addTask}>
      <input data-cy="add-task-input" type="text" placeholder="Add Tasks.." onChange={handleChange} value={input}/>
      <button data-cy="add-task-button" onClick={()=>{
       let payload={
         id:data.length+1,
         text:input,
         done:false,
         count:0
       }
       data=[payload,...data]
       setData([...data])
        setInput("")
      }}>+</button>
      <hr font-weight="100" height="0.5px"/>
    </div>
  );
};

export default AddTask;
