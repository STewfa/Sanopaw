
import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-lightGrey">
      <Navbar />
      <div className="pt-24">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
