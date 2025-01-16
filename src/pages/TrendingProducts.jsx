import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import { useCart } from '../CartContext';

const TrendingProducts = () => {
  const { addToCart } = useCart(); // Access addToCart from the cart context
  const [likedItems, setLikedItems] = useState([]);

  const products = [
    { id: 1, title: "Floral Dress", description: "A beautiful floral dress perfect for summer.", price: 49.99, discountPrice: 39.99, discountPercentage: 20, category: "Womenswear", image: require("../assets/Trending/tren1.jpeg") },
    { id: 2, title: "Smartphone", description: "Latest smartphone with all the features.", price: 499.99, discountPrice: 449.99, discountPercentage: 10, category: "Electronics", image: require("../assets/Trending/tren2.jpeg") },
    { id: 3, title: "Running Shoes", description: "Comfortable and lightweight running shoes.", price: 99.99, discountPrice: 89.99, discountPercentage: 10, category: "Footwear", image: require("../assets/Trending/tren3.jpeg") },
    { id: 4, title: "Bluetooth Headphones", description: "Wireless headphones with superior sound quality.", price: 79.99, discountPrice: 69.99, discountPercentage: 12, category: "Electronics", image: require("../assets/Trending/tren4.jpeg") },
    { id: 5, title: "Leather Wallet", description: "Premium leather wallet with multiple compartments.", price: 29.99, discountPrice: 24.99, discountPercentage: 17, category: "Accessories", image: require("../assets/Trending/tren5.jpeg") },
    { id: 6, title: "Wrist Watch", description: "Stylish wrist watch for everyday wear.", price: 149.99, discountPrice: 129.99, discountPercentage: 13, category: "Accessories", image: require("../assets/Trending/tren6.jpeg") },
    { id: 7, title: "Gaming Mouse", description: "High-precision gaming mouse with customizable buttons.", price: 59.99, discountPrice: 49.99, discountPercentage: 16, category: "Electronics", image: require("../assets/Trending/tren7.jpeg") },
    { id: 8, title: "Cookware Set", description: "Non-stick cookware set for your kitchen needs.", price: 199.99, discountPrice: 179.99, discountPercentage: 10, category: "Home", image: require("../assets/Trending/tren8.jpeg") },
    { id: 9, title: "Yoga Mat", description: "Durable and anti-slip yoga mat.", price: 39.99, discountPrice: 34.99, discountPercentage: 12, category: "Fitness", image: require("../assets/Trending/tren9.jpeg") },
    { id: 10, title: "Winter Jacket", description: "Warm and stylish jacket for cold weather.", price: 199.99, discountPrice: 159.99, discountPercentage: 20, category: "Menswear", image: require("../assets/Trending/tren10.jpeg") },
    { id: 11, title: "Sunglasses", description: "Trendy sunglasses with UV protection.", price: 49.99, discountPrice: 44.99, discountPercentage: 10, category: "Accessories", image: require("../assets/Trending/tren11.jpeg") },
    { id: 12, title: "Backpack", description: "Durable and spacious backpack for travel.", price: 79.99, discountPrice: 69.99, discountPercentage: 12, category: "Accessories", image: require("../assets/Trending/tren12.jpeg") },
    { id: 13, title: "Wireless Speaker", description: "Portable speaker with amazing sound quality.", price: 89.99, discountPrice: 79.99, discountPercentage: 11, category: "Electronics", image: require("../assets/Trending/tren13.jpeg") },
    { id: 14, title: "Coffee Maker", description: "Automatic coffee maker for quick brewing.", price: 149.99, discountPrice: 129.99, discountPercentage: 13, category: "Home", image: require("../assets/Trending/tren14.jpeg") },
    { id: 15, title: "Perfume", description: "Long-lasting fragrance for every occasion.", price: 99.99, discountPrice: 79.99, discountPercentage: 20, category: "Accessories", image: require("../assets/Trending/tren15.jpeg") },
    { id: 16, title: "Laptop", description: "Powerful laptop for work and play.", price: 1099.99, discountPrice: 999.99, discountPercentage: 9, category: "Electronics", image: require("../assets/Trending/tren16.jpeg") },
    { id: 17, title: "Desk Lamp", description: "Stylish desk lamp with adjustable brightness.", price: 39.99, discountPrice: 34.99, discountPercentage: 12, category: "Home", image: require("../assets/Trending/tren17.jpeg") },
    { id: 18, title: "Fitness Tracker", description: "Track your steps, heart rate, and more.", price: 59.99, discountPrice: 49.99, discountPercentage: 16, category: "Fitness", image: require("../assets/Trending/tren18.jpeg") },
    { id: 19, title: "Tablet", description: "High-performance tablet with a sleek design.", price: 499.99, discountPrice: 449.99, discountPercentage: 10, category: "Electronics", image: require("../assets/Trending/tren19.jpeg") },
    { id: 20, title: "Electric Kettle", description: "Fast and efficient electric kettle.", price: 39.99, discountPrice: 34.99, discountPercentage: 12, category: "Home", image: require("../assets/Trending/tren20.jpeg") }
  ];
  

  const handleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-blue-100 py-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Trending Products Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden relative">
            {/* Discount Tag */}
            <div className="absolute top-2 left-2 bg-red-300 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
              {product.discountPercentage}% OFF
            </div>
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center space-x-4">
                <p className="text-gray-500 line-through">${product.price.toFixed(2)}</p>
                <p className="text-gray-800 font-semibold">${product.discountPrice.toFixed(2)}</p>
              </div>

              {/* Buttons for Shop Now, Cart, and Heart */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300"
                >
                  Shop Now
                </button>

                <div className="flex space-x-4">
                  {/* Cart Icon */}
                  <button
                    onClick={() => addToCart(product)}
                    className="text-xl text-gray-500 hover:text-blue-500 transition duration-300"
                  >
                    <FaCartPlus />
                  </button>

                  {/* Heart Icon */}
                  <button
                    onClick={() => handleLike(product.id)}
                    className={`text-xl ${
                      likedItems.includes(product.id) ? 'text-red-500' : 'text-gray-500'
                    } hover:text-red-500 transition duration-300`}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
