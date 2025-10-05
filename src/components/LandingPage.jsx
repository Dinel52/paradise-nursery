// src/components/LandingPage.jsx
import React from 'react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1920&h=1080&fit=crop')`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        {/* Company Name */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-green-400">
          Paradise Nursery
        </h1>
        
        {/* Company Description */}
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Welcome to Paradise Nursery, where nature meets your home. We are passionate about bringing 
          the beauty of plants into your living spaces. Our carefully curated collection features 
          stunning houseplants, vibrant outdoor greenery, and easy-care succulents. Whether you're 
          a seasoned plant parent or just beginning your green journey, we have the perfect plants 
          to transform your space into a lush paradise. Discover quality, sustainability, and 
          expert care tips with every purchase.
        </p>
        
        {/* Get Started Button */}
        <button
          onClick={onGetStarted}
          className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-12 py-4 rounded-full 
                     transition duration-300 transform hover:scale-105 shadow-2xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;