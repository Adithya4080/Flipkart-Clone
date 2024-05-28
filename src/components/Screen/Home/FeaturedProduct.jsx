// import React from 'react';
// import Bed from "../../../assets/images/Bed.png";
// import Washing from "../../../assets/images/washing machine.png";
// import Kurta from "../../../assets/images/kurta.png";
// import Shoe from "../../../assets/images/shoe.png";
// import Buds from "../../../assets/images/earpods.png";
// import Chair from "../../../assets/images/chair.png";
// import Mug from "../../../assets/images/mug.png"


// function FeaturedProduct() {
//     return (
//         <div className='bg-white-A700'>
//             <div className='wrapper py-7'>
//                 <h3 className="ml-5 pb-10 font-bold text-black-900 text-[24px]">
//                     Feature Product
//                 </h3>
//                 <div className='flex w-full gap-8'>
//                     <div className="relative w-[55%]">
//                         <div className="w-full">
//                             <img
//                                 src="images/img_rectangle_44.png"
//                                 alt="Furniture"
//                                 className="rounded-[10px] w-full h-full"
//                             />     
//                         </div>
//                         <div className='absolute top-0 ml-4'>
//                             <button className='bg-white-A700 text-[#ff0000] uppercase font-semibold p-1 mt-4'>Furniture</button>
//                             <p className='mt-4 text-xl text-white-A700 font-medium'>
//                                 Create your Own <br />
//                                 space with <button className='bg-[#198ada] pl-1 pr-5 font-bold'>Flipkart</button> <br />
//                                 Furniture
//                             </p>                            
//                         </div> 
//                         <div className='absolute bottom-20 right-0'>
//                             <button className='bg-[#ff0000] text-white-A700 pt-2 pb-1 px-1 rounded-md text-[18px] font-medium'>From ₹1,200</button>
//                         </div>         
//                     </div>
//                         <div className="flex flex-col">
//                             <div className='flex w-[100%] gap-4 mb-6'>
//                                 <div className="bg-[#fcf8cc] rounded-[10px] relative w-[33%]">    
//                                     <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-[12px] mt-2 mr-2 absolute right-0'>
//                                         ₹23,000
//                                     </button>
//                                     <div className="w-[80%] flex justify-center items-center">
//                                         <img
//                                             src="images/img_pngtree_dslr_camera_5634385.png"
//                                             alt="DSLR Camera"
//                                             className="Camera"
//                                         />          
//                                     </div>                  
//                                     <h4 className=" text-black-900 flex justify-center items-center font-semibold text-[14px]">
//                                         NIKON DSLR Camera
//                                     </h4>
//                                 </div>
//                                 <div className="bg-[#dbf6ff] rounded-[10px] relative w-[33%] pb-4">    
//                                     <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-left text-[12px] my-2 mr-2 absolute right-0'>
//                                         ₹1,200
//                                     </button>
//                                     <div className="w-[50%] flex justify-center items-center my-2">
//                                     <img
//                                         src="images/img_image_removebg_preview.png"
//                                         alt="imageremovebg"
//                                         className="w-full"
//                                         />        
//                                     </div>                  
//                                     <h4 className=" text-black-900 flex justify-center items-center font-semibold text-[14px]">
//                                         NIKON DSLR Camera
//                                     </h4>
//                                 </div>
//                                 <div className="bg-[#ffe7e8] rounded-[10px] relative w-[33%]">    
//                                     <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-left text-[12px] mt-2 mr-2 absolute right-0'>
//                                         ₹25,000
//                                     </button>
//                                     <div className="w-[100%] flex justify-center items-center my-2">
//                                     <img
//                                         src={Bed}
//                                         alt="Bed"
//                                         className="w-full"
//                                     />        
//                                     </div>                  
//                                     <h4 className=" text-black-900 flex justify-center items-center font-semibold text-[14px]">
//                                         Mj Furniture Bed <br /> with 4 Drawer
//                                     </h4>
//                                 </div>
//                             </div>
                        
