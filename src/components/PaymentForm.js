import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../components/Button/Button";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-12 shadow-lg rounded bg-gray-100  w-full md:w-full lg:w-[50%] mx-6">
        <h2 className="font-bold text-lg text-center">Credit Card Payment:</h2>
        <div className="mt-6 p-6 mb-6 ">
          <CardElement />
        </div>
        <div className="w-12 flex items-end justify-end ml-auto">
          <Button buttonType="inverted">Pay Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
