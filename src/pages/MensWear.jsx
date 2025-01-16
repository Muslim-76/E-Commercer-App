// MensWear.js
import React from "react";
import { useCart } from "../CartContext"; // Import the useCart hook

const MensWear = () => {
  const { addToCart } = useCart(); // Get the addToCart function

  const mensWearItems = [
    { id: 1, title: "Casual Shirt", description: "Comfortable and stylish for daily wear.", price: 39.99, image: require("../assets/MensWear/menswear1.jpeg") },
    { id: 2, title: "Winter Coat", description: "Stay warm and stylish in winter.", price: 79.99, image: require("../assets/MensWear/menswear2.jpeg") },
    { id: 3, title: "Slim Fit Jeans", description: "Perfect fit for a sleek look.", price: 49.99, image: require("../assets/MensWear/menswear3.jpeg") },
    { id: 4, title: "Sport Jacket", description: "Ideal for both casual and sporty looks.", price: 69.99, image: require("../assets/MensWear/menswear4.jpeg") },
    { id: 5, title: "Formal Pants", description: "Sharp and elegant for formal events.", price: 59.99, image: require("../assets/MensWear/menswear5.jpeg") },
    { id: 6, title: "Leather Jacket", description: "Stylish and durable for cold weather.", price: 99.99, image: require("../assets/MensWear/menswear6.jpeg") },
    { id: 7, title: "Denim Jacket", description: "Timeless and versatile denim jacket.", price: 59.99, image: require("../assets/MensWear/menswear7.jpeg") },
    { id: 8, title: "Tuxedo", description: "Elegant tuxedo for formal occasions.", price: 149.99, image: require("../assets/MensWear/menswear8.jpeg") },
    { id: 9, title: "Chinos", description: "Casual yet sharp chinos for everyday wear.", price: 39.99, image: require("../assets/MensWear/menswear9.jpeg") },
    { id: 10, title: "Puffer Jacket", description: "Warm and stylish puffer jacket for winter.", price: 89.99, image: require("../assets/MensWear/menswear10.jpeg") },
    { id: 11, title: "V-neck Sweater", description: "Cozy and stylish v-neck sweater.", price: 49.99, image: require("../assets/MensWear/menswear11.jpeg") },
    { id: 12, title: "Graphic T-shirt", description: "Trendy graphic t-shirt for casual wear.", price: 19.99, image: require("../assets/MensWear/menswear12.jpeg") },
    { id: 13, title: "Cargo Pants", description: "Comfortable cargo pants with extra pockets.", price: 49.99, image: require("../assets/MensWear/menswear13.jpeg") },
    { id: 14, title: "Hoodie", description: "Cozy hoodie for everyday comfort.", price: 39.99, image: require("../assets/MensWear/menswear14.jpeg") },
    { id: 15, title: "Blazer", description: "Sharp and stylish blazer for formal events.", price: 129.99, image: require("../assets/MensWear/menswear15.jpeg") },
    { id: 16, title: "Pullover Sweater", description: "Warm pullover sweater for cold days.", price: 49.99, image: require("../assets/MensWear/menswear16.jpeg") },
    { id: 17, title: "Plaid Shirt", description: "Classic plaid shirt for casual style.", price: 34.99, image: require("../assets/MensWear/menswear17.jpeg") },
    { id: 18, title: "Knit Cardigan", description: "Comfy knit cardigan for layering.", price: 44.99, image: require("../assets/MensWear/menswear18.jpeg") },
    { id: 19, title: "Track Pants", description: "Athletic track pants for workout or casual wear.", price: 29.99, image: require("../assets/MensWear/menswear19.jpeg") },
    { id: 20, title: "Sweatpants", description: "Soft and comfortable sweatpants for lounging.", price: 34.99, image: require("../assets/MensWear/menswear20.jpeg") },
  ];

  return (
    <div className="min-h-screen bg-blue-100 py-20">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Men's Wear Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {mensWearItems.map((item) => (
          <div key={item.id} className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-gray-800 font-semibold mb-4">${item.price}</p>
              <button
                className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300"
                onClick={() => addToCart(item)} // Add item to the cart
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensWear;
