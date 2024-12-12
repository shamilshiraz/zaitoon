import { ArrowLeftRight, HeadphoneOffIcon, HeadphonesIcon, Headset, Package } from 'lucide-react'
import React from 'react'

function Services() {
  return (
    <div>
      <p className='text-3xl items-center flex justify-center'>OUR <span className='text-blue-600'>SERVICES</span></p>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-lg sm:text-sm md:text-base ">
    <div className='flex justify-center flex-col items-center'>
        <ArrowLeftRight size={96}/>
        <p className='font-semibold'>Easy exchange policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
    </div>
    <div className='flex justify-center flex-col items-center'>
        <Package size={96}/>
        <p className='font-semibold'>7 days return policy </p>
        <p className='text-gray-400'>We provide 7 days waiting period for exchange</p>
    </div>
    <div className='flex justify-center flex-col items-center'>
        <Headset size={96}/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
    </div>
</div>
    </div>
  )
}

export default Services
