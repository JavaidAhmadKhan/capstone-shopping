/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className=" p-2 border-2 shadow-lg rounded-lg">
      <div className="flex  items-center w-full flex-col h-full relative ">
        <img
          className=" object-cover object-center rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
          src={imageUrl}
          alt={`${name}`}
        />
        <div className="flex flex-1 items-center justify-between gap-28 mt-2 mb-2 ">
          <span className="font-bold text-lg">{name}</span>
          <span className="font-bold text-lg">₹{price}</span>
        </div>

        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to card
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
