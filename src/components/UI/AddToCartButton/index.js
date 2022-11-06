import React, { useContext } from "react";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import classes from "./AddtocartButton.module.css";

function AddToCartButton(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={
          theme === "dark"
            ? classes.button
            : `${classes.button} ${classes.light}`
        }
        onClick={props.addToCartHandler}
      >
        
        {props.title}
      </button>
    </div>
  );
}

export default AddToCartButton;
