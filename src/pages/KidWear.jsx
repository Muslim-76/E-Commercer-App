// KidWear.js
import React from "react";
import { useCart } from "../CartContext"; // Import the useCart hook

const KidWear = () => {
  const { addToCart } = useCart(); // Get the addToCart function

  const cardData = [
    { id: 1, title: "Casual Outfit", description: "Perfect for daily wear and playtime.", price: 29.99, image: "https://via.placeholder.com/400x200?text=Casual+Outfit" },
    { id: 2, title: "Winter Jacket", description: "Keep your kids warm and stylish.", price: 49.99, image: "https://via.placeholder.com/400x200?text=Winter+Jacket" },
    { id: 3, title: "Party Dress", description: "Adorable outfits for special occasions.", price: 39.99, image: "https://via.placeholder.com/400x200?text=Party+Dress" },
    { id: 4, title: "Sports T-shirt", description: "Comfortable for all kinds of activities.", price: 19.99, image: "https://via.placeholder.com/400x200?text=Sports+T-shirt" },
    { id: 5, title: "School Uniform", description: "Perfect for school days.", price: 29.99, image: "https://via.placeholder.com/400x200?text=School+Uniform" },
    { id: 6, title: "Pajama Set", description: "Soft and cozy for bedtime.", price: 24.99, image: "https://via.placeholder.com/400x200?text=Pajama+Set" },
    { id: 7, title: "Swimwear", description: "Ideal for beach days and swimming.", price: 19.99, image: "https://via.placeholder.com/400x200?text=Swimwear" },
    { id: 8, title: "Raincoat", description: "Stay dry in the rainy season.", price: 34.99, image: "https://via.placeholder.com/400x200?text=Raincoat" },
    { id: 9, title: "Ski Jacket", description: "Perfect for winter sports and activities.", price: 59.99, image: "https://via.placeholder.com/400x200?text=Ski+Jacket" },
    { id: 10, title: "Formal Suit", description: "For formal occasions and parties.", price: 49.99, image: "https://via.placeholder.com/400x200?text=Formal+Suit" },
    { id: 11, title: "Denim Jacket", description: "Stylish and durable for everyday wear.", price: 39.99, image: "https://via.placeholder.com/400x200?text=Denim+Jacket" },
    { id: 12, title: "Summer Dress", description: "Light and airy for warm weather.", price: 29.99, image: "https://via.placeholder.com/400x200?text=Summer+Dress" },
    { id: 13, title: "Leggings", description: "Comfortable and stretchy.", price: 14.99, image: "https://via.placeholder.com/400x200?text=Leggings" },
    { id: 14, title: "Hoodie", description: "Perfect for cooler days.", price: 34.99, image: "https://via.placeholder.com/400x200?text=Hoodie" },
    { id: 15, title: "Overalls", description: "Trendy and fun for kids.", price: 39.99, image: "https://via.placeholder.com/400x200?text=Overalls" },
    { id: 16, title: "Tutu Skirt", description: "Fun and cute for parties.", price: 24.99, image: "https://via.placeholder.com/400x200?text=Tutu+Skirt" },
    { id: 17, title: "Winter Gloves", description: "Keep your hands warm during cold weather.", price: 15.99, image: "https://via.placeholder.com/400x200?text=Winter+Gloves" },
    { id: 18, title: "Beanie Hat", description: "Stylish and warm for the winter.", price: 19.99, image: "https://via.placeholder.com/400x200?text=Beanie+Hat" },
    { id: 19, title: "Boots", description: "Durable footwear for outdoor play.", price: 44.99, image: "https://via.placeholder.com/400x200?text=Boots" },
    { id: 20, title: "Backpack", description: "Perfect for school and outdoor activities.", price: 29.99, image: "https://via.placeholder.com/400x200?text=Backpack" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Kid's Wear Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {cardData.map((card) => (
          <div key={card.id} className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <p className="text-gray-800 font-semibold mb-4">${card.price}</p>
              <button
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                onClick={() => addToCart(card)} // Add item to the cart
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

export default KidWear;
