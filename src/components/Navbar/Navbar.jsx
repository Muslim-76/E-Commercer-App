import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/websites/logo1.png"; // Ensure this path is correct
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./Darkmode"; // Ensure this component is correctly defined and exported
import { useCart } from "../../CartContext"; // Import useCart hook from CartContext

// Menu and Dropdown Links
const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Women Wear", link: "/womens-wear" },
  { id: 3, name: "Kids Wear", link: "/kids-wear" },
  { id: 4, name: "Mens Wear", link: "/mens-wear" },
  { id: 5, name: "Electronics", link: "/electronics" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending-products" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];

const Navbar = () => {
  const { cartCount } = useCart(); // Get cartCount from CartContext
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown toggle

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white z-50">
      {/* Top Section */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            Shopsy
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] rounded-full border px-4 py-1 focus:outline-none transition-all duration-300 dark:border-gray-500 dark:bg-gray-800 dark:text-white"
              />
              <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="bg-gradient-to-r from-primary to-secondary text-yellow-500 py-1 px-4 rounded-full flex items-center gap-2 hover:bg-primary hover:bg-green-400 dark:hover:text-gray-900"
            >
              <FaCartPlus className="text-xl" />
              <span className="text-red-500 text-sm">{cartCount || 0}</span>
            </Link>

            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Mobile Menu Toggle */}
            <button
              className="block sm:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`bg-white dark:bg-gray-900 shadow-sm sm:block ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-center px-4">
          {/* Menu Links */}
          <ul className="flex flex-col sm:flex-row items-center gap-6">
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="hover:text-primary dark:hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Dropdown Menu */}
            <li
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-primary dark:hover:text-secondary"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle on mobile
              >
                Trending Products <FaCaretDown />
              </div>
              {isDropdownOpen && (
                <div className="absolute w-[200px] bg-white dark:bg-gray-800 shadow-lg p-2 rounded-md z-10">
                  {DropdownLinks.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link}
                      className="block p-2 hover:bg-primary hover:text-black dark:hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
