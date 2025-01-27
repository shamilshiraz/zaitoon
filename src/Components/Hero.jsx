import React from 'react'
import Example from './Mobilehero'
import { Link } from 'react-router-dom'

function Hero() {
  return (
<div className="flex flex-col md:flex-row w-full h-full sm:h-[90vh] bg-[url('../nbbg.avif')] bg-cover justify-center">  
<div className=" place-content-center sm:p-12"><Example/></div>

    <div className=" w-full sm:w-[50%] flex gap-4 justify-center align-items-center grid  place-content-center p-10">
        <p className='text-l sm:text-2xl'>ZAITOON MOBILES</p>
        <p className='text-3xl sm:text-6xl'>YOUR GO TO PLACE FOR MOBILE PHONES AND GADGETS</p>
        <p>Trust us for essential tools and robust data security, allowing you to focus on growth with confidence.</p>
        <Link to={'/col'} className='border w-[150px] p-3 place-content-center grid rounded-3xl '>SHOP NOW</Link>
      </div>
      {/* <div className=" place-content-center p-12"><Example/></div> */}
    </div>
  )
}

export default Hero
