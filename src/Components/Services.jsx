import React from 'react'

function Services() {
  return (
    <div>
      <div className="w-screen flex items-center justify-center">
      <h2 className="text-4xl  text-white ">
              OUR  <span className="text-blue-500">SERVICES</span>
            </h2>      </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 ">
            <div className="flex flex-col flex-1 border p-4 m-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-minimal-check"><path d="M2 20h20"/><path d="m9 10 2 2 4-4"/><rect x="3" y="4" width="18" height="12" rx="2"/></svg>
  <p className='text-3xl'>Expert guidance</p>
  <p>We provide expert guidance on gadgets to our customers</p>
  </div>
  <div className="flex flex-col flex-1 border p-4 m-4 ">
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>  <p className='text-3xl'>Doorstep Delivery</p>
  <p>Delivering the best gadgets to your doorstep</p>
  </div>
  <div className="flex flex-col flex-1 border p-4 m-4 ">
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg> 
   <p className='text-3xl'>Enabled 24/7 customer support</p>
  <p>Talk to us anytime!</p>
  </div>
  </div>

    </div>
  )
}

export default Services
