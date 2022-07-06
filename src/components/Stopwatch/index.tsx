import CustomButton from "../CustomButton";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";

export default function Stopwatch() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <CustomButton text="Começar" />
    </div>
  );
}
