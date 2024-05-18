import React from 'react';
import Jacket from "../../../assets/images/jacket.png";
import Beanie from "../../../assets/images/beanie.png";
import Boot from "../../../assets/images/boot.png";
import Heater from "../../../assets/images/heater.png";
import Blanket from "../../../assets/images/blanket.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Guitar from "../../../assets/images/guitar.png";
import Watch from "../../../assets/images/watch.png";
import Printer from "../../../assets/images/printer.png";
import Kettle from "../../../assets/images/Kettle.png";
import Ipad from "../../../assets/images/ipad.png";

function Products() {
    return (
        <div className='bg-white-A700'>
            <div className='wrapper'>
                <div className='mt-10'>
                    <h3 className="pb-10 font-bold text-black-900 text-[30px]">
                        Winter Essentials
                    </h3>
                    <div className='flex gap-4'>
                        <div className='bg-[#f3ecd6] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Jacket} alt="Jacket" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>Roadster</p>
                                <small className='font-medium text-[14px]'>
                                    Men Striped Padded Jacket 
                                    <br /><br />
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹891</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹3,999</del> <span className='text-[#1dc31a]'>72% off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#ffeee2] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>3.1</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4' >
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Beanie} alt="Beanie" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>PinKit</p>
                                <small className='font-medium text-[14px]'>
                                    Solid Beanie (Pack of 2)
                                    <br /><br />
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹265</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹499</del> <span className='text-[#1dc31a]'>46% off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#f0f0f0] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Boot} alt="Boot" className='w-full h-full'  />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>Big Fox</p>
                                <small className='font-medium text-[14px]'>
                                    Big Fox Anglo-2 Chelsea <br />
                                    Boots For Men (Maroon)
                                    <br /><br />
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹800</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹2,245</del> <span className='text-[#1dc31a]'>65% off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#fff8de] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.1</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Heater} alt="Heater" className='w-full h-full' />
                                    </div>                                    
                                </div>
                                <p className='text-[#909290] text-[14px]'>Heater</p>
                                <small className='font-medium text-[14px]'>
                                    HILTON ?HQ-1-800 | ISI Certified<br />
                                    Multi Mode | Grey Quartz<br />
                                    Room Heater
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹1,200</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,899</del> <span className='text-[#1dc31a]'>36%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#e9e9ea] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>5.1</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Blanket} alt="Blanket" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>kamble</p>
                                <small className='font-medium text-[14px]'>
                                    MAGICAL Floral Double Mink<br />
                                    Blanket for Heavy Winter <br />
                                    (Microfiber, Brown)
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹479</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,999</del> <span className='text-[#1dc31a]'>76% off</span></small>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className=' text-[#6f6f6f] text-[14px] font-medium cursor-pointer hover:underline'>View More</p>
                            <FaArrowRightLong className='text-[40px]' />
                        </div>                        
                    </div>
                </div>
                <div className='mt-10 whitespace-nowrap'>
                    <h3 className="pb-10 font-bold text-black-900 text-[30px]">
                        Flipkart Recommendation
                    </h3>
                    <div className='flex gap-4'>
                        <div className='bg-[#e1ffe4] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Guitar} alt="Guitar" className='w-full h-full' />
                                    </div>                                    
                                </div>
                                <p className='text-[#909290] text-[14px]'>Guitar</p>
                                <small className='font-medium text-[12px]'>
                                    STREE MANTRA Women Printed <br /> 
                                    Georgette, Crepe  A-line Kurta<br />
                                    Grey<br />
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹920</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,897</del> <span className='text-[#1dc31a]'>51% off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#ffebe0] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>3.7</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4' >
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Watch} alt="Watch" className='w-full h-full'/>
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>LIMESTONE</p>
                                <small className='font-medium text-[12px]'>
                                    Bleed Blue Day and Date <br />
                                    Functioning Strap Adult Quartz<br />
                                    Analog Watch - For Men LS2821
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹280</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,999</del> <span className='text-[#1dc31a]'>85% off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#f0f0f0] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.7</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Printer} alt="Printer" className='w-full h-full' />
                                    </div>                                    
                                </div>
                                <p className='text-[#909290] text-[14px]'>Canon</p>
                                <small className='font-medium text-[12px]'>
                                    Canon PIXMA E3370 Multi-function <br />
                                    WiFi Color Inkjet Printer (Borderless <br />
                                    Printing)(Black, Ink Cartridge)
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹5,599</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹6,996</del> <span className='text-[#1dc31a]'>19% off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#fff1bf] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.4</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Kettle} alt="Kettle" className='w-full h-full' />                                        
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>Prestige</p>
                                <small className='font-medium text-[12px]'>
                                    Prestige PKOSS Electric Kettle<br />
                                    (1.5 L, Silver)
                                    <br /><br />
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹699</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,245</del> <span className='text-[#1dc31a]'>43%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#ffeced] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>5.6</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[90px] h-[100px]'>
                                        <img src={Ipad} alt="Ipad" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>Apple</p>
                                <small className='font-medium text-[12px]'>
                                    Apple iPad (10th Gen) 64 GB<br />
                                    ROM 10.9 inch with Wi-Fi Only<br />
                                    (Silver)
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹37,499</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹39,900</del> <span className='text-[#1dc31a]'>6% off</span></small>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className=' text-[#6f6f6f] text-[14px] font-medium cursor-pointer hover:underline'>View More</p>
                            <FaArrowRightLong className='text-[40px]' />
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products