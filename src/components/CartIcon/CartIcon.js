import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import ShoppingIcon from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div
      className="cart-icon-container w-[45px] h-[45px] relative flex items-center justify-center"
      onClick={toggleIsCartOpen}
    >
      <img src={ShoppingIcon} className="shopping-icon w-[24px] h-[24px]" />
      <span className="item-count absolute text-[10px] font-semibold bottom-[12px]">
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
