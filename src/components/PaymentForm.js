import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import Button from "../components/Button/Button";
import { selectCartTotal } from "../store/cart/cart.selector";
import { selectCurrentUser } from "../store/user/user.selector";
import { useState } from "react";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProccessingPayment, setIsProccessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProccessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProccessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successfull");
      }
    }
  };
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={paymentHandler}
        className="p-12 shadow-lg rounded bg-gray-100  w-full md:w-full lg:w-[50%] mx-6"
      >
        <h2 className="font-bold text-lg text-center">Credit Card Payment:</h2>
        <div className="mt-6 p-6 mb-6 ">
          <CardElement />
        </div>
        <div className="w-12 flex items-end justify-end ml-auto">
          <Button isLoading={isProccessingPayment} buttonType="inverted">
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
