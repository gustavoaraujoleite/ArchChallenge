import React, { useRef, useState } from "react";
import AddToCartButton from "../AddToCartButton";
import Input from "../Input";
import classes from "./ProductManager.module.css";
function ProductManager(props) {
  const amountInputRef = useRef();

  function addToCartHandler() {
    props.onAddToCartHandler(amountInputRef.current.value);
  }
  return (
    <div className={classes.container}>
      <Input
        ref={amountInputRef}
        label="Quantidade"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <AddToCartButton title={'Adicionar ao Carrinho'} addToCartHandler={addToCartHandler} />
    </div>
  );
}

export default ProductManager;
