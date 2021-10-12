import { FC } from "react";
import TaskType from "../../Interfaces/TaskType.interface";
import { store } from "../../Store/index";
import styles from "./Task.module.css";

interface Props {
  task: TaskType;
  archiveTask: any;
  pinTask: any;
}

const Task: FC<Props> = ({ task, archiveTask, pinTask }) => {
  return (
    <div className={styles.task}>
      <p>{task.task}</p>
      <p>{task.state}</p>
      <button onClick={() => store.dispatch(archiveTask(task.id))}>
        Archive task
      </button>
      <button onClick={() => store.dispatch(pinTask(task.id))}>Pin task</button>
    </div>
  );
};

export default Task;
