/* eslint-disable react/prop-types */

import ProductCard from "./ProductCard/ProductCard";

export const CategoryPreview = ({ title, products }) => {
  return (
    <div className="flex flex-col  mb-[30px] px-2">
      <h2 className="mt-8 mb-6 text-center">
        <span className="text-[28px]  cursor-pointer">
          {title.toUpperCase()}
        </span>
      </h2>
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
