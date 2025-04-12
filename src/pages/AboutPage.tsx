
import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-lightGrey">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-midnightBlack mb-8">About FindITX</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-medium text-findBlue mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At FindITX, we're dedicated to bringing peace of mind to our customers through innovative 
              tracking solutions. We believe that everyone deserves to feel secure about their valuable 
              possessions, which is why we've developed a range of GPS trackers that combine cutting-edge 
              technology with user-friendly design.
            </p>
            <p className="text-gray-700">
              Our mission is to make premium tracking technology accessible to everyone, helping to reduce 
              the stress and financial impact of lost or stolen items.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-medium text-findBlue mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2018, FindITX began with a simple idea: to create a GPS tracker small enough 
              for everyday items but powerful enough to provide reliable tracking. After our founder lost 
              his keys with irreplaceable sentimental keychains attached, he was inspired to create a 
              solution that would prevent others from experiencing the same loss.
            </p>
            <p className="text-gray-700">
              What started as a small project has now grown into a trusted brand with customers worldwide. 
              We continue to innovate and improve our products based on customer feedback and technological 
              advancements.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-medium text-findBlue mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-midnightBlack mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push the boundaries of what's possible in GPS tracking technology.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-midnightBlack mb-2">Quality</h3>
                <p className="text-gray-700">
                  We never compromise on the quality of our products or service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-midnightBlack mb-2">Customer Focus</h3>
                <p className="text-gray-700">
                  Our customers' needs and satisfaction drive everything we do.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-midnightBlack mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We operate with honesty and transparency in all aspects of our business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
