import { FC } from "react";
import TaskType from "../../Interfaces/TaskType.interface";
import Task from "../Task/Task";
import { archiveTask, pinTask } from "../../Store/index";

interface Props {
  tasks: TaskType[];
}

const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task: TaskType, index: number) => (
        <Task
          key={index}
          task={task}
          archiveTask={archiveTask}
          pinTask={pinTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
