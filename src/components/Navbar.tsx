
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/126c5efa-9abb-493a-bd3a-2de580bd966b.png" 
            alt="FindITX Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/products" className="navbar-item">Products</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-midnightBlack hover:text-findBlue transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-signalGreen text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-midnightBlack focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-8 space-y-8 text-xl">
            <Link to="/" className="text-midnightBlack hover:text-findBlue transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-midnightBlack hover:text-findBlue transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-midnightBlack hover:text-findBlue transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-midnightBlack hover:text-findBlue transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
