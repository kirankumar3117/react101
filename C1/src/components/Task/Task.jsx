import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({edata,data,setData}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <div data-cy="task" className={styles.task}>
      <div>
   <button type="button" data-cy="task-checkbox" className={ edata.done==false ? styles.toggle : styles.toggle1}
   onClick={()=>{
     data.map(e=>{
       return e.id==edata.id ? e.done=!e.done : null;
     })

     setData([...data])
     }}
   ></button>
      <div data-cy="task-text" className={edata.done==false ? styles.text : styles.text1}>{edata.text}</div>
      <Counter count={edata.count} data={data} setData={setData} ele={edata}/>
      <button data-cy="task-remove-button" className={styles.remove}
      onClick={()=>{
        var a=data.filter(e=>{
          return e.id!=edata.id
        })
        setData([...a])
      }}
      >-</button>
      </div>
    </div>
  );
};

export default Task;
