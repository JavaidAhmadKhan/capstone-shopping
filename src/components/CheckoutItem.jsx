/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <div className="flex  items-center  justify-between text-[18px] shadow-md rounded  m-4 p-4">
            <img className="w-[10%] h-auto object-cover " src={imageUrl} alt={`${name}`} />
            <span >{name}</span>
            <div className="cursor-pointer " onClick={removeItemHandler}>
                &#10094;
            </div>
            <span className="">{quantity}</span>
            <div className="cursor-pointer" onClick={addItemHandler}>
                &#10095;
            </div>
            <span >{price}</span>
            <div className="cursor-pointer" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem
