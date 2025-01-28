import React from "react";
import { useCart } from "../CartContext"; // Import the useCart hook
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handler for updating quantity
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity); // Call the updateQuantity function from context
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Your Cart</h1>

      {/* Cart Items */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {/* Cart Item List */}
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Update Quantity */}
                  <div className="flex items-center text-yellow-500 gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-4 py-2 bg-gray-300 text-green-900 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-4 py-2 bg-gray-300 text-green-900 rounded-md"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-lg font-semibold text-gray-800">${item.price}</span>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="mt-6 flex justify-between items-center text-lg font-semibold text-gray-800">
              <h3>Total Price:</h3>
              <p>${totalPrice.toFixed(2)}</p>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 flex justify-center">
            <Link
            to="/payment"
            className="bg-black text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300 inline-block"
           >
           Proceed to Checkout
           </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
