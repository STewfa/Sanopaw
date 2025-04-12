
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, CartItem as CartItemType } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200 animate-fade-in">
      <Link to={`/product/${product.id}`} className="flex-shrink-0">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-20 h-20 object-cover rounded-md" 
        />
      </Link>
      
      <div className="ml-4 flex-grow">
        <Link 
          to={`/product/${product.id}`}
          className="text-lg font-medium text-midnightBlack hover:text-findBlue transition-colors"
        >
          {product.name}
        </Link>
        <div 
          className="inline-block h-3 w-3 rounded-full mt-1 mr-2 border border-gray-300" 
          style={{ backgroundColor: product.color }}
        />
        <p className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)} each</p>
      </div>
      
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <button
          onClick={handleDecreaseQuantity}
          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="font-medium">${(product.price * quantity).toFixed(2)}</p>
        <button 
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 transition-colors mt-1 flex items-center text-sm"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
