import React from 'react'

const Hero = () => {
  return (
    <div className='mt-8 justify-items-center w-[100%] p-10 pb-14'  style={ {  backgroundImage:"url('https://media.gettyimages.com/id/506871794/photo/apple-store-in-china.jpg?s=612x612&w=0&k=20&c=rON1p8EzS8whqR5vxUcSABD96YJZv-IucFUidffQT_c=')"}}>
        <p className='bg-blue-500 text-white font-bolder w-[15%] text-3xl p-5 rounded-full cursor-pointer' >Buy Mac or Ipad For College</p>
        <p className='bg-blue-500 text-white font-bolder w-fit  text-2xl mt-3 p-3 rounded-2xl cursor-pointer '>with education savings*</p>
        <div className='bg-blue-500 text-white font-bolder w-[18%]  text-3xl mt-6 p-5 rounded-full relative'>
        <a href=""><p >Choose Airpods or an eligible accessory</p></a>
        <p className='absolute top-0 left-0 text-5xl '>🎈</p>
        </div>
        <button className='border border-blue-600 mt-6 p-2 w-[5%] text-blue-600  rounded-full hover:bg-blue-700 hover:text-white transition'>Shop</button>
    </div>
  )
}

export default Hero