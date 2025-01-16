// About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto bg-blue-100 py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-center mb-8">
        Welcome to our website! We are a company dedicated to providing high-quality products
        and services to our customers. Our mission is to make your life easier and more enjoyable
        with innovative solutions and exceptional customer service.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to deliver outstanding products and services that cater to the unique
            needs of our customers. We strive to innovate and provide solutions that enhance the
            everyday lives of our users.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We aim to be a global leader in our industry, continuously evolving to meet the changing
            demands of the market and providing exceptional value to our customers.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="text-gray-700 list-disc pl-6">
            <li>Innovation: Always striving to innovate and improve.</li>
            <li>Integrity: Acting with honesty and transparency.</li>
            <li>Customer-centric: Putting our customers first.</li>
            <li>Excellence: Delivering top-notch quality in everything we do.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Muslim Azam</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Azfar Khurshreed</h3>
            <p className="text-gray-500">Chief Marketing Officer</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Muslim</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
