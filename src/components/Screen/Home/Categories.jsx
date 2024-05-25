import React from 'react';

function Categories() {
    return (
        <div className='wrapper pt-5'>
            <h3 className='font-bold text-2xl mb-5'>
                Shop By Categories
            </h3>
            <div className="flex flex-wrap justify-between w-full">
                <div className='bg-[#ffe99d] pt-4 px-4 rounded-lg w-full mb-4 md:w-[48%] lg:w-[24%] sm:w-[100%]'>
                    <h3 className="text-black font-bold text-lg flex justify-center items-center mb-2">
                        Fashion
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-full h-64'>
                            <img
                                src="images/img_image_15.png"
                                alt="Fashion"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#ffc7ca] pt-4 px-4 rounded-lg w-full mb-4 md:w-[48%] lg:w-[24%] sm:w-[100%]'>
                    <h3 className="text-black font-bold text-lg flex justify-center items-center mb-2">
                        Beauty & <br /> Accessories
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-full h-64'>
                            <img
                                src="images/img_image_16.png"
                                alt="Beauty & Accessories"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#d1e4ff] pt-4 px-4 rounded-lg w-full mb-4 md:w-[48%] lg:w-[24%] sm:w-[100%]'>
                    <h3 className="text-black font-bold text-lg flex justify-center items-center mb-2">
                        Electronics
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-full h-64'>
                            <img
                                src="images/img_image_17.png"
                                alt="Electronics"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-[#cbffd0] pt-4 px-4 rounded-lg w-full mb-4 md:w-[48%] lg:w-[24%] sm:w-[100%]'>
                    <h3 className="text-black font-bold text-lg flex justify-center items-center mb-2">
                        Grocery
                    </h3>
                    <div className='flex justify-center items-center'>
                        <div className='w-full h-64'>
                            <img
                                src="images/img_image_18.png"
                                alt="Grocery"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>                
            </div>                
        </div>
    )
}

export default Categories;
