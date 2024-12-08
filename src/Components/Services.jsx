import React from 'react';

function Services() {
  return (
    <>
    <div className="w-screen  h-auto sm:h-screen my-4">
    <p className='text-4xl flex justify-center'>OUR<span className='text-blue-600'>  SERVICES</span></p>
        <div className="flex flex-col sm:flex-row">

      {/* Left Section */}
      <div className="sm:w-1/2  bg-black w-full flex justify-center items-center">
      <img src="./services.png" alt="" />
      </div>

      {/* Right Section */}
      <div className="sm:w-1/2  bg-black w-full text-2xl">
      <div className="border border-blue-600 sm:w-3/4 rounded-xl p-5 m-5">
        <p>Mobile  Phone sales</p>
      </div>
      <div className="border border-blue-600 sm:w-3/4 rounded-xl p-5 m-5">
        <p>Fast delivery</p>
      </div>
      <div className="border border-blue-600 sm:w-3/4 rounded-xl p-5 m-5">
        <p>24/7 custommer service</p>
      </div>
      <div className="border border-blue-600 sm:w-3/4 rounded-xl p-5 m-5">
        <p>Easy exchanges</p>
      </div>
      <div className="border border-blue-600 sm:w-3/4 rounded-xl p-5 m-5">
        <p>Expert advisory on gadgets</p>
      </div>
      <div className="border border-blue-600 sm:w-3/4 rounded-xl p-5 m-5">
        <p>Delivering the best products in the industry</p>
      </div>
      </div>
        </div>

    </div>
    </>
  );
}

export default Services;