//                             <div className="flex flex-wrap justify-center gap-3 ">
//                             <div className="flex flex-col  w-[32%] bg-[#d3ffd8] rounded-[10px] relative">
//                                 <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-left text-[12px] mt-2 mr-2 absolute right-0'>
//                                     ₹2,900
//                                 </button>
//                                 <div className='w-full'>
//                                     <img
//                                         src="images/img_image_4.png"
//                                         alt="Cooker"
//                                         className="mt-10 w-full"
//                                     />
//                                 </div>
//                                 <h4 className="flex justify-center items-center text-black-900 font-semibold text-[14px] mb-2">
//                                     Cooker Aluminium
//                                 </h4>
//                             </div>
//                             <div className="flex bg-[#ddebff] rounded-[10px] pt-2 pr-2 pl-3 gap-10">
//                                 <div className='flex flex-col'>
//                                     <h3 className="mt-[23px] mb-2 text-black-900 font-medium text-[18px]">
//                                         Samsung Washing Machine
//                                     </h3>
//                                     <small className="mb-6 text-[#6f6f6f] text-[14px] whitespace-nowrap">
//                                         lorem ipsum dolor sit amet,
//                                         <br />
//                                         consectetur adiposcing elit.Vel eros,
//                                         <br />
//                                         Sollicitudin a nulla.
//                                     </small>
//                                     <div>
//                                         <button className='bg-[#474748] text-white-A700 py-1 px-6 rounded-[40px] ml-4 text-[14px] font-medium'>₹25,000</button>
//                                     </div>
//                                 </div>
//                                 <img src={Washing} alt="Washing Machine" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='mt-10'>
//                     <h3 className="ml-5 pb-10 font-bold text-black-900 text-[30px]">
//                         Last View Products
//                     </h3>
//                     <div className='flex gap-4 w-full'>
//                         <div className='bg-[#e1ffe4] rounded-md w-[17%]'> 
//                             <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
//                             <div className='px-4 pb-4'>
//                                 <div className='flex justify-center items-center mt-4'>
//                                     <div className='w-[120px] h-[120px]'>
//                                         <img src={Kurta} alt="Kurta" className='w-full h-full' />
//                                     </div>
//                                 </div>
//                                 <p className='text-[#909290] text-[14px]'>Sponsored</p>
//                                 <small className='font-medium text-[12px]'>
//                                     STREE MANTRA Women <br />
//                                     Printed Georgette, Crepe <br />
//                                     A-line Kurta Grey
//                                 </small>
//                                 <h4 className='my-2 font-bold text-[18px]'>₹599</h4>
//                                 <small className='text-[12px]'><del className='text-[#848a85]'>₹1,699</del> <span className='text-[#1dc31a]'>65%off</span></small>
//                             </div>
//                         </div>
//                         <div className='bg-[#ffebe0] rounded-md w-[17%]'> 
//                             <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>3.7</button>
//                             <div className='px-4 pb-4'>
//                                 <div className='flex justify-center items-center mt-4'>
//                                     <div className='w-[120px] h-[120px]'>
//                                         <img src={Shoe} alt="Shoe" className='w-full h-full' />
//                                     </div>
//                                 </div>
//                                 <p className='text-[#909290] text-[14px]'>BIRDE</p>
//                                 <small className='font-medium text-[12px]'>
//                                     Premium Casual SHoes For <br />
//                                     Men Casuals For Men
//                                     <br /><br />
//                                 </small>
//                                 <h4 className='my-2 font-bold text-[18px]'>₹599</h4>
//                                 <small className='text-[12px]'><del className='text-[#848a85]'>₹499</del> <span className='text-[#1dc31a]'>35%off</span></small>
//                             </div>
//                         </div>
//                         <div className='bg-[#f0f0f0] rounded-md w-[17%]'> 
//                             <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
//                             <div className='px-4 pb-4'>
//                                 <div className='flex justify-center items-center mt-4'>
//                                     <div className='w-[120px] h-[120px]'>
//                                         <img src={Buds} alt="Earphone" className='w-full h-full' />
//                                     </div>
//                                 </div>
//                                 <p className='text-[#909290] text-[14px]'>Oppo</p>
//                                 <small className='font-medium text-[12px]'>
//                                     OPPO Enco Buds 2 with 28 <br />
//                                     hours Battery life & Deep Noise
//                                     <br /><br />
//                                 </small>
//                                 <h4 className='my-2 font-bold text-[18px]'>₹1,799</h4>
//                                 <small className='text-[12px]'><del className='text-[#848a85]'>₹3,999</del> <span className='text-[#1dc31a]'>55%off</span></small>
//                             </div>
//                         </div>
//                         <div className='bg-[#fff1bf] rounded-md w-[17%]'> 
//                             <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.1</button>
//                             <div className='px-4 pb-4'>
//                                 <div className='flex justify-center items-center mt-4'>
//                                     <div className='w-[120px] h-[120px]'>
//                                         <img src={Chair} alt="Chair" className='w-full h-full' />
//                                     </div>
//                                 </div>
//                                 <p className='text-[#909290] text-[14px]'>Furniture</p>
//                                 <small className='font-medium text-[12px]'>
//                                     Nice Furniture Leatherette<br />
//                                     Office Arm Chair (Black, DIY<br />
//                                     (Do-It-Yourself))
//                                 </small>
//                                 <h4 className='my-2 font-bold text-[18px]'>₹6,367</h4>
//                                 <small className='text-[12px]'><del className='text-[#848a85]'>₹12,000</del> <span className='text-[#1dc31a]'>46%off</span></small>
//                             </div>
//                         </div>
//                         <div className='bg-[#ffeced] rounded-md w-[17%]'> 
//                             <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>5.1</button>
//                             <div className='px-4 pb-4'>
//                                 <div className='flex justify-center items-center mt-4'>
//                                     <div className='w-[120px] h-[120px]'>
//                                         <img src={Mug} alt="Mug" className='w-full h-full' />
//                                     </div>
//                                 </div>
//                                 <p className='text-[#909290] text-[14px]'>LeaFox</p>
//                                 <small className='font-medium text-[12px]'>
//                                     LeaFox Vacuum Flask Set Cup &<br />
//                                     Bottle set for Hot & Cold Drink,<br />
//                                     Random Color 500 ml
//                                 </small>
//                                 <h4 className='my-2 font-bold text-[18px]'>₹499</h4>
//                                 <small className='text-[12px]'><del className='text-[#848a85]'>₹1,099</del> <span className='text-[#1dc31a]'>54%off</span></small>
//                             </div>
//                         </div>
//                         <p className='flex justify-center items-center text-[#6f6f6f] text-[14px] font-medium cursor-pointer hover:underline'>View More</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FeaturedProduct

