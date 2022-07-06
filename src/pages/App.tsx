import { useState } from "react";
import CustomForm from "../components/CustomForm";
import CustomList from "../components/CustomList";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([]);

  return (
    <div className={style.AppStyle}>
      <CustomForm setTasks={setTasks} />
      <CustomList tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
