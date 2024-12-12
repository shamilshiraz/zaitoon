
import React from 'react'

const Newsletter = () => {

const onSubmitHandler=(e)=>{
    e.preventDefault();
}

  return (
<div className="sm:w-1/2  mx-3 sm:mx-auto border mb-5 p-3 text-center">      <p className='text-2xl font-medium text-black-600 mb-5'>Subscribe now and get 20% off</p>
      <p className=' mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, enim beatae illo facere excepturi commodi dicta, quia hic itaque saepe, facilis officia aliquam fugiat voluptate consequuntur deleniti libero quaerat soluta!</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className=' w-1/2 sm:flex-1 outline-none bg-gray-100' type="email" name="" id="" placeholder='Enter your email' required/>
        <button  type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
