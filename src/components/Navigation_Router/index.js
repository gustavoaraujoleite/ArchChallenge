import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Accessories from "../../pages/Accessories";
import Books from "../../pages/Books";
import HomePage from "../../pages/Homepage";
import Shirts from "../../pages/Shirts";
import Header from "../Layout/Header";
import Modal from "../UI/Modal";

function NavigationRouter() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal onCloseModal={() => setOpenModal(false)}/>}
      <Header onClick={() => setOpenModal(!openModal)}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/camisetas">
            <Shirts />
          </Route>

          <Route path="/livros">
            <Books />
          </Route>

          <Route path="/acessorios">
            <Accessories />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Header>
    </>
  );
}

export default NavigationRouter;
