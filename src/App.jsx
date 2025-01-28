import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import DarkMode from "./components/Navbar/Darkmode";
import KidWear from "./pages/KidWear";
import Cart from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import MensWear from "./pages/MensWear";
import Electronics from "./pages/Electronics";
import Womenswear from "./pages/Womenswear";
import TrendingProducts from "./pages/TrendingProducts";
import Testimonials from "./components/Testimonials/Testimonials";
import Subscribe from "./components/Subscribe/Subscribe"; // Import Subscribe component
import BestSelling from "./pages/BestSelling";
import TopRated from "./pages/TopRated";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PaymentForm from "./pages/PaymentForm";

// Stripe integration imports
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


// Load your Stripe public key (replace with your actual key)
const stripePromise = loadStripe("sk_test_tR3PYbcVNZZ796tH88S4VQ2u");

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

        {/* Main Routes */}
        <Routes>
          {/* Homepage Route with Hero, Testimonials, and Subscribe */}
          <Route path="/" element={<><Hero handleOrderPopup={handleOrderPopup} /><Testimonials /><Subscribe /></>} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/womens-wear" element={<Womenswear />} />
          <Route path="/kids-wear" element={<KidWear />} />
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/trending-products" element={<TrendingProducts />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Payment Route with Stripe Elements */}
          <Route path="/payment" element={<Elements stripe={stripePromise}><PaymentForm /></Elements>} />
          
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
