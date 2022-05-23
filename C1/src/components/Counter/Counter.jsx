import React from "react";
import styles from "./counter.module.css";

const Counter = ({count,data,setData,ele}) => {
  // sample value to be replaced
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"
      onClick={()=>{
      {ele.done==false ? data.filter(e=>{
        return e.id==ele.id && e.count > 0 ? e.count=e.count-1 : null;
      })
       && setData([...data]) : null}
      }}
      >-</button>
      <span data-cy="task-counter-value">{" "+count+" "}</span>
      <button data-cy="task-counter-decrement-button"
      onClick={()=>{
        {ele.done==false ? data.filter(e=>{
          return e.id==ele.id ? e.count=e.count+1 : null;
        })
        && setData([...data]) : null}
        }}
      >+</button>
    </div>
  );
};

export default Counter;
