import React from 'react'

function Contact() {
  return (
    <div className="">
    <div className='text-center text-2xl pt-10 border-t'>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src="./store.jpg"  className='w-full md:max-w-[480px]'alt="" />
        <div className="flex flex-col justify-center items-start gap-6 mx-3">
          <p className='font-semibold text-xl'>Our Store</p>
          <p className=' text-xl'>Opposite of stirling university, Al daith, RAK</p>
          <p className=' text-xl'>Phone:812457895</p>
          <p className=' text-xl'>sstreetiy@gmail.com</p>
          <p className=' text-xl'>Learn more about us</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
