import React, { useContext } from "react";
import { ThemeContext } from "../../store/GlobalStylingContext/globalStyle-context";
import Card from "../UI/Card";
import ProductManager from "../UI/ProductManager";
import classes from "./ProductsContent.module.css";
import CartContext from "../../store/CartContext/cart-context";

function ProductsContent(props) {
  const { theme } = useContext(ThemeContext);
  const cartCtx = useContext(CartContext);

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: parseInt(amount),
      price: props.price,
      image:props.source
    })
  }
  return (
    <Card maxWidth={'300px'}>
      <div className={classes.container}>
        <h1
          className={
            theme === "dark"
              ? classes.title
              : `${classes.title} ${classes.light}`
          }
        >
          {props.title}
        </h1>
        <img src={props.source} alt="Shirt_1" className={classes.image}></img>
        <p
          className={
            theme === "dark" ? classes.desc : `${classes.desc} ${classes.light}`
          }
        >
          {props.description}
        </p>
        <p
          className={
            theme === "dark"
              ? classes.price
              : `${classes.price} ${classes.light}`
          }
        >
          Valor: R${props.price}
        </p>
        <div className={classes.button_add_cart}>
          <ProductManager
            onAddToCartHandler={addToCartHandler}
          />
        </div>
      </div>
    </Card>
  );
}

export default ProductsContent;
