import MenuSelectors from "../MenuSelectors";
import classes from "./burgerMenu.module.css";

import Card from "../../UI/Card";
import { AiFillCloseCircle } from "react-icons/ai";

function BurgerMenu(props) {
  return (
    <Card className={classes.container} maxWidth={"200px"}>
      <div className={classes.close_button_container}>
        <AiFillCloseCircle
          size={20}
          color={"#f00"}
          className={classes.close_button}
          onClick={props.onCloseModal}
        />
      </div>
      <ul>
        <MenuSelectors to="/">HOME</MenuSelectors>
        <MenuSelectors to="/livros">LIVROS</MenuSelectors>
        <MenuSelectors to="/camisetas">CAMISETAS</MenuSelectors>
        <MenuSelectors to="/acessorios">ACESSÓRIOS</MenuSelectors>
      </ul>
    </Card>
  );
}

export default BurgerMenu;
