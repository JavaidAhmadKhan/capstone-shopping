import { useDispatch, useSelector } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../store/cart/cart.action";
import { selectCartItems } from "../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="flex  items-center shadow-lg  bg-gray-100  justify-between text-[18px]  rounded  m-4 p-4">
      <img
        className="w-[10%] h-auto object-cover "
        src={imageUrl}
        alt={`${name}`}
      />
      <span>{name}</span>
      <div className="cursor-pointer " onClick={removeItemHandler}>
        &#10094;
      </div>
      <span className="">{quantity}</span>
      <div className="cursor-pointer" onClick={addItemHandler}>
        &#10095;
      </div>
      <span>{price}</span>
      <div className="cursor-pointer" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
