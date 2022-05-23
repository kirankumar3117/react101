import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({edata}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task" className={styles.task}>
      <div>
      <input type="button" data-cy="task-checkbox" className={styles.toggle}/>
      <div data-cy="task-text" className={styles.text}>{edata.text}</div>
      <Counter count={edata.count}/>
      <button data-cy="task-remove-button" className={styles.remove}>-</button>
      </div>
    </div>
  );
};

export default Task;
