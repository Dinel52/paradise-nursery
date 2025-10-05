// src/components/ProductListingPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { plantsData } from '../data/plantsData';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  // Group plants by category
  const categories = [...new Set(plantsData.map(plant => plant.category))];
  
  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };
  
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
          Our Plant Collection
        </h1>
        
        {/* Display plants grouped by category */}
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-4 border-green-500 inline-block pb-2">
              {category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {plantsData
                .filter(plant => plant.category === category)
                .map(plant => (
                  <div 
                    key={plant.id} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    {/* Plant Image */}
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={plant.image} 
                        alt={plant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Plant Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {plant.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm">
                        {plant.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          ${plant.price.toFixed(2)}
                        </span>
                        
                        <button
                          onClick={() => handleAddToCart(plant)}
                          disabled={isInCart(plant.id)}
                          className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                            isInCart(plant.id)
                              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                              : 'bg-green-500 hover:bg-green-600 text-white'
                          }`}
                        >
                          {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;