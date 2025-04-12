
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Map, Shield, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Product } from '../context/CartContext';

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "FindITX Mini Tracker",
    price: 29.99,
    description: "Compact GPS tracker designed for keychains with real-time location tracking and long battery life.",
    features: [
      "Real-time location tracking",
      "30-day battery life",
      "Water-resistant design",
      "Compact size for keychains",
      "Mobile app integration"
    ],
    specs: {
      "Dimensions": "1.5 × 1.5 × 0.4 inches",
      "Weight": "0.6 oz",
      "Battery": "Rechargeable Li-ion",
      "Connectivity": "Bluetooth 5.0, GPS",
      "Range": "Unlimited (with cellular network)"
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    color: "#0057B8"
  },
  {
    id: 2,
    name: "FindITX Pro Tracker",
    price: 49.99,
    description: "Premium GPS keychain tracker with extended battery life and enhanced precision for valuable items.",
    features: [
      "Enhanced GPS accuracy",
      "60-day battery life",
      "Waterproof design (IP67)",
      "Loud alert sound",
      "Geofencing capabilities"
    ],
    specs: {
      "Dimensions": "1.7 × 1.7 × 0.5 inches",
      "Weight": "0.8 oz",
      "Battery": "Rechargeable Li-ion",
      "Connectivity": "Bluetooth 5.2, GPS, WiFi",
      "Range": "Unlimited (with cellular network)"
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    color: "#28A745"
  },
  {
    id: 3,
    name: "FindITX Ultra Compact",
    price: 39.99,
    description: "Ultra-slim GPS tracker for keychains with sleek design and reliable performance.",
    features: [
      "Super slim design",
      "45-day battery life",
      "Impact-resistant case",
      "Multi-device connectivity",
      "Separation alerts"
    ],
    specs: {
      "Dimensions": "1.3 × 1.3 × 0.3 inches",
      "Weight": "0.5 oz",
      "Battery": "Rechargeable Li-ion",
      "Connectivity": "Bluetooth 5.1, GPS",
      "Range": "Unlimited (with cellular network)"
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    color: "#1C1C1C"
  },
  {
    id: 4,
    name: "FindITX Family Pack",
    price: 89.99,
    description: "Set of 3 GPS trackers perfect for family use, with multi-device management through a single app.",
    features: [
      "Set of 3 trackers",
      "Family account sharing",
      "30-day battery life each",
      "Multi-color options",
      "Group location view"
    ],
    specs: {
      "Dimensions": "1.5 × 1.5 × 0.4 inches (each)",
      "Weight": "0.6 oz (each)",
      "Battery": "Rechargeable Li-ion",
      "Connectivity": "Bluetooth 5.0, GPS",
      "Range": "Unlimited (with cellular network)"
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    color: "#F5F5F5"
  }
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="inline-block bg-findBlue/10 text-findBlue text-sm font-medium px-4 py-1 rounded-full">
                Never Lose What Matters
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnightBlack leading-tight">
                Smart GPS Trackers for Your Valuables
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                FindITX trackers help you keep track of your most important items with precision GPS technology and long battery life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/products" className="button-primary flex items-center justify-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/about" className="button-outline flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className={`relative ${isVisible ? 'animate-fade-in animate-stagger-1' : 'opacity-0'}`}>
              <div className="bg-lightGrey rounded-2xl overflow-hidden shadow-lg h-[400px] flex items-center justify-center relative">
                <img 
                  src="/placeholder.svg" 
                  alt="FindITX GPS Tracker" 
                  className="w-3/4 h-auto object-contain"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm font-medium text-midnightBlack">
                  Premium GPS Technology
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-findBlue text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm">Days Battery Life</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-lightGrey">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-midnightBlack mb-4">Why Choose FindITX</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our GPS trackers are designed with precision and reliability in mind, ensuring you never lose track of what matters most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Map className="h-8 w-8 text-findBlue" />,
                title: "Precise Tracking",
                description: "Advanced GPS technology provides real-time location data with exceptional accuracy."
              },
              {
                icon: <Shield className="h-8 w-8 text-signalGreen" />,
                title: "Durable Design",
                description: "Water-resistant and shock-proof construction to withstand daily use and outdoor conditions."
              },
              {
                icon: <Clock className="h-8 w-8 text-findBlue" />,
                title: "Long Battery Life",
                description: "Industry-leading battery performance with up to 60 days of use between charges."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-md ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-midnightBlack mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-midnightBlack">Featured Products</h2>
              <p className="text-gray-600 mt-2">Discover our best-selling GPS trackers</p>
            </div>
            <Link 
              to="/products" 
              className="text-findBlue hover:text-findBlue/80 font-medium flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-midnightBlack text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Lose What Matters</h2>
              <p className="text-gray-300 mb-6">
                Join thousands of satisfied customers who use FindITX trackers to keep their valuables secure and always within reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="button-secondary flex items-center justify-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="bg-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="bg-findBlue/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "99.9%", text: "Tracking Accuracy" },
                  { number: "30-60", text: "Days Battery Life" },
                  { number: "24/7", text: "Customer Support" },
                  { number: "10,000+", text: "Happy Customers" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-lightGrey">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-midnightBlack mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for product updates, special offers, and tracking tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-findBlue/50"
              required
            />
            <button type="submit" className="button-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-midnightBlack text-white pt-12 pb-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
            <div>
              <img 
                src="/lovable-uploads/126c5efa-9abb-493a-bd3a-2de580bd966b.png"
                alt="FindITX Logo"
                className="h-10 w-auto mb-4 bg-white p-1 rounded"
              />
              <p className="text-gray-400 mb-4">
                Never lose what matters with our precision GPS tracking technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GPS Trackers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Family Packs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} FindITX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