import React from 'react';
import Bed from "../../../assets/images/Bed.png";
import Washing from "../../../assets/images/washing machine.png";
import Kurta from "../../../assets/images/kurta.png";
import Shoe from "../../../assets/images/shoe.png";
import Buds from "../../../assets/images/earpods.png";
import Chair from "../../../assets/images/chair.png";
import Mug from "../../../assets/images/mug.png";


function FeaturedProduct() {
    return (
        <div className='bg-white-A700'>
            <div className='wrapper py-7'>
                <h3 className="ml-5 pb-5 font-bold text-black-900 text-[24px]">
                    Feature Product
                </h3>
                <div className='flex flex-wrap w-full gap-8'>
                    <div className="relative w-full md:w-[35%] h-[440px]">
                        <div className="w-full h-full">
                            <img
                                src="images/img_rectangle_44.png"
                                alt="Furniture"
                                className="rounded-[10px] w-full h-full"
                            />     
                        </div>
                        <div className='absolute top-0 ml-4'>
                            <button className='bg-white-A700 text-[#ff0000] uppercase font-semibold p-1 mt-4'>Furniture</button>
                            <p className='mt-4 text-2xl text-white-A700 font-medium leading-9'>
                                Create your Own <br />
                                space with <button className='bg-[#198ada] pl-1 pr-5 font-bold'>Flipkart</button> <br />
                                Furniture
                            </p>                            
                        </div> 
                        <div className='absolute bottom-10 right-0'>
                            <button className='bg-[#ff0000] text-white-A700 pt-2 pb-1 px-1 rounded-md text-[24px] font-medium pl-2'>
                                From ₹1,200
                            </button>
                        </div>         
                    </div>
                    <div className="flex flex-col w-full md:w-[60%]">
                        <div className='flex flex-wrap mb-6 gap-[2%] space-y-2 md:space-y-0'>
                            <div className="bg-[#fcf8cc] rounded-[10px] relative w-[100%] md:w-[32%]">    
                                <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-[12px] mt-2 mr-2 absolute right-0'>
                                    ₹23,000
                                </button>
                                <div className="w-[80%] flex justify-center items-center mx-auto">
                                    <img
                                        src="images/img_pngtree_dslr_camera_5634385.png"
                                        alt="DSLR Camera"
                                        className="Camera"
                                    />          
                                </div>                  
                                <h4 className="text-black-900 flex justify-center items-center font-semibold text-[14px]">
                                    NIKON DSLR Camera
                                </h4>
                            </div>
                            <div className="bg-[#dbf6ff] rounded-[10px] relative w-[100%] md:w-[32%] pb-4">    
                                <button className='bg-[#474748] text-white-A700 py-1 px-4 rounded-xl text-left text-[12px] my-2 mr-2 absolute right-0'>
                                    ₹1,200
                                </button>
                                <div className="w-[50%] flex justify-center items-center mx-auto my-2">
                                    <img
                                        src="images/img_image_removebg_preview.png"
                                        alt="imageremovebg"
                                        className="w-full"
                                    />        
                                </div>                  
                                <h4 className="text-black-900 flex justify-center items-center font-semibold text-[14px]">
                                    NIKON DSLR Camera
                                </h4>
                            </div>
                            <div className="bg-[#ffe7e8] rounded-[10px] relative w-[100%] md:w-[32%]">    
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
                                <h4 className="text-black-900 flex justify-center items-center font-semibold text-[14px]">
                                    Mj Furniture Bed <br /> with 4 Drawer
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            <div className="flex flex-col w-[100%] md:w-[30%] bg-[#d3ffd8] rounded-[10px] relative">
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
                            <div className="flex justify-between w-full md:w-[68%] bg-[#ddebff] rounded-[10px] pt-2 pl-3">
                                <div className='flex flex-col w-[40%]'>
                                    <h3 className="mt-[23px] mb-2 text-black-900 font-medium text-[18px] whitespace-nowrap">
                                        Samsung Washing Machine
                                    </h3>
                                    <small className="mb-6 text-[#6f6f6f] text-[14px] whitespace-nowrap">
                                        lorem ipsum dolor sit amet,
                                        <br />
                                        consectetur adiposcing ,
                                        <br />
                                        Sollicitudin a nulla.
                                    </small>
                                    <div>
                                        <button className='bg-[#474748] text-white-A700 py-1 px-6 rounded-[40px] ml-4 text-[14px] font-medium'>₹25,000</button>
                                    </div>
                                </div>
                                <div className='w-[40%] flex justify-center items-center mr-2'>
                                    <img src={Washing} alt="Washing Machine" className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h3 className="ml-5 pb-10 font-bold text-black-900 text-[30px]">
                        Last View Products
                    </h3>
                    <div className='flex flex-wrap gap-4 w-full'>
                        <div className='bg-[#e1ffe4] rounded-md w-full md:w-[17%]'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[120px] h-[120px]'>
                                        <img src={Kurta} alt="Kurta" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>Sponsored</p>
                                <small className='font-medium text-[12px]'>
                                    STREE MANTRA Women <br />
                                    Printed Georgette, Crepe <br />
                                    A-line Kurta Grey
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹599</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,699</del> <span className='text-[#1dc31a]'>65%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#ffebe0] rounded-md w-full md:w-[17%]'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>3.7</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[120px] h-[120px]'>
                                        <img src={Shoe} alt="Shoe" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>BIRDE</p>
                                <small className='font-medium text-[12px]'>
                                    Premium Casual Shoes For <br />
                                    Men Casuals For Men
                                    <br /><br />
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹599</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹499</del> <span className='text-[#1dc31a]'>35%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#f0f0f0] rounded-md w-full md:w-[17%]'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.2</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[120px] h-[120px]'>
                                        <img src={Buds} alt="Earphone" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>Oppo</p>
                                <small className='font-medium text-[12px]'>
                                    OPPO Enco Buds 2 with 28 <br />
                                    hours Battery life & Deep Noise
                                    <br /><br />
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹1,799</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹3,999</del> <span className='text-[#1dc31a]'>55%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#fff1bf] rounded-md w-full md:w-[17%]'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>4.1</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[120px] h-[120px]'>
                                        <img src={Chair} alt="Chair" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>Furniture</p>
                                <small className='font-medium text-[12px]'>
                                    Nice Furniture Leatherette<br />
                                    Office Arm Chair (Black, DIY<br />
                                    (Do-It-Yourself))
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹6,367</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹12,000</del> <span className='text-[#1dc31a]'>46%off</span></small>
                            </div>
                        </div>
                        <div className='bg-[#ffeced] rounded-md w-full md:w-[17%]'> 
                            <button className='bg-[#04bb00] text-white-A700 py-1 pl-3 pr-6 rounded-xl ml-3'>5.1</button>
                            <div className='px-4 pb-4'>
                                <div className='flex justify-center items-center mt-4'>
                                    <div className='w-[120px] h-[120px]'>
                                        <img src={Mug} alt="Mug" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-[#909290] text-[14px]'>LeaFox</p>
                                <small className='font-medium text-[12px]'>
                                    LeaFox Vacuum Flask Set Cup &<br />
                                    Bottle set for Hot & Cold Drink,<br />
                                    Random Color 500 ml
                                </small>
                                <h4 className='my-2 font-bold text-[18px]'>₹499</h4>
                                <small className='text-[12px]'><del className='text-[#848a85]'>₹1,099</del> <span className='text-[#1dc31a]'>54%off</span></small>
                            </div>
                        </div>
                        <p className='flex justify-center items-center text-[#6f6f6f] text-[14px] font-medium cursor-pointer hover:underline'>View More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProduct;
