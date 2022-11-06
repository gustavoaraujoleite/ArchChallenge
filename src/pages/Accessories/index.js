import React, { useCallback, useContext, useEffect, useState } from "react";
import ProductsContent from "../../components/ProductsContent";
import classes from "./Accessories.module.css";
import { ProdContext } from "../../store/ProductsContext/products-context";
import Loading from "../../components/UI/Loading";
import HelperFetchingData from "../../components/Helper";
function Accessories() {
  const [prodsArray, setProdsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { products } = useContext(ProdContext);
  const loadedProds = HelperFetchingData();

  const fetchProds = useCallback(async () => {
    try {
      setProdsArray(
        loadedProds.filter((component) => component.group === "accessories")
      );
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  }, [products]);

  useEffect(() => {
    fetchProds();
  }, [fetchProds]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={classes.container}>
      {prodsArray.map((element) => {
        return (
          <ProductsContent
            key={element.id}
            id={element.id}
            title={element.title}
            source={element.image}
            description={element.description}
            price={element.price}
          />
        );
      })}
    </div>
  );
}

export default Accessories;
