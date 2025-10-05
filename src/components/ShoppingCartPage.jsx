// src/components/ShoppingCartPage.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';

const ShoppingCartPage = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);
  
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  
  const handleCheckout = () => {
    setShowCheckoutMessage(true);
    setTimeout(() => setShowCheckoutMessage(false), 3000);
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
          <div className="bg-white rounded-lg shadow-lg p-12">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-24 w-24 mx-auto text-gray-400 mb-4" 
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
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <button
              onClick={onContinueShopping}
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
        
        {/* Checkout Message */}
        {showCheckoutMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Coming Soon! Checkout feature will be available shortly.
          </div>
        )}
        
        {/* Cart Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold">Total Items:</span>
            <span className="text-green-600 font-bold">{totalQuantity}</span>
          </div>
          <div className="flex justify-between items-center text-2xl mt-2">
            <span className="font-semibold">Total Cost:</span>
            <span className="text-green-600 font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </div>
        
        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              {/* Plant Image */}
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mr-6"
              />
              
              {/* Plant Details */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">Unit Price: ${item.price.toFixed(2)}</p>
                <p className="text-green-600 font-semibold">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full font-bold transition"
                >
                  -
                </button>
                
                <span className="text-xl font-bold w-12 text-center">{item.quantity}</span>
                
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full font-bold transition"
                >
                  +
                </button>
                
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-semibold transition ml-4"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={onContinueShopping}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-full transition"
          >
            Continue Shopping
          </button>
          
          <button
            onClick={handleCheckout}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;