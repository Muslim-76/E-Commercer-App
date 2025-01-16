// TopRated.js
import React from 'react';

const TopRated = () => {
  const topRatedProducts = [
    {
      id: 1,
      name: 'Smartphone Pro Max',
      description: 'The latest smartphone with 5G support and amazing camera quality.',
      price: '$999.99',
      discountedPrice: '$899.99',
      imageUrl: require("../assets/TopRate/tr1.jpeg"),
      rating: 5,
      reviews: 1500,
      favorite: true,
      rank: 1,
    },
    {
      id: 2,
      name: 'Gaming Laptop X',
      description: 'High-performance gaming laptop with RTX graphics card.',
      price: '$1499.99',
      discountedPrice: '$1399.99',
      imageUrl: require("../assets/TopRate/tr2.jpeg"),
      rating: 4,
      reviews: 850,
      favorite: false,
      rank: 2,
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling headphones with superior sound quality.',
      price: '$199.99',
      discountedPrice: '$179.99',
      imageUrl: require("../assets/TopRate/tr3.jpeg"),
      rating: 4,
      reviews: 1000,
      favorite: true,
      rank: 3,
    },
    {
      id: 4,
      name: 'Smartwatch Series 6',
      description: 'A smartwatch that helps you stay fit and connected.',
      price: '$299.99',
      discountedPrice: '$279.99',
      imageUrl: require("../assets/TopRate/tr4.jpeg"),
      rating: 5,
      reviews: 1200,
      favorite: false,
      rank: 4,
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with amazing sound and bass.',
      price: '$49.99',
      discountedPrice: '$39.99',
      imageUrl: require("../assets/TopRate/tr5.jpeg"),
      rating: 4,
      reviews: 900,
      favorite: true,
      rank: 5,
    },
    {
      id: 6,
      name: 'Fitness Tracker Pro',
      description: 'Track your fitness goals and stay motivated.',
      price: '$99.99',
      discountedPrice: '$89.99',
      imageUrl: require("../assets/TopRate/tr6.jpeg"),
      rating: 5,
      reviews: 600,
      favorite: false,
      rank: 6,
    },
    {
      id: 7,
      name: '4K Smart TV',
      description: 'Enjoy stunning visuals with this 4K HDR Smart TV.',
      price: '$599.99',
      discountedPrice: '$549.99',
      imageUrl: require("../assets/TopRate/tr7.jpeg"),
      rating: 5,
      reviews: 3000,
      favorite: true,
      rank: 7,
    },
    {
      id: 8,
      name: 'Camera DSLR X',
      description: 'Professional DSLR camera with high-quality lenses.',
      price: '$799.99',
      discountedPrice: '$749.99',
      imageUrl: require("../assets/TopRate/tr8.jpeg"),
      rating: 4,
      reviews: 1300,
      favorite: false,
      rank: 8,
    },
    {
      id: 9,
      name: 'Portable Power Bank',
      description: 'Keep your devices charged on the go with this power bank.',
      price: '$29.99',
      discountedPrice: '$24.99',
      imageUrl: require("../assets/TopRate/tr9.jpeg"),
      rating: 5,
      reviews: 500,
      favorite: true,
      rank: 9,
    },
    {
      id: 10,
      name: 'Electric Toothbrush',
      description: 'An advanced electric toothbrush for a healthy smile.',
      price: '$59.99',
      discountedPrice: '$49.99',
      imageUrl: require("../assets/TopRate/tr10.jpeg"),
      rating: 4,
      reviews: 700,
      favorite: false,
      rank: 10,
    },
    {
      id: 11,
      name: 'Women\'s Casual Dress',
      description: 'Elegant and comfortable dress for any occasion.',
      price: '$49.99',
      discountedPrice: '$39.99',
      imageUrl: require("../assets/TopRate/tr11.jpeg"),
      rating: 4,
      reviews: 600,
      favorite: true,
      rank: 11,
    },
    {
      id: 12,
      name: 'Men\'s Leather Jacket',
      description: 'Stylish and durable leather jacket for men.',
      price: '$129.99',
      discountedPrice: '$99.99',
      imageUrl: require("../assets/TopRate/tr12.jpeg"),
      rating: 4,
      reviews: 450,
      favorite: false,
      rank: 12,
    },
    {
      id: 13,
      name: 'Luxury Perfume Set',
      description: 'A premium perfume set for both men and women.',
      price: '$59.99',
      discountedPrice: '$49.99',
      imageUrl: require("../assets/TopRate/tr13.jpeg"),
      rating: 5,
      reviews: 1200,
      favorite: true,
      rank: 13,
    },
    {
      id: 14,
      name: 'Women\'s Skincare Kit',
      description: 'All-in-one skincare set for glowing skin.',
      price: '$89.99',
      discountedPrice: '$79.99',
      imageUrl: require("../assets/TopRate/tr14.jpeg"),
      rating: 5,
      reviews: 800,
      favorite: true,
      rank: 14,
    },
    {
      id: 15,
      name: 'Men\'s Cologne',
      description: 'Premium fragrance for men with long-lasting scent.',
      price: '$49.99',
      discountedPrice: '$39.99',
      imageUrl: require("../assets/TopRate/tr15.jpeg"),
      rating: 5,
      reviews: 1100,
      favorite: true,
      rank: 15,
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto  py-20">
      <h1 className="text-3xl font-bold text-center mb-6">Top Rated Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRatedProducts.map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
          >
            {/* Rank Badge */}
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Top {product.rank}
            </div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-sm mb-2">{product.description}</p>
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold line-through">{product.price}</span>
              <span className="ml-2 text-lg font-bold text-green-500">
                {product.discountedPrice}
              </span>
            </div>
            <div className="flex items-center mb-2">
              <div className="ml-2 flex">{renderStars(product.rating)}</div>
              <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              {/* Heart Icon */}
              <button className="text-red-500">
                {product.favorite ? '❤️' : '🤍'}
              </button>
              <div className="w-full mt-4 space-x-2">
                {/* Add to Cart Button */}
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                  Add to Cart
                </button>
                {/* Buy Now Button */}
                <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
