import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({setData,data}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [input,setInput]=useState("")
  var m;
  const handleChange=(e)=>{
    m=(e.target.value)
    setInput(m)
  }


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
       data.filter(e=>{
        return  e.text==input ? alert("Data Already Exists") : null;
       })
       input.length> 0 ? data=[payload,...data]: alert("Wrte Something")
     
       setData([...data])
        setInput("")
      }}>+</button>
      <hr font-weight="100" height="0.5px"/>
    </div>
  );
};

export default AddTask;
