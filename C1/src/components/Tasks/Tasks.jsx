import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
import Counter from "../Counter/Counter"

const Tasks = ({setData,data}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      {data.length !=0 ? 
      <div data-cy="tasks" className={styles.tasks}>
       {data.map(e=>{
         return  <Task edata={e} setData={setData} data={data}/>
       })}
      </div>
     : <div data-cy="tasks-empty" className={styles.empty}>
       Please Add Tasks ...
      </div> }
    </>
  );
};

export default Tasks;
