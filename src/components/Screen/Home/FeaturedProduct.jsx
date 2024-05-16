import React from 'react';
import Bed from "../../../assets/images/Bed.png";
import Washing from "../../../assets/images/washing machine.png";
import Kurta from "../../../assets/images/kurta.png";
import Shoe from "../../../assets/images/shoe.png";
import Buds from "../../../assets/images/earpods.png"


function FeaturedProduct() {
    return (
        <div className='bg-white-A700'>
            <div className='wrapper py-7'>
                <h3 className="ml-5 pb-10 font-bold text-black-900 text-[24px]">
                    Feature Product
                </h3>
                <div className='flex w-full gap-8'>
                    <div className="relative w-[55%]">
                        <div className="w-full">
                            <img
                                src="images/img_rectangle_44.png"
                                alt="Furniture"
                                className="rounded-[10px] w-full h-full"
                            />     
                        </div>
                        <div className='absolute top-0 ml-4'>
                            <button className='bg-white-A700 text-[#ff0000] uppercase font-semibold p-1 mt-4'>Furniture</button>
                            <p className='mt-4 text-xl text-white-A700 font-medium'>
                                Create your Own <br />
                                space with <button className='bg-[#198ada] pl-1 pr-5 font-bold'>Flipkart</button> <br />
                                Furniture
                            </p>                            
                        </div> 
                        <div className='absolute bottom-20 right-0'>
                            <button className='bg-[#ff0000] text-white-A700 pt-2 pb-1 px-1 rounded-md text-[18px] font-medium'>From ₹1,200</button>
                        </div>         
                    </div>
                        <div className="flex flex-col">
                            <div className='flex w-[100%] gap-4 mb-6'>
                                <div className="bg-[#fcf8cc] rounded-[10px] relative w-[33%]">    
                                    <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-[12px] mt-2 mr-2 absolute right-0'>
                                        ₹23,000
                                    </button>
                                    <div className="w-[80%] flex justify-center items-center">
                                        <img
                                            src="images/img_pngtree_dslr_camera_5634385.png"
                                            alt="DSLR Camera"
                                            className="Camera"
                                        />          
                                    </div>                  
                                    <h4 className=" text-black-900 flex justify-center items-center font-semibold text-[14px]">
                                        NIKON DSLR Camera
                                    </h4>
                                </div>
                                <div className="bg-[#dbf6ff] rounded-[10px] relative w-[33%] pb-4">    
                                    <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-left text-[12px] my-2 mr-2 absolute right-0'>
                                        ₹1,200
                                    </button>
                                    <div className="w-[50%] flex justify-center items-center my-2">
                                    <img
                                        src="images/img_image_removebg_preview.png"
                                        alt="imageremovebg"
                                        className="w-full"
                                        />        
                                    </div>                  
                                    <h4 className=" text-black-900 flex justify-center items-center font-semibold text-[14px]">
                                        NIKON DSLR Camera
                                    </h4>
                                </div>
                                <div className="bg-[#ffe7e8] rounded-[10px] relative w-[33%]">    
                                    <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-left text-[12px] mt-2 mr-2 absolute right-0'>
                                        ₹25,000
                                    </button>
                                    <div className="w-[100%] flex justify-center items-center my-2">
                                    <img
                                        src={Bed}
                                        alt="Bed"
                                        className="w-full"
                                    />        
                                    </div>                  
                                    <h4 className=" text-black-900 flex justify-center items-center font-semibold text-[14px]">
                                        Mj Furniture Bed <br /> with 4 Drawer
                                    </h4>
                                </div>
                            </div>
                        
                            <div className="flex sm:flex-col justify-center gap-3 ">
                            <div className="flex flex-col  w-[32%] bg-[#d3ffd8] rounded-[10px] relative">
                                <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-left text-[12px] mt-2 mr-2 absolute right-0'>
                                    ₹2,900
                                </button>
                                <div className='w-full'>
                                    <img
                                        src="images/img_image_4.png"
                                        alt="Cooker"
                                        className="mt-10 w-full"
                                    />
                                </div>
                                <h4 className="flex justify-center items-center text-black-900 font-semibold text-[14px] mb-2">
                                    Cooker Aluminium
                                </h4>
                            </div>
                            <div className="flex bg-[#ddebff] rounded-[10px] pt-2 pr-2 pl-3 gap-10">
                                <div className='flex flex-col'>
                                    <h3 className="mt-[23px] mb-2 text-black-900 font-medium text-[18px]">
                                        Samsung Washing Machine
                                    </h3>
                                    <small className="mb-6 text-[#6f6f6f] text-[14px] whitespace-nowrap">
                                        lorem ipsum dolor sit amet,
                                        <br />
                                        consectetur adiposcing elit.Vel eros,
                                        <br />
                                        Sollicitudin a nulla.
                                    </small>
                                    <div>
                                        <button className='bg-[#474748] text-white-A700 py-1 px-6 rounded-[40px] ml-4 text-[14px] font-medium'>₹25,000</button>
                                    </div>
                                </div>
                                <img src={Washing} alt="Washing Machine" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h3 className="ml-5 pb-10 font-bold text-black-900 text-[30px]">
                        Last View Products
                    </h3>
                    <div className='flex gap-4'>
                        <div className='bg-[#e1ffe4] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center w-[200px]' >
                                    <img className='w-full' src={Kurta} alt="Kurta" />
                                </div>
                                <p className='text-[#909290] text-[14px]'>Sponsored</p>
                                <h5 className='font-medium text-[14px]'>
                                    STREE MANTRA Women <br />
                                    Printed Georgette, Crepe <br />
                                    A-line Kurta Grey
                                </h5>
                                <h4 className='my-2 font-bold text-[18px]'>₹599</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,699</del> <span className='text-[#1dc31a]'>65%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#ffebe0] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>3.7</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-9 w-[200px]' >
                                    <img className='w-full' src={Shoe} alt="Shoe" />
                                </div>
                                <p className='text-[#909290] text-[14px]'>BIRDE</p>
                                <h5 className='font-medium text-[14px]'>
                                    Premium Casual SHoes For <br />
                                    Men Casuals For Men
                                    <br /><br />
                                </h5>
                                <h4 className='my-2 font-bold text-[18px]'>₹599</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹499</del> <span className='text-[#1dc31a]'>35%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#f0f0f0] rounded-md'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center w-[100px]' >
                                    <img className='w-full' src={Buds} alt="Earphone" />
                                </div>
                                <p className='text-[#909290] text-[14px]'>Oppo</p>
                                <h5 className='font-medium text-[14px]'>
                                    OPPO Enco Buds 2 with 28 hours <br />
                                    Battery life & Deep Noise
                                    <br /><br />
                                </h5>
                                <h4 className='my-2 font-bold text-[18px]'>₹1,799</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹3,999</del> <span className='text-[#1dc31a]'>55%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#e1ffe4] rounded-md w-20%'>
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-2'>4.2</button>
                            <div>
                                <img src={Kurta} alt="Kurta" />
                            </div>
                            <p>Sponsored</p>
                            <h5>
                                STREE MANTRA Women <br />
                                Printed Georgette, Crepe <br />
                                A-line Kurta Grey
                            </h5>
                            <h4>₹599</h4>
                            <small><del>₹1,699</del> <span>65%off</span></small>
                        </div>
                        <div className='bg-[#e1ffe4] rounded-md w-20%'>
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-2'>4.2</button>
                            <div>
                                <img src={Kurta} alt="Kurta" />
                            </div>
                            <p>Sponsored</p>
                            <h5>
                                STREE MANTRA Women <br />
                                Printed Georgette, Crepe <br />
                                A-line Kurta Grey
                            </h5>
                            <h4>₹599</h4>
                            <small><del>₹1,699</del> <span>65%off</span></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct