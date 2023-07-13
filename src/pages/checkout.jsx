import { useContext } from "react";

import { CartContext } from "../contexts/cart.context";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="">
      <div className="flex items-center py-6 px-6  gap-4 m-4  justify-between shadow-md rounded">
        <div className="">
          <span>Product</span>
        </div>
        <div className="">
          <span>Description</span>
        </div> 
        <div className="">
          <span>Quantity</span>
        </div>
        <div className="">
          <span>Price</span>
        </div>
        <div className="">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className=" flex items-end justify-end ml-auto px-4 text-[36px]">
        Total: {cartTotal}
      </span>
    </div>
  );
};

export default Checkout;
