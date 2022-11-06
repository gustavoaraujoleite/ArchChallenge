import React from "react";
import MenuSelectors from "../UI/MenuSelectors";
import classes from './HeaderMenu.module.css'
function HeaderMenu() {
  return (
    <div >
      <ul className={classes.ul}>
        <MenuSelectors to="/">
          HOME
        </MenuSelectors>
        <MenuSelectors to="/livros">
          LIVROS
        </MenuSelectors>
        <MenuSelectors to="/camisetas">
          CAMISETAS
        </MenuSelectors>
        <MenuSelectors to="/acessorios">
          ACESSÓRIOS
        </MenuSelectors>
      </ul>
    </div>
  );
}

export default HeaderMenu;
