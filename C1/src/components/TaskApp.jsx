import React, { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import TaskHeader from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks"

import jsondata from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  let [data,setData]=useState([])
 
useEffect(()=>{
    setData([...jsondata])
},[])
  
  


  return (
    <div data-cy="task-app" className={styles.taskApp}>
    
     <TaskHeader/>
     <AddTask setData={setData} data={data}/>
      <Tasks setData={setData} data={data}/>
    </div>
  );
};

export default TaskApp;
