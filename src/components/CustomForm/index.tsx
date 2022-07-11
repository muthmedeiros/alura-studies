import React, { useState } from "react";
import { ITask } from "../../types/task";
import CustomButton from "../CustomButton";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function CustomForm({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks((oldsTasks) => [
      ...oldsTasks,
      {
        task: task,
        time: time === "12:00" ? "00:00" : time,
        isSelected: false,
        isCompleted: false,
        id: uuidv4(),
      },
    ]);

    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <CustomButton type="submit">Adicionar</CustomButton>
    </form>
  );
}

export default CustomForm;
