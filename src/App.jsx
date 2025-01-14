import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import { CartProvider } from "./CartContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopProducts from "./components/Product/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Products from "./components/Product/Product";
import DarkMode from "./components/Navbar/Darkmode";
import KidWear from "./pages/KidWear";
import Cart from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import MensWear from "./pages/MensWear";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  // Toggle the order popup
  const handleOrderPopup = () => setOrderPopup((prev) => !prev);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <DarkMode />

        {/* Consolidated Routes */}
        <Routes>
          <Route path="/" element={<Hero handleOrderPopup={handleOrderPopup} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/top-products" element={<TopProducts handleOrderPopup={handleOrderPopup} />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/kids-wear" element={<KidWear />} />
          <Route path="/mens-wear" element={<MensWear />} /> {/* Correctly added */}
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* Footer and Popup */}
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </CartProvider>
  );
};

export default App;
