import React from 'react';
import { Img, Text, Heading, Button} from "../../../components";
import Bed from "../../../assets/images/Bed.png";

function FeaturedProduct() {
    return (
        <div className='bg-white-A700'>
            <div className='wrapper py-7'>
                <h3 className="ml-5 pb-10 font-bold text-black-900 text-[24px]">
                    Feature Product
                </h3>
                <div className='flex'>
                    <div className="relative">
                        <div className="w-[70%] ">
                            <img
                                src="images/img_rectangle_44.png"
                                alt="Furniture"
                                className="rounded-[10px] w-full"
                            />     
                        </div>
                        <div className='absolute top-0 ml-4'>
                            <button className='bg-white-A700 text-[#ff0000] uppercase font-semibold p-1 mt-4'>Furniture</button>
                            <p className='mt-4 text-xl text-white-A700 font-medium'>
                                Create your Own <br />
                                space with <button className='bg-[#198ada] pl-1 pr-5 font-bold'>Flipkart</button> <br />
                                Furniture
                            </p>
                            <button className='bg-[#ff0000] text-white-A700 pt-2 pb-1 px-1 rounded-md text-[18px] font-medium mt-32'>From ₹1,200</button>
                        </div>          
                    </div>
                        <div className="flex flex-col">
                            <div className='flex'>
                                <div className="bg-[#fcf8cc] rounded-[10px] relative mb-2">    
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
                                    <h4 className=" text-black-900 flex justify-center items-center">
                                        NIKON DSLR Camera
                                    </h4>
                                </div>
                                <div className="bg-[#dbf6ff] rounded-[10px] relative">    
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
                                    <h4 className=" text-black-900 flex justify-center items-center">
                                        NIKON DSLR Camera
                                    </h4>
                                </div>
                                <div className="bg-[#ffe7e8] rounded-[10px] relative">    
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
                                    <h4 className=" text-black-900 flex justify-center items-center">
                                        Mj Furniture Bed with 4 Drawer
                                    </h4>
                                </div>
                            </div>
                        
                            <div className="flex sm:flex-col justify-center gap-[23px]">
                            <div className="flex flex-col items-start w-[32%] sm:w-full p-2.5 bg-light_green-100 rounded-[10px]">
                                <Button shape="round" className="w-full ml-[166px]">
                                ₹2,900‎
                                </Button>
                                <Img
                                src="images/img_image_4.png"
                                alt="imagefour_one"
                                className="self-stretch mt-[23px] ml-[5px] z-[1] object-cover"
                                />
                                <Heading size="md" as="p" className="mt-[-4px] mb-1.5 ml-[43px] !text-black-900">
                                Cooker  Aluminium
                                </Heading>
                            </div>
                            <div className="flex flex-col items-start justify-center p-[19px] bg-blue-50 flex-1 rounded-[10px]">
                                <Text size="3xl" as="p" className="mt-[23px] !text-black-900">
                                Samsung Washing Machine
                                </Text>
                                <Text as="p" className="w-[49%] md:w-full mt-[3px] !text-gray-600 tracking-[-0.14px]">
                                <>
                                    lorem ipsum dolor sit amet,
                                    <br />
                                    consectetur adiposcing elit.Vel eros,
                                    <br />
                                    Sollicitudin a nulla.
                                </>
                                </Text>
                                <Heading
                                size="lg"
                                as="p"
                                className="flex justify-center items-center h-[25px] mt-[31px] mb-[23px] ml-3.5 px-5 py-1 bg-gray-800 rounded-[10px]"
                                >
                                ₹60,000
                                </Heading>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct