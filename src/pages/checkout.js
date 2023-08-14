import { selectCartItems, selectCartTotal } from "../store/cart/cart.selector";
import CheckoutItem from "../components/CheckoutItem";
import { useSelector } from "react-redux";
import PaymentForm from "../components/PaymentForm";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div>
      <div className="flex text-sm font-bold items-center  gap-2 md:gap-4 lg:gap-4 mx-6  justify-between  p-8 shadow-lg rounded bg-gray-100 mb-6">
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
      <span className=" flex items-end justify-end ml-auto mx-6 text-lg font-body  mb-6">
        Total: {cartTotal}
      </span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
