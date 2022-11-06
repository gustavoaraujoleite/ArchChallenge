import React from "react";
import classes from "./FinishedShopping.module.css";
import { BsCheck2Circle } from "react-icons/bs";
import ActionButtons from "../../UI/ActionButtons";

function FinishedShopping(props) {
  return (
    <div className={classes.outer_container}>
      <div className={classes.container}>
        <BsCheck2Circle size={30} color={"darkGreen"} />
        <h1 className={classes.text}>Compra realizada com sucesso</h1>
      </div>
      <div className={classes.button}>
        <ActionButtons onClick={props.onClick}>Fechar</ActionButtons>
      </div>
    </div>
  );
}

export default FinishedShopping;
