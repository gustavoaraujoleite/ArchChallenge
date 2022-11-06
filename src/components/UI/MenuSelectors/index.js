import React, { useContext } from "react";
import classes from "./MenuSelectors.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";

function MenuSelectors(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <li className={classes.li}>
      <NavLink
        to={props.to}
        className={
          theme === "dark"
            ? classes.selector
            : `${classes.selector} ${classes.light}`
        }
        activeClassName={
          theme === "dark" ? classes.active : classes.active_light
        }
        exact
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default MenuSelectors;
