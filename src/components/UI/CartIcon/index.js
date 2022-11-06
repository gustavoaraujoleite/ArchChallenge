import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../../store/CartContext/cart-context";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import classes from "./CartIcon.module.css";

function CartIcon(props) {
  const { theme } = useContext(ThemeContext);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <div
        className={
          theme === "dark"
            ? classes.container
            : `${classes.container} ${classes.light}`
        }
        onClick={props.onClick}
      >
        <div>
          <AiOutlineShoppingCart size={30} color={"black"} />
        </div>
        <div>
          <span
            className={
              theme === "dark"
                ? classes.badge
                : `${classes.badge} ${classes.light}`
            }
          >
            {numberOfCartItems}
          </span>
        </div>
      </div>
    </>
  );
}

export default CartIcon;
