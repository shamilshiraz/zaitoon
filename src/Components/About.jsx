import React from 'react';

const CurvedAbout = () => {
  return (
    <div className="relative ">
      {/* Banner */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" /> 
          <img
            src="/ifuuun.jpg"
            alt="iPhone 15 Pro"
            className="w-full h-[60vh] object-cover object-center opacity-90"
          />
        </div>
        
        {/* Curved transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full h-auto fill-black transform translate-y-1"
          >
            <path 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="bg-black relative">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="space-y-8">
            <h2 className="text-4xl  text-white">
              ABOUT  <span className="text-blue-500">US</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to Zaitoon Mobiles, your trusted online store located in Ras al-Khaimah, RK. We specialize in offering a wide range of mobile phones and accessories. Our mission is to provide you with quality products at great prices.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
              At Zaitoon Mobiles, we put our customers first. Our team works hard to ensure a smooth shopping experience. Whether you're looking for the latest smartphone or a durable case, we're here to help. Thank you for choosing Zaitoon Mobiles!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedAbout;
