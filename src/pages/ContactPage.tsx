
import React from 'react';
import Navbar from '../components/Navbar';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-lightGrey">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold text-midnightBlack mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-findBlue text-white rounded-xl shadow-md p-8 h-full">
                <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
                <p className="mb-8">
                  Have questions about our products or need assistance? We're here to help! Fill out the form or contact us directly using the information below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:support@finditx.com" className="text-white/80 hover:text-white">support@finditx.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+18005551234" className="text-white/80 hover:text-white">+1 (800) 555-1234</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/80">123 Tech Way, San Francisco, CA 94107, USA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-white/80">Monday-Friday: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-medium text-midnightBlack mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-findBlue focus:border-findBlue"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-findBlue focus:border-findBlue"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-findBlue focus:border-findBlue"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-findBlue focus:border-findBlue"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="flex items-center justify-center bg-findBlue text-white px-6 py-3 rounded-md hover:bg-findBlue/90 transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-medium text-midnightBlack mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-findBlue mb-2">How long do the batteries last?</h3>
                <p className="text-gray-700">Our GPS trackers have different battery lives depending on the model. The Mini lasts 30 days, the Pro lasts 90 days, and the Ultra lasts up to 180 days on a single charge with normal usage.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-findBlue mb-2">Do I need a subscription?</h3>
                <p className="text-gray-700">Yes, all our GPS trackers require a monthly subscription to access the tracking service. We offer flexible plans starting at $3.99/month with discounts for annual payments.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-findBlue mb-2">What is your return policy?</h3>
                <p className="text-gray-700">We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-findBlue mb-2">Can I track multiple devices from one account?</h3>
                <p className="text-gray-700">Yes, our app allows you to track multiple GPS devices from a single account. You can name each device and switch between them easily.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
