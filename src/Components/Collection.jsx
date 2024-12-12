import React, { useContext, useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import { ShopContext } from '../Context/Shopcontext'

function Collection() {
    const { products,search,showSearch } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [prodfil, setProdfil] = useState([])
    const [category, setCategory] = useState([])
    const [sortType,setSortType]=useState('relevance')

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice()

        if(showSearch && search){
            productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }


        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.categ))
        }
        setProdfil(productsCopy)
    }

    useEffect(() => {
        setProdfil(products)  // Sets products initially on component mount
    }, [products])

    useEffect(() => {
        applyFilter()
    }, [category,search,showSearch]) 

    const sortProduct = () => {
        let sortedProducts = [...prodfil] // Create a new copy
    
        switch (sortType) {
            case 'low-high':
                sortedProducts.sort((a, b) => a.price - b.price)
                break
    
            case 'high-low':
                sortedProducts.sort((a, b) => b.price - a.price)
                break
    
            default:
                applyFilter()
                return // Early exit to prevent re-setting sortedProducts
        }
    
        setProdfil(sortedProducts)
    }
    
    // Call sortProduct when sortType changes
    useEffect(() => {
        sortProduct()
    }, [sortType])
    

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t mx-3">
            {/* Filter options */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img src='drp.png' className={`w-4 sm:hidden ${showFilter ? 'rotate-180' : ''}`} alt="" />
                </p>
                {/* Category */}
                <div className={`border border-gray-600 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'sneakers'} onChange={toggleCategory}/>Sneakers
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'tees'} onChange={toggleCategory}/>T-shirts
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'caps'} onChange={toggleCategory} />Caps
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'belt'} onChange={toggleCategory}/>Belts
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
<p>ALL COLLECTIONS</p>                    {/* PRODUCTS SORT */}
                    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevance">Relevance</option>
                        <option value="low-high">Low to high</option>
                        <option value="high-low">High to low</option>
                    </select>
                </div>

                {/* Mapping all products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {prodfil.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Collection