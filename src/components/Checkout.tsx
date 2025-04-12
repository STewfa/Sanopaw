
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

type CheckoutStep = 'shipping' | 'payment' | 'review';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [formData, setFormData] = useState({
    // Shipping information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    
    // Payment information
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Constants for calculation
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 'shipping') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setCurrentStep('review');
    } else {
      // Process the order and navigate to confirmation
      setTimeout(() => {
        clearCart();
        navigate('/confirmation', { 
          state: { 
            orderId: `FTX-${Math.floor(100000 + Math.random() * 900000)}`,
            orderDate: new Date().toISOString(),
            total,
            shippingInfo: {
              name: `${formData.firstName} ${formData.lastName}`,
              address: formData.address,
              city: formData.city,
              state: formData.state,
              zip: formData.zip,
              country: formData.country,
            }
          } 
        });
      }, 1500);
    }
  };

  const getStepIcon = (step: CheckoutStep) => {
    switch (step) {
      case 'shipping':
        return <Package className="h-5 w-5" />;
      case 'payment':
        return <CreditCard className="h-5 w-5" />;
      case 'review':
        return <CheckCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-3xl font-semibold text-midnightBlack mb-8">Checkout</h1>

      {/* Checkout Steps */}
      <div className="flex justify-between mb-10 max-w-3xl mx-auto">
        {(['shipping', 'payment', 'review'] as CheckoutStep[]).map((step, index) => {
          const isActive = currentStep === step;
          const isPast = (currentStep === 'payment' && step === 'shipping') || 
                          (currentStep === 'review' && (step === 'shipping' || step === 'payment'));
          
          return (
            <div 
              key={step} 
              className={`flex flex-col items-center space-y-2 flex-1 relative ${
                index !== 0 ? 'before:content-[""] before:absolute before:h-0.5 before:w-full before:bg-gray-300 before:left-0 before:top-5 before:-translate-x-1/2' : ''
              }`}
            >
              <div 
                className={`z-10 w-10 h-10 flex items-center justify-center rounded-full ${
                  isActive 
                    ? 'bg-findBlue text-white' 
                    : isPast 
                      ? 'bg-signalGreen text-white' 
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isPast ? <CheckCircle className="h-5 w-5" /> : getStepIcon(step)}
              </div>
              <span 
                className={`text-sm font-medium ${
                  isActive ? 'text-findBlue' : isPast ? 'text-signalGreen' : 'text-gray-500'
                }`}
              >
                {step.charAt(0).toUpperCase() + step.slice(1)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <form onSubmit={handleSubmit}>
              {currentStep === 'shipping' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 'payment' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-medium mb-4">Payment Information</h2>
                  
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="1234 5678 9012 3456"
                      className="input-field"
                      maxLength={19}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                        className="input-field"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cardCvc"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        required
                        placeholder="123"
                        className="input-field"
                        maxLength={3}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200 text-sm text-gray-600">
                    <p className="flex items-center mb-2">
                      <CheckCircle className="h-4 w-4 text-signalGreen mr-2" />
                      Your payment information is secure
                    </p>
                    <p>
                      This is a demo. No actual payment will be processed.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 'review' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-medium mb-4">Review Your Order</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-sm text-gray-700 mb-2">Shipping Information</h3>
                      <p className="text-sm">
                        {formData.firstName} {formData.lastName}<br />
                        {formData.address}<br />
                        {formData.city}, {formData.state} {formData.zip}<br />
                        {formData.country}<br />
                        {formData.email}<br />
                        {formData.phone}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-sm text-gray-700 mb-2">Payment Method</h3>
                      <p className="text-sm flex items-center">
                        <CreditCard className="h-4 w-4 mr-2 text-findBlue" />
                        Card ending in {formData.cardNumber.slice(-4)}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-sm text-gray-700 mb-2">Order Items</h3>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div key={item.product.id} className="flex justify-between text-sm">
                            <div className="flex items-center">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="h-10 w-10 object-cover rounded-md mr-2"
                              />
                              <span>
                                {item.product.name} <span className="text-gray-500">× {item.quantity}</span>
                              </span>
                            </div>
                            <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {currentStep !== 'shipping' && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep === 'payment' ? 'shipping' : 'payment')}
                    className="button-outline"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className={`button-primary ml-auto flex items-center ${
                    currentStep === 'review' ? 'bg-signalGreen hover:bg-signalGreen/90 active:bg-signalGreen/80' : ''
                  }`}
                >
                  {currentStep === 'review' ? 'Place Order' : 'Continue'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Order Summary Section */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-medium mb-6">Order Summary</h2>
          
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span>
                  {item.product.name} <span className="text-gray-500">× {item.quantity}</span>
                </span>
                <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
