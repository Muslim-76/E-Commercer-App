import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your backend logic to create a payment intent and get the client secret
    const clientSecret = "your-client-secret";

    const card = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: "Customer Name",
        },
      },
    });

    if (result.error) {
      alert("Payment failed: " + result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("Payment successful!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Complete Your Payment
      </h2>
      <div className="mb-4 border border-gray-300 p-3 rounded-md">
        <CardElement className="text-gray-800" />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
