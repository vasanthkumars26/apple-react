import React from 'react'

const Section = () => {
  return (
    <div className='mt-6 h-96 w-[100%] m-0 justify-center  opacity-0.5  bg-gray-50'  >
        
        <h1 className='text-5xl font-bold pt-4'>iPhone</h1>
        <p className='text-3xl font-semi-bold'>Meet the iPhone16 family.</p>
        <div className='mt-4 justify-items-center justify-center '>
            <button className='bg-blue-600 text-white rounded-full mr-2 p-2 w-[8%] hover:bg-blue-800'>Learn more</button>
            <button className='border border-blue-600  p-2 w-[8%] text-blue-500  rounded-full hover:bg-blue-700 hover:text-white transition'>Shop iPhone</button>
        </div>
        <p className='text-xl font-semibold mt-6 bg-gradient-to-r from-blue-700 via-purple-700  to-pink-300
               bg-clip-text text-transparent  '>Built for Apple Intelligence.</p>
               <img className='h-[100%] blur-0   w-[100%]' src="https://store.rsgsolutions.co.in/wp-content/uploads/2024/09/D2-scaled.jpg" alt="" />
    </div>
  )
}

export default Section