import React from 'react';
import { useCart } from '../CartContext';

const Womenswear = () => {
  const { addToCart } = useCart(); // Get addToCart from useCart

  const womenswearItems = [
    { id: 1, title: "Floral Dress", description: "A beautiful floral dress perfect for summer.", price: 49.99, image: require("../assets/WomensWear/women1.jpeg") },
    { id: 2, title: "Denim Jacket", description: "Stylish denim jacket for casual wear.", price: 79.99, image: require("../assets/WomensWear/women2.jpeg") },
    { id: 3, title: "Leather Boots", description: "High-quality leather boots for any occasion.", price: 129.99, image: require("../assets/WomensWear/women3.jpeg") },
    { id: 4, title: "Red Blouse", description: "Elegant red blouse for a night out.", price: 39.99, image: require("../assets/WomensWear/women4.jpeg") },
    { id: 5, title: "Wide-Leg Pants", description: "Comfortable wide-leg pants for a relaxed look.", price: 59.99, image: require("../assets/WomensWear/women5.jpeg") },
    { id: 6, title: "Summer Skirt", description: "Light and breezy skirt for warm weather.", price: 34.99, image: require("../assets/WomensWear/women6.jpeg") },
    { id: 7, title: "Sweater Dress", description: "Cozy sweater dress perfect for colder days.", price: 69.99, image: require("../assets/WomensWear/women7.jpeg") },
    { id: 8, title: "Plaid Shirt", description: "Classic plaid shirt for a casual, trendy look.", price: 45.99, image: require("../assets/WomensWear/women8.jpeg") },
    { id: 9, title: "Black High Heels", description: "Elegant black high heels for a formal event.", price: 89.99, image: require("../assets/WomensWear/women9.jpeg") },
    { id: 10, title: "Sports Bra", description: "Comfortable sports bra for active wear.", price: 24.99, image: require("../assets/WomensWear/women10.jpeg") },
    { id: 11, title: "Cardigan", description: "Soft and cozy cardigan for layering.", price: 39.99, image: require("../assets/WomensWear/women11.jpeg") },
    { id: 12, title: "Maxi Dress", description: "Flowy maxi dress for a beach day or event.", price: 79.99, image: require("../assets/WomensWear/women12.jpeg") },
    { id: 13, title: "Linen Shorts", description: "Breathable and comfortable linen shorts.", price: 29.99, image: require("../assets/WomensWear/women13.jpeg") },
    { id: 14, title: "Tote Bag", description: "Stylish and practical tote bag for everyday use.", price: 39.99, image: require("../assets/WomensWear/women14.jpeg") },
    { id: 15, title: "Blazer", description: "Tailored blazer for a professional look.", price: 89.99, image: require("../assets/WomensWear/women15.jpeg") },
    { id: 16, title: "Sunglasses", description: "Chic sunglasses to protect your eyes in style.", price: 19.99, image: require("../assets/WomensWear/women16.jpeg") },
    { id: 17, title: "Wool Scarf", description: "Warm wool scarf for the winter season.", price: 29.99, image: require("../assets/WomensWear/women17.jpeg") },
    { id: 18, title: "Sneakers", description: "Comfortable and stylish sneakers for everyday wear.", price: 69.99, image: require("../assets/WomensWear/women18.jpeg") },
    { id: 19, title: "Ankle Boots", description: "Trendy ankle boots for a chic look.", price: 79.99, image: require("../assets/WomensWear/women19.jpeg") },
    { id: 20, title: "Puffer Jacket", description: "Warm puffer jacket for cold weather.", price: 99.99, image: require("../assets/WomensWear/women20.jpeg") },
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Women's Wear Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6">
        {womenswearItems.map((item) => (
          <div key={item.id} className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-gray-800 font-semibold mb-4">${item.price}</p>
              <button
                className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300"
                onClick={() => addToCart(item)} 
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

export default Womenswear;
