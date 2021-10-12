import { FC } from "react";
import { AnyAction } from "redux";
import TaskType from "../../Interfaces/TaskType.interface";
import { store } from "../../Store/index";
import styles from "./Task.module.css";

interface Props {
  task: TaskType;
  archiveTask: (id: number) => AnyAction;
  pinTask: (id: number) => AnyAction;
}

const Task: FC<Props> = ({
  task: { task, state, id },
  archiveTask,
  pinTask,
}) => {
  return (
    <div className={styles.task}>
      <p>{task}</p>
      <p>{state}</p>
      <button onClick={() => store.dispatch(archiveTask(id))}>
        Archive Task
      </button>
      <button onClick={() => store.dispatch(pinTask(id))}>Pin Task</button>
    </div>
  );
};

export default Task;
