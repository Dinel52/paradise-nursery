// src/App.jsx
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  
  const handleGetStarted = () => {
    setCurrentPage('products');
  };
  
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="App">
      {/* Show Header only on products and cart pages */}
      {currentPage !== 'landing' && (
        <Header 
          currentPage={currentPage} 
          onNavigate={handleNavigation}
        />
      )}
      
      {/* Render pages based on current page state */}
      {currentPage === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      
      {currentPage === 'products' && (
        <ProductListingPage />
      )}
      
      {currentPage === 'cart' && (
        <ShoppingCartPage onContinueShopping={() => handleNavigation('products')} />
      )}
    </div>
  );
}

export default App;