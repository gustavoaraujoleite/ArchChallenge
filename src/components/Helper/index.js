import { useCallback, useContext, useEffect } from "react";
import { ProdContext } from "../../store/ProductsContext/products-context";

function HelperFetchingData() {
  const { products } = useContext(ProdContext);
  const loadedProds = [];
  const fetchProds = useCallback(async () => {
    try {
      products.map((element) => {
        for (const key in element) {
          loadedProds.push({
            id: key,
            title: element[Number(key) + 1].title,
            description: element[Number(key) + 1].description,
            price: element[Number(key) + 1].price,
            image: element[Number(key) + 1].image,
            group: element[Number(key) + 1].group,
          });
        }
      });
      return loadedProds;
    } catch (err) {}
  }, [products]);

  useEffect(() => {
    fetchProds();
  }, [fetchProds]);
  return loadedProds;
}

export default HelperFetchingData;
