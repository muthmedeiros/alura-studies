import React from "react";
import style from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
}

function CustomButton({ type, children, onClick }: Props) {
  return (
    <button 
      onClick={onClick}
      type={type}
      className={style.botao}
    >
      {children}
    </button>
  );
}

export default CustomButton;
