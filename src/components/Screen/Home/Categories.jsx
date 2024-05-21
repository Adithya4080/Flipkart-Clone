import React from 'react';
import { Img, Heading } from "../../../components"; 

function Categories() {
    return (
        <div className='wrapper py-10'>
            <h3 className='font-bold text-[24px] mb-5'>
                Shop By Categories
            </h3>
            <div className="flex w-full gap-2">
                <div className='bg-[#ffe99d] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Fashion
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[100%]'>
                            <img
                                src="images/img_image_15.png"
                                alt="Fashion"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#ffc7ca] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Beauty & <br /> Accessories
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[100%]'>
                            <img
                                src="images/img_image_16.png"
                                alt="Fashion"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#d1e4ff] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Electronics
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[100%]'>
                            <img
                                src="images/img_image_17.png"
                                alt="Fashion"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#cbffd0] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Grocery
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[100%]'>
                            <img
                                src="images/img_image_18.png"
                                alt="Fashion"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
                {/* <div className="h-[456px] md:w-full ml-[-409px] flex-1 md:flex-none">
                    <div className="w-full m-auto">
                    <div className="flex md:flex-col justify-between gap-5">
                                                <div className="h-[433px] w-[24%] bg-green-A100 rounded-[10px]" />
                    </div>
                    </div>
                    <div className="h-[433px] w-[33%] left-[26%] m-auto bg-red-100_01 absolute rounded-[10px]" />
                    <div className="h-[433px] w-[32%] right-[23%] m-auto bg-blue-50_01 absolute rounded-[10px]" />
                    <Img
                    src="images/img_image_17.png"
                    alt="imageseventeen"
                    className="h-[302px] w-[34%] m-auto object-cover"
                    />
                </div>
                </div>
                <Img
                src="images/img_image_16.png"
                alt="imagesixteen"
                className="h-[322px] w-[28%] m-auto object-cover"
                /> */}
        </div>
    )
}

export default Categories