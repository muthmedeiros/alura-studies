import React from "react";
import style from "./Button.module.scss";

class CustomButton extends React.Component<{
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { text, type = "button" } = this.props;

    return (
      <button type={type} className={style.botao}>
        {text}
      </button>
    );
  }
}

export default CustomButton;
