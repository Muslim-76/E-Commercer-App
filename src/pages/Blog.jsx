// Blog.js
import React from 'react';

const Blog = () => {
  const productPosts = [
    {
      id: 1,
      title: 'Top 10 Trending Dresses for 2025',
      description:
        'Discover the top 10 dresses that will be in fashion for 2025, featuring the latest designs, colors, and materials.',
      date: 'January 10, 2025',
      category: 'Fashion',
    },
    {
      id: 2,
      title: 'Must-Have Electronics This Year',
      description:
        'From smartphones to wearables, check out the latest must-have electronics of 2025 that will enhance your lifestyle.',
      date: 'January 12, 2025',
      category: 'Electronics',
    },
    {
      id: 3,
      title: 'Best Beauty Products for Glowing Skin',
      description:
        'Achieve radiant skin with the best beauty products of 2025. From moisturizers to serums, these products will transform your skincare routine.',
      date: 'January 14, 2025',
      category: 'Cosmetics',
    },
    {
      id: 4,
      title: 'Top 5 Fitness Gadgets for a Healthier You',
      description:
        'Stay fit and motivated with the latest fitness gadgets, from smartwatches to trackers, that will help you achieve your fitness goals.',
      date: 'January 16, 2025',
      category: 'Fitness',
    },
    {
      id: 5,
      title: 'Best Tech Gadgets for Your Home Office',
      description:
        'Transform your workspace with these top tech gadgets designed to improve productivity and comfort in your home office.',
      date: 'January 18, 2025',
      category: 'Electronics',
    },
    {
      id: 6,
      title: 'The Best Men’s Apparel for 2025',
      description:
        'Discover the latest trends in men’s fashion for 2025, from casual wear to formal outfits, and how to style them.',
      date: 'January 20, 2025',
      category: 'Fashion',
    },
    {
      id: 7,
      title: 'Top 10 Kitchen Appliances Every Home Needs',
      description:
        'Upgrade your kitchen with these top-rated kitchen appliances that will make your cooking experience easier and more enjoyable.',
      date: 'January 22, 2025',
      category: 'Home Appliances',
    },
    {
      id: 8,
      title: 'Luxury Watches for 2025: A Complete Guide',
      description:
        'Explore the finest luxury watches for 2025. Whether youre looking for classic designs or modern innovations, this guide has you covered.',
      date: 'January 24, 2025',
      category: 'Accessories',
    },
    {
      id: 9,
      title: 'Best Women’s Handbags for 2025',
      description:
        'From totes to clutches, discover the most fashionable and practical women’s handbags that will elevate any outfit.',
      date: 'January 26, 2025',
      category: 'Fashion',
    },
    {
      id: 10,
      title: 'Top Smart Home Devices You Need to Try',
      description:
        'Explore the most innovative smart home devices for 2025 that can automate your home and make your life more convenient.',
      date: 'January 28, 2025',
      category: 'Home Automation',
    },
  ];

  return (
    <div className="container bg-blue-100 mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Latest Product Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {productPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex justify-between items-center text-gray-500">
              <span>{post.date}</span>
              <a
                href="https://www.google.co.in/"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
