import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartdropDown/CartdropDown';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import Logo from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utlis';



const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <div className=' flex items-center p-4 sticky top-0 z-20 bg-white font-medium'>
        <Link to='/'>
          <img src={Logo} />
        </Link>
        <div className='flex items-center ml-auto gap-4'>
          <Link to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <Link as='span' onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link to='/auth'>SIGN IN</Link>
          )}
          <div className='cursor-pointer'>
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