import React from 'react';

function Footer() {
    return (
        <footer className="py-10 bg-gray-900">
            <div className='wrapper px-4 sm:px-6 lg:px-8'>
                <div className="flex flex-wrap justify-between text-white-A700">
                    <div className='text-white mb-8 lg:mb-0 w-full sm:w-auto'>
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
                    <div className='text-white mb-8 lg:mb-0 w-full sm:w-auto'>
                        <h4 className='text-[20px] uppercase font-semibold mb-4'>Help</h4>
                        <ul className='text-[14px] space-y-2 cursor-pointer'>
                            <li className='hover:underline-blue'>Payments</li>
                            <li className='hover:underline-blue'>Shipping</li>
                            <li className='hover:underline-blue'>Cancellation & Returns</li>
                            <li className='hover:underline-blue'>FAQ</li>
                            <li className='hover:underline-blue'>Report Infringement</li>
                        </ul>
                    </div>
                    <div className='text-white mb-8 lg:mb-0 w-full sm:w-auto'>
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
                    <div className='text-white mb-8 lg:mb-0 w-full sm:w-auto'>
                        <h4 className='text-[20px] uppercase font-semibold mb-4'>Social</h4>
                        <ul className='text-[14px] space-y-2 cursor-pointer'>
                            <li className='hover:underline-blue'>Facebook</li>
                            <li className='hover:underline-blue'>YouTube</li>
                            <li className='hover:underline-blue'>Twitter</li>
                        </ul>
                    </div>
                    <div className='text-white w-full sm:w-auto'>
                        <h4 className='text-[20px] uppercase font-semibold mb-4'>Mail us:</h4>
                        <p className='text-[14px] leading-6 hover:underline-blue cursor-pointer'>
                            Flipkart Internet Private Limited, <br />
                            Building Alyssa, Begonia & <br />
                            Clove Embassy Tech Village, <br />
                            Outer Ring Road, <br />
                            Devarabeesanahali Village, <br />
                            Bengaluru, 560103, <br />
                            Karnataka, India
                        </p>
                    </div>
                </div>
                <hr className='mt-10 mb-2' />
                <div className='flex flex-col sm:flex-row justify-between text-[#6d7781]'>
                    <div className='spcae-x-2 space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-0'>
                        <small className='block sm:inline'>Became a Seller |</small>
                        <small className='block sm:inline'>Advertise |</small>
                        <small className='block sm:inline'>Gift Cards |</small>
                        <small className='block sm:inline'>Help Center</small>
                    </div>
                    <div className='flex justify-center items-center'>
                        <small>© 2007-2022 Flipkart.com</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
