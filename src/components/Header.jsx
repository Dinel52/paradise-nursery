// src/components/Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ currentPage, onNavigate }) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  
  return (
    <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div 
            className="text-2xl font-bold cursor-pointer hover:text-green-300 transition"
            onClick={() => onNavigate('products')}
          >
            🌿 Paradise Nursery
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('products')}
              className={`text-lg font-semibold hover:text-green-300 transition ${
                currentPage === 'products' ? 'text-green-300 underline' : ''
              }`}
            >
              Products
            </button>
            
            {/* Shopping Cart Icon with Badge */}
            <button
              onClick={() => onNavigate('cart')}
              className="relative hover:text-green-300 transition"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              
              {/* Cart Item Count Badge */}
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;