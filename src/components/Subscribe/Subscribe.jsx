import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/websites/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    // You can add email validation here if needed
    navigate("/subscribe-confirmation"); // Redirect to confirmation page
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md mb-4"
          />
          <button
            onClick={handleSubscribe}
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:scale-105 duration-200"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
