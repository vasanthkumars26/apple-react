import React from 'react'

const Content = () => {
  return (
    <div>
        <div className='mt-64    h-96 w-[100%] m-0 justify-center  opacity-0.5  'style={{backgroundColor:'#D4EAF7'}}  >
        
        <h1 className='text-5xl font-bold pt-4'>MacBook Air</h1>
        <p className='text-3xl font-semi-bold'>Skyblue Color.</p>
        <p className='text-3xl font-semi-bold'>Sky high performance with M4.</p>
        <div className='mt-4 justify-items-center justify-center '>
            <button className='bg-blue-600 text-white rounded-full mr-2 p-2 w-[8%] hover:bg-blue-800'>Learn more</button>
            <button className='border border-blue-600  p-2 w-[5%] text-blue-500  rounded-full hover:bg-blue-700 hover:text-white transition'>Buy</button>
        </div>
        <img className='h-[100%] blur-0pb-12  w-[100%]' src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1739216814915" alt="" />
        <p className='text-xl font-semibold mt-2 bg-gradient-to-r from-blue-700 via-purple-700  to-pink-300
               bg-clip-text text-transparent  '>Built for Apple Intelligence.</p>
    </div>
    </div>
  )
}

export default Content