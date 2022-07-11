import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import CustomButton from "../CustomButton";
import style from "./Stopwatch.module.scss";
import Watch from "./Watch";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <CustomButton onClick={() => regressive(time)}>Começar</CustomButton>
    </div>
  );
}
