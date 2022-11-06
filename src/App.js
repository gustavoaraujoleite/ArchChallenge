import React from "react";
import NavigationRouter from "./components/Navigation_Router";
import CartProvider from "./store/CartContext/CartProvider";
import { ThemeProvider } from "./store/GlobalStylingContext/globalStyle-context";
import { ProductProvider } from "./store/ProductsContext/products-context";
function App() {
  return (
    <ProductProvider>
      <ThemeProvider>
        <CartProvider>
          <NavigationRouter />
        </CartProvider>
      </ThemeProvider>
    </ProductProvider>
  );
}

export default App;
