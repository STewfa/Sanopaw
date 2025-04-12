
import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Product } from '../context/CartContext';

const ProductsPage = () => {
  // Sample product data - in a real app, this would come from an API or database
  const products: Product[] = [
    {
      id: 1,
      name: "FindITX Mini GPS Tracker",
      price: 29.99,
      description: "Keep track of your valuables with our compact, lightweight GPS tracker. Perfect for keychains, bags, and small items.",
      features: [
        "Ultra-compact design",
        "Real-time tracking",
        "30-day battery life",
        "Water-resistant",
        "Mobile app included"
      ],
      specs: {
        "Dimensions": "1.5 x 1.2 x 0.5 inches",
        "Weight": "0.8 oz",
        "Battery": "Rechargeable Lithium-ion",
        "Range": "Unlimited (GSM network)",
        "Accuracy": "±2 meters"
      },
      images: [
        "https://images.unsplash.com/photo-1611740801592-08917935bb53?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1625960834526-b7db344fbcb0?q=80&w=1074&auto=format&fit=crop"
      ],
      color: "#0057B8"
    },
    {
      id: 2,
      name: "FindITX Pro GPS Tracker",
      price: 49.99,
      description: "Our professional-grade GPS tracker with extended battery life and enhanced features for reliable tracking of all your valuables.",
      features: [
        "Professional-grade tracking",
        "90-day battery life",
        "Geofencing capabilities",
        "SOS button",
        "Waterproof (IP67)"
      ],
      specs: {
        "Dimensions": "2.0 x 1.5 x 0.6 inches",
        "Weight": "1.2 oz",
        "Battery": "High-capacity Lithium-ion",
        "Range": "Unlimited (GSM network)",
        "Accuracy": "±1 meter"
      },
      images: [
        "https://images.unsplash.com/photo-1592898741947-6496d0e8c3a5?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593109409142-8a05e83d1128?q=80&w=1074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1170&auto=format&fit=crop"
      ],
      color: "#28A745"
    },
    {
      id: 3,
      name: "FindITX Ultra GPS Tracker",
      price: 79.99,
      description: "The ultimate GPS tracking solution with premium features, including long-range tracking, motion alerts, and worldwide coverage.",
      features: [
        "Premium ultra-thin design",
        "180-day battery life",
        "Global coverage",
        "Motion & temperature sensors",
        "Advanced reporting"
      ],
      specs: {
        "Dimensions": "2.2 x 1.8 x 0.4 inches",
        "Weight": "1.0 oz",
        "Battery": "Ultra-capacity Lithium-ion",
        "Range": "Worldwide (Multi-network)",
        "Accuracy": "±0.5 meters"
      },
      images: [
        "https://images.unsplash.com/photo-1625949295859-df4f19c45a7a?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1597169521317-2a53ddfb0ca1?q=80&w=1170&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1547976176-acb290de0893?q=80&w=1170&auto=format&fit=crop"
      ],
      color: "#1C1C1C"
    }
  ];

  return (
    <div className="min-h-screen bg-lightGrey">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-semibold text-midnightBlack mb-8">Our GPS Trackers</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover our premium collection of GPS trackers specially designed for keychains and 
          valuable items. Each device combines advanced technology with compact design to ensure 
          you always know where your essentials are.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
