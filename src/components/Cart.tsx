
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { items, subtotal, clearCart } = useCart();

  // Tax rate (10%)
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  
  // Shipping (free over $50)
  const shipping = subtotal > 50 ? 0 : 9.99;
  
  // Total
  const total = subtotal + tax + shipping;

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-3xl font-semibold text-midnightBlack mb-8 flex items-center">
        <ShoppingBag className="mr-3 h-8 w-8 text-findBlue" />
        Your Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
            <ShoppingBag className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-medium text-gray-600">Your cart is empty</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/" className="button-primary inline-block mt-4">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Cart Items ({items.length})</h2>
              <button 
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700 transition-colors"
              >
                Clear Cart
              </button>
            </div>
            
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link to="/" className="text-findBlue hover:text-findBlue/80 transition-colors flex items-center text-sm">
                <ArrowRight className="h-4 w-4 mr-1 transform rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span className="text-findBlue">${total.toFixed(2)}</span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-gray-500 mt-1">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
            </div>
            
            <Link 
              to="/checkout"
              className="button-primary w-full mt-6 flex items-center justify-center"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <div className="mt-6 text-xs text-gray-500 space-y-2">
              <p>We accept:</p>
              <div className="flex space-x-2">
                <div className="h-8 w-12 bg-gray-200 rounded-md"></div>
                <div className="h-8 w-12 bg-gray-200 rounded-md"></div>
                <div className="h-8 w-12 bg-gray-200 rounded-md"></div>
                <div className="h-8 w-12 bg-gray-200 rounded-md"></div>
              </div>
              <p>
                Secure payments provided by our trusted payment processor.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
