import React from 'react';

function Footer() {
    return (
        
    <footer className=" py-10 bg-gray-900">
        <div className='wrapper'>
            <div className="flex justify-between">
                <div className='text-white-A700'>
                    <h4 className='text-[20px] uppercase font-semibold mb-4'>About</h4>
                    <ul className='text-[14px] space-y-2 cursor-pointer'>
                        <li className='hover:underline-blue'>Contact Us</li>
                        <li className='hover:underline-blue'>About Us</li>
                        <li className='hover:underline-blue'>Careers</li>
                        <li className='hover:underline-blue'>Flipkart Stories</li>
                        <li className='hover:underline-blue'>Press</li>
                        <li className='hover:underline-blue'>Flipkart Wholesale</li>
                        <li className='hover:underline-blue'>Corporate Information</li>
                    </ul>
                </div>
                <div className='text-white-A700'>
                    <h4 className='text-[20px] uppercase font-semibold mb-4'>Help</h4>
                    <ul className='text-[14px] space-y-2 cursor-pointer'>
                        <li className='hover:underline-blue'>Payments</li>
                        <li className='hover:underline-blue'>Shipping</li>
                        <li className='hover:underline-blue'>Cancellation & Returns</li>
                        <li className='hover:underline-blue'>FAQ</li>
                        <li className='hover:underline-blue'>Report Infringement</li>
                    </ul>
                </div>
                <div className='text-white-A700'>
                    <h4 className='text-[20px] uppercase font-semibold mb-4'>Policy</h4>
                    <ul className='text-[14px] space-y-2 cursor-pointer'>
                        <li className='hover:underline-blue'>Return Policy</li>
                        <li className='hover:underline-blue'>Terms of Use</li>
                        <li className='hover:underline-blue'>Security</li>
                        <li className='hover:underline-blue'>Privacy</li>
                        <li className='hover:underline-blue'>Sitemap</li>
                        <li className='hover:underline-blue'>EPR Compliance</li>
                    </ul>
                </div>
                <div className='text-white-A700'>
                    <h4 className='text-[20px] uppercase font-semibold mb-4'>Social</h4>
                    <ul className='text-[14px] space-y-2 cursor-pointer'>
                        <li className='hover:underline-blue'>Facebook</li>
                        <li className='hover:underline-blue'>YouTube</li>
                        <li className='hover:underline-blue'>Twitter</li>
                    </ul>
                </div>
                <div className='text-white-A700'>
                    <h4 className='text-[20px] uppercase font-semibold mb-4'>Mail us:</h4>
                    <p className='text-[14px] leading-6 hover:underline-blue cursor-pointer'>
                        Flipkart Internet Private Limited, <br />
                        Building Alyssa, Begonia & <br />
                        Clove Embassy Tech Village, <br />
                        Outer Ring Road, <br />
                        Devarabeesanahali Village, <br />
                        Bengaluru, 560103, <br />
                        Karntaka, India
                    </p>
                </div>
            </div>   
            <hr className='mt-10 mb-2'/>  
            <div className='flex justify-between text-[#6d7781]'>
                <div className='space-x-2'>
                    <small>Became a Seller |</small>
                    <small>Advertise |</small>
                    <small>Gift Cards |</small>
                    <small>Help Center</small>
                </div>
                <div className='flex justify-center items-center'>
                    <small>© 2007-2022 Flipkart.com</small>
                </div>
            </div>             
        </div>
    </footer>

    )
}

export default Footer