import React, { useContext } from "react";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classes.input}>
      <label
        htmlFor={props.input.id}
        className={
          theme === "dark" ? classes.label : `${classes.label} ${classes.light}`
        }
      >
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
