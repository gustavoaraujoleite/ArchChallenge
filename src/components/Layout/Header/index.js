import { useCallback, useContext, useEffect, useState } from "react";
import { CollectProducts } from "../../../service/CollectProducts";
import { ThemeContext } from "../../../store/GlobalStylingContext/globalStyle-context";
import { ProdContext } from "../../../store/ProductsContext/products-context";
import HeaderMenu from "../../HeaderMenu";
import BurgerIcon from "../../UI/BurgerIcon";
import BurgerMenu from "../../UI/BurgerMenu";
import CartIcon from "../../UI/CartIcon";
import Switcher from "../../UI/Switcher";
import classes from "./Header.module.css";

const Header = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { collectProductsHandler } = useContext(ProdContext);

  const fetchProducts = useCallback(async () => {
    try {
      const result = await CollectProducts();
      collectProductsHandler(result.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function openBurgerMenuHandler() {
    setMenuOpened(!menuOpened);
  }
  return (
    <>
      <header
        className={
          theme === "dark"
            ? classes.header
            : `${classes.header} ${classes.light}`
        }
      >
        <div className={classes.burger_icon_container}>
          <BurgerIcon onClick={openBurgerMenuHandler} />
        </div>
        <div
          className={
            menuOpened ? classes.burger_menu_container : classes.burger_closed
          }
        >
          <BurgerMenu onCloseModal={openBurgerMenuHandler} />
        </div>

        <div className={classes.menu_container}>
          <h1 className={classes.arch_logo}>ArchStore</h1>
          <div className={classes.header_menu_container}>
            <HeaderMenu />
          </div>
          <div className={classes.last_items_container}>
            <CartIcon onClick={props.onClick} />
            <Switcher />
          </div>
        </div>
      </header>

      <div className={classes.children_container}>
        <div className={classes.children_inner_container}>{props.children}</div>
      </div>
    </>
  );
};

export default Header;
