import React from 'react';
import { SelectBox } from 'components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { FaBars } from "react-icons/fa6";

function Navbar() {
    const dropDownOptions = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
    return (
        <header>
            <div className='wrapper flex gap-12 items-center py-2'>
                <div className='w-36'>
                    <Link to = '/'>
                        <img src={Logo} alt='Logo' className='w-full' />
                    </Link>
                </div>
                <div className='flex items-center gap-1'>
                    <FaBars />
                    <p className='font-medium text-[18px]'>
                        Menu
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex gap-4 p-2 border-black-900 border border-solid bg-white-A700 rounded-[20px]">
                        <SelectBox
                            shape="square"
                            indicator={<img src="images/img_arrowdown.svg" alt="arrow_down" className="ml=2"/>}
                            name="allcategories"
                            placeholder=" All Categories"
                            options={dropDownOptions}
                            className=" text-black-900 font-medium ml-2 border-r border-solid border-gray-300 whitespace-nowrap"
                        />
                        <p className="flex justify-center items-center !text-gray-400 whitespace-nowrap pr-28">
                            Search Product,Brands and more...
                        </p>
                        <img src="images/img_search.svg" alt="search_one" className="mr-2" />
                    </div>
                </div>
                {/* <div className='max-[1280px]:hidden'> */}
                <div className='hidden gap-3 lg:flex'>
                    <div className='flex gap-5 '>
                        <div className='relative'>
                            <div className='h-[32px] w-[32px]'>
                                <img
                                    src="images/img_vector.svg"
                                    alt="vector_one"
                                    className="h-full w-full"
                                />
                            </div>
                            <div className='absolute bottom-5 left-4'>
                                <p className='bg-[#198ada] text-white-A700 rounded-[30px] flex justify-center items-center py-1 px-2 font-bold'>5</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <small>Cart</small>
                            <small>$240</small>
                        </div>
                    </div>
                    <div className="h-[29px] w-[2px] bg-blue_gray-100_01" />
                    <div className='flex'>
                        <div className='h-[29px] w-[37px]'>
                            <img 
                                src="images/img_mi_user_add.svg" 
                                alt="miuseradd_one" 
                                className="h-full w-full" 
                            />
                        </div>
                        <div className='flex flex-col'>
                            <small>Account</small>
                            <small>Sign In</small>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            
        </header>
    )
}

export default Navbar