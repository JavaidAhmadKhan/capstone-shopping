/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className=" p-2 border-2 shadow-lg rounded-lg ">
      <div className="flex  items-center w-full flex-col h-full relative ">
        <img
          className=" object-cover object-center rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 w-full h-[320px] "
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
