import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

function CustomList({ tasks }: { tasks: Array<ITask> }) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} task={item.task} time={item.time} />
        ))}
      </ul>
    </aside>
  );
}

export default CustomList;
