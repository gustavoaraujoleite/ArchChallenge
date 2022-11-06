import React, { useContext } from "react";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import classes from "./Card.module.css";
function Card(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? classes.container
          : `${classes.container} ${classes.light}`
      }
      style={{maxWidth: props.maxWidth}}
    >
      {props.children}
    </div>
  );
}

export default Card;
