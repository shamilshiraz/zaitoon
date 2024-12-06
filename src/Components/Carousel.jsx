import React from 'react'
import './carousel.css'

function Carousel() {
  return (
    <div className='carousel my-[5%]'>
      <marquee behavior="" direction="" >
        <div className="flex gap-6 my-6">
        <img src="./apple.png" alt="" />
        <img src="./moto.png" alt="" />
        <img src="./samsung.png" alt="" />
        <img src="./dell.png" alt="" />
        <img src="./asus.png" alt="" />
        <img src="./hp.png" alt="" />
        <img src="./huawei.jpeg" alt="" />
        <img src="sony.jpg" alt="" />
        </div>
      </marquee>
      <marquee behavior="right" direction="" >
        <div className="flex gap-6">

        </div>
      </marquee>
    </div>
  )
}

export default Carousel
