import React, { useState, createContext } from "react";

export const ProdContext = createContext([]);

export function ProductProvider(props) {
  const [products, setProducts] = useState([]);

  function collectProductsHandler(prods) {
    setProducts(prevData => [...prevData, prods])
  }

  return (
    <ProdContext.Provider value={{products: products, collectProductsHandler  }}>
      {props.children}
    </ProdContext.Provider>
  );
}