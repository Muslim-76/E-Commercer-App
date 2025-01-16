// BestSelling.js
import React from "react";

const BestSelling = () => {
  const bestSellingProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      description: "High-quality sound with noise-cancelling technology.",
      price: "$99.99",
      imageUrl: require("../assets/BestSelling/bs1.avif"),
      rating: 5,
      bought: "4K bought last month",
    },
    {
      id: 2,
      name: "Smartwatch Series 5",
      description: "Track your fitness and stay connected with this sleek smartwatch.",
      price: "$199.99",
      imageUrl: require("../assets/BestSelling/bs2.avif"),
      rating: 4,
      bought: "2K bought last month",
    },
    {
      id: 3,
      name: "4K Smart TV",
      description: "Immerse yourself in stunning 4K resolution and vibrant colors.",
      price: "$599.99",
      imageUrl: require("../assets/BestSelling/bs3.avif"),
      rating: 5,
      bought: "1.5K bought last month",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable speaker with incredible sound quality and long battery life.",
      price: "$49.99",
      imageUrl: require("../assets/BestSelling/bs4.avif"),
      rating: 4,
      bought: "3.2K bought last month",
    },
    {
      id: 5,
      name: "Laptop Stand",
      description: "Ergonomic design for a comfortable and productive workspace.",
      price: "$29.99",
      imageUrl: require("../assets/BestSelling/bs5.avif"),
      rating: 4,
      bought: "1K bought last month",
    },
    {
      id: 6,
      name: "Noise Cancelling Headphones",
      description: "Block out distractions and focus with these comfortable headphones.",
      price: "$129.99",
      imageUrl: require("../assets/BestSelling/bs6.avif"),
      rating: 5,
      bought: "2.8K bought last month",
    },
    {
      id: 7,
      name: "Fitness Tracker",
      description: "Track your steps, calories, and heart rate with this durable fitness tracker.",
      price: "$49.99",
      imageUrl: require("../assets/BestSelling/bs7.avif"),
      rating: 4,
      bought: "1.2K bought last month",
    },
    {
      id: 8,
      name: "Portable Power Bank",
      description: "Stay charged on the go with this compact power bank.",
      price: "$19.99",
      imageUrl: require("../assets/BestSelling/bs8.avif"),
      rating: 5,
      bought: "5K bought last month",
    },
    {
      id: 9,
      name: "Wireless Mouse",
      description: "Sleek and ergonomic wireless mouse for everyday use.",
      price: "$29.99",
      imageUrl: require("../assets/BestSelling/bs9.avif"),
      rating: 4,
      bought: "3K bought last month",
    },
    {
      id: 10,
      name: "Smartphone",
      description: "Latest model with cutting-edge features and a stunning display.",
      price: "$799.99",
      imageUrl: require("../assets/BestSelling/bs10.avif"),
      rating: 5,
      bought: "6K bought last month",
    },
    {
      id: 11,
      name: "Gaming Headset",
      description: "High-quality audio and comfortable design for long gaming sessions.",
      price: "$89.99",
      imageUrl: require("../assets/BestSelling/bs11.avif"),
      rating: 5,
      bought: "2.1K bought last month",
    },
    {
      id: 12,
      name: "Home Security Camera",
      description: "Keep your home safe with this high-definition security camera.",
      price: "$129.99",
      imageUrl: require("../assets/BestSelling/bs12.avif"),
      rating: 4,
      bought: "1.8K bought last month",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto  py-20">
      <h1 className="text-3xl font-bold text-center mb-6">Best Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bestSellingProducts.map((product, index) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
          >
            {/* Best Seller Tag */}
            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best Seller
            </div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-sm mb-2">{product.description}</p>
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold">{product.price}</span>
              <div className="ml-2 flex">{renderStars(product.rating)}</div>
            </div>
            <p className="text-sm text-gray-500">{product.bought}</p>
            <button className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
