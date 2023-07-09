/* eslint-disable react/jsx-key */
import { useContext } from "react";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartdropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col p-[20px] bg-white top-[90px] right-[40px] z-10 border-2 border-gray-400 rounded">
      <div className="h-[240px] flex flex-col overflow-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="text-[18px] text-center mt-12 text-[black]">cart is empty </span>
        )}
      </div>
      <Button buttonType="inverted" onClick={goToCheckOutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartdropDown;
