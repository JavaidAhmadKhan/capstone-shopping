import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartdropDown/CartdropDown";
import Logo from "../../assets/crown.svg";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <div className=" flex items-center p-4 sticky top-0 z-20 bg-white font-medium">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="flex items-center ml-auto gap-4">
          <Link to="/shop">SHOP</Link>
          {currentUser ? (
            <Link as="span" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link to="/auth">SIGN IN</Link>
          )}
          <div className="cursor-pointer">
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
