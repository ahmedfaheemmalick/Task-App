import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList/TaskList";
import Task from "./Interfaces/TaskType.interface";
import { useSelector } from "react-redux";

const App = () => {
  const Tasks = useSelector((state: Task[]) => state);

  return (
    <div>
      <Header />
      <TaskList tasks={Tasks} />
    </div>
  );
};

export default App;
