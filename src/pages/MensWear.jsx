// MensWear.js
import React from "react";

const MensWear = () => {
  const mensWearItem = {
    id: 1,
    title: "Casual Shirt",
    description: "Comfortable and stylish for daily wear.",
    price: 39.99,
    image: "https://via.placeholder.com/400x200?text=Casual+Shirt",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Men's Wear Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
          <img
            src={mensWearItem.image}
            alt={mensWearItem.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {mensWearItem.title}
            </h2>
            <p className="text-gray-600 mb-4">{mensWearItem.description}</p>
            <p className="text-gray-800 font-semibold mb-4">${mensWearItem.price}</p>
            <button
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensWear;
