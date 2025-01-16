// Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Your message has been sent!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto bg-blue-100 py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-center mb-8">
        We would love to hear from you! Please fill out the form below to reach out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Whether you have a question, feedback, or just want to say hi, we’re here to help!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Info</h2>
          <p className="text-gray-700 mb-4">
            You can also reach us through the following channels:
          </p>

          <ul className="text-lg text-gray-700 space-y-4">
            <li>
              <strong>Email:</strong> muslimazam970@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 7644998291
            </li>
            <li>
              <strong>Address:</strong> Patna , Bihar , India
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
