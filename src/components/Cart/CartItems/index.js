import { useContext } from "react";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import ActionButtons from "../../UI/ActionButtons";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li className={classes.cart_item}>
      <img src={props.image} alt='Produto para compra' className={classes.image}/>
      <h2
        className={
          theme === "dark" ? classes.title : `${classes.title} ${classes.light}`
        }
      >
        {props.name}
      </h2>
      <div className={classes.price_container}>
        <span
          className={
            theme === "dark"
              ? classes.price
              : `${classes.price} ${classes.light}`
          }
        >
          R${props.price}
        </span>
      </div>
      <div className={classes.actions}>
        <ActionButtons onClick={props.onRemove}>−</ActionButtons>
        <span
          className={
            theme === "dark"
              ? classes.amount
              : `${classes.amount} ${classes.light}`
          }
        >
          x {props.amount}
        </span>

        <ActionButtons onClick={props.onAdd}>+</ActionButtons>
      </div>
    </li>
  );
};

export default CartItem;
