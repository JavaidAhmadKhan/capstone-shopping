import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] md:gap-[60px] lg:gap-x-[10px] m-2 ">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </>
      )}
    </div>
  );
};

export default Category;
