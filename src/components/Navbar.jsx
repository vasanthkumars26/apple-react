import React from 'react'
import {
  FaApple, FaArrowRight, FaSearch, FaShoppingBag
} from 'react-icons/fa'

const headerr = [
  { name: "Store", href: "#" },
  { name: "Mac", href: "#" },
  { name: "iPad", href: "#" },
  { name: "iPhone", href: "#" },
  { name: "Watch", href: "#" },
  { name: "Airpods", href: "#" },
  { name: "TV & Home", href: "#" },
  { name: "Entertainment", href: "#" },
  { name: "Accessories", href: "#" },
  { name: "Support", href: "#" },
]

const Navbar = () => {
  return (
    <>
      
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Top Thin Navbar */}
        <ul className='bg-gray-100 flex p-2 gap-2 text-sm text-gray-700 pl-72'>
          <a href="#" className='hover:underline'><li>Education Store Home |</li></a>
          <a href="#" className='hover:underline'><li>Exit</li></a>
        </ul>

        {/* Main Navigation Bar */}
        <div className='flex items-center gap-8 justify-center text-sm text-gray-600 
                        bg-gray-50/80 backdrop-blur-md p-3'>
          <div className='hover:text-gray-900'>
            <a href="#"><FaApple /></a>
          </div>

          {headerr.map((headd, index) => (
            <p key={index} className='hover:text-gray-900'>
              <a href={headd.href}>{headd.name}</a>
            </p>
          ))}

          {/* Search & Cart */}
          <div className='flex gap-10'>
            <p className='hover:text-gray-900'><a href="#"><FaSearch /></a></p>
            <p className='hover:text-gray-900'><a href="#"><FaShoppingBag /></a></p>
          </div>
        </div>
      </div>

      {/* Spacer so content isn't hidden behind fixed nav */}
      <div className="h-[100px]"></div>

      {/* Scrollable Offer Bar */}
      <div className='flex items-center justify-center text-sm mt-4 px-4 text-center'>
        <p>
          Get up to 12 months of No Cost EMI plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.
        </p>
        <a href="#" className='items-center flex ml-1 text-blue-400 hover:underline'>
          Shop <FaArrowRight className='ml-1 mt-[2px]' />
        </a>
      </div>
    </>
  )
}

export default Navbar
