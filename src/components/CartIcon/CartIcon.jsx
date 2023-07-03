import { useContext } from 'react'

import ShoppingIcon from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container w-[45px] h-[45px] relative flex items-center justify-center' onClick={toggleIsCartOpen}>
            <img src={ShoppingIcon} className='shopping-icon w-[24px] h-[24px]' />
            <span className='item-count absolute text-[10px] font-semibold bottom-[12px]'>{cartCount}</span>
        </div>
    )
}

export default CartIcon
