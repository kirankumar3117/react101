import React, { useEffect, useState } from "react";
import styles from "./taskHeader.module.css";


const TaskHeader = ({data,setData}) => {
  // sample values to be replaced
  
  var count=0;

  data.filter(e=>{
    return e.done!==true ? count=count+1 : null;
  })
  
  let totalTask=data.length;
  let unCompletedTask=count;

 



  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
     <h1>Todo List</h1>
     <div>
     You have <b data-cy="header-remaining-task">{unCompletedTask}</b>  of    
           <b data-cy="header-total-task">{" "+ totalTask}</b> tasks remaining
     </div>
      
    </div>
  );
};

export default TaskHeader;
