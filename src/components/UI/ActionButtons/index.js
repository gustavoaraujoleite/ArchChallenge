import React, { useContext } from "react";
import classes from './ActionButtons.module.css';
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";


function ActionButtons(props) {
    const {theme} = useContext(ThemeContext);
  return <button className={theme === 'dark' ? classes.button : `${classes.button} ${classes.light}`} onClick={props.onClick}>{props.children}</button>;
}
export default ActionButtons;