import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../../../store/CartContext/cart-context";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import AddToCartButton from "../../UI/AddToCartButton";
import CartItem from "../CartItems";
import FinishedShopping from "../FinishedShopping";
import classes from "./CartProps.module.css";

function CartProps(props) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [finishShopping, setFinishingShopping] = useState(false);

  const { theme } = useContext(ThemeContext);
  const cartCtx = useContext(CartContext);
  const totalAmount = ` R$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }

  function cartItemAddHandler(item) {
    cartCtx.addItem(item);
  }
  console.log(errorMessage);
  function finishShopHandler() {
    if (!hasItems) {
      setErrorMessage(true);
    } else {
      setFinishingShopping(true);
      cartCtx.clearCart();
    }
  }

  return finishShopping ? (
    <FinishedShopping onClick={props.onClick} />
  ) : (
    <div className={classes.container}>
      <span
        className={
          theme === "dark"
            ? classes.observation
            : `${classes.observation} ${classes.light}`
        }
      >
        * Para excluir o produto permanentemente do carrinho, continue
        pressionando o botão " - " até a quantidade 'x0'.
      </span>

      {errorMessage && (
        <h1 className={classes.error_message}>
          Por favor escolha algum produto para efetuar a compra
        </h1>
      )}

      <ul className={classes.list_container}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.title}
            amount={item.amount}
            price={item.price}
            image={item.image}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <div className={classes.bottom_content}>
          <span
            className={
              theme === "dark"
                ? classes.amount_text
                : `${classes.amount_text} ${classes.light}`
            }
          >
            Valor Total:
            <span
              className={
                theme === "dark"
                  ? classes.amount_text
                  : `${classes.amount_text} ${classes.light}`
              }
            >
              {totalAmount}
            </span>
          </span>

          <AddToCartButton
            addToCartHandler={finishShopHandler}
            title="Efetuar a compra"
          />
        </div>
      </div>
    </div>
  );
}

export default CartProps;
