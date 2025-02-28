import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, HomeIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBagIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-800">SecondChance</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary flex items-center space-x-1">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-primary flex items-center space-x-1">
              <ShoppingBagIcon className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-primary flex items-center space-x-1">
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary">
              <ShoppingCartIcon className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden ml-2 p-2 text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col space-y-3 px-2">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-primary py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-600 hover:text-primary py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBagIcon className="h-5 w-5" />
                <span>Shop</span>
              </Link>
              <Link 
                to="/profile" 
                className="text-gray-600 hover:text-primary py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserIcon className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;