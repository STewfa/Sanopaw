
import React, { useState } from 'react';
import { useCart, Product } from '../context/CartContext';
import { ChevronLeft, ChevronRight, Minus, Plus, Check, ShoppingCart } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl bg-lightGrey shadow-md h-[400px] md:h-[500px]">
            <div className="relative h-full">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className={`absolute w-full h-full object-contain transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-midnightBlack" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-midnightBlack" />
            </button>
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex mt-4 space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === index ? 'border-findBlue ring-2 ring-findBlue/20' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="h-full w-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-midnightBlack">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-findBlue">${product.price.toFixed(2)}</span>
            <div 
              className="h-6 w-6 rounded-full border shadow-sm" 
              style={{ backgroundColor: product.color }}
            />
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          
          {/* Features */}
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-signalGreen mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="button-primary w-full flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
          
          {/* Specifications */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-xl font-medium mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-sm text-gray-500">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
