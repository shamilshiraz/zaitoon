import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Related from '../Components/Related';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products } from '../assets/store';
import { ShopContext } from '../Context/Shopcontext';


const Product = () => {
const {productId}=useParams();
const {products,addtoCart}=useContext(ShopContext)
const[productData,setProductData]=useState(false)
const[image,setImage]=useState('')
const[size,setSize]=useState('')

const fetchProductData=async()=>{
    products.map((item)=>{
        if(item.id===productId){
            setProductData(item)   
            setImage(item.image[0])         
            return  null
        }
    })
}

useEffect(()=>{
    fetchProductData()
},[productId,products])

    return productData? (
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opcaity-100'>
        {/* product data */}
       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-content-normal sm:w-[18.7%] w-full">
                {
                    productData.image.map((item,index)=>(
                        <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3'/>
                    ))
                }            
            </div>
            <div className="w-full sm:w-[80%]">
                <img className='' src={image} alt="" />
            </div>
        </div>
        <div className="flex-1">
        <h1 className='font-medium tetx-2xl mt-2'>{productData.name}</h1>
        <div className="flex items-center gap-1 mt-2">
            <img src="/star.webp" alt="" className='w-2 5'/>
            <img src="/star.webp" alt="" className='w-2 5'/>
            <img src="/star.webp" alt="" className='w-2 5'/>
            <img src="/star.webp" alt="" className='w-2 5'/>
            <img src="/dull.webp" alt="" className='w-2 5'/>
            <p className="pl-2">(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>${productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className="flex flex-col gap-4 my-6">
            <p>Select sizes</p>
            <div className="flex gap-2">
                {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size?'border-orange-500':''}`} key={index}>{item}</button>
                ))}
            </div>
            <button onClick={()=>{addtoCart(productData.id,size)}} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-600'>Add to cart</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% original product</p>
                <p>COD available</p>
                <p>Easy returns and exchange policy available</p>
            </div>
        </div>
       </div>
       </div>
{/* DESCRIPTION */}
<div className="mt-20">
    <div className="flex">
        <b className='border px-5 py-3 text-sm '>Description</b>
        <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
    </div>
    <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quae cum fuga odit voluptatibus, illum, quibusdam sapiente dicta, autem unde officia hic amet necessitatibus iste assumenda cumque eius. Consectetur, illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit sint quam dolor odio magni ipsa alias tempora mollitia, harum neque reiciendis accusamus nemo quibusdam saepe! Blanditiis esse sunt illo.</p>
    </div>
</div>

{/* RELATED */}
<Related category={productData.category}/>

      </div>
    ): <div className="opacity-0"></div>
  };
  
  export default Product;