// Electronics.js
import React from "react";
import { useCart } from "../CartContext"; // Import the useCart hook

const Electronics = () => {
  const { addToCart } = useCart(); // Get the addToCart function

  const electronicsItems = [
    { id: 1, title: "Smartphone", description: "Latest smartphone with amazing features.", price: 799.99, image: require("../assets/Electronics/elec1.jpeg") },
    { id: 2, title: "Laptop", description: "High-performance laptop for work and play.", price: 1299.99, image: require("../assets/Electronics/elec2.jpeg") },
    { id: 3, title: "Wireless Headphones", description: "Noise-cancelling headphones for clear sound.", price: 199.99, image: require("../assets/Electronics/elec3.jpeg") },
    { id: 4, title: "Smartwatch", description: "Track your health and stay connected.", price: 249.99, image: require("../assets/Electronics/elec4.jpeg") },
    { id: 5, title: "LED TV", description: "High-definition TV with vibrant colors.", price: 499.99, image: require("../assets/Electronics/elec5.jpeg") },
    { id: 6, title: "Bluetooth Speaker", description: "Portable speaker with excellent sound quality.", price: 99.99, image: require("../assets/Electronics/elec6.jpeg") },
    { id: 7, title: "Digital Camera", description: "Capture stunning photos and videos.", price: 899.99, image: require("../assets/Electronics/elec7.jpeg") },
    { id: 8, title: "Tablet", description: "Slim and powerful tablet for work and entertainment.", price: 499.99, image: require("../assets/Electronics/elec8.jpeg") },
    { id: 9, title: "Gaming Console", description: "Enjoy the latest games with this console.", price: 299.99, image: require("../assets/Electronics/elec9.jpeg") },
    { id: 10, title: "VR Headset", description: "Immersive VR experience for gaming and media.", price: 399.99, image: require("../assets/Electronics/elec10.jpeg") },
    { id: 11, title: "Smart Fridge", description: "Smart fridge with advanced cooling technology.", price: 1599.99, image: require("../assets/Electronics/elec11.jpeg") },
    { id: 12, title: "Washing Machine", description: "Energy-efficient washing machine for everyday laundry.", price: 799.99, image: require("../assets/Electronics/elec12.jpeg") },
    { id: 13, title: "Microwave Oven", description: "Compact microwave oven for fast cooking.", price: 119.99, image: require("../assets/Electronics/elec13.jpeg") },
    { id: 14, title: "Air Conditioner", description: "Stay cool with this energy-efficient air conditioner.", price: 699.99, image: require("../assets/Electronics/elec14.jpeg") },
    { id: 15, title: "Electric Kettle", description: "Quick boiling electric kettle for hot drinks.", price: 49.99, image: require("../assets/Electronics/elec15.jpeg") },
    { id: 16, title: "Cordless Vacuum", description: "Lightweight cordless vacuum for easy cleaning.", price: 179.99, image: require("../assets/Electronics/elec16.jpeg") },
    { id: 17, title: "Dishwasher", description: "Compact dishwasher for hassle-free cleaning.", price: 499.99, image: require("../assets/Electronics/elec17.jpeg") },
    { id: 18, title: "Coffee Maker", description: "Brew your favorite coffee with this easy-to-use machine.", price: 89.99, image: require("../assets/Electronics/elec18.jpeg") },
    { id: 19, title: "Electric Grill", description: "Grill your food indoors with this electric grill.", price: 129.99, image: require("../assets/Electronics/elec19.jpeg") },
    { id: 20, title: "Smart Speaker", description: "Voice-activated smart speaker with excellent sound.", price: 149.99, image: require("../assets/Electronics/elec20.jpeg") },
  ];

  return (
    <div className="min-h-screen bg-blue-100 py-20">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Electronics Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {electronicsItems.map((item) => (
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

export default Electronics;
