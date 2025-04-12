
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Package, Calendar, MapPin } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId, orderDate, total, shippingInfo } = location.state || {
    orderId: 'N/A',
    orderDate: new Date().toISOString(),
    total: 0,
    shippingInfo: {
      name: 'N/A',
      address: 'N/A',
      city: 'N/A',
      state: 'N/A',
      zip: 'N/A',
      country: 'N/A',
    },
  };

  // Format date
  const formattedDate = new Date(orderDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Estimated delivery date (7 days from order)
  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-signalGreen/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-signalGreen" />
            </div>
            <h1 className="text-3xl font-semibold text-midnightBlack">Order Confirmed!</h1>
            <p className="text-gray-600 mt-2">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>

          <div className="bg-lightGrey rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-medium">{orderId}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-findBlue" />
                  {formattedDate}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-medium text-findBlue">${total.toFixed(2)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Estimated Delivery</p>
                <p className="font-medium flex items-center">
                  <Package className="h-4 w-4 mr-1 text-signalGreen" />
                  {formattedDeliveryDate}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Delivery Information</h2>
            <div className="bg-lightGrey rounded-lg p-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-findBlue mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{shippingInfo.name}</p>
                  <p className="text-gray-600">
                    {shippingInfo.address}<br />
                    {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}<br />
                    {shippingInfo.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center space-y-4">
            <p className="text-gray-600">
              We'll send you an email with your order details and tracking information once your package ships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/" className="button-primary">
                Continue Shopping
              </Link>
              <button className="button-outline">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
