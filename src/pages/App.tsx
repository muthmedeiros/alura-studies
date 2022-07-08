import { useState } from "react";
import CustomForm from "../components/CustomForm";
import CustomList from "../components/CustomList";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        isSelected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <CustomForm setTasks={setTasks} />
      <CustomList tasks={tasks} selectTask={selectTask} />
      <Stopwatch selected={selected} />
    </div>
  );
}

export default App;
