import React, { useContext } from "react";
import classes from "./Switcher.module.css";
import { IoRadioButtonOn, IoRadioButtonOffSharp } from "react-icons/io5";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
function Switcher() {
  const { theme } = useContext(ThemeContext);
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div className={classes.container}>
      <p className={classes.text}>Dark</p>
      <div
        className={
          theme === "dark"
            ? classes.switcher_body
            : `${classes.switcher_body} ${classes.light}`
        }
        onClick={onToggleTheme}
      >
        {theme === "dark" ? (
          <IoRadioButtonOn
            size={16}
            style={{ marginLeft: "-1px"}}
            color={"black"}
          />
        ) : (
          <IoRadioButtonOffSharp
            size={16}
            style={{ marginRight: "-1px"}}
          />
        )}
      </div>
      <p className={classes.text}>Light</p>
    </div>
  );
}

export default Switcher;
