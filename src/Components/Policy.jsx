import React from 'react'

const Policy = () => {
  return (
<div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600 ">
    <div>
        <img src="exc.png" className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy exchange policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
    </div>
    <div>
        <img src="ret.jpg" className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 days return policy </p>
        <p className='text-gray-400'>We provide 7 days waiting period for exchange</p>
    </div>
    <div>
        <img src="csp.png" className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
    </div>
</div>
  )
}

export default Policy
