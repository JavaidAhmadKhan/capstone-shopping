/* eslint-disable react/prop-types */

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="w-full flex h-[80px] mb-[15px]">
      <img
        className="w-[50%] h-auto object-cover"
        src={imageUrl}
        alt={`${name}`}
      />
      <div className="flex flex-col items-center justify-center w-[70%] p-[10px]">
        <span className="text-[16px]">{name}</span>
        <span className="text-black">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
