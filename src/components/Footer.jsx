import React from 'react'

const foot1 = [
    {
        title: "Shop and learn",
        content: "Mac",
        content1: "iPad",
        content2: "iPhone",
        content3: "Watch",
        content4: "AirPods",
        content5: "TV & Home",
        content6: "AirTag",
        content7: "Accessories",
        content8: "Gift Cards",
    },

    {
        title: "Apple Store",
        content: "Mac",
        content1: "iPad",
        content2: "iPhone",
        content3: "Watch",
        content4: "AirPods",
        content5: "TV & Home",
        content6: null,
        content7: null,
        content8: null,
    },
    {
        title: "For Business",
        content: "Mac",
        content1: "iPad",
        content2: "iPhone",
        content3: "Watch",
        content4: "AirPods",
        content5: "TV & Home",
        content6: null,
        content7: null,
        content8: null,
    },
    {
        title: "For education",
        content: "Mac",
        content1: "iPad",
        content2: "iPhone",
        content3: "Watch",
        content4: "AirPods",
        content5: "TV & Home",
        content6: "AirTag",
        content7: "Accessories",
        content8: null,
    },
    {
        title: "For Healthcare",
        content: "Mac",
        content1: "iPad",
        content2: "iPhone",
        content3: "Watch",
        content4: "AirPods",
        content5: null,
        content6: null,
        content7: null,
        content8: null,
    },
    {
        title: "Newsroom",
        content: "Apple leadership",
        content1: "Career Opportunities",
        content2: "Investors",
        content3: "Ethics & Compliance",
        content4: "Events",
        content5: "Contact Apple",
        content6: null,
        content7: null,
        content8: null,
    },

]


const Footer = () => {
    return (
        <div>
        <div className='bg-gray-100 flex gap-10 text-sm p-10 justify-center' >
            {foot1.map((link) => (
                <div>
                    <h1 >{link.title}</h1>
                    <div className='text-gray-700 mt-3 p-2 text-center justify-items-start ml-5'>
                        <p ><a href="" className='hover:underline '>{link.content}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content1}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content2}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content3}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content4}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content5}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content6}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content7}</a></p>
                        <p className='mt-2'><a href="" className='hover:underline'>{link.content8}</a></p></div>
                        
                </div>
            ))}
            
        </div>
        
        <div className='bg-gray-100 text-sm text-start text-gray-500 p-3 pl-80 border-b border-b-gray-300 '>
            <p>More ways to shop: <a href="" className='text-blue-400 underline'>Find an Apple Store</a> or other retailer near you. Or call <a href="" className='text-blue-400 underline'>000800 040 1966.</a></p>
        </div>
        <div className='bg-gray-100 flex gap-10 text-gray-500  text-sm text-start p-3 pl-80 border-b border-b-gray-300 '>
            <p>Copyright &copy; 2025 Apple Inc. All rights reserved.</p>
            <div className='flex gap-1 text-gray-500 '>
            <a href="" className='hover:underline'><p>Privacy policy | </p></a>
            <a href="" className='hover:underline'><p>Terms of Use | </p></a>
            <a href="" className='hover:underline'><p>Sales policy | </p></a>
            <a href="" className='hover:underline'><p>Legal | </p></a>
            <a href="" className='hover:underline'><p>Site Map </p></a>
            </div>
        </div>
        </div>
    )
}

export default Footer