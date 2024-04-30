import React from 'react';
import Grocery from "../../assets/images/food.png"
import Phone from "../../assets/images/Phone.png";
import Sofa from "../../assets/images/Sofa.png";
import Electronics from "../../assets/images/Electronics.png";
import Beauty from "../../assets/images/Beauty.png"

function NavbarBottom() {
    return (
        <div>
            <div className="border-t-2 border-gray-200 bg-white-700">
                <div className="wrapper">
                    <div className="h-[2px] w-[8%] bg-blue-600" />
                    <div className="flex gap-7 pt-4">
                        <div className="flex self-end items-center gap-[7px]">
                        <div className='w-[30px]'>
                            <img src="images/img_ei_star.svg" alt="image" className="w-full" />
                        </div>
                            <a href="#">
                                <h3 className="font-bold text-sm text-blue-600">
                                    Top Offers
                                </h3>
                            </a>
                        </div>
                        <div className="flex self-end items-center gap-[7px]">
                            <div className='w-[30px]'><img src={Grocery} alt="image" className="w-full" /></div>
                            <a href="#">
                                <h3 className="font-medium text-sm text-black-600">
                                    Grocery
                                </h3>
                            </a>
                        </div>
                        <div className="flex self-end items-center gap-[7px]">
                            <div className='w-[30px]'><img src={Phone} alt="image" className="w-full" /></div>
                            <a href="#">
                                <h3 className="font-medium text-sm text-black-600">
                                    Mobiles
                                </h3>
                            </a>
                        </div>
                        <div className="flex self-end items-center gap-[7px]">
                            <div className='w-[30px]'>
                                <img src={Sofa} alt="image" className="w-full" />
                            </div>
                            <a href="#">
                                <h3 className="font-medium text-sm text-black-600">
                                    Home
                                </h3>
                            </a>
                        </div>
                        <div className="flex self-end items-center gap-[7px]">
                            <div className='w-[30px]'>
                                <img src={Electronics} alt="image" className="w-full" />
                            </div>
                            <a href="#">
                                <h3 className="font-medium text-sm text-black-600">
                                    Electronics
                                </h3>
                            </a>
                        </div>
                        <div className="flex self-end items-center gap-[7px]">
                            <div className='w-[30px]'>
                                <img src="images/img_shoe.png" alt="shoe_one" className="w-full" />
                            </div>
                            <a href="#">
                                <h3 className="font-medium text-sm text-black-600">
                                    Fashion
                                </h3>
                            </a>
                        </div>
                        <div className="flex self-end items-center gap-[7px]">
                            <div className='w-[30px]'>
                                <img src={Beauty} alt="image" className="w-full" />
                            </div>
                            <a href="#">
                                <h3 className="font-medium text-sm text-black-600">
                                    Beauty & Accessories
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarBottom