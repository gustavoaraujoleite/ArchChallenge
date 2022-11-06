import React, { useContext } from "react";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import classes from "./BurgerIcon.module.css";

function BurgerIcon(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classes.container} onClick={props.onClick}>
      <div
        className={
          theme === "dark" ? classes.bar : `${classes.bar} ${classes.light}`
        }
      ></div>
      <div
        className={
          theme === "dark" ? classes.bar : `${classes.bar} ${classes.light}`
        }
      ></div>
      <div
        className={
          theme === "dark" ? classes.bar : `${classes.bar} ${classes.light}`
        }
      ></div>
    </div>
  );
}

export default BurgerIcon;
