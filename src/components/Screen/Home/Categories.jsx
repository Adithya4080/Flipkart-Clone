import React from 'react';

function Categories() {
    return (
        <div className='wrapper py-10'>
            <h3 className='font-bold text-[24px] mb-5'>
                Shop By Categories
            </h3>
            <div className="flex w-full gap-[1%]">
                <div className='bg-[#ffe99d] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Fashion
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[800px] h-[300px]'>
                            <img
                                src="images/img_image_15.png"
                                alt="Fashion"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#ffc7ca] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Beauty & <br /> Accessories
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[800px] h-[300px]'>
                            <img
                                src="images/img_image_16.png"
                                alt="Fashion"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#d1e4ff] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Electronics
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[800px] h-[300px]'>
                            <img
                                src="images/img_image_17.png"
                                alt="Fashion"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#cbffd0] pt-4 px-4 rounded-lg w-1/4'>
                    <h3 className=" !text-black-900 font-bold text-[20px] flex justify-center items-center">
                        Grocery
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-[800px] h-[300px]'>
                            <img
                                src="images/img_image_18.png"
                                alt="Fashion"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>                
            </div>                
        </div>
    )
}

export default Categories