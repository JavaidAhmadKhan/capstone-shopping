/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "./Button/Button";
import ProductCard from "./ProductCard/ProductCard";

export const CategoryPreview = ({ title, products }) => {
  return (
    <div className="flex flex-col  mb-[30px] px-2">
      <div className="mx-auto  mb-8">
        <Link to={title}>
          <Button buttonType={"inverted"} className="text-xxl font-bold">
            {title.toUpperCase()}
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] md:gap-[60px] lg:gap-[10px]">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={title.id} product={product} />
          ))}
      </div>
    </div>
  );
};
