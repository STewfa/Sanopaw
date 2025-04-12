
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart, Product } from '../context/CartContext';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover animate-fade-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Hover Actions */}
        <div 
          className={`absolute inset-0 flex items-center justify-center space-x-4 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Link 
            to={`/product/${product.id}`}
            className="bg-white text-midnightBlack p-3 rounded-full transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Eye size={20} />
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="bg-findBlue text-white p-3 rounded-full transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
        
        {/* Color indicator */}
        <div 
          className="absolute bottom-4 right-4 h-5 w-5 rounded-full border-2 border-white shadow-sm" 
          style={{ backgroundColor: product.color }}
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-medium text-midnightBlack mb-1 truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-findBlue font-semibold">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="text-xs bg-findBlue text-white px-3 py-1.5 rounded-md transition-colors hover:bg-findBlue/90"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
